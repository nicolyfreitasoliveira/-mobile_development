import { api } from './api.js';

export const PRODUCT_CATEGORIES = {
  masculino: ['mens-shirts', 'mens-shoes', 'mens-watches'],
  feminino: ['womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches'],
};

export async function getProductsByGroup(group, signal) {
  const responses = await Promise.all(PRODUCT_CATEGORIES[group].map((category) =>
    api.get(`/products/category/${category}`, { params: { limit: 0 }, signal })
  ));
  return responses.flatMap(({ data }) => data.products);
}

export async function getProductById(id, signal) {
  const { data } = await api.get(`/products/${id}`, { signal });
  return data;
}
