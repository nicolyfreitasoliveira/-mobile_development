import assert from 'node:assert/strict';
import test from 'node:test';
import { getProductText } from '../src/localization/productText.js';

test('traduz produtos masculinos e femininos pelo ID', () => {
  assert.equal(getProductText({ id: 83 }).title, 'Camisa xadrez azul e preta');
  assert.equal(getProductText({ id: 172 }).title, 'Bolsa feminina azul');
  const ids = [
    ...Array.from({ length: 16 }, (_, index) => 83 + index),
    ...Array.from({ length: 23 }, (_, index) => 172 + index),
  ];
  for (const id of ids) {
    const text = getProductText({ id });
    assert.ok(text.title?.length > 0, `Título ausente: ${id}`);
    assert.ok(text.description?.length > 0, `Descrição ausente: ${id}`);
  }
});

test('produto sem tradução preserva título e descrição originais', () => {
  const product = { id: 99999, title: 'Original title', description: 'Original description' };
  assert.deepEqual(getProductText(product), { title: product.title, description: product.description });
  assert.deepEqual(getProductText(null), { title: undefined, description: undefined });
});

test('localização não modifica o produto nem inclui dados comerciais', () => {
  const product = Object.freeze({
    id: 83, title: 'Blue & Black Check Shirt', description: 'API description',
    images: ['https://example.com/image.png'], thumbnail: 'https://example.com/thumb.png',
    price: 29.99, discountPercentage: 15.35, category: 'mens-shirts',
  });
  const original = structuredClone(product);
  const text = getProductText(product);
  assert.deepEqual(product, original);
  assert.deepEqual(Object.keys(text), ['title', 'description']);
  assert.notEqual(text.title, product.title);
  assert.notEqual(text.description, product.description);
});
