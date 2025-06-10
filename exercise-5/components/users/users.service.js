import * as usersData from "./users.data.js";
import bcrypt from "bcryptjs";

export const getUserById = (id) => {
  const user = usersData.getUserById(id);

  return user;
};

export const getUserByEmail = (email) => {
  const user = usersData.getUserByEmail(email);

  return user;
};

export const getAllUsers = () => {
  const users = usersData.getAllUsers();

  return users;
};

const cryptPassword = (password) => {
  return bcrypt.hashSync(password);
};

export const createUser = (user) => {
  const newUser = usersData.createUser({
    ...user,
    password: cryptPassword(user.password),
  });

  return newUser;
};

export const updateUser = (user) => {
  const updatedUser = usersData.updateUser(user);

  return updatedUser;
};

export const deleteUser = (id) => {
  const result = usersData.deleteUser(id);

  return result;
};
