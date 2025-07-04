import * as productsData from "./products.data.js";

export const getProductById = async (id) => {
  const product = await productsData.getProductById(id);

  return product;
};

export const getAllProducts = async () => {
  const products = await productsData.getAllProducts();

  return products;
};

export const createProduct = async (product) => {
  const newProductId = await productsData.createProduct(product);

  return await getProductById(newProductId);
};

export const updateProduct = async (product) => {
  await productsData.updateProduct(product);

  return await getProductById(product.id);
};

export const deleteProduct = async (id) => {
  await productsData.deleteProduct(id);

  return true;
};
