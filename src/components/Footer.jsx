import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa"

export default function Footer() {
  return (

    <footer className="relative  bg-[#0b1121] border-t border-white/10 text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              ZIBON<span className="text-purple-500">.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm">
              Passionate Full Stack Developer focused on building
              modern, responsive and user-friendly web applications
              with clean UI & smooth user experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-purple-400 transition duration-300">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-purple-400 transition duration-300">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-purple-400 transition duration-300">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-purple-400 transition duration-300">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-purple-400 transition duration-300">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Me
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Follow me on social media and explore my latest projects.
            </p>

            <div className="flex items-center gap-4">

              <a
                href="https://github.com/zibonroy"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-600 hover:scale-110 transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/zibon-chandro-roy/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.facebook.com/LearnCodes"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition duration-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://x.com/Jibonroy1525"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400 hover:scale-110 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://www.instagram.com/jibon_roy_94/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
           Copy right by © 2026 ZIBON. All Rights Reserved.
          </p>

           <a
            href="#home"
            className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg shadow-purple-500/30"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  )
}