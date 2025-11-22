import api from "./api";


export type UserRegisterDTO = {
  nome: string;
  username: string;
  email: string;
  senha: string;
};

export async function registerUser(form: UserRegisterDTO) {
  const {data} = await api.post("/usuarios/register", form);
  return data;
}

export async function listUsers() {
  const {data} = await api.get("/usuarios");
  return data;
}

export async function findUserById(id: number) {
  const {data} = await api.get(`/usuarios/${id}`);
  return data;
}
