import React from 'react'
import AnubhvImage from "../../assets/Anubhav.png"
const Home = () => {
  return (
    <div div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            Hello' I am Anubhav srivastava
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
        To work in an organization which provides with me ample opportunities to enhance my skills
and knowledge along with contributing to the growth of the organization. Looking for
opportunities to incorporate my skills and training to help the company grow.Seeking a
challenging position in a reputed organization where I can build my career and a valuable skill
set.”

        </p>
        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'> Contact Me</button>
        </div>
        <div className='mt-10 md:mt-0 md:w-2/5'>
            <img className=' w-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105' src={AnubhvImage} alt="" />
        </div>
      
    </div>


  )
}

export default Home
