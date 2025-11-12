import React, { useEffect, useRef } from "react";
import CheckinForm from "../components/CheckinForm";

export default function Checkin() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      // ativa o fade-in de forma suave sem desmontar nada
      el.style.opacity = "0";
      el.style.transition = "opacity 0.5s ease-out";
      requestAnimationFrame(() => {
        el.style.opacity = "1";
      });
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div
        ref={sectionRef}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-indigo-100 dark:border-gray-700"
      >
        <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300 mb-6 text-center">
          Check-in de Humor 😊
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          Avalie como você está se sentindo hoje e acompanhe seu bem-estar.
        </p>

        <CheckinForm />
      </div>
    </div>
  );
}
