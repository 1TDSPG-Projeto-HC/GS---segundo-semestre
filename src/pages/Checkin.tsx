import React from 'react'
import CheckinForm from '../components/CheckinForm'

export default function Checkin() {
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Check-in</h1>
      <CheckinForm />
    </div>
  )
}
