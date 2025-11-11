import React from "react";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-slate-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-6 transition-colors duration-500">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          🧘 Equilíbrio Mental — <span className="text-indigo-600 dark:text-indigo-400">MindWork</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Dicas práticas para aliviar o estresse, cultivar clareza e manter sua mente em harmonia durante o dia.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full">
        {dicas.map((dica, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            whileHover={{
              scale: 1.04,
              boxShadow:
                "0 0 14px rgba(255,255,255,0.25), 0 0 4px rgba(255,255,255,0.2)",
            }}
            className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:shadow-xl transition-all duration-150 ease-out"
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent dark:border-white/10 border-black/10"></div>
            <div className="text-4xl mb-3">{dica.icone}</div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {dica.titulo}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {dica.descricao}
            </p>
          </motion.div>
        ))}
      </div>

      <footer className="mt-14 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-300 dark:border-slate-700 pt-6 text-center w-full max-w-5xl">
        Cultivar equilíbrio mental é um exercício diário de autocuidado 🌸
      </footer>
    </div>
  );
}
