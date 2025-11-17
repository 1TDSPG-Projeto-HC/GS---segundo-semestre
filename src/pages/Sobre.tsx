import React from "react";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-24 px-6 md:px-12 flex flex-col items-center">
      
      <section className="w-full max-w-5xl space-y-6 text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
          Sobre o MindWork
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          O <span className="font-semibold text-indigo-600 dark:text-indigo-400">MindWork</span> nasceu da necessidade de unir tecnologia e cuidado humano. 
          Nossa missão é transformar o ambiente de trabalho em um espaço mais equilibrado, 
          produtivo e mentalmente saudável — onde as pessoas possam se desenvolver com propósito.
        </p>
      </section>

      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">🌿 Missão</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Promover bem-estar emocional no ambiente corporativo através de ferramentas 
            digitais simples e acessíveis, ajudando empresas e colaboradores a criarem 
            uma cultura de autocuidado e empatia.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">💡 Visão</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ser referência em soluções digitais voltadas à saúde mental e ao 
            desenvolvimento humano, integrando inovação, empatia e impacto social 
            positivo em cada interação.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">🚀 Valores</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>🧠 Saúde mental como prioridade.</li>
            <li>🌱 Crescimento pessoal e coletivo.</li>
            <li>🤝 Transparência e empatia.</li>
            <li>✨ Inovação com propósito.</li>
          </ul>
        </div>
      </section>

      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">💻 Tecnologia</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            O MindWork é construído com tecnologias modernas e performáticas para 
            garantir uma experiência fluida e intuitiva:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>React + TypeScript</li>
            <li>TailwindCSS para design rápido e responsivo</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">🌍 Conexão com ODS</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Nosso projeto está alinhado aos <strong>Objetivos de Desenvolvimento Sustentável (ODS)</strong> 
            da ONU, contribuindo especialmente para:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>ODS 3</strong> — Saúde e Bem-Estar</li>
            <li><strong>ODS 8</strong> — Trabalho Decente e Crescimento Econômico</li>
          </ul>
        </div>
      </section>

      <section className="w-full max-w-5xl bg-gray-50 dark:bg-gray-800 p-12 rounded-3xl mb-20 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
        <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">📊 Impacto Esperado</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">-30%</p>
            <p className="text-gray-700 dark:text-gray-300">Redução de burnout organizacional</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">+45%</p>
            <p className="text-gray-700 dark:text-gray-300">Aumento de engajamento e motivação</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">+60%</p>
            <p className="text-gray-700 dark:text-gray-300">Satisfação com o clima organizacional</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">👥 Nossa Equipe</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Formada por estudantes apaixonados por  
            design e tecnologia, nossa equipe acredita que inovação e empatia 
            caminham lado a lado.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">🎓 Projeto universitário</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            O MindWork nasceu como um projeto universitário com propósito real: 
            aplicar o conhecimento adquirido em sala de aula para criar uma solução que contribua para o bem-estar e a produtividade das pessoas.
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl text-center">
        <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          Pronto para conhecer o MindWork mais de perto?
        </h4>
        <Link to="/integrantes">
          <button className="px-10 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
            Conheça nossa equipe →
          </button>
        </Link>
      </section>
    </main>
  );
}
