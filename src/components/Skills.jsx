// import React from 'react'
// import { motion } from 'framer-motion'
// import { skillsData } from '../assets/assets'

// export default function Skills() {
//   return (
//     <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false }}
//         transition={{ duration: 0.8 }}
//         id="skills"
//     >
//         <div className='container mx-auto px-6 py-10'>
//             <div className='text-center mb-10'>
//                 <h2 className='text-3xl mb-4 font-semibold text-center'>My <span className='text-purple-500 '>Skills</span></h2>
//                 <p className='text-md text-gray-300 mb-8 text-center w-[80%] mx-auto'>
//                     Technologies to I will build the real world Projects .
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {
//                         skillsData.map((skill,index)=>(
//                             <div key={index} className='bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937]  rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-purple-500/50 transition duration-300 cursor-pointer transition transform hover:-translate-y-2'>
//                                 <div className='mb-4 text-[#37c5cf] flex items-center justify-center gap-5'>
//                                     <skill.icon size={40} />
//                                     <h2 className='text-xl font-semibold text-gray-300'>{skill.name}</h2>
//                                 </div>
//                                 <h3 className='text-gray-400 font-medium'>{skill.level}</h3>
//                                 <p className='text-gray-500 mt-2 text-sm'>{skill.description}</p>
//                             </div>
//                         ))
//                     }
//             </div>
//         </div>
//     </motion.div>
//   )
// }


import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../assets/assets'

export default function Skills() {

    const getSkillColor = (name) => {
        switch (name) {
            case "HTML5":
                return "text-orange-500"

            case "Tailwind CSS":
                return "text-blue-500"

            case "JavaScript":
                return "text-yellow-400"

            case "React JS":
                return "text-cyan-400"

            case "PHP":
                return "text-indigo-400"

            case "GitHub":
                return "text-white"

            case "MySQL":
                return "text-orange-400"

            default:
                return "text-purple-400"
        }
    }

    return (
        <section id="skills" className="py-16 px-6">
            <div className="container mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-4xl font-semibold text-white mb-4">
                        My <span className="text-purple-500">Skills</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Technologies and tools I use to build modern,
                        responsive and high-performance web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 caret-indigo-500 cursor-pointer"
                        >

                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/5 opacity-0 hover:opacity-100 transition duration-300"></div>

                            <div className={`mb-5 text-5xl ${getSkillColor(skill.name)}`}>
                                <skill.icon />
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {skill.name}
                            </h3>

                            <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20 mb-4">
                                {skill.level}
                            </span>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {skill.description}
                            </p>

                        </motion.div>

                    ))}

                </div>
            </div>
        </section>
    )
}