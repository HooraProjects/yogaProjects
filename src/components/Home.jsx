import React from 'react';
import coverImg from '../assets/images/cover.jpg'

export default function Home() {
  return (
    <div className='relative w-full h-screen'>
    <img src={coverImg} alt="Cover" className='w-full h-3/4 object-cover'/>
    <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
      <p className='text-2xl '>This is Yoga Landing</p>
      <p className='text-6xl mt-2 '>MAKE YOURSELF AT HOME.</p>
      <div className='flex space-x-4 mt-4'>
        <button className='bg-white text-black px-4 py-2 rounded-lg shadow-md '>
          Downtown Schedule
        </button>
        <button className='bg-white text-black px-4 py-2 rounded-lg shadow-md '>
          Signal Mountain Schedule
        </button>
      </div>
    </div>
  </div>
  )
}
