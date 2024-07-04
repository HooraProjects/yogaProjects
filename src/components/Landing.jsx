import React from 'react';
import yogaPose1 from '../assets/images/yogapose1.jpg';
import yogaPose2 from '../assets/images/yogapose2.jpg';
import yogaPose3 from '../assets/images/yogapose3.jpg';
import yogaPose4 from '../assets/images/yogapose4.jpg';
import yogaPose5 from '../assets/images/yogaPose5.jpg';
import yogaPose6 from '../assets/images/yogapose6.jpg';

export default function Landing() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='grid grid-cols-3 gap-4 '>
        <img src={yogaPose1} alt="Yoga Pose 1" className='w-full h-full object-cover p-6'/>
        <img src={yogaPose2} alt="Yoga Pose 2" className='w-full h-full object-cover p-6'/>
        <img src={yogaPose3} alt="Yoga Pose 3" className='w-full h-full object-cover p-6'/>
        <img src={yogaPose4} alt="Yoga Pose 4" className='w-full h-full object-cover p-6'/>
        <img src={yogaPose5} alt="Yoga Pose 5" className='w-full h-full object-cover p-6'/>
        <img src={yogaPose6} alt="Yoga Pose 6" className='w-full h-full object-cover p-6'/>
      </div>
      <div className='flex flex-col justify-center p-4 ml-24'>
        <p className='text-3xl'>Yoga Landing is</p>
        <p className='text-3xl text-lime-400 border-lime-400 border-b-2'>Yoga for the People.</p>
      
        <p>Practice Yoga at a boutique studio that is<br/> passionate about welcoming people from all<br/> walks of life. It doesn't matter if you're a <br/>seasoned Yoga student or if you've never<br/> stepped foot on a mat; when you're at Yoga<br/> Landing, you're home.</p>
        <p className='mb-12'>We offer a balanced schedule of heated and<br/> room temperature practices in a variety of<br/> styles. It is our greatest hope to provide an<br/> opportunity for you to find the type of<br/> practice that benefits you the most.</p>
        <button className='bg-lime-400  text-white h-16 w-1/2 p-2 mt-4'>Explore Your Options</button>
      </div>
    </div>
  )
}
