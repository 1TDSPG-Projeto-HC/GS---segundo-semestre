import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

type StatusEnvio = "idle" | "enviando" | "sucesso" | "erro";

const IconeGitHub = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.3 11.3 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.85 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconeInstagram = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 1.5h8.5c2.14 0 3.75 1.61 3.75 3.75v8.5c0 2.14-1.61 3.75-3.75 3.75h-8.5A3.76 3.76 0 014 15.75v-8.5A3.76 3.76 0 017.75 3.5zm9.75 2.25a.75.75 0 100 1.5.75.75 0 000-1.5zm-5.75 1.5a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
  </svg>
);

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<StatusEnvio>("idle");
  const [mensagemStatus, setMensagemStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");
    setMensagemStatus("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Dados do formulário enviados:", formData);
      setStatus("sucesso");
      setMensagemStatus(
        "Mensagem enviada com sucesso! Entraremos em contato em breve."
      );
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("erro");
      setMensagemStatus(
        "Ocorreu um erro ao enviar sua mensagem. Tente novamente."
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 px-6 py-10">
      <section>
        <h1 className="text-4xl font-bold mb-2 leading-tight text-center">
          <span className="text-gray-900 dark:text-gray-100">📞 Entre em Contato</span>
          <span className="ml-2 text-indigo-700 dark:text-indigo-300">— MindWork</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir de você.
          Use o formulário abaixo ou nossos outros canais.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 hover:shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* INPUT NOME */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Seu nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Ex: João Almeida"
                disabled={status === "enviando"}
                className="
                  mt-1 block w-full rounded-lg
                  border-2 border-indigo-400
                  bg-white dark:bg-white dark:text-gray-900 p-3 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
                  disabled:opacity-50
                "
              />
            </div>

            {/* INPUT EMAIL */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Seu e-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Ex: joao@email.com"
                disabled={status === "enviando"}
                className="
                  mt-1 block w-full rounded-lg
                  border-2 border-indigo-400
                  bg-white dark:bg-white dark:text-gray-900 p-3 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
                  disabled:opacity-50
                "
              />
            </div>

            {/* INPUT ASSUNTO */}
            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Assunto
              </label>
              <input
                type="text"
                name="assunto"
                id="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                placeholder="Ex: Dúvida sobre pagamento"
                disabled={status === "enviando"}
                className="
                  mt-1 block w-full rounded-lg
                  border-2 border-indigo-400
                  bg-white dark:bg-white dark:text-gray-900 p-3 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
                  disabled:opacity-50
                "
              />
            </div>

            {/* TEXTAREA MENSAGEM */}
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Sua mensagem
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                rows={5}
                value={formData.mensagem}
                onChange={handleChange}
                required
                placeholder="Escreva sua mensagem aqui..."
                disabled={status === "enviando"}
                className="
                  mt-1 block w-full rounded-lg
                  border-2 border-indigo-400
                  bg-white dark:bg-white dark:text-gray-900 p-3 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
                  disabled:opacity-50
                "
              />
            </div>

            {/* BOTÃO */}
            <div>
              <button
                type="submit"
                disabled={status === "enviando"}
                className="
                  w-full px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium 
                  hover:bg-indigo-700 transition transform hover:scale-105 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                  disabled:bg-indigo-400 disabled:cursor-not-allowed disabled:hover:scale-100
                "
              >
                {status === "enviando" ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>

            {mensagemStatus && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  status === "sucesso"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                }`}
                role="alert"
              >
                {mensagemStatus}
              </div>
            )}
          </form>
        </div>

        {/* COLUNA DIREITA (IGUAL) */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg space-y-8">

          <div>
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
              Estamos aqui para ajudar
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              Nossa equipe está disponível para responder suas perguntas. Se preferir,
              você também pode nos encontrar em outros canais ou explorar nossos
              recursos.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-indigo-600 dark:text-indigo-300">
              Outros canais
            </h4>
            <div className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <strong>E-mail: </strong>
              <a
                href="mailto:suporte@mindwork.com"
                className="text-indigo-600 hover:underline dark:text-indigo-400"
              >
                suporte@mindwork.com
              </a>
            </div>
            <div className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <strong>FAQ: </strong>
              <Link to="/faq" className="text-indigo-600 hover:underline dark:text-indigo-400">
                Veja perguntas frequentes
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-indigo-600 dark:text-indigo-300">
              Conecte-se conosco
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/1TDSPG-Projeto-HC/GS---segundo-semestre.git"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub do Projeto"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-all"
              >
                <IconeGitHub />
              </a>

              <a
                href="https://instagram.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram do MindWork"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:text-white transition-all"
              >
                <IconeInstagram />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-indigo-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Pronto para uma pausa?
            </p>
            <Link
              to="/checkin"
              className="inline-block px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Fazer Check-in
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
          Conheça mais sobre o MindWork
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
          Explore nossa missão, valores e a história.
        </p>
        <Link
          to="/sobre"
          className="
            px-6 py-3 rounded-lg 
            bg-indigo-600 text-white font-medium 
            hover:bg-indigo-700 
            transition transform hover:scale-105
          "
        >
          Saiba mais
        </Link>
      </section>
    </div>
  );
}