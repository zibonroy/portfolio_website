import { motion } from "framer-motion";
import { skillsData } from "../assets/assets";

export default function Skills() {
    const getSkillColor = (name) => {
        switch (name) {
            case "HTML5":
                return "text-orange-500";
            case "CSS3":
                return "text-blue-500";
            case "SCSS":
                return "text-pink-500";
            case "Tailwind CSS":
                return "text-cyan-400";
            case "JavaScript":
                return "text-yellow-400";
            case "React.js":
                return "text-cyan-400";
            case "PHP":
                return "text-indigo-400";
            case "Laravel":
                return "text-red-500";
            case "MySQL":
                return "text-orange-400";
            case "Git & GitHub":
                return "text-white";
            default:
                return "text-purple-400";
        }
    };

   const getProgress = (name) => {
        switch (name) {
            case "HTML5":
                return 95;

            case "CSS3":
                return 90;

            case "SCSS":
                return 90;

            case "Tailwind CSS":
                return 85;

            case "JavaScript":
                return 80;

            case "React.js":
                return 75;

            case "PHP":
                return 85;

            case "Laravel":
                return 90;

            case "MySQL":
                return 75;

            case "Git & GitHub":
                return 75;

            default:
                return 70;
        }
    };

    const sliderSkills = [...skillsData, ...skillsData];

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#1a1a1a] px-4 py-20 sm:px-6 lg:px-8"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <h2 className="text-4xl font-semibold text-white md:text-5xl">
                        Technical{" "}
                        <span className="text-purple-500">Skills</span>
                    </h2>

                    <p className="mt-3 leading-7 text-gray-400">
                        Technologies and tools I use to develop, version control, design
                        and build modern web applications.
                    </p>
                </motion.div>

                {/* Skills Showcase */}
                <div className="relative overflow-hidden">

                    <motion.div
                        className="flex w-max gap-4 sm:gap-6"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 65,
                                ease: "linear",
                            },
                        }}
                    >
                        {sliderSkills.map((skill, index) => {
                            const Icon = skill.icon;
                            const progress = getProgress(skill.name);

                            return (
                                <div
                                    key={`${skill.id}-${index}`}
                                    className="
                                        group
                                        w-[calc(100vw-32px)]
                                        shrink-0
                                        sm:w-[390px]
                                        lg:w-[420px]
                                    "
                                >
                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.05] sm:px-7 sm:py-7">

                                        {/* Top Glow */}
                                        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                                        {/* Skill Header */}
                                        <div className="relative flex items-center gap-4">

                                            {/* Icon */}
                                            <div
                                                className={`
                                                    flex
                                                    h-14
                                                    w-14
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-white/[0.05]
                                                    text-3xl
                                                    ${getSkillColor(skill.name)}
                                                    transition-transform
                                                    duration-300
                                                    group-hover:scale-105
                                                `}
                                            >
                                                <Icon />
                                            </div>

                                            {/* Name */}
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <h3 className="truncate text-lg font-semibold text-white sm:text-xl">
                                                        {skill.name}
                                                    </h3>

                                                    <span className="text-sm font-semibold text-purple-400">
                                                        {progress}%
                                                    </span>
                                                </div>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    {skill.level}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Progress */}
                                        <div className="relative mt-6">
                                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${progress}%`,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: 0.2,
                                                        ease: "easeOut",
                                                    }}
                                                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                                                />
                                            </div>
                                        </div>

                                        {/* Description - Desktop */}
                                        <p className="relative mt-5 hidden text-sm leading-6 text-gray-400 sm:block">
                                            {skill.description}
                                        </p>

                                        {/* Mobile Description */}
                                        <p className="relative mt-4 line-clamp-2 text-xs leading-5 text-gray-500 sm:hidden">
                                            {skill.description}
                                        </p>

                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#1a1a1a] to-transparent sm:w-20" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#1a1a1a] to-transparent sm:w-20" />
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <p className="text-sm text-gray-400">
                        Continuously learning and improving my technical skills.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}