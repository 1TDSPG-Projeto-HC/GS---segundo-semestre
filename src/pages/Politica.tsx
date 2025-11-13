import React from "react";
import { useNavigate } from "react-router-dom";

export default function PoliticaPrivacidade() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/sobre");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <section className="min-h-screen flex justify-center items-start pt-28 pb-20 px-6">
      <div className="w-full max-w-4xl rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 p-10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm transition-all">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-indigo-600 dark:text-indigo-300">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Entenda como o <strong>MindWork</strong> coleta, usa e protege suas
            informações enquanto você utiliza nossa plataforma.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              1. Coleta de Informações
            </h2>
            <p>
              Coletamos apenas dados essenciais para o funcionamento da
              plataforma, como nome, e-mail e informações de uso fornecidas
              voluntariamente. Nenhuma informação é compartilhada com terceiros
              sem o seu consentimento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              2. Uso das Informações
            </h2>
            <p>
              As informações coletadas são usadas para personalizar sua
              experiência, aprimorar nossos serviços e oferecer feedback
              relevante sobre seu bem-estar e desempenho dentro do aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              3. Armazenamento e Segurança
            </h2>
            <p>
              Os dados são armazenado em nossos servidores 
              protegidos, utilizando medidas de segurança adequadas
              para evitar acessos não autorizados, perda ou alteração de
              informações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              4. Direitos do Usuário
            </h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais. Para isso, entre em contato conosco por
              meio do e-mail{" "}
              <a
                href="mailto:suporte@mindwork.com"
                className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700"
              >
                suporte@mindwork.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              5. Alterações na Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para
              refletir melhorias ou mudanças legais. Recomendamos revisar esta
              página regularmente para se manter informado.
            </p>
          </section>
        </div>

        <div className="text-center mt-14 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
            Dúvidas sobre sua privacidade?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Nossa equipe está disponível para esclarecer qualquer questão sobre
            o uso dos seus dados.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleRedirect}
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
            >
              Falar com a Equipe
            </button>
            <button
              onClick={handleBackToHome}
              className="px-6 py-3 rounded-full bg-[#5146FF] hover:bg-[#4038d9] text-white font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Voltar para Início
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
