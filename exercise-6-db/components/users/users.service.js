import * as usersData from "./users.data.js";
import bcrypt from "bcryptjs";

export const getUserById = async (id) => {
  const user = await usersData.getUserById(id);

  return user;
};

export const getUserByEmail = async (email) => {
  const user = await usersData.getUserByEmail(email);

  return user;
};

export const getAllUsers = async () => {
  const users = await usersData.getAllUsers();

  return users;
};

export const createUser = async (user) => {
  // alla creazione di un nuovo utente crittografare sempre la password
  // non salvare mai sul db le password in chiaro!
  // crittografo la password tramite la libreria bcryptjs
  const newUserId = await usersData.createUser({
    ...user,
    password: bcrypt.hashSync(user.password),
  });

  return await getUserById(newUserId);
};

export const updateUser = async (user) => {
  await usersData.updateUser(user);

  return await getUserById(user.id);
};

export const deleteUser = async (id) => {
  await usersData.deleteUser(id);

  return true;
};
