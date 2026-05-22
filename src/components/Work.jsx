import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

export default function Work() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        id='works'
    >
        <div className='container mx-auto px-4 py-10'>
            <h2 className='text-3xl font-semibold mb-3 text-center'>Work 
                <span className='text-purple-500'> Experience</span>
            </h2>
            <p className='text-center text-gray-400 max-w-2xl mx-auto mb-12'>My Professional Journey into Present</p>

            <div className="max-w-4xl mx-auto px-4">
                <div className="relative  border-l border-purple-400 ml-4 space-y-10">
                    
                    {workData.map((work, index) => (
                    <div
                        key={index}
                        className="relative group pl-10"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[14px] top-0">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/40 border-3 border-gray-900 group-hover:scale-110 transition duration-300">
                                <span className="text-white text-xs font-bold">
                                {index + 1}
                                </span>
                            </div>
                            </div>

                            {/* Card */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {work.role}
                                    </h3>

                                    <p className="text-purple-400 font-medium mt-1">
                                        {work.company}
                                    </p>
                                </div>

                                <div className="bg-purple-500/10 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/20 w-fit">
                                {work.duration}
                                </div>
                            </div>

                            <p className="mt-5 text-gray-300 leading-relaxed">
                                {work.description}
                            </p>
                            <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

                        </div>

                    </div>

                    ))}
                </div>
            </div>
        </div>
    </motion.div>
  )
}
