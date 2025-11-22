import React from "react";

type Integrante = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin?: string;
};

const integrantes: Integrante[] = [
  {
    nome: "Alexandre Hirata Junior",
    rm: "563631",
    turma: "1TDSPG",
    foto: "assets/Alexandre.png",
    github: "https://github.com/KiuboHIrata",
    linkedin: "https://www.linkedin.com/in/alexandre-junior-b6a06a356",
  },
  {
    nome: "Pedro Vaz Ferreira",
    rm: "566551",
    turma: "1TDSPG",
    foto: "assets/Pedro.png",
    github: "https://github.com/pedrovaz100",
    linkedin: "https://www.linkedin.com/in/pedro-vaz-ferreira-undefined-3978a3368/",
  },
  {
    nome: "João Victor Resende",
    rm: "565139",
    turma: "1TDSPG",
    foto: "assets/Joao.png",
    github: "https://github.com/JoaooResende",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-victor-95765a368/",
  },
];

export default function Integrantes() {
  return (
    <main
      className="
        w-full min-h-screen 
        bg-white dark:bg-gray-900
        text-gray-800 dark:text-gray-100
        py-16 px-6 transition-all
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        
        <h1 className="text-4xl font-bold mb-2 leading-tight">
          <span className="text-gray-900 dark:text-gray-100">👥 Nossa Equipe</span>
          <span className="ml-2 text-indigo-700 dark:text-indigo-300">— MindWork</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Estes são os integrantes responsáveis por desenvolver soluções inovadoras com tecnologia e dedicação.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {integrantes.map((membro, index) => (
            <article
              key={index}
              className="
                bg-gray-50 dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                shadow-lg dark:shadow-xl
                rounded-3xl p-8 
                flex flex-col items-center
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl dark:hover:shadow-2xl
              "
            >
              
              <img
                src={membro.foto}
                alt={membro.nome}
                className="
                  w-36 h-36 object-cover rounded-full 
                  border-4 
                  border-gray-300 dark:border-gray-700 
                  shadow-md mb-6
                "
              />

              <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
                {membro.nome}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-1">
                RM: <span className="font-medium">{membro.rm}</span>
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {membro.turma}
              </p>

              
              <div className="flex gap-4 mt-5">
                <a
                  href={membro.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4 py-2 text-sm font-medium 
                    rounded-xl 
                    bg-indigo-600 text-white 
                    hover:bg-indigo-700 
                    transition
                  "
                >
                  GitHub
                </a>

                {membro.linkedin && (
                  <a
                    href={membro.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-4 py-2 text-sm font-medium 
                      rounded-xl 
                      bg-blue-600 text-white 
                      hover:bg-blue-700 
                      transition
                    "
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}