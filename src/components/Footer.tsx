import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-12 border-t border-gray-200 dark:border-gray-800 bg-transparent'>
      <div className='container-max px-6 py-6 text-sm text-gray-600 dark:text-gray-400 flex justify-between items-center'>
        <div>© {new Date().getFullYear()} MindWork</div>
        <div>Projeto Frontend — React + Vite + TypeScript</div>
      </div>
    </footer>
  )
}
