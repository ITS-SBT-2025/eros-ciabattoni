import * as usersData from "./users.data.js";

export const getUserById = async (id) => {
  const user = await usersData.getUserById(id);

  return user;
};

export const getAllUsers = async () => {
  const users = await usersData.getAllUsers();

  return users;
};

export const createUser = async (user) => {
  const newUserId = await usersData.createUser(user);

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
