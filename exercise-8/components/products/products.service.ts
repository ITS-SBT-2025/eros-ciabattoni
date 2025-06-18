import { IProduct } from "./IProduct.js";
import * as productsData from "./products.data.js";

export const getProductById = async (id: number): Promise<IProduct> => {
  const product = await productsData.getProductById(id);

  return product;
};

export const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await productsData.getAllProducts();

  return products;
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProductId = await productsData.createProduct(product);

  return await getProductById(newProductId);
};

export const updateProduct = async (product: IProduct): Promise<IProduct> => {
  await productsData.updateProduct(product);

  return await getProductById(product.id);
};

export const deleteProduct = async (id: number): Promise<boolean> => {
  await productsData.deleteProduct(id);

  return true;
};
