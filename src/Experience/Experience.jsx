import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJsSquare, FaReact,  FaBootstrap, FaNodeJs } from "react-icons/fa"; // FaHtml5 is the correct icon
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb } from "react-icons/si"; // Corrected SiRadis to SiRedis

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      
      <div className='flex flex-wrap items-center justify-around'>
        
        {/* Tech Stack Icons */}
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color="#E34F26" size={50} /> {/* Use FaHtml5 instead of FaHtml */}
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJsSquare color="#F7DF1E" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMongodb color="#47A248" size={50} />
          </span>
          
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaNodeJs color="#339933" size={50} /> {/* Node.js */}
          </span>
          
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaBootstrap color="#563d7c" size={50} /> {/* Bootstrap */}
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiTailwindcss color="#06B6D4" size={50} /> {/* Tailwind CSS */}
          </span>
          
        </div>

        {/* Experience Card */}
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
         
          <span className='text-white'>
            <h2 className='leading-tight text-xl font-semibold'>fullstack webdeveloper intern at nullclass </h2>
            <p className='text-sm leading-tight font-thin'>August to septemper 2024</p>
            <ul className='text-sm p-2'>
              <li>Worked as a fullStack Developer</li>
              
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
