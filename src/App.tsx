import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Checkin from "./pages/Checkin";
import Dashboard from "./pages/Dashboard";
import Sobre from "./pages/Sobre";
import Respiracao from "./pages/Respiracao";
import Faq from "./pages/Faq";
import Integrantes from "./pages/Integrantes";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alongamento from "./pages/Alongamento";
import Dicas from "./pages/Dicas";
import Reflexao from "./pages/Reflexao";
import PageTransition from "./components/PageTransition";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Cabeçalho fixo */}
      <Header />

      {/* Compensação exata da altura do header */}
      <div className="pt-20" />

      {/* Conteúdo com transição */}
      <main className="flex-grow container-max px-6 pb-12">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/respiracao" element={<Respiracao />} />
            <Route path="/reflexao" element={<Reflexao />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/alongamento" element={<Alongamento />} />
            <Route path="/dicas" element={<Dicas />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
