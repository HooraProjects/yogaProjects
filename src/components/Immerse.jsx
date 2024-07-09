import React from 'react';
import yoga7 from '../assets/images/yoga7.jpg';
import yoga8 from '../assets/images/yoga8.jpg';
import yoga9 from '../assets/images/yoga9.jpg';

export default function Immerse() {
  return (
    <div className='flex flex-col bg-blue-800'>
    <div className='col-span-2 flex items-center justify-center mt-8 px-64 mb-8 '>
        <div className='flex-grow border-b-2 border-white mr-4'></div>
        <p className='mx-4 text-white'>Immerse Yourself</p>
        <div className='flex-grow border-b-2 border-white ml-1'></div>
       
      </div>
      <p className='text-white text-3xl flex justify-center items-center mb-4'>Grow Deeper in Your Practice with Our Workshops</p>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center bg-white mr-4'>
          <img src={yoga7} style={{width:'315px',height:'240px'}}/>
        
          <p className='mt-4'>Yoga & Ayurveda Virtual Study<br></br> Series</p>
        
          <button className='bg-lime-400 text-white h-8 w-1/2 p-1 mt-4 mb-4'>Register Now</button>
          <p className='mb-4'>6hrs towards YA credits</p>
        </div>
        <div className='flex flex-col items-center bg-white mr-4'>
          <img src={yoga8} style={{width:'315px',height:'240px'}}/>
         
          <p className='mt-4'>Bhagavad Gita Philosophy &<br></br> Asana // Immersion Weekend</p>
          
          <button className='bg-lime-400 text-white h-8 w-1/2 p-1 mt-4 mb-4'>Register Now</button>
          <p className='mb-4'>19hrs towards YA credits</p>
        </div>
        <div className='flex flex-col items-center bg-white'>
        <img src={yoga9} style={{width:'315px',height:'240px'}}/>
          
          <p className='mt-4'>Inversions Playshop for Students<br></br> & Teachers</p>
         
          <button className='bg-lime-400 text-white h-8 w-1/2 p-1 mt-4 mb-4'>Register Now</button>
          <p className='mb-4'>19hrs towards YA credits</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
      <button className='text-white mt-8 border-2 border-white w-48 h-8 '>View All Workshops</button>
      </div>
      
      </div>
  )
}
