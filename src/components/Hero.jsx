import { motion } from 'framer-motion'
import { useState , useEffect } from 'react'
import { assets } from '../assets/assets' 
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook,FaGithub} from 'react-icons/fa';


export default function Hero() {

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [arrIndex, setArrIndex] = useState(0);

    const carr=[
        'Full Stack Developer',
        'Freelancer',
        'Youtuber',
        'Programmer',
    ]

    useEffect(() => {
    const currentWord = carr[arrIndex];

    // Typing Effect
    if (currentIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentWord[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }

    // Wait + Next Word
    else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);

        setArrIndex((prev) =>
          prev + 1 === carr.length ? 0 : prev + 1
        );
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, arrIndex]);



  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{opacity:1, y:0}}
    transition={{ duration: 0.5 , ease: 'easeOut' }}
    viewport={{once:true}}
    id='home'
    className='min-h-screen flex items-center gap-4 pt-20 pb-14 bg-grident-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10'>

        {/* left side content */}
        <div className='w-full md:w-1/2 text-center md:text-left'>

                <h1 className='text-4xl md:text-5xl font-semibold mb-4'>
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    ZIBON ROY
                </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
                I'm a{" "}
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent border-r-2 border-pink-400 pr-1">
                    {currentText}
                </span>
                </h2>

                <p className='text-gray-300 text-sm md:text-base max-w-xl mx-auto md:mx-0'>
                  I'm a Full-Stack Developer with experience in Laravel, building dynamic, responsive, and user-friendly web applications.
                </p>

                <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6'>

                    <a href="#projects" className='px-6 py-3 bg-purple-600 rounded-lg font-medium transition hover:bg-purple-700 shadow-lg w-full sm:w-auto text-center'>
                        View Project
                    </a>

                    <a
                      href={assets.cvFile}
                      download="ZIBON_ROY_CV.pdf"
                      className="px-6 py-3 rounded-lg font-medium border border-purple-400 text-white hover:bg-purple-600 transition-all duration-500 w-full sm:w-auto text-center"
                      >
                      Download CV
                    </a>

                    <a href="#contact" className='px-6 py-3 border border-purple-400 rounded-xl font-medium w-full sm:w-auto text-center'>
                        Contact Me
                    </a>
                </div>
            {/* Socail Media  */}
            <div className='flex items-center justify-center md:justify-start gap-5 mt-8'>

              <a
                href="https://github.com/zibonroy"
                target="_blank"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/zibon-chandro-roy/"
                target="_blank"
                rel="noopener noreferrer"
                className='w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-blue-400 text-xl hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg'
              >
                <FaLinkedin />
              </a>

               <a
                href="https://x.com/Jibonroy1525"
                target="_blank"
                rel="noopener noreferrer"
                className='w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xl hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg'
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/jibon_roy_94/"
                target="_blank"
                rel="noopener noreferrer"
                className='w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-pink-500 text-xl hover:bg-pink-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg'
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/LearnCodes/"
                target="_blank"
                rel="noopener noreferrer"
                className='w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-blue-500 text-xl hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg'
              >
                <FaFacebook />
              </a>

            </div>

                
                

        </div>

            {/* right side image */}
        <div className='w-full md:w-1/2 flex justify-center items-center'>

                <div className='relative w-56 h-56 md:w-80 md:h-80'>

                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 blur-2xl opacity-50 animate-pulse'></div>

                <motion.img
                    src={assets.profileImage}
                    alt="profile"
                    className="relative z-10 w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                </div>

        </div>

    </div>
    </motion.div>
  )
}


