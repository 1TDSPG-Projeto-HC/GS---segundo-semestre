import { api } from "./api";

export type UserRegisterDTO = {
  nome: string;
  username: string;
  email: string;
  senha: string;
};

export async function registerUser(data: UserRegisterDTO) {
  const res = await api.post("/usuarios/register", data);
  return res.data;
}

export async function listUsers() {
  const res = await api.get("/usuarios");
  return res.data;
}

export async function findUserById(id: number) {
  const res = await api.get(`/usuarios/${id}`);
  return res.data;
}
