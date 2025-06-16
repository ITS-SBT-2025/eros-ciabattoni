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

  // sfrutto la getProductById per ritornare i dati del nuovo prodotto
  return await getProductById(newProductId);
};

export const updateProduct = async (product) => {
  await productsData.updateProduct(product);

  // sfrutto la getProductById per ritornare i dati del prodotto aggiornato
  return await getProductById(product.id);
};

export const deleteProduct = async (id) => {
  await productsData.deleteProduct(id);

  return true;
};
