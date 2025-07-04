import ErrorWithStatus from "../../error-with-status.js";
import poolPromise from "../../config/mssql.config.js";
import { IUser } from "./IUser.js";

export const getUserById = async (id: number): Promise<IUser> => {
  const pool = await poolPromise;

  const sql = `SELECT id
                    , name
                    , email
                    , age
                    , is_active AS 'isActive'
               FROM   users
               WHERE  id = @id`;

  const queryResult = await pool.request().input("id", id).query(sql);
  const user: IUser = queryResult.recordset[0];

  if (!user) {
    throw new ErrorWithStatus(404, `Utente con id ${id} non trovato`);
  }

  return user;
};

export const getUserByEmail = async (email: string): Promise<IUser> => {
  const pool = await poolPromise;

  const sql = `SELECT id
                    , name
                    , email
                    , password
                    , age
                    , is_active AS 'isActive'
               FROM   users
               WHERE  email = @email`;

  const queryResult = await pool.request().input("email", email).query(sql);
  const user: IUser = queryResult.recordset[0];

  if (!user) {
    throw new ErrorWithStatus(404, `Utente con email ${email} non trovato`);
  }

  return user;
};

export const getAllUsers = async (): Promise<IUser[]> => {
  const pool = await poolPromise;

  const sql = `SELECT id
                    , name
                    , email
                    , password
                    , age
                    , is_active AS 'isActive'
               FROM   users`;

  const queryResult = await pool.request().query(sql);

  return queryResult.recordset;
};

export const createUser = async (user: IUser): Promise<number> => {
  const pool = await poolPromise;

  const sql = `INSERT INTO  users (name, email, password, age, is_active)
               OUTPUT       inserted.id
               VALUES       (@name, @email, @password, @age, @is_active)`;

  const queryResult = await pool
    .request()
    .input("name", user.name)
    .input("email", user.email)
    .input("password", user.password)
    .input("age", user.age)
    .input("is_active", user.isActive)
    .query(sql);

  return queryResult.recordset[0].id;
};

export const updateUser = async (user: IUser): Promise<void> => {
  const pool = await poolPromise;

  const sql = `UPDATE users
               SET    name = @name
                    , email = @email
                    , age = @age
                    , is_active = @is_active
               WHERE  id = @id`;

  await pool
    .request()
    .input("id", user.id)
    .input("name", user.name)
    .input("email", user.email)
    .input("password", user.password)
    .input("age", user.age)
    .input("is_active", user.isActive)
    .query(sql);
};

export const deleteUser = async (id: number): Promise<void> => {
  const pool = await poolPromise;

  const sql = `DELETE FROM  users
               WHERE        id = @id`;

  await pool.request().input("id", id).query(sql);
};
