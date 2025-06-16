import ErrorWithStatus from "../../error-with-status.js";
import poolPromise from "../../config/mssql.config.js";

export const getProductById = async (id) => {
  // attende la connessione al db
  const pool = await poolPromise;

  // uso una query parametrizzata per gestire l'input
  const sql = `SELECT id
                    , name
                    , description
                    , price
                    , in_stock AS 'inStock'
               FROM   products
               WHERE  id = @id`; // conversione nomi colonna da 'snake_case' a 'camelCase'

  // esecuzione della query
  const queryResult = await pool.request().input("id", id).query(sql);
  // queryResult.recordset è un array che contiene i risultati della query
  // dato che sto filtrando per id, l'array avrà al massimo un record
  const product = queryResult.recordset[0];

  if (!product) {
    throw new ErrorWithStatus(404, `Prodotto con id ${id} non trovato`);
  }

  return product;
};

export const getAllProducts = async () => {
  // attende la connessione al db
  const pool = await poolPromise;

  const sql = `SELECT id
                    , name
                    , description
                    , price
                    , in_stock AS 'inStock'
               FROM   products`; // conversione nomi colonna da 'snake_case' a 'camelCase'

  // esecuzione della query
  const queryResult = await pool.request().query(sql);

  // queryResult.recordset è un array che contiene i risultati della query
  return queryResult.recordset;
};

export const createProduct = async (product) => {
  // attende la connessione al db
  const pool = await poolPromise;

  // uso una query parametrizzata per gestire l'input
  const sql = `INSERT INTO  products (name, description, price, in_stock)
               OUTPUT       inserted.id
               VALUES       (@name, @description, @price, @in_stock)`;

  // esecuzione della query
  const queryResult = await pool
    .request()
    .input("name", product.name)
    .input("description", product.description)
    .input("price", product.price)
    .input("in_stock", product.inStock)
    .query(sql);

  // restituisco l'id del nuovo record creato
  return queryResult.recordset[0].id;
};

export const updateProduct = async (product) => {
  // attende la connessione al db
  const pool = await poolPromise;

  // uso una query parametrizzata per gestire l'input
  const sql = `UPDATE products
               SET    name = @name
                    , description = @description
                    , price = @price
                    , in_stock = @in_stock
               WHERE  id = @id`;

  // esecuzione della query
  await pool
    .request()
    .input("id", product.id)
    .input("name", product.name)
    .input("description", product.description)
    .input("price", product.price)
    .input("in_stock", product.inStock)
    .query(sql);
};

export const deleteProduct = async (id) => {
  // attende la connessione al db
  const pool = await poolPromise;

  // uso una query parametrizzata per gestire l'input
  const sql = `DELETE FROM  products
               WHERE        id = @id`;

  // esecuzione della query
  await pool.request().input("id", id).query(sql);
};
