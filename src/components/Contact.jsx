import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
    FaIdBadge
} from 'react-icons/fa'


export default function Contact() {

    const form = useRef()
    const [loading, setLoading] = useState(false)

   const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        // Send message to ME
        const toMe = emailjs.sendForm(
            'service_9owb1ia',
            'template_dodbiva',
            form.current,
            'kGkS1XdvcVNmTJNO8'
        )

        //Auto reply to User
        const toUser = emailjs.sendForm(
            'service_9owb1ia',
            'template_r1jllhh',
            form.current,
            'kGkS1XdvcVNmTJNO8'
        )

        Promise.all([toMe, toUser])
            .then(() => {
            toast.success('Message sent successfully ✅')
            e.target.reset()
            })
            .catch(() => {
            toast.error('Something went wrong ❌')
            })
            .finally(() => {
            setLoading(false)
            })
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            id='contact'
            className='py-18 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white'
        >

            <div className='max-w-7xl mx-auto px-6'>

                <div className='text-center mb-16'>
                    <h2 className='text-2xl md:text-5xl font-semibold'>
                        Contact <span className='text-purple-500'>Me</span>
                    </h2>

                    <p className='text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed'>
                        Have a project idea, business inquiry, or collaboration?
                        Feel free to contact me anytime.
                    </p>
                </div>


                <div className='grid lg:grid-cols-2 gap-10'>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl'
                    >
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className='space-y-6'
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className='block text-left text-gray-300 mb-2 font-medium'
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id='name'
                                    name='user_name'
                                    required
                                    placeholder='Enter your name'
                                    className='w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none  focus:border-gray-500 transition-all duration-300'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className='block text-left text-gray-300 mb-2 font-medium'
                                >
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    id='email'
                                    name='user_email'
                                    required
                                    placeholder='Enter your email'
                                    className='w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-all duration-300'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className='block text-left text-gray-300 mb-2 font-medium'
                                >
                                    Message
                                </label>

                                <textarea
                                    id='message'
                                    rows="5"
                                    name='message'
                                    required
                                    placeholder='Write your message here...'
                                    className='w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-all duration-300 resize-none'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                disabled={loading}
                                className='w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 cursor-pointer'
                            >
                                {
                                    loading
                                        ? 'Sending...'
                                        : 'Send Message'
                                }
                            </button>

                        </form>

                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl flex flex-col justify-between'
                    >
                        <div className='space-y-8'>

                            <div className='flex items-start gap-5'>
                                <div className='text-purple-400 text-2xl mt-1'>
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h3 className='text-xl font-semibold'>
                                        Location
                                    </h3>

                                    <p className='text-gray-400 mt-2'>
                                       Lalmonirhat, Rangpur, Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-5'>
                                <div className='text-purple-400 text-2xl mt-1'>
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h3 className='text-xl font-semibold'>
                                        Email
                                    </h3>

                                    <p className='text-gray-400 mt-2'>
                                        zibonray495@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-5'>
                                <div className='text-purple-400 text-2xl mt-1'>
                                    <FaPhone />
                                </div>

                                <div>
                                    <h3 className='text-xl font-semibold'>
                                        Phone
                                    </h3>

                                    <p className='text-gray-400 mt-2'>
                                        +880 1834341931
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-5'>
                                <div className='text-purple-400 text-2xl mt-1'>
                                    <FaIdBadge/>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold'>
                                        Datials
                                    </h3>
                                    <p className='text-gray-500 text-sm mt-1 leading-relaxed'>
                                        Passionate Full Stack Web Developer on building
                                        modern, responsive, and user-friendly web experiences
                                        using Tailwind Css, React, MySql, PHP and modern web technologies.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social Media */}
                        <div className='flex flex-wrap gap-8 mt-14'>

                            <a
                                href="https://www.instagram.com/jibon_roy_94/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-pink-500 text-2xl hover:bg-pink-500 hover:text-white hover:scale-110 transition-all duration-300'
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jibon-roy-381a63316?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-400 text-2xl hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300'
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://x.com/Jibonroy1525"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-2xl hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300'
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="https://www.facebook.com/share/1BAdgas6m1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-500 text-2xl hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300'
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://youtube.com/@learncodes-bd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-red-500 text-2xl hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300'
                            >
                                <FaYoutube />
                            </a>

                        </div>

                    </motion.div>

                </div>

            </div>

        </motion.section>
    )
}