import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <div className='backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800'>
        <div className='container-max px-6 py-4 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center text-white font-bold'>MW</div>
            <div>
              <div className='text-lg font-semibold text-indigo-600 dark:text-indigo-300'>MindWork</div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Bem-estar no trabalho</div>
            </div>
          </Link>

          <nav className='flex items-center gap-4'>
            <Link to='/' className='text-sm hover:text-indigo-500'>Home</Link>
            <Link to='/dashboard' className='text-sm hover:text-indigo-500'>Dashboard</Link>
            <Link to='/sobre' className='text-sm hover:text-indigo-500'>Sobre</Link>
            <Link to='/integrantes' className='text-sm hover:text-indigo-500'>Integrantes</Link>
            <Link to='/faq' className='text-sm hover:text-indigo-500'>FAQ</Link>

            <button
              onClick={toggle}
              aria-label='Alternar tema claro/escuro'
              className='ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all'
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
