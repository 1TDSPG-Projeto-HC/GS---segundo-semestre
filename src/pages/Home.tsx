import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Noticia {
  title: string;
  description: string;
  link: string;
  source_id: string;
  image_url?: string;
}

export default function Home() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_24d84a29c37348a588580b1fb3f86df6&q=trabalho%20carreira%20empresa&language=pt"
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setNoticias(data.results);
        } else {
          setNoticias([]);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        setNoticias([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-10 px-6 py-10">
      {/* Hero principal */}
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
              O MindWork é uma plataforma que conecta tecnologia e bem-estar no
              ambiente de trabalho, promovendo equilíbrio emocional, produtividade e motivação.
            </p>
            <div className="mt-5 flex gap-4">
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
              💡 Curiosidade
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Empresas que priorizam o bem-estar têm 23% mais produtividade e 41% menos absenteísmo.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Cards informativos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 text-lg">
            🌱 Missão
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Promover saúde mental e equilíbrio entre vida pessoal e profissional
            por meio de acompanhamento diário e insights personalizados.
          </p>
        </div>
        <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 text-lg">
            🧩 Tecnologias
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Feito com React, TypeScript e TailwindCSS. Interface moderna, fluida
            e totalmente responsiva.
          </p>
        </div>
        <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 text-lg">
            🎯 ODS
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Alinhado ao ODS 3 (Saúde e Bem-Estar) e ODS 8 (Trabalho Decente e
            Crescimento Econômico).
          </p>
        </div>
      </section>

      {/* Notícias */}
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
          <p className="text-gray-600 dark:text-gray-400">Carregando notícias...</p>
        ) : noticias.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.slice(0, 6).map((noticia, index) => (
              <motion.a
                key={index}
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="block rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all"
              >
                {noticia.image_url && (
                  <img
                    src={noticia.image_url}
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
                    Fonte: {noticia.source_id || "Desconhecida"}
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
