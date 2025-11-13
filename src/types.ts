export interface Checkin {
  id: string;
  mood: number;
  comment?: string;
  date: string;
}

export interface TeamMember {
  name: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  photo: string;
}
export interface UserRegisterPayload {
  nome: string;
  email: string;
  senha: string;
}