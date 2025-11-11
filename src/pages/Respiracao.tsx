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
    cicloRef.current = cicloAtual;
    totalCiclosRef.current = totalCiclos;
  }, [fase, cicloAtual, totalCiclos]);

  const duracaoPorFase = (f: Fase) =>
    f === "inspire" ? inspireTempo : f === "segure" ? segureTempo : f === "expire" ? expireTempo : 0;

  const iniciarSessao = () => {
    setCicloAtual(1);
    setFase("inspire");
    setTempoRestante(inspireTempo);
    setEmExecucao(true);
  };

  const pausarSessao = () => setEmExecucao(false);
  const retomarSessao = () => fase !== "inicio" && setEmExecucao(true);
  const pararSessao = () => {
    setEmExecucao(false);
    setFase("inicio");
    setTempoRestante(0);
    setCicloAtual(0);
  };

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
    <div className="flex flex-col items-center gap-6 p-6">
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
        }}
        transition={{ duration: Math.max(1, duracaoAtual), ease: "easeInOut" }}
        className="w-40 h-40 bg-indigo-500/30 rounded-full flex items-center justify-center"
      >
        <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
          {fase === "inicio" ? "Pronto" : fase === "finalizado" ? "Concluído" : `${tempoRestante}s`}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={fase + tempoRestante}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-lg font-medium"
        >
          {fase === "inspire" && "Inspire profundamente"}
          {fase === "segure" && "Segure o ar"}
          {fase === "expire" && "Solte devagar"}
          {fase === "inicio" && "Clique em Iniciar para começar"}
          {fase === "finalizado" && "Sessão finalizada!"}
        </motion.p>
      </AnimatePresence>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          style={{ width: `${progresso}%` }}
          className="h-full bg-indigo-500 rounded-full transition-all"
        />
      </div>

      <div className="flex gap-3">
        {!emExecucao && fase !== "finalizado" && (
          <button onClick={iniciarSessao} className="btn-primary">
            Iniciar
          </button>
        )}
        {emExecucao && <button onClick={pausarSessao}>Pausar</button>}
        {!emExecucao && fase !== "inicio" && fase !== "finalizado" && (
          <button onClick={retomarSessao}>Retomar</button>
        )}
        <button onClick={pararSessao}>Parar</button>
      </div>
    </div>
  );
}
