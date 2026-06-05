import { nav } from 'framer-motion/client'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

function Navber() {

  const [isOpen, setIsOpen] = useState(false)

  return (
   <nav className='w-full bg-[#1a1a1a] px-8 py-4 backdrop-blur-sm shasdow-lg fixed top-0 left-0 z-50'>
      <div className='container mx-auto flex items-center justify-between'>

         <div>
            <a href="#" className='text-2xl font-medium text-white cursor-auto'>
              <span className='text-yellow-500'>DE</span>V. <span className='text-yellow-500'>Z</span>IBON
            </a>
         </div>
        
        <div className='hidden md:flex items-center space-x-10'>

           <a href="#home" className='text-md text-white relative group transition duration-300 hover:text-purple-400'>
             <span>Home</span>
             <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full'></span>
           </a>
           
           <a href="#about" className='text-md text-white relative group transition duration-300 hover:text-purple-400'>
             <span>About</span>
             <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full'></span>
           </a>

           <a href="#skills" className='text-md text-white relative group transition duration-300 hover:text-purple-400'>
             <span>Skills</span>
             <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full'></span>
           </a>

           <a href="#projects" className='text-md text-white relative group transition duration-300 hover:text-purple-400'>
             <span>Project</span>
             <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full'></span>
           </a>

           <a href="#works" className='text-md text-white relative group transition duration-300 hover:text-purple-400'>
             <span>Experience</span>
             <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full'></span>
           </a>

           <a href="#contact" className='text-md text-white relative group transition duration-300 hover:text-purple-400'>
             <span>Contact</span>
             <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full'></span>
           </a>

           

        </div>


         {/* Mobile view */}
          <div className='md:hidden text-white text-2xl cursor-pointer'>
            {
              // Toggle button of mobile view
              isOpen ? <FaXmark onClick={() => setIsOpen(!isOpen)} /> : <FaBars onClick={() => setIsOpen(!isOpen)} />
            }
          </div>
      </div>

      {/* Mobile manu */}
      <div>
        {
          isOpen && (

            <div className='md:hidden bg-[#1a1a1a] py-4 px-8 absolute top-full left-0 w-full shadow-lg'>

                <a href="#home" className='block text-md text-white py-2 transition duration-300 hover:text-purple-400'>Home</a>
                <a href="#about" className='block text-md text-white py-2 transition duration-300 hover:text-purple-400'>About</a>
                <a href="#skills" className='block text-md text-white py-2 transition duration-300 hover:text-purple-400'>Skills</a>  
                <a href="#projects" className='block text-md text-white py-2 transition duration-300 hover:text-purple-400'>Project</a>
                <a href="#works" className='block text-md text-white py-2 transition duration-300 hover:text-purple-400'>Experience</a>
                <a href="#contact" className='block text-md text-white py-2 transition duration-300 hover:text-purple-400'>Contact</a>

              </div>
            )
          }
            
      </div>
   </nav>
  )
}

export default Navber