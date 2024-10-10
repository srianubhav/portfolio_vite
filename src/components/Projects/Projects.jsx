import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard 
          title="Pokémon Website"
          main="A fully responsive Pokémon fan site featuring a detailed database of all Pokémon species, including names, types, abilities, and evolution chains."
          githubUrl="https://github.com/srianubhav/Pokedesk_project"
        />
        <ProjectCard
          title="Twiller"
          main="Twiller is a full-stack web app inspired by Twitter. It allows users to post and interact with tweets, featuring Firebase authentication and a responsive design for both mobile and desktop."
          githubUrl="https://github.com/srianubhav/twiller--like-as-twitter"
        />
        <ProjectCard
          title="BookAI"
          main="A web application that provides users with an AI-powered book recommendation system. The platform allows users to explore various book genres and get personalized suggestions based on their reading preferences."
          githubUrl="https://github.com/srianubhav/bookai"
        />
      </div>
    </div>
  );
}

export default Projects;
