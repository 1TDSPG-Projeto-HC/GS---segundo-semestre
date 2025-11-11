import React from 'react'

export default function Sobre() {
  return (
    <div className='max-w-4xl mx-auto space-y-6'>
      <div className='card'>
        <h1 className='text-2xl font-bold'>Sobre o MindWork</h1>
        <p className='text-sm text-gray-600 dark:text-gray-300'>MindWork é uma solução que busca integrar tecnologia e bem-estar no ambiente profissional. Nosso objetivo é fornecer ferramentas simples e acessíveis para monitorar e melhorar a saúde mental nas organizações.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='card'>
          <h3 className='font-semibold'>Impacto</h3>
          <p className='text-sm text-gray-600 dark:text-gray-300'>Reduzir burnout e melhorar clima organizacional.</p>
        </div>
        <div className='card'>
          <h3 className='font-semibold'>Tecnologia</h3>
          <p className='text-sm text-gray-600 dark:text-gray-300'>React, TypeScript, TailwindCSS, Framer Motion.</p>
        </div>
        <div className='card'>
          <h3 className='font-semibold'>ODS</h3>
          <p className='text-sm text-gray-600 dark:text-gray-300'>ODS 3 — Saúde e Bem-Estar; ODS 8 — Trabalho Decente.</p>
        </div>
      </div>
    </div>
  )
}
