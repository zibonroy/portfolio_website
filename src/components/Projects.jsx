import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../assets/assets'
import ProjectCards from './ProjectCards'
import { FaArrowRight } from 'react-icons/fa'

export default function Projects() {
  return (
    <motion.div
    
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
    id='projects'
    className='w-full py-20 bg-[#0a192f]'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-semibold text-center px-6 '>My <span className='text-purple-500 '>Projetcs</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 mt-5'>Check out of my recent projects work</p>

            <motion.div
                // initial={{ x: '-100vw' }}
                // animate={{ x: 0 }}
                // transition={{ type: 'spring', stiffness: 50 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.03 }}
             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projectsData.map((project,index)=>(
                        <ProjectCards key={index} title={project.title} image={project.image} description={project.description} icon={project.icon} technologies={project.technologies} demo={project.demo} code={project.code}/>
                    ))
                }
            </motion.div>
        </div>
         <div className='text-center mt-10'>
           <a href="#projects">
                <button className='px-4 py-2 text-white rounded-md border border-purple-400 transition duration-300 cursor-pointer '>
                    View More 
                    <FaArrowRight className='inline-block ml-2' />
                </button>
           </a>
        </div>
        
    </motion.div>
  )
}
