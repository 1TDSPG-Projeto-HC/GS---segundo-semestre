import React from 'react'
import { TeamMember } from '../types'

export default function TeamCard({member}:{member:TeamMember}) {
  return (
    <div className='card hover:scale-[1.02] transition-transform'>
      <div className='flex items-center gap-4'>
        <img src={member.photo} alt={member.name} className='w-16 h-16 rounded-full object-cover' />
        <div>
          <div className='font-semibold'>{member.name}</div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>RM: {member.rm} • {member.turma}</div>
        </div>
      </div>
      <div className='mt-4 flex gap-3'>
        <a href={member.github} target='_blank' rel='noreferrer' className='text-sm underline'>GitHub</a>
        <a href={member.linkedin} target='_blank' rel='noreferrer' className='text-sm underline'>LinkedIn</a>
      </div>
    </div>
  )
}
