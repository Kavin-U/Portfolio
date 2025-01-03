import React from 'react';
import myImg4 from '../assets/myImage4.png';

export default function About() {
  return (
    <div className='mb-40 px-4'>
      <div className='flex gap-7'>
        <div className='flex flex-col text-justify gap-5'>
        <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
        <p>Currently, I'm looking for job opportunities where I can contribute to innovative projects, grow my skills as a developer, and collaborate with a dynamic team to build impactful solutions.</p>
        <p>In my spare time, I enjoy playing cricket, gaming, spending quality time with friends, or staying active at the gym. These activities help me unwind and stay energized.</p>
        </div>
        <img src={myImg4} alt='my-img' className='w-[350px] h-[450px] mt-[-60px] rounded-xl drop' />
      </div>
    </div>
  )
}
