import React from "react";

export default function Integrantes() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center space-y-6">
      {/* Título com leve animação de aparição */}
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 animate-fadeIn">
        👷‍♂️ Página em Desenvolvimento
      </h1>

      {/* Texto com pequeno atraso na animação */}
      <p className="text-gray-700 dark:text-gray-400 text-lg animate-fadeIn animation-delay-300">
        Em breve você poderá conhecer os integrantes da equipe MindWork aqui!
      </p>

      {/* Bloco decorativo com animação sutil */}
      <div className="mt-8 flex justify-center animate-fadeIn animation-delay-500">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-md px-6 py-10">
          <p className="text-indigo-600 dark:text-indigo-300 font-medium">
            🚧 Estamos preparando algo especial...
          </p>
        </div>
      </div>
    </div>
  );
}
