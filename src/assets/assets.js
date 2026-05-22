import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaBriefcase
} from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";


import profileImage from "../assets/profile.jpeg";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.png";
import project4Image from "../assets/project4.avif";
import project5Image from "../assets/project5.avif";

import { desc } from "framer-motion/client";

export const assets = {
  profileImage,
  project1Image,
  project2Image,
  project3Image,
  project4Image,
  project5Image,
};


// about data 

export const aboutInfo = [
    {
        icon: FaLaptopCode,
        title:"Web Development",
        description:"Passionate about creating visually appealing and functional websites that provide great user experiences.",
        
        
    },
    {
      icon: FaRocket,
      title:"App Development",
      description:"Passionate about creating visually appealing and functional websites that provide great user experiences.",
      
    },
    {
        icon: FaBriefcase,
        title:"Freelance Projects",
        description:"Worked on modern full stack application projects including portfolio websites, Admin dashboard, and interactive UI designs.",
        
    },
    {
        icon: FaCode,
        title:"Problem Solving",
        description:"Continuously learning modern web technologies, improving problem-solving skills, and building real-world projects.",
        
    }
]

//skills data

export const skillsData = [
  {
    id: 1,
    name: "HTML5",
    icon: FaHtml5,
    level: "Advanced",
    description: "Proficient in HTML5, creating semantic and accessible web structures for modern websites.",
  },

  {
    id: 2,
    name: "Tailwind CSS",
    icon: FaCss3Alt,
    level: "Advanced",
    description: "Skilled in CSS3, crafting responsive and visually appealing designs using Flexbox, Grid, and animations.",
  },

  {
    id: 3,
    name: "JavaScript",
    icon: FaJs,
    level: "Intermediate",
    description: "Experienced in JavaScript, building dynamic and interactive web applications with modern ES6+ features.",
  },

  {
    id: 4,
    name: "React JS",
    icon: FaReact,
    level: "Intermediate",
    description: "Proficient in React JS, creating reusable components and building responsive user interfaces for web applications.",
  },

  {
    id: 5,
    name: "PHP",
    icon: FaPhp,
    level: "intermediate",
    description: "Experienced in PHP, developing server-side applications and APIs for dynamic web projects.",
  },

  {
    id: 6,
    name: "GitHub",
    icon: FaGithub,
    level: "Intermediate",
    description: "Proficient in GitHub, managing code repositories, collaborating on projects, and utilizing version control effectively.", 
  },

  {
    id: 7,
    name: "MySQL",
    icon: FaDatabase,
    level: "Intermediate",
    description: "Skilled in MySQL, designing and managing databases for web applications, ensuring efficient data storage and retrieval.",
  },

  {
    id: 8,
    name: "Problem Solving",
    icon: FaCode,
    level: "Biginner",
    description: "Continuously learning modern web technologies, improving problem-solving skills, and building real-world projects.",
  },

];

//projects data

export const projectsData = [
  {
      id: 1,
      title: "E-Commerce Website",
      description: "A responsive e-commerce website built with React and styled-components, featuring product listings, shopping cart functionality, and user authentication.",
      image: project1Image,
      technologies: ["React", "Styled-Components", "JavaScript"],
      icon: [FaReact, FaJs, FaCode],
      demo: "#projects",
      code:"#projects"
  },
  {
    id: 2,
    title:"Social Media Dashboard",
    description:"A social media dashboard built with React and Material-UI, providing insights and analytics for various social media platforms.",
    image: project2Image,
    technologies:["React", "Tailwind CSS", "JavaScript", "PHP"] ,
    icon:[FaReact, FaCss3Alt, FaJs, FaPhp],
    demo: "#projects",
    code:"#projects"
  },
  {
    id: 3,
    title:"Chat Application",
    description:"A real-time chat application built with React and Socket.io, allowing users to communicate in private and group chats.",
    image: project3Image,
    technologies:["React", "Node.js", "MySQL"],
    icon:[FaReact, FaJs, FaDatabase],
    demo: "#projects",
    code:"#projects"
  },
  {
    id: 4,
    title:"Construction Company Website",
    description:"A responsive website for a construction company built with React and Bootstrap, showcasing services, projects, and contact information.",
    image: project5Image,
    technologies:["React", "Bootstrap", "JavaScript"],
    icon:[FaReact, FaCss3Alt, FaJs],
    demo: "projects",
    code:"#projects"
  },
  {
    id: 5,
    title:"Banking System",
    description:"A banking system built with PHP and MySQL, allowing users to manage accounts, perform transactions, and view transaction history.",
    image: project4Image,
    technologies:["PHP", "MySQL", "HTML", "CSS"],
    icon:[FaPhp, FaDatabase, FaHtml5, FaCss3Alt],
    demo: "projects",
    code:"#projects"
  }
];

//work data

export const workData = [
  {
    id: 1,
    company: "Freelance Projects",
    role: "Frontend Developer",
    duration: "2025 - Present",
    description:
      "Worked on modern frontend projects including portfolio websites, landing pages, and interactive UI designs.",
  },

  {
    id: 2,

    company: "Personal Learning Journey",
    role: "Web Developer Learner",
    duration: "2024 - Present",
    description:
      "Continuously learning modern web technologies, improving problem-solving skills, and building real-world projects.",
  },
  {
    id: 3,
    company: "Real-World Projects",
    role: "Developer",
    duration: "2025 - Present",
    description:"Worked on real-world projects, applying web development skills to create functional and visually appealing websites and applications.",
  },
  {
    id: 4,
    company:"Remote Internships",
    role: "Intern",
    duration: "2025 - Present",
    description:
      "Gained practical experience through remote internships, collaborating with teams and contributing to web development projects.",
  },
  {
    id: 5,
    company: "Open Source Contributions",
    role: "Contributor",
    duration: "2024 - Present",
    description:
      "Contributed to open source projects on GitHub, collaborating with other developers and gaining experience in real-world software development.",
  },
  {
    id: 6,
    company: "Hackathons and Coding Challenges",
    role: "Participant",
    duration: "2024 - 2025",
    description:
      "Participated in hackathons and coding challenges to enhance problem-solving skills and collaborate with other developers.",

  }
];

