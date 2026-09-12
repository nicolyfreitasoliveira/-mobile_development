import assert from 'node:assert/strict';
import test from 'node:test';
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { login, logout, validateLogin } from '../src/store/authSlice.js';
import { api } from '../src/services/api.js';
import { getProductsByGroup, getProductById, PRODUCT_CATEGORIES } from '../src/services/products.js';

test('login exige campos preenchidos e rejeita apenas espaços', () => {
  assert.deepEqual(Object.keys(validateLogin('', '   ')), ['username', 'password']);
  assert.deepEqual(validateLogin('aluna', 'demo'), {});
});

test('sessão mantém apenas usuário em memória e logout limpa os dados', () => {
  const store = configureStore({ reducer: { auth: authReducer } });
  assert.equal(store.getState().auth.user, null);
  store.dispatch(login({ username: '  aluna  ', password: 'não armazenar' }));
  assert.deepEqual(store.getState().auth.user, { username: 'aluna' });
  store.dispatch(logout());
  assert.deepEqual(store.getState().auth, { user: null });
});

test('listas consultam exatamente as categorias de cada aba sem limite padrão', async () => {
  const originalAdapter = api.defaults.adapter;
  const paths = [];
  api.defaults.adapter = async (config) => {
    paths.push(config.url);
    assert.equal(config.params.limit, 0);
    return { data: { products: [{ id: paths.length }] }, status: 200, headers: {}, config };
  };
  try {
    assert.equal((await getProductsByGroup('masculino')).length, 3);
    assert.equal((await getProductsByGroup('feminino')).length, 5);
    assert.deepEqual(paths, [
      'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-bags',
      'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches',
    ].map((category) => `/products/category/${category}`));
    assert.equal(Object.values(PRODUCT_CATEGORIES).flat().length, 8);
  } finally {
    api.defaults.adapter = originalAdapter;
  }
});

test('detalhes usam ID, encaminham cancelamento e propagam falhas da API', async () => {
  const originalAdapter = api.defaults.adapter;
  const controller = new AbortController();
  api.defaults.adapter = async (config) => {
    assert.equal(config.url, '/products/42');
    assert.equal(config.signal, controller.signal);
    return { data: { id: 42, title: 'Produto' }, status: 200, headers: {}, config };
  };
  try {
    assert.equal((await getProductById(42, controller.signal)).id, 42);
    api.defaults.adapter = async () => { throw new Error('Sem conexão'); };
    await assert.rejects(getProductById(42), /Sem conexão/);
    await assert.rejects(getProductsByGroup('masculino'), /Sem conexão/);
  } finally {
    api.defaults.adapter = originalAdapter;
  }
});
