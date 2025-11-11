import React from 'react'
import { motion } from 'framer-motion'

export default function Faq() {
  return (
    <div className='max-w-3xl mx-auto space-y-6 text-center py-16'>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-3xl font-bold text-indigo-700 dark:text-indigo-300'
      >
        ❓ Página em Desenvolvimento
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='text-gray-700 dark:text-gray-400 text-lg max-w-xl mx-auto'
      >
        Em breve você poderá acessar as perguntas frequentes sobre o MindWork.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='mt-8 flex justify-center'
      >
        <div className='rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-md px-6 py-10'>
          <p className='text-indigo-600 dark:text-indigo-300 font-medium'>
            🚧 Esta seção está sendo construída.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
