import React from "react";
import { Link } from "react-router-dom";

export default function Termos() {
  return (
    <main className="min-h-screen flex justify-center items-start pt-28 pb-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-full max-w-4xl rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 p-10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm transition-all">
        
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-indigo-600 dark:text-indigo-300">
            Termos de Uso
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ao utilizar o <strong>MindWork</strong>, você concorda com os termos abaixo.
            Leia com atenção para entender suas responsabilidades e direitos.
          </p>
        </div>

        
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar o MindWork, você confirma que leu, entendeu e
              concorda em cumprir estes Termos de Uso. Caso não concorde com
              qualquer parte deles, não utilize o aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
              2. Uso do Aplicativo
            </h2>
            <p>
              O MindWork é uma plataforma voltada ao bem-estar mental e físico,
              permitindo registrar check-ins, acompanhar métricas e realizar
              atividades de relaxamento. O uso deve ser pessoal, não comercial,
              e respeitar as leis aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
              3. Privacidade e Segurança
            </h2>
            <p>
              Seus dados são armazenados localmente no seu navegador. O
              MindWork não coleta nem compartilha informações pessoais com
              terceiros sem seu consentimento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
              4. Responsabilidades do Usuário
            </h2>
            <p>
              Você é responsável por manter a confidencialidade de suas
              informações e por todas as atividades realizadas em sua conta.
              Utilize o aplicativo de forma ética e respeitosa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
              5. Alterações nos Termos
            </h2>
            <p>
              O MindWork pode modificar estes Termos de Uso a qualquer momento.
              Recomendamos revisar periodicamente esta página para estar ciente
              de eventuais mudanças.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
              6. Limitação de Responsabilidade
            </h2>
            <p>
              O MindWork é uma ferramenta de apoio ao bem-estar e não substitui
              acompanhamento médico ou psicológico profissional. O uso é de
              total responsabilidade do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
              7. Contato
            </h2>
            <p>
              Em caso de dúvidas ou solicitações relacionadas a estes termos,
              entre em contato com nossa equipe pelo e-mail:{" "}
              <a
                href="mailto:suporte@mindwork.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                suporte@mindwork.com
              </a>
              .
            </p>
          </section>
        </div>

        
        <div className="text-center mt-14 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
            Obrigado por utilizar o MindWork!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Seu bem-estar é nossa prioridade.
          </p>

          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
          >
            Voltar para Início
          </Link>
        </div>
      </div>
    </main>
  );
}
