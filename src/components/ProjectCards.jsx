import React from 'react'

export default function ProjectCards({
    key,
    title,
    description,
    image,
    icon,
    technologies,
    demo,
    code
}) {
  return (
    <div key={key} className='bg-[#112240] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>

        <img src={image} alt={title} className='w-full h-48 object-cover' />
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            
            <div className='flex justify-center items-center flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    {
                        icon.map((Icon,index)=>(
                            <Icon key={index} className='text-[#78c5cf] text-2xl' />
                        ))
                    }
                </div>
                <div>
                    {
                        technologies.map((tech,index)=>(
                            <span key={index} className='inline-block bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full mr-2 mb-2 font-semibold'>{tech}</span>
                        ))
                    }
                </div>
            </div>
            
            <div className='mt-4 flex justify-center gap-4'>
                <a href={demo} target="_blank" rel="noopener noreferrer" className='inline-block bg-purple-700 text-gray-300 font-semibold px-4 py-2 rounded mr-2 hover:bg-purple-600 transition-colors duration-300'>Live Demo</a>
                <a href={code} target="_blank" rel="noopener noreferrer" className='inline-block border border-purple-500 text-gray-300 font-semibold px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300'>Source Code</a>
            </div>
            
        </div>
    
    </div>
  )
}
