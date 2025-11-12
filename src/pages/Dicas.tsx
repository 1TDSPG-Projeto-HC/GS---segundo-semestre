import React, { useEffect, useState } from "react";

interface Dica {
  icone: string;
  titulo: string;
  descricao: string;
}

export default function EquilibrioMental() {
  const dicas: Dica[] = [
    { icone: "🌬️", titulo: "Respire Conscientemente", descricao: "Faça pausas para respirar fundo e liberar a tensão acumulada do corpo e da mente." },
    { icone: "🧠", titulo: "Reavalie Pensamentos", descricao: "Identifique padrões negativos e transforme-os em pensamentos mais realistas e positivos." },
    { icone: "💬", titulo: "Converse Sobre o Que Sente", descricao: "Compartilhar o que te incomoda ajuda a aliviar o peso emocional e fortalecer conexões." },
    { icone: "🌿", titulo: "Tenha Contato com a Natureza", descricao: "Caminhar ao ar livre, observar plantas ou o céu pode restaurar sua energia mental." },
    { icone: "🎧", titulo: "Use Sons Relaxantes", descricao: "Músicas suaves ou sons da natureza ajudam a diminuir o ritmo interno e acalmar." },
    { icone: "🕰️", titulo: "Defina Ritmos e Pausas", descricao: "Trabalhe com intervalos planejados. Pausas curtas renovam foco e produtividade." },
    { icone: "💤", titulo: "Durma Bem", descricao: "Sono de qualidade é essencial para equilíbrio emocional e clareza mental." },
    { icone: "🍎", titulo: "Cuide da Alimentação", descricao: "Prefira alimentos leves e nutritivos. Evite excesso de cafeína e açúcar." },
    { icone: "🧘‍♀️", titulo: "Pratique Meditação", descricao: "Apenas alguns minutos diários de atenção plena já reduzem o estresse e melhoram o foco." },
    { icone: "📅", titulo: "Organize Sua Rotina", descricao: "Planeje o dia com equilíbrio entre obrigações e descanso. A previsibilidade traz calma." },
  ];

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-slate-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-6 transition-colors duration-500 overflow-hidden">
      
      {/* Cabeçalho com efeito de surgir de cima */}
      <header
        className={`text-center mb-10 transform transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          🧘 Equilíbrio Mental —{" "}
          <span className="text-indigo-600 dark:text-indigo-400">MindWork</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Dicas práticas para aliviar o estresse, cultivar clareza e manter sua mente em harmonia durante o dia.
        </p>
      </header>

      {/* Cards com efeito escadinha */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full">
        {dicas.map((dica, i) => (
          <div
            key={i}
            style={{
              transitionDelay: `${i * 100}ms`, // efeito escadinha
            }}
            className={`relative flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 shadow-md transform transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-4xl mb-3">{dica.icone}</div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {dica.titulo}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {dica.descricao}
            </p>
          </div>
        ))}
      </div>

      {/* Rodapé suave */}
      <footer
        className={`mt-14 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-300 dark:border-slate-700 pt-6 text-center w-full max-w-5xl flex flex-col items-center gap-2 transform transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="relative flex h-4 w-4">
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </div>
        <p>Cultivar equilíbrio mental é um exercício diário de autocuidado 🌸</p>
      </footer>
    </div>
  );
}