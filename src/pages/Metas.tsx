import React, { useState, useEffect } from "react";

export default function Metas() {
  interface Meta {
    id: number;
    texto: string;
    concluida: boolean;
    dataCriacao: string;
    dataConclusao?: string;
  }

  const [novaMeta, setNovaMeta] = useState("");
  const [metas, setMetas] = useState<Meta[]>([]);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [xpMax, setXpMax] = useState(100);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const m = localStorage.getItem("metasMindwork");
    const l = localStorage.getItem("levelMindwork");
    const x = localStorage.getItem("xpMindwork");
    const xm = localStorage.getItem("xpMaxMindwork");
    if (m) setMetas(JSON.parse(m));
    if (l) setLevel(Number(l));
    if (x) setXp(Number(x));
    if (xm) setXpMax(Number(xm));
  }, []);

  useEffect(() => {
    localStorage.setItem("metasMindwork", JSON.stringify(metas));
    localStorage.setItem("levelMindwork", String(level));
    localStorage.setItem("xpMindwork", String(xp));
    localStorage.setItem("xpMaxMindwork", String(xpMax));
  }, [metas, level, xp, xpMax]);

  function adicionarMeta() {
    if (!novaMeta.trim()) return;
    const nova = {
      id: Date.now(),
      texto: novaMeta,
      concluida: false,
      dataCriacao: new Date().toLocaleDateString("pt-BR"),
    };
    setMetas([nova, ...metas]);
    setNovaMeta("");
  }

  function ganharXp(qtd: number) {
    const novo = xp + qtd;
    if (novo >= xpMax) {
      const sobra = novo - xpMax;
      setLevel(level + 1);
      setXp(sobra);
      setXpMax(xpMax + 40);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 2000);
    } else {
      setXp(novo);
    }
  }

  function concluirMeta(id: number) {
    const lista = metas.map((m) =>
      m.id === id
        ? {
            ...m,
            concluida: true,
            dataConclusao: new Date().toLocaleDateString("pt-BR"),
          }
        : m
    );
    setMetas(lista);
    ganharXp(40);
  }

  function removerMeta(id: number) {
    setMetas(metas.filter((m) => m.id !== id));
  }

  function restaurarMeta(id: number) {
    setMetas(
      metas.map((m) =>
        m.id === id ? { ...m, concluida: false, dataConclusao: undefined } : m
      )
    );
    setXp(Math.max(0, xp - 40));
  }

  const pendentes = metas.filter((m) =>
    m.texto.toLowerCase().includes(filtro.toLowerCase())
  );
  const concluidas = metas.filter((m) => m.concluida);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 flex flex-col items-center">

      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          🎯 Minhas Metas —{" "}
          <span className="text-indigo-600 dark:text-indigo-400">MindWork</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Evolua diariamente completando metas e acumulando experiência para subir de nível.
        </p>
      </header>

      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">Seu Nível</p>
          <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">{level}</p>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
          <div
            className="h-3 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"
            style={{ width: `${(xp / xpMax) * 100}%` }}
          />
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {xp} / {xpMax} XP
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Seu nível aumenta conforme você conclui metas. Quanto mais XP você junta, mais rápido evolui.
        </p>
      </div>

      {showLevelUp && (
        <div className="fixed top-12 bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-xl text-3xl font-bold animate-bounce">
          ⭐ LEVEL UP!
        </div>
      )}

      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-10 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">Criar nova meta</h2>

        <textarea
          className="w-full h-32 p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          placeholder="Descreva sua meta..."
          value={novaMeta}
          onChange={(e) => setNovaMeta(e.target.value)}
        />

        <button
          onClick={adicionarMeta}
          className="mt-5 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 shadow-md"
        >
          Adicionar Meta
        </button>
      </div>

      <input
        type="text"
        placeholder="Buscar meta..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="px-4 py-3 w-full max-w-4xl mb-10 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="w-full max-w-4xl mb-14">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">📌 Metas Pendentes</h2>

        {pendentes.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Nenhuma meta pendente.</p>
        ) : (
          <div className="space-y-4">
            {pendentes.map((meta) => (
              <div
                key={meta.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all"
              >
                <p className="font-medium text-lg">{meta.texto}</p>
                <p className="text-xs text-gray-400 mt-1 mb-4">Criada em {meta.dataCriacao}</p>

                <div className="flex gap-4">
                  <button
                    onClick={() => concluirMeta(meta.id)}
                    className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition"
                  >
                    Concluir
                  </button>

                  <button
                    onClick={() => removerMeta(meta.id)}
                    className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full max-w-4xl mb-20">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">✅ Metas Concluídas</h2>

        {concluidas.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Nenhuma meta concluída ainda.</p>
        ) : (
          <div className="space-y-4">
            {concluidas.map((meta) => (
              <div
                key={meta.id}
                className="bg-green-50 dark:bg-green-900 p-6 rounded-xl shadow border border-green-300 dark:border-green-700"
              >
                <p className="font-medium line-through opacity-80 text-lg">{meta.texto}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">Concluída em {meta.dataConclusao}</p>

                <button
                  onClick={() => restaurarMeta(meta.id)}
                  className="mt-3 px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition"
                >
                  Restaurar Meta
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="text-center text-gray-500 dark:text-gray-400 text-sm mt-10 mb-10">
        MindWork — você evolui um pouco todos os dias 🌱
      </footer>
    </div>
  );
}
