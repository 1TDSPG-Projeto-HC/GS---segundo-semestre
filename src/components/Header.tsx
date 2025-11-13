import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container-max px-6 py-4 flex items-center justify-between">
          
          {/* Logo e título */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
              MW
            </div>
            <div>
              <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                MindWork
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Bem-estar no trabalho
              </div>
            </div>
          </Link>

          {/* Navegação */}
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-sm hover:text-indigo-500 transition">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm hover:text-indigo-500 transition">
              Dashboard
            </Link>
            <Link to="/sobre" className="text-sm hover:text-indigo-500 transition">
              Sobre
            </Link>
            <Link to="/integrantes" className="text-sm hover:text-indigo-500 transition">
              Integrantes
            </Link>
            <Link to="/faq" className="text-sm hover:text-indigo-500 transition">
              FAQ
            </Link>
            <Link to="/contato" className="text-sm hover:text-indigo-500 transition">
              Contato
            </Link>

            {/* Botão de alternar tema */}
            <button
              onClick={toggle}
              aria-label="Alternar tema claro/escuro"
              className="ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Botão de login */}
            <Link
              to="/login"
              className="ml-3 px-4 py-2 rounded-md font-medium text-sm 
              text-white bg-indigo-600 hover:bg-indigo-700 
              dark:bg-indigo-500 dark:hover:bg-indigo-600 
              transition-all shadow-md"
            >
              Entrar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
