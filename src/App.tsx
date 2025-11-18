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
import Sonoros from "./pages/Sonoros";
import Reflexao from "./pages/Reflexao";
import PageTransition from "./components/PageTransition";
import Register from "./pages/Register";
import Termos from "./pages/Termos";
<<<<<<< HEAD
=======
import Metas from "./pages/Metas";
import Politica from "./pages/Politica";
>>>>>>> d7a1e000b4490a8ff81ecd69f88b7509943194c3
import Contato from "./pages/Contato";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      <Header />

      
      <div className="pt-20" />

      
      <main className="flex-grow container-max px-6 pb-12">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/politica" element={<Politica />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/sonoros" element={<Sonoros />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/metas" element={<Metas />} />
            <Route path="/respiracao" element={<Respiracao />} />
            <Route path="/reflexao" element={<Reflexao />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/alongamento" element={<Alongamento />} />
            <Route path="/dicas" element={<Dicas />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
