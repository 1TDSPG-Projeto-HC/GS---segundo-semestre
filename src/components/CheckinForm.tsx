import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Checkin } from '../types'

const KEY = 'mindwork_checkins'

export default function CheckinForm({onSaved}:{onSaved?:()=>void}) {
  const [mood, setMood] = useState(3)
  const [comment, setComment] = useState('')
  const [msg, setMsg] = useState('')

  const save = () => {
    const all = JSON.parse(localStorage.getItem(KEY)||'[]') as Checkin[]
    const item: Checkin = { id: String(Date.now()), mood, comment: comment||undefined, date: new Date().toISOString() }
    all.unshift(item)
    localStorage.setItem(KEY, JSON.stringify(all))
    setMsg('Check-in salvo. Bom trabalho!')
    setComment('')
    onSaved && onSaved()
    setTimeout(()=>setMsg(''), 3000)
  }

  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className='card'>
      <h3 className='text-lg font-semibold mb-2'>Como você está se sentindo hoje?</h3>
      <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>Escolha um número de 1 (pior) a 5 (melhor) e deixe um comentário opcional.</p>

      <div className='flex items-center gap-2 mb-4'>
        {[1,2,3,4,5].map(n => (
          <button key={n} onClick={()=>setMood(n)} className={`w-12 h-12 rounded-full ${mood===n ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} transition`}>{n}</button>
        ))}
      </div>

      <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className='w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent mb-4' placeholder='Comentário (opcional)' />

      <div className='flex items-center justify-between'>
        <button onClick={save} className='px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white'>Salvar Check-in</button>
        <div className='text-sm text-green-600'>{msg}</div>
      </div>
    </motion.div>
  )
}
