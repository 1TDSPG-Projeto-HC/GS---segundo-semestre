import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Respiracao() {
  type Fase = "inicio" | "inspire" | "segure" | "expire" | "finalizado";
  const [fase, setFase] = useState<Fase>("inicio");
  const [tempoRestante, setTempoRestante] = useState(0);
  const [cicloAtual, setCicloAtual] = useState(0);
  const [totalCiclos, setTotalCiclos] = useState(3);
  const [inspireTempo, setInspireTempo] = useState(4);
  const [segureTempo, setSegureTempo] = useState(4);
  const [expireTempo, setExpireTempo] = useState(4);
  const [emExecucao, setEmExecucao] = useState(false);

  const faseRef = useRef<Fase>(fase);
  const cicloRef = useRef<number>(cicloAtual);
  const totalCiclosRef = useRef<number>(totalCiclos);

  useEffect(() => {
    faseRef.current = fase;
  }, [fase]);
  useEffect(() => {
    cicloRef.current = cicloAtual;
  }, [cicloAtual]);
  useEffect(() => {
    totalCiclosRef.current = totalCiclos;
  }, [totalCiclos]);

  const duracaoPorFase = (f: Fase) => {
    if (f === "inspire") return inspireTempo;
    if (f === "segure") return segureTempo;
    if (f === "expire") return expireTempo;
    return 0;
  };

  function iniciarSessao() {
    setCicloAtual(1);
    setFase("inspire");
    setTempoRestante(inspireTempo);
    setEmExecucao(true);
  }

  function pausarSessao() {
    setEmExecucao(false);
  }

  function retomarSessao() {
    if (fase === "inicio") return;
    setEmExecucao(true);
  }

  function pararSessao() {
    setEmExecucao(false);
    setFase("inicio");
    setTempoRestante(0);
    setCicloAtual(0);
  }

  function avancarFaseAtual() {
    const f = faseRef.current;
    if (f === "inspire") {
      setFase("segure");
      setTempoRestante(segureTempo);
    } else if (f === "segure") {
      setFase("expire");
      setTempoRestante(expireTempo);
    } else if (f === "expire") {
      const atual = cicloRef.current;
      const total = totalCiclosRef.current;
      if (atual >= total) {
        setFase("finalizado");
        setEmExecucao(false);
        setTempoRestante(0);
      } else {
        setCicloAtual((prev) => prev + 1);
        setFase("inspire");
        setTempoRestante(inspireTempo);
      }
    }
  }

  useEffect(() => {
    if (!emExecucao) return;
    const tick = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          setTimeout(() => avancarFaseAtual(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [emExecucao, inspireTempo, segureTempo, expireTempo]);

  const duracaoAtual = duracaoPorFase(fase);
  const progresso =
    fase === "inicio" || duracaoAtual === 0
      ? 0
      : Math.round(((duracaoAtual - tempoRestante) / duracaoAtual) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900 text-gray-800 dark:text-gray-100 px-6 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
        🧘 Respiração Guiada — MindWork
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-2xl">
        Exercício guiado para acalmar a mente e recuperar foco durante o
        trabalho. Faça pausas curtas e regulares.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center">
          <div className="relative flex flex-col items-center justify-center mb-6">
            <motion.div
              key={fase}
              animate={{
                scale:
                  fase === "inspire"
                    ? [1, 1.25]
                    : fase === "segure"
                    ? [1.25, 1.25]
                    : fase === "expire"
                    ? [1.25, 1]
                    : [1, 1],
                boxShadow:
                  fase === "inspire"
                    ? "0 10px 30px rgba(99,102,241,0.18)"
                    : "0 8px 20px rgba(2,6,23,0.2)",
              }}
              transition={{ duration: Math.max(1, duracaoAtual), ease: "easeInOut" }}
              className="w-44 h-44 md:w-52 md:h-52 bg-indigo-500/30 rounded-full flex items-center justify-center"
            >
              <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl font-semibold text-white">
                  {fase === "inicio"
                    ? "Pronto"
                    : fase === "finalizado"
                    ? "Concluído"
                    : `${tempoRestante}s`}
                </span>
              </div>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={fase + String(tempoRestante)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 text-center mb-6"
            >
              {fase === "inspire" && "🌬 Inspire profundamente..."}
              {fase === "segure" && "⏸ Segure o ar..."}
              {fase === "expire" && "😮‍💨 Solte devagar..."}
              {fase === "inicio" && "Clique em Iniciar para começar."}
              {fase === "finalizado" && "Parabéns — sessão finalizada!"}
            </motion.p>
          </AnimatePresence>

          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-6">
            <motion.div
              style={{ width: `${progresso}%` }}
              className="h-full bg-indigo-500 rounded-full transition-all"
            />
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Ciclo {cicloAtual || 0} de {totalCiclos}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {!emExecucao && fase !== "finalizado" && (
              <button
                onClick={iniciarSessao}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Iniciar
              </button>
            )}
            {emExecucao && (
              <button
                onClick={pausarSessao}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
              >
                Pausar
              </button>
            )}
            {!emExecucao && fase !== "inicio" && fase !== "finalizado" && (
              <button
                onClick={retomarSessao}
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
              >
                Retomar
              </button>
            )}
            <button
              onClick={pararSessao}
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Parar
            </button>
          </div>

          <div className="mt-4 w-full">
            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-800">
              <p className="text-sm text-indigo-800 dark:text-indigo-100 font-medium">
                🌿 Dica: pequenas pausas respiratórias (30s–2min) entre tarefas
                aumentam o foco e reduzem o estresse.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
            ⚙️ Configurações
          </h2>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Número de Ciclos: <span className="font-semibold">{totalCiclos}</span>
            </label>
            <input
              type="range"
              min={1}
              max={10}
              value={totalCiclos}
              onChange={(e) => setTotalCiclos(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Inspire (s): {inspireTempo}s
            </label>
            <input
              type="range"
              min={2}
              max={12}
              value={inspireTempo}
              onChange={(e) => setInspireTempo(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Segure (s): {segureTempo}s
            </label>
            <input
              type="range"
              min={1}
              max={12}
              value={segureTempo}
              onChange={(e) => setSegureTempo(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Expire (s): {expireTempo}s
            </label>
            <input
              type="range"
              min={2}
              max={12}
              value={expireTempo}
              onChange={(e) => setExpireTempo(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
