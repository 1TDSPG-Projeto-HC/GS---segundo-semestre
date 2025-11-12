import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Step = {
  id: string;
  title: string;
  description: string;
  duration: number;
  emoji: string;
};

type Exercise = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  colorFrom: string;
  colorTo: string;
  steps: Step[];
  recommended: string;
};

const EXERCISES: Exercise[] = [
  {
    id: "neck",
    title: "Pescoço Relaxado",
    subtitle: "Solte a tensão cervical",
    emoji: "🧘‍♀️",
    colorFrom: "from-pink-500",
    colorTo: "to-pink-700",
    recommended: "2–3 min",
    steps: [
      { id: "n1", title: "Inclinar Lateralmente", description: "Incline a cabeça para a direita e depois para a esquerda lentamente.", duration: 20, emoji: "↔️" },
      { id: "n2", title: "Cabeça à Frente", description: "Leve o queixo ao peito e retorne devagar.", duration: 20, emoji: "⬇️" },
      { id: "n3", title: "Rotação Suave", description: "Faça movimentos circulares lentos com o pescoço.", duration: 25, emoji: "🔄" },
    ],
  },
  {
    id: "shoulders",
    title: "Ombros Livres",
    subtitle: "Reduza a rigidez muscular",
    emoji: "🤸‍♂️",
    colorFrom: "from-indigo-500",
    colorTo: "to-indigo-700",
    recommended: "2–4 min",
    steps: [
      { id: "s1", title: "Subir e Descer", description: "Eleve os ombros e solte em seguida.", duration: 15, emoji: "⬆️" },
      { id: "s2", title: "Rolar para Trás", description: "Faça círculos com os ombros para trás.", duration: 20, emoji: "🔁" },
      { id: "s3", title: "Abertura de Peito", description: "Junte as mãos atrás e abra o peito suavemente.", duration: 20, emoji: "👐" },
    ],
  },
  {
    id: "hands",
    title: "Mãos e Punhos",
    subtitle: "Solte a rigidez dos dedos",
    emoji: "✋",
    colorFrom: "from-yellow-500",
    colorTo: "to-yellow-700",
    recommended: "1–3 min",
    steps: [
      { id: "h1", title: "Abrir e Fechar", description: "Abra e feche as mãos lentamente.", duration: 15, emoji: "👋" },
      { id: "h2", title: "Giro dos Punhos", description: "Faça círculos suaves com os punhos.", duration: 20, emoji: "🔄" },
      { id: "h3", title: "Alongar Dedos", description: "Puxe cada dedo suavemente para trás.", duration: 15, emoji: "👉" },
    ],
  },
  {
    id: "back",
    title: "Coluna Ativa",
    subtitle: "Desperte a mobilidade",
    emoji: "🧍‍♂️",
    colorFrom: "from-green-500",
    colorTo: "to-green-700",
    recommended: "3–5 min",
    steps: [
      { id: "b1", title: "Alongar para Cima", description: "Erga os braços e alongue a coluna o máximo que puder.", duration: 20, emoji: "🙆‍♂️" },
      { id: "b2", title: "Torção Lateral", description: "Gire o tronco para cada lado lentamente.", duration: 20, emoji: "↩️" },
      { id: "b3", title: "Inclinar para Frente", description: "Curve-se até sentir o alongamento na lombar.", duration: 25, emoji: "🧎‍♂️" },
    ],
  },
  {
    id: "legs",
    title: "Pernas Soltas",
    subtitle: "Ative a circulação",
    emoji: "🦵",
    colorFrom: "from-red-500",
    colorTo: "to-red-700",
    recommended: "3–4 min",
    steps: [
      { id: "l1", title: "Elevar Joelhos", description: "Levante um joelho de cada vez, como marchando.", duration: 15, emoji: "🏃‍♂️" },
      { id: "l2", title: "Alongar Panturrilhas", description: "Incline-se contra uma parede e empurre o calcanhar ao chão.", duration: 20, emoji: "🦶" },
      { id: "l3", title: "Agachar Leve", description: "Faça agachamentos curtos e lentos.", duration: 25, emoji: "🧍‍♀️" },
    ],
  },
];

function formatTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

export default function Alongamentos() {
  const [selectedId, setSelectedId] = useState(EXERCISES[0].id);
  const selected = useMemo(() => EXERCISES.find(e => e.id === selectedId) || EXERCISES[0], [selectedId]);
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(selected.steps[0].duration);
  const [running, setRunning] = useState(false);
  const ref = useRef<number>();
  const [emojiStyle, setEmojiStyle] = useState({ opacity: 1, transform: "translateX(0px)" });

  useEffect(() => {
    if (running) {
      ref.current = window.setInterval(() => {
        setTime(t => {
          if (t <= 1) {
            next();
            return selected.steps[(step + 1) % selected.steps.length].duration;
          }
          return t - 1;
        });
      }, 1000);
    } else if (ref.current) clearInterval(ref.current);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [running, step, selected]);

  const next = () => {
    animateEmoji();
    setStep(s => (s + 1) % selected.steps.length);
    setTime(selected.steps[(step + 1) % selected.steps.length].duration);
  };

  const prev = () => {
    animateEmoji();
    setStep(s => (s === 0 ? selected.steps.length - 1 : s - 1));
    setTime(selected.steps[(step === 0 ? selected.steps.length - 1 : step - 1)].duration);
  };

  const reset = () => {
    setRunning(false);
    animateEmoji();
    setStep(0);
    setTime(selected.steps[0].duration);
  };

  const increaseTime = () => setTime(t => t + 5);
  const decreaseTime = () => setTime(t => (t > 5 ? t - 5 : t));

  const animateEmoji = () => {
    let start: number | null = null;
    const duration = 400;
    const distance = 25;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const opacity = progress;
      const translate = distance * (1 - progress);
      setEmojiStyle({
        opacity,
        transform: `translateX(-${translate}px)`,
        transition: "none"
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    setEmojiStyle({ opacity: 0, transform: `translateX(-${distance}px)` });
    requestAnimationFrame(animate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-slate-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-700">
      
      <header className="py-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          🤸 Sessão de Alongamento — <span className="text-indigo-600 dark:text-indigo-400">MindWork</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Série guiada de movimentos leves para ativar o corpo e renovar sua energia.
        </p>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Lista lateral */}
        <aside className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm dark:shadow-md flex flex-col">
          <div className="text-lg font-semibold mb-4">🏋️‍♀️ Exercícios</div>
          <div className="space-y-3 flex-1 overflow-y-auto">
            {EXERCISES.map(ex => (
              <button
                key={ex.id}
                onClick={() => {
                  setSelectedId(ex.id);
                  setStep(0);
                  setTime(ex.steps[0].duration);
                  setRunning(false);
                  animateEmoji();
                }}
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  selectedId === ex.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-800 dark:text-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg text-xl bg-gradient-to-br ${ex.colorFrom} ${ex.colorTo}`}>
                    {ex.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{ex.title}</div>
                    <div className="text-xs opacity-80">{ex.subtitle}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Conteúdo principal */}
        <section className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                {selected.emoji} {selected.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{selected.subtitle}</p>
              <p className="text-xs text-gray-400 mt-1">Duração recomendada: {selected.recommended}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">Etapa {step + 1}/{selected.steps.length}</div>
              <div className="text-2xl font-mono">{formatTime(time)}</div>
              <div className="flex items-center justify-end mt-2 gap-2">
                <button onClick={decreaseTime} className="px-2 py-1 text-lg bg-gray-200 dark:bg-slate-700 rounded hover:bg-gray-300 dark:hover:bg-slate-600">➖</button>
                <span className="text-sm">Tempo</span>
                <button onClick={increaseTime} className="px-2 py-1 text-lg bg-gray-200 dark:bg-slate-700 rounded hover:bg-gray-300 dark:hover:bg-slate-600">➕</button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="text-center">
              <div className="text-6xl mb-3" style={emojiStyle}>
                {selected.steps[step].emoji}
              </div>
              <h3 className="text-xl font-semibold mb-2">{selected.steps[step].title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto">
                {selected.steps[step].description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center items-center gap-4">
            <button onClick={prev} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600">⬅️ Anterior</button>
            <button
              onClick={() => setRunning(r => !r)}
              className={`px-6 py-2 rounded-md font-semibold ${
                running ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"
              } text-white`}
            >
              {running ? "⏸️ Pausar" : "▶️ Iniciar"}
            </button>
            <button onClick={next} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600">Próximo ➡️</button>
          </div>

          <div className="mt-6">
            <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-3 bg-green-400 transition-all duration-500"
                style={{ width: `${((step + 1) / selected.steps.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
              Etapa {step + 1} de {selected.steps.length}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button onClick={reset} className="px-4 py-2 text-sm rounded-md bg-amber-600 hover:bg-amber-700 text-white">
              🔁 Reiniciar Sessão
            </button>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-6">
        Alongamentos simples para pausas saudáveis 💆‍♂️
      </footer>
    </div>
  );
}
