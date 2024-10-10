import React from 'react';
import downloadImg from "../../assets/download2.jpg";
import { IoArrowForward } from "react-icons/io5"; 

const About = () => {
  return (
    <div id='About' className='bg-gradient-to-r from-gray-900 to-black text-white shadow-2xl mx-0 md:mx-20 rounded-lg p-8'>
      <h2 className='text-3xl md:text-5xl font-bold text-center mb-8'>About</h2> {/* Heading stays at the top */}
      
      <div className='md:flex items-center md:justify-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <img className='md:h-80 w-full rounded-lg shadow-md object-cover' src={downloadImg} alt="About img" />
        </div>

        <div className='md:w-1/2 space-y-8'>
          <div className='flex items-start gap-4'>
            <IoArrowForward size={40} className="text-yellow-500" /> {/* Increased arrow size */}
            <div>
              <h3 className='text-xl md:text-3xl font-semibold mb-2'>Frontend Developer</h3>
              <p className='text-sm md:text-lg leading-relaxed'>
                I’m a passionate frontend developer with a strong foundation in building responsive, dynamic web applications. My expertise lies in crafting clean, intuitive user interfaces using technologies like HTML, CSS, JavaScript, and frameworks such as React.js. I take pride in transforming ideas into seamless digital experiences, always prioritizing performance, accessibility, and mobile-first designs.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <IoArrowForward size={40} className="text-yellow-500" /> {/* Increased arrow size */}
            <div>
              <h3 className='text-xl md:text-3xl font-semibold mb-2'>Backend Developer</h3>
              <p className='text-sm md:text-lg leading-relaxed'>
                As a dedicated backend developer, I specialize in building robust, scalable server-side applications. With expertise in Node.js, Express, MongoDB, and SQL, I design and implement efficient APIs and manage databases that power dynamic web applications. I focus on creating secure, performant, and maintainable backend architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
