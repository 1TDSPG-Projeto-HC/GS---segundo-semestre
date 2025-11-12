import React, { useEffect, useState } from "react";
import { Checkin } from "../types";

const KEY = "mindwork_checkins";

function sampleData(): Checkin[] {
  const raw = JSON.parse(localStorage.getItem(KEY) || "[]") as Checkin[];
  return raw.slice(0, 10);
}

export default function Dashboard() {
  const [items, setItems] = useState<Checkin[]>([]);

  useEffect(() => {
    setItems(sampleData());
  }, []);

  const avg = items.length
    ? Math.round(items.reduce((s, a) => s + a.mood, 0) / items.length)
    : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6 pt-24 pb-12 transition-opacity duration-500 opacity-100">
      {/* Cabeçalho */}
      <div className="card shadow-md border border-gray-100 dark:border-gray-800 rounded-xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
              Seu painel
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Resumo do seu bem-estar
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {avg || "-"}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Pontuação média
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card shadow-md border border-gray-100 dark:border-gray-800 rounded-xl p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
            Histórico recente
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </h3>
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">Sem check-ins ainda.</p>
          ) : (
            <ul className="space-y-2">
              {items.map((i) => (
                <li
                  key={i.id}
                  className="p-2 rounded border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-between">
                    <div>Mood: {i.mood}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(i.date).toLocaleString()}
                    </div>
                  </div>
                  {i.comment && <p className="text-sm mt-1">{i.comment}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card shadow-md border border-gray-100 dark:border-gray-800 rounded-xl p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
            Ações
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>1. Faça check-ins diários</li>
            <li>2. Procure suporte quando necessário</li>
            <li>3. Participe de atividades de equipe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}