import { api } from "./api";

export type LoginDTO = {
  username: string;
  senha: string;
};

export async function login(data: LoginDTO) {
  const res = await api.post("/auth/login", data);
  return res.data; 

}
