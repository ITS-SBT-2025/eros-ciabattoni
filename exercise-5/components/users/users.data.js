import dbUsers from "../../database/users.js";
import ErrorWithStatus from "../../error-with-status.js";

export const getUserById = (id) => {
  const user = dbUsers.find((u) => u.id === id);

  if (!user) {
    throw new ErrorWithStatus(404, `Utente con id ${id} non trovato`);
  }

  user.password = undefined;

  return user;
};

export const getUserByEmail = (email) => {
  const user = dbUsers.find((u) => u.email === email);

  if (!user) {
    throw new ErrorWithStatus(404, `Utente con email ${email} non trovato`);
  }

  return user;
};

export const getAllUsers = () => {
  return dbUsers.map((u) => ({
    ...u,
    password: undefined,
  }));
};

export const createUser = (user) => {
  const maxId = dbUsers.length > 0 ? Math.max(...dbUsers.map((u) => u.id)) : 0;

  const newUser = {
    ...user,
    id: maxId + 1,
  };

  dbUsers.push(newUser);

  return { ...newUser, password: undefined };
};

export const updateUser = (user) => {
  const index = dbUsers.findIndex((u) => u.id === user.id);

  if (index === -1) {
    throw new ErrorWithStatus(404, `Utente con id ${user.id} non trovato`);
  }

  const oldPassword = dbUsers[index].password;
  dbUsers[index] = { ...user, password: oldPassword };

  return { ...dbUsers[index], password: undefined };
};

export const deleteUser = (id) => {
  const index = dbUsers.findIndex((u) => u.id === id);

  if (index === -1) {
    throw new ErrorWithStatus(404, `Utente con id ${id} non trovato`);
  }

  dbUsers.splice(index, 1);

  return true;
};
