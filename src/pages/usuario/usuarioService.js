import { getLocalStorage, setLocalStorage } from '../../services/localStorageService';

const KEY = 'usuarios';

export const adicionarUsuario = (formData) => {
  const usuarios = getLocalStorage(KEY);

  const updatedUsers = [...usuarios, formData];

  setLocalStorage(KEY, updatedUsers);

  return updatedUsers;
};

export const editarUsuario = (editIndex, formData) => {
  const usuarios = getLocalStorage(KEY);

  const updatedUsers = [...usuarios];

  updatedUsers[editIndex] = formData;

  setLocalStorage(KEY, updatedUsers);

  return updatedUsers;
};

export const listarUsuarios = () => {
  return getLocalStorage(KEY);
};

export const deletarUsuario = (email) => {
  const usuarios = getLocalStorage(KEY);

  const updatedUsers = usuarios.filter((user) => user.email !== email);

  setLocalStorage(KEY, updatedUsers);

  return updatedUsers;
};