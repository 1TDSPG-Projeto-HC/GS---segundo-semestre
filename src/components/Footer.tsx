import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-sm text-gray-600 dark:text-gray-400">
        
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            MindWork
          </h2>
          <p className="leading-relaxed max-w-xs">
            Cuidando do seu bem-estar mental e produtividade com pausas
            conscientes e ferramentas simples de autoconhecimento.
          </p>
        </div>

        
        <div className="md:text-center">
          <h3 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Informações
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/termos"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link
                to="/privacidade"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                to="/Contato"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="md:text-right">
          <h3 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Conecte-se
          </h3>
          <div className="flex md:justify-end gap-4 mt-2">
            
            <a
              href="https://github.com/1TDSPG-Projeto-HC/GS---segundo-semestre.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.3 11.3 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.85 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            
            <a
              href="https://instagram.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 1.5h8.5c2.14 0 3.75 1.61 3.75 3.75v8.5c0 2.14-1.61 3.75-3.75 3.75h-8.5A3.76 3.76 0 014 15.75v-8.5A3.76 3.76 0 017.75 3.5zm9.75 2.25a.75.75 0 100 1.5.75.75 0 000-1.5zm-5.75 1.5a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="py-4 text-center text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} MindWork — Projeto desenvolvido com{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-medium">
          React + Vite + TypeScript
        </span>
        .
      </div>
    </footer>
  );
}
