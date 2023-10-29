import React from 'react'

export default function LoadingPage() {
  return (
    <div className='w-full h-screen flex flex-col bg-sky-100  items-center justify-center '>
        <img className='w-48 -translate-y-36 h-48 bg-transparent' src="/images/doubleRingLoading.gif" alt="" />
        <span className='text-2xl'>loading...</span>
    </div>
  )
}