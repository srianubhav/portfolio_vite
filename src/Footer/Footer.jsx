import React from 'react';
import { MdOutlineEmail } from 'react-icons/md'; 
import { CiLinkedin } from 'react-icons/ci'; 
import { FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div id='Footer' className='flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out</h3>
        <ul className='text-sm md:text-xl'>
          <li className='flex gap-1 items-center'>
            <MdOutlineEmail size={20} className='mr-2' />
            srivastavakaran87@gmail.com
          </li>
          <li className='flex gap-1 items-center'>
            <CiLinkedin size={20} className='mr-2' />
            <a 
              href="https://www.linkedin.com/in/anubhav-srivastava-8472882b6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          <li className='flex gap-1 items-center'>
            <FaGithub size={20} className='mr-2' />
            <a 
              href="https://github.com/srianubhav" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/user
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
