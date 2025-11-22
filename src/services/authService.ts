import api from "./api";


export type LoginDTO = {
  username: string;
  senha: string;
};

export async function login(form: LoginDTO) {
  const {data} = await api.post("/auth/login", form);
  return data; 

}
