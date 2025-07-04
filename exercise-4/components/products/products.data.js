import dbProducts from "../../database/products.js";
import ErrorWithStatus from "../../error-with-status.js";

export const getProductById = (id) => {
  const product = dbProducts.find((p) => p.id === id);

  // simulazione errore lato server
  // verrà restituito un messaggio generico
  // throw new Error("Database is down");

  if (!product) {
    // lancio l'errore specificando lo status e il messaggio
    // l'esecuzione di questa funzione si interrompe e passa
    // al middleware degli errori
    throw new ErrorWithStatus(404, `Prodotto con id ${id} non trovato`);
  }

  return product;
};

export const getAllProducts = () => {
  return dbProducts;
};

export const createProduct = (product) => {
  const maxId =
    dbProducts.length > 0 ? Math.max(...dbProducts.map((p) => p.id)) : 0;

  const newProduct = {
    ...product,
    id: maxId + 1,
  };

  dbProducts.push({
    ...product,
    id: maxId + 1,
  });

  return newProduct;
};

export const updateProduct = (product) => {
  const index = dbProducts.findIndex((p) => p.id === product.id);

  if (index === -1) {
    // lancio l'errore specificando lo status e il messaggio
    // l'esecuzione di questa funzione si interrompe e passa
    // al middleware degli errori
    throw new ErrorWithStatus(404, `Prodotto con id ${product.id} non trovato`);
  }

  dbProducts[index] = { ...product };

  return dbProducts[index];
};

export const deleteProduct = (id) => {
  const index = dbProducts.findIndex((p) => p.id === id);

  if (index === -1) {
    // lancio l'errore specificando lo status e il messaggio
    // l'esecuzione di questa funzione si interrompe e passa
    // al middleware degli errori
    throw new ErrorWithStatus(404, `Prodotto con id ${id} non trovato`);
  }

  dbProducts.splice(index, 1);

  return true;
};
