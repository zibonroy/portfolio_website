import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'




export default function About() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        id='about'
        className='w-full bg-[#1a1a1a] py-16'
    >
      <div className='container w-full mx-auto px-7 py-10 '>
        {/* Heading part */}
        <h2 className='text-3xl  mb-4 font-semibold text-center'>About <span className='text-purple-500 '>Me</span></h2>
        <p className='text-md text-gray-300 mb-5 text-center w-[80%] mx-auto'>
          “ Dedicated to creating fast, visually appealing, and functional websites that deliver great user experiences. ”
        </p>

        <div className='flex flex-col md:flex-row items-center gap-8'>
          {/* Image part */}
          <div className='md:w-1/2 rounded-t-2xl overflow-hidden'>
             <motion.img 
              initial={{opacity: 0 ,y: 50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.8 , ease: 'easeOut'}}
              viewport={{once:false, amount:0.2}}
              src={assets.profileImage} 
              alt="profile"
              className='w-full h-auto object-cover rounded-t-2xl'
              />
          </div>

          {/* Text part */}
          <motion.div
            initial={{opacity: 0 ,y: 50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.8 , ease: 'easeOut'}}
            viewport={{once:false, amount:0.2}}
            className='md:w-1/2 text-gray-300 text-lg leading-relaxed'
            >

              <div className='p-8 rounded-2xl'>
                 <h3 className='text-2xl font-bold mb-6 text-green-500'>My Journey</h3>
                 <p className='text-gray-300 mb-6'>
                    My journey into web development started with curiosity and a passion for creating things on the internet. 
                  </p>

                  <p className='text-gray-300 mb-6'>
                    I enjoy turning ideas into responsive and interactive web experiences. Every project helps me grow as a developer.
                  </p>
                  {/* Cards */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    {
                      aboutInfo.map((data,index)=>(
                        <div key={index} className='bg-[#2d2d2d] p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
                          <div className='text-green-500'>
                            <data.icon size={30} />
                          </div>
                          <h4 className='text-xl font-semibold mt-4 mb-2'>{data.title}</h4>
                          <p className='text-gray-300 text-sm'>{data.description}</p>
                        </div>
                      ))
                    }
                  </div>
                  
              </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
