import React, { useEffect, useState } from "react";

interface Entrada {
  id: number;
  data: string;
  humor: string;
  texto: string;
}

export default function DiarioRapido() {
  const [texto, setTexto] = useState("");
  const [humor, setHumor] = useState("😊");
  const [entradas, setEntradas] = useState<Entrada[]>([]);
  const [mostrarHistorico, setMostrarHistorico] = useState(false);
  const [busca, setBusca] = useState("");
  const [dataFiltro, setDataFiltro] = useState("");

  const moods = ["😊", "😐", "😔", "😡", "😴", "🤩", "🥺", "🤔"];

  useEffect(() => {
    const salvos = localStorage.getItem("diarioRapido");
    if (salvos) setEntradas(JSON.parse(salvos));
  }, []);

  useEffect(() => {
    localStorage.setItem("diarioRapido", JSON.stringify(entradas));
  }, [entradas]);

  const salvarEntrada = () => {
    if (!texto.trim()) return;
    const nova: Entrada = {
      id: Date.now(),
      data: new Date().toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }),
      humor,
      texto,
    };
    setEntradas([nova, ...entradas]);
    setTexto("");
  };

  const apagarEntrada = (id: number) => {
    setEntradas(entradas.filter((e) => e.id !== id));
  };

  const entradasFiltradas = entradas.filter((e) => {
    const textoOk = e.texto.toLowerCase().includes(busca.toLowerCase());
    const dataOk = !dataFiltro || e.data.startsWith(dataFiltro);
    return textoOk && dataOk;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10 text-gray-900 dark:text-gray-100">
      {/* Cabeçalho */}
      <div className="text-center space-y-3 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300">
          Diário Rápido
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Escreva, reflita e acompanhe sua jornada emocional. Tudo salvo
          localmente, com privacidade total.
        </p>
      </div>

      {/* Seleção de humor */}
      <div className="flex justify-center gap-4 flex-wrap animate-fadeIn animation-delay-200">
        {moods.map((m) => (
          <button
            key={m}
            onClick={() => setHumor(m)}
            className={`text-3xl p-3 rounded-xl transition-all transform ${
              humor === m
                ? "bg-indigo-600 text-white shadow-lg scale-110"
                : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Caixa de texto */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4 animate-fadeIn animation-delay-400">
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escreva algo breve sobre seu dia..."
          className="w-full h-40 bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100"
        />

        <div className="flex flex-wrap gap-3 justify-between items-center">
          <button
            onClick={salvarEntrada}
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition-all transform hover:scale-105 active:scale-95"
          >
            Salvar Entrada
          </button>

          <button
            onClick={() => setMostrarHistorico(!mostrarHistorico)}
            className="text-sm text-indigo-500 dark:text-indigo-300 hover:underline"
          >
            {mostrarHistorico ? "Ocultar Histórico" : "Ver Histórico"}
          </button>
        </div>
      </div>

      {/* Histórico */}
      {mostrarHistorico && (
        <div className="animate-fadeIn animation-delay-200 space-y-6">
          <div className="flex flex-wrap justify-between gap-4 items-center">
            <input
              type="text"
              placeholder="🔍 Buscar palavra..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none w-60"
            />
            <input
              type="date"
              value={dataFiltro}
              onChange={(e) => setDataFiltro(e.target.value)}
              className="px-3 py-2 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {entradasFiltradas.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">
                Nenhuma entrada encontrada.
              </p>
            ) : (
              entradasFiltradas.map((entrada) => (
                <div
                  key={entrada.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-transparent hover:border-indigo-400 dark:hover:border-indigo-500 transition-all transform hover:scale-[1.01]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl">{entrada.humor}</span>
                    <button
                      onClick={() => apagarEntrada(entrada.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Excluir
                    </button>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-line">
                    {entrada.texto}
                  </p>
                  <p className="text-xs text-gray-400 mt-3">{entrada.data}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Rodapé */}
      <footer className="text-center pt-10 border-t border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm animate-fadeIn animation-delay-500">
        MindWork — explore, sinta e evolua 🌱
      </footer>
    </div>
  );
}
