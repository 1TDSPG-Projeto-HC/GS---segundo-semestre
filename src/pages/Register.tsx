import React, { useState } from "react";
import api from "../services/api";
import type { UserRegisterPayload } from "../types";

interface RegisterFormState {
  nome: string;
  email: string;
  senha: string;
  confirmaSenha: string;
}

type MessageType = "success" | "error" | "";

const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterFormState>({
    nome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("");
  const [tipoMensagem, setTipoMensagem] = useState<MessageType>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setMensagem("");
    setTipoMensagem("");

    if (!form.nome || !form.email || !form.senha || !form.confirmaSenha) {
      setTipoMensagem("error");
      setMensagem("Preencha todos os campos.");
      return;
    }

    if (form.senha.length < 8) {
      setTipoMensagem("error");
      setMensagem("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (form.senha !== form.confirmaSenha) {
      setTipoMensagem("error");
      setMensagem("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const payload: UserRegisterPayload = {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      };

      const response = await api.post("/api/usuarios/register", payload);

      if (response.status === 201 || response.status === 200) {
        setTipoMensagem("success");
        setMensagem("Conta criada com sucesso! Você já pode fazer login.");
        setForm({
          nome: "",
          email: "",
          senha: "",
          confirmaSenha: "",
        });
      } else {
        setTipoMensagem("error");
        setMensagem("Não foi possível realizar o cadastro.");
      }
    } catch (error: any) {
      const backendMessage: string =
        error?.response?.data?.message ||
        error?.response?.data?.erro ||
        "Erro ao registrar. Tente novamente.";

      setTipoMensagem("error");
      setMensagem(backendMessage);
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-full border-2 border-indigo-400 bg-white text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600";

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="rounded-3xl shadow-[0_18px_55px_rgba(15,23,42,0.45)] p-8 sm:p-10 bg-white dark:bg-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-white">
            Criar conta
          </h1>

          <p className="text-center text-slate-500 dark:text-slate-300 text-sm mb-8 leading-relaxed">
            Bem-vindo(a) ao MindWork 👋
            <br />
            Preencha os dados para se cadastrar.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-slate-700 dark:text-white"
              >
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={form.nome}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-white"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-slate-700 dark:text-white"
              >
                Senha
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                value={form.senha}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="confirmaSenha"
                className="block text-sm font-medium text-slate-700 dark:text-white"
              >
                Confirmar senha
              </label>
              <input
                id="confirmaSenha"
                name="confirmaSenha"
                type="password"
                value={form.confirmaSenha}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-3 w-full flex items-center justify-center px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-semibold rounded-full text-sm shadow-md transition"
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </form>

          {mensagem && (
            <div
              className={`mt-4 text-center text-sm ${
                tipoMensagem === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {mensagem}
            </div>
          )}

          <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-300">
            Já tem uma conta?{" "}
            <a
              href="/login"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
