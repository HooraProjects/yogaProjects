import React from 'react';
import yogaSchedule from '../assets/images/schedule.jpg'

export default function Schedule() {
  return (
    <div className='flex mt-8'>
        <img src={yogaSchedule} style={{width:'50%',height:'350px'}} />
        <div className='flex flex-col justify-center items-center bg-gray-100 p-8 w-1/2'>
            <p className='text-3xl text-blue-900 font-light'>Virtual Schedule</p>
            <p className='text-lg mt-4 mb-4 font-light'>Practice at home or on the go with our virtual live classes.</p>
            <button className='bg-lime-400 text-white h-16 w-1/2 p-2 mt-4 font-bold'>Make Your Schedule</button>

        </div>
    </div>
  )
}
