import React, { useEffect, useState } from 'react'
import { Checkin } from '../types'
import { motion } from 'framer-motion'

const KEY = 'mindwork_checkins'

function sampleData(): Checkin[] {
  const raw = JSON.parse(localStorage.getItem(KEY) || '[]') as Checkin[]
  return raw.slice(0, 10)
}

export default function Dashboard() {
  const [items, setItems] = useState<Checkin[]>([])

  useEffect(()=>{ setItems(sampleData()) }, [])

  const avg = items.length ? Math.round(items.reduce((s,a)=>s+a.mood,0)/items.length) : 0

  return (
    <div className='max-w-4xl mx-auto space-y-6'>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='card'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-lg font-semibold'>Seu painel</h2>
            <p className='text-sm text-gray-500 dark:text-gray-400'>Resumo do seu bem-estar</p>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-indigo-600'>{avg || '-'}</div>
            <div className='text-xs text-gray-500 dark:text-gray-400'>Pontuação média</div>
          </div>
        </div>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='card'>
          <h3 className='font-semibold mb-2'>Histórico recente</h3>
          {items.length===0 ? <p className='text-sm text-gray-500'>Sem check-ins ainda.</p> : (
            <ul className='space-y-2'>
              {items.map(i=>(
                <li key={i.id} className='p-2 rounded border border-gray-100 dark:border-gray-700'>
                  <div className='flex justify-between'><div>Mood: {i.mood}</div><div className='text-xs text-gray-500'>{new Date(i.date).toLocaleString()}</div></div>
                  {i.comment && <p className='text-sm mt-1'>{i.comment}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='card'>
          <h3 className='font-semibold mb-2'>Ações</h3>
          <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-300'>
            <li>1. Faça check-ins diários</li>
            <li>2. Procure suporte quando necessário</li>
            <li>3. Participe de atividades de equipe</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
