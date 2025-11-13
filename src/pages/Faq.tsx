import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como posso registrar meu check-in diário?",
    answer:
      "Na página de Check-in, selecione seu humor e adicione um comentário opcional. Isso ajuda a acompanhar seu bem-estar ao longo do tempo.",
  },
  {
    question: "Meus dados de bem-estar são privados?",
    answer:
      "Sim! Todas as informações inseridas ficam armazenadas apenas no seu navegador e não são compartilhadas com terceiros.",
  },
  {
    question: "O que é o painel de controle (Dashboard)?",
    answer:
      "É o local onde você pode visualizar seu histórico e métricas gerais do seu bem-estar baseado nos check-ins realizados.",
  },
  {
    question: "Como alterno entre o modo claro e escuro?",
    answer:
      "Basta clicar no ícone de sol ou lua no canto superior direito do cabeçalho para mudar o tema do site.",
  },
  {
    question: "O que são as atividades de respiração e alongamento?",
    answer:
      "São exercícios rápidos e guiados que ajudam a relaxar, aliviar o estresse e melhorar o foco durante o trabalho.",
  },
  {
    question: "Como posso sugerir novas funcionalidades?",
    answer:
      "Você pode enviar sugestões através da página de contato ou pelo nosso e-mail: suporte@mindwork.com.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactRedirect = () => {
    navigate("/Contato");
  };

  return (
    <section className="min-h-screen flex justify-center items-start pt-28 pb-20 px-6">
      <div className="w-full max-w-4xl rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 p-10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm transition-all">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-indigo-600 dark:text-indigo-300">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o uso do <strong>MindWork</strong> e suas
            funcionalidades.
          </p>
        </div>

        <div className="space-y-5">
          {faqData.map((item, index) => (
            <article
              key={index}
              className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
                aria-expanded={openIndex === index}
                
                aria-controls={`faq-answer-${index}`}
              >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {item.question}
                </h2>

                <IoChevronDown
                  size={22}
                  className={`text-indigo-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
            Ainda com dúvidas?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Nossa equipe está pronta para ajudar você com qualquer pergunta.
          </p>
          <button
            onClick={handleContactRedirect}
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
          >
            Falar com a Equipe
          </button>
        </div>
      </div>
    </section>
  );
}
