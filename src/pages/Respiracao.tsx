import React, { useState, useEffect, useRef } from "react";

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

  return (
    <div>
      <h1>Respiração Guiada</h1>
      <p>Fase atual: {fase}</p>
      <p>Tempo restante: {tempoRestante}s</p>
      <p>
        Ciclo {cicloAtual} de {totalCiclos}
      </p>

      {!emExecucao && fase !== "finalizado" && (
        <button onClick={iniciarSessao}>Iniciar</button>
      )}
      {emExecucao && <button onClick={pausarSessao}>Pausar</button>}
      {!emExecucao && fase !== "inicio" && fase !== "finalizado" && (
        <button onClick={retomarSessao}>Retomar</button>
      )}
      <button onClick={pararSessao}>Parar</button>
    </div>
  );
}
