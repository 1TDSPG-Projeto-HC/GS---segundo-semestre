import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buscarNoticias } from "../api/noticias"; 

interface Noticia {
  title: string;
  description: string;
  url: string;
  source: string;
  image?: string;
}

export default function Home() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarNoticias = async () => {
      const data = await buscarNoticias();
      setNoticias(data);
      setLoading(false);
    };
    carregarNoticias();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-10 px-6 py-10">
      
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-8 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300">
              MindWork
            </h1>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Bem-vindo ao <strong>MindWork</strong> — sua plataforma de
              equilíbrio e bem-estar no ambiente profissional. Encontre momentos
              de pausa, foco e energia para trabalhar melhor e viver com mais leveza.
            </p>
            <div className="mt-5 flex gap-4 flex-wrap">
              <Link
                to="/checkin"
                className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                Fazer Check-in
              </Link>
              <Link
                to="/sobre"
                className="px-5 py-3 rounded-lg border border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          <div className="flex-1 bg-indigo-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow-inner">
            <h2 className="font-semibold text-lg text-indigo-700 dark:text-indigo-300">
              💡 Dica rápida
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Pausas curtas a cada 90 minutos aumentam em até 30% o foco e reduzem o estresse.
            </p>
          </div>
        </div>
      </motion.section>

      
      <section>
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
          💼 Atividades de Bem-Estar no Trabalho
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Respiração para Foco",
              emoji: "🧘",
              path: "/respiracao",
              desc: "Acalme-se e recupere a concentração em minutos.",
            },
            {
              title: "Pausa Sonora",
              emoji: "🎧",
              path: "/sons",
              desc: "Relaxe com sons que aliviam o estresse durante o expediente.",
            },
            {
              title: "Reflexão Rápida",
              emoji: "💭",
              path: "/reflexao",
              desc: "Pare por um momento e reorganize seus pensamentos.",
            },
            {
              title: "Alongamento de Escrivaninha",
              emoji: "🏃",
              path: "/alongamento",
              desc: "Exercícios simples para soltar o corpo no trabalho.",
            },
            {
              title: "Equilíbrio Mental",
              emoji: "🌿",
              path: "/dicas",
              desc: "Dicas práticas para lidar com pressão e manter a calma.",
            },
            {
              title: "Check-in de Humor",
              emoji: "😊",
              path: "/checkin",
              desc: "Avalie como você está se sentindo hoje.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <Link
                to={item.path}
                className="flex flex-col items-center text-center space-y-3"
              >
                <span className="text-4xl">{item.emoji}</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-300 text-lg">
                  {item.title}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
          📰 Notícias sobre Trabalho e Bem-Estar
        </h2>

        {loading ? (
          <p className="text-gray-600 dark:text-gray-400">
            Carregando notícias...
          </p>
        ) : noticias.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <motion.a
                key={index}
                href={noticia.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="block rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all"
              >
                {noticia.image && (
                  <img
                    src={noticia.image}
                    alt={noticia.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5 space-y-2">
                  <h3 className="font-semibold text-lg text-indigo-600 dark:text-indigo-300 line-clamp-2">
                    {noticia.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {noticia.description ||
                      "Clique para ler mais sobre essa notícia."}
                  </p>
                  <p className="mt-3 text-xs text-gray-400 italic">
                    Fonte: {noticia.source || "Desconhecida"}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Nenhuma notícia encontrada no momento.
          </p>
        )}
      </motion.section>
    </div>
  );
}
