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

const cryptPassword = (password) => {
  return bcrypt.hashSync(password);
};

export const createUser = async (user) => {
  const newUserId = await usersData.createUser({
    ...user,
    password: cryptPassword(user.password),
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
