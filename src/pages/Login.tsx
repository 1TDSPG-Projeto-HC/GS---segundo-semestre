import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const loginSchema = z.object({
  email: z.string().email("Insira um e-mail válido."),
  senha: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
});
type LoginInput = z.infer<typeof loginSchema>;

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const payload = {
        email: data.email.toLowerCase().trim(),
        senha: data.senha,
      };

      // ✅ usa o endpoint certo do backend
      const response = await api.post("/auth/login", payload);

      // backend retorna LoginResponseDTO
      const usuarioLogado = response.data;

      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
      navigate("/");
    } catch (error: any) {
      console.error(error);

      const msg =
        error?.response?.data?.message ||
        error?.response?.data?.erro ||
        "Credenciais inválidas.";

      alert(msg);
      reset();
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div
        className="
          w-full max-w-md mx-4 p-8 rounded-2xl
          bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100
          shadow-lg
        "
      >
        <h2 className="text-3xl font-bold text-center mb-6">Bem-vindo</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-white mb-1"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="
                w-full px-3 py-2 rounded-md border-2 border-indigo-400
                bg-white text-gray-900
                focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
              "
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-slate-700 dark:text-white mb-1"
            >
              Senha
            </label>
            <input
              id="senha"
              type="password"
              {...register("senha")}
              className="
                w-full px-3 py-2 rounded-md border-2 border-indigo-400
                bg-white text-gray-900
                focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
              "
            />
            {errors.senha && (
              <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full py-2 px-4 rounded-md text-white bg-indigo-600 
              hover:bg-indigo-700 transition font-medium shadow-md
              disabled:opacity-60
            "
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>

          <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">
            Não tem uma conta?{" "}
            <Link
              to="/register"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Cadastrar-se
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
