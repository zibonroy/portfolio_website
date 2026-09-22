import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      id="about"
      className="w-full bg-[#1a1a1a] py-16"
    >
      <div className="container w-full mx-auto px-7 py-10">

        {/* Heading Part */}
        <h2 className="text-3xl mb-4 font-semibold text-center text-white">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-md text-gray-300 mb-5 text-center w-[80%] mx-auto">
          “Dedicated to creating fast, visually appealing, and functional web
          applications that deliver great user experiences.”
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Image Part */}
          <div className="md:w-1/2 rounded-t-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              src={assets.profileImage}
              alt="profile"
              className="w-full h-auto object-cover rounded-t-2xl"
            />
          </div>

          {/* Text Part */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2 text-gray-300 text-lg leading-relaxed"
          >
            <div className="p-8 rounded-2xl">

              {/* Journey */}
              <h3 className="text-2xl font-bold mb-6 text-green-500">
                My Journey
              </h3>

              <p className="text-gray-300 mb-6">
                My journey into web development started with curiosity and a
                passion for building things on the web. Since then, I've been
                continuously learning and exploring modern technologies to
                improve my skills.
              </p>

              <p className="text-gray-300 mb-6">
                I enjoy turning ideas into responsive, interactive, and
                user-friendly web applications. Working with technologies like
                React, JavaScript, Laravel, PHP, and MySQL allows me to turn
                ideas into practical solutions while growing as a developer
                with every project.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                {aboutInfo.map((data, index) => {
                  const Icon = data.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -8 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.07] hover:shadow-purple-500/10"
                    >

                      {/* Gradient Glow */}
                      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

                      {/* Icon */}
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-400 ring-1 ring-purple-500/20 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                        <Icon size={26} />
                      </div>

                      {/* Title */}
                      <h4 className="relative mt-5 mb-3 text-lg font-semibold text-white">
                        {data.title}
                      </h4>

                      {/* Description */}
                      <p className="relative text-sm leading-6 text-gray-400">
                        {data.description}
                      </p>

                      {/* Bottom Line */}
                      <div className="mt-5 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500 group-hover:w-16" />

                    </motion.div>
                  );
                })}

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}


