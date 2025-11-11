import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkin from './pages/Checkin'
import Dashboard from './pages/Dashboard'
import Sobre from './pages/Sobre'
import Respiracao from './pages/Respiracao'
import Faq from './pages/Faq'
import Integrantes from './pages/Integrantes'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      <Header />
      <main className='flex-grow container-max px-6 py-24'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkin' element={<Checkin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/faq' element={<Faq />} />
          <Route path="/respiracao" element={<Respiracao />} />
          <Route path='/integrantes' element={<Integrantes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
