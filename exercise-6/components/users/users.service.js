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

export const updateUser = (user) => {
  const updatedUser = usersData.updateUser(user);

  return updatedUser;
};

export const deleteUser = (id) => {
  const result = usersData.deleteUser(id);

  return result;
};
