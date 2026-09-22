import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
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
import cvFile from "../assets/resume.pdf";
import weatherAppImage from "../assets/weather.png";


export const assets = {
  profileImage,
  project1Image,
  project2Image,
  project3Image,
  project4Image,
  project5Image,
  weatherAppImage,
  cvFile,
};


// about data 

export const aboutInfo = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "Building responsive and user-friendly web interfaces with React, JavaScript, HTML, CSS, and Tailwind CSS.",
  },

  {
    icon: FaRocket,
    title: "Full-Stack Development",
    description:
      "Developing dynamic web applications using Laravel, PHP, MySQL, React, and modern web development practices.",
  },

  {
    icon: FaBriefcase,
    title: "Personal Projects",
    description:
      "Building real-world projects such as e-commerce systems, dashboards, and interactive web applications to apply and strengthen my skills.",
  },

  {
    icon: FaCode,
    title: "Problem Solving",
    description:
      "Improving problem-solving skills through coding practice, learning data structures and algorithms, and solving programming challenges.",
  },
];


//skills data
export const skillsData = [
  {
    id: 1,
    name: "HTML5",
    icon: FaHtml5,
    level: "Intermediate",
    description:
      "Building semantic, structured, and accessible web pages using modern HTML5 standards.",
  },
  {
    id: 2,
    name: "CSS3",
    icon: FaCss3Alt,
    level: "Intermediate",
    description:
      "Creating responsive and visually appealing interfaces using CSS3, Flexbox, Grid, and modern styling techniques.",
  },
  {
    id: 3,
    name: "SCSS",
    icon: FaCss3Alt,
    level: "Intermediate",
    description:
      "Writing maintainable and organized styles using SCSS features such as variables, nesting, and reusable styles.",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: FaCss3Alt,
    level: "Intermediate",
    description:
      "Building responsive and modern user interfaces efficiently using Tailwind CSS utility classes.",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: FaJs,
    level: "Intermediate",
    description:
      "Developing interactive web applications using modern JavaScript, ES6+ features, DOM manipulation, and APIs.",
  },
  {
    id: 6,
    name: "React.js",
    icon: FaReact,
    level: "Intermediate",
    description:
      "Building reusable components and responsive user interfaces with React.js and modern React concepts.",
  },
  {
    id: 7,
    name: "PHP",
    icon: FaPhp,
    level: "Intermediate",
    description:
      "Developing dynamic server-side web applications using PHP and working with databases.",
  },
  {
    id: 8,
    name: "Laravel",
    icon: FaLaravel,
    level: "Intermediate",
    description:
      "Building structured and dynamic web applications using Laravel, MVC architecture and database relationships.",
  },
  {
    id: 9,
    name: "MySQL",
    icon: FaDatabase,
    level: "Intermediate",
    description:
      "Designing and managing relational databases for web applications using MySQL.",
  },
  {
    id: 10,
    name: "Git & GitHub",
    icon: FaGithub,
    level: "Intermediate",
    description:
      "Managing source code, tracking changes, maintaining repositories, and collaborating using Git and GitHub.",
  },
];

//projects data

export const projectsData = [
    {
      id: 1,
      title: "Digital Weather App",
      description:
          "A responsive weather application that allows users to search for cities and view real-time weather information with location-based weather detection.",
      image: weatherAppImage,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Weather API"],
      icon: [FaReact, FaCss3Alt, FaJs],
      demo: "https://digitalweatherapp.vercel.app/",
      code: "https://github.com/zibonroy/digital_weather_app",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "A responsive e-commerce website built with React and styled-components, featuring product listings, shopping cart functionality, and user authentication.",
      image: project1Image,
      technologies: ["React", "Styled-Components", "JavaScript"],
      icon: [FaReact, FaJs, FaCode],
      demo: "#projects",
      code:"#projects"
  },
  {
    id: 3,
    title:"Social Media Dashboard",
    description:"A social media dashboard built with React and Material-UI, providing insights and analytics for various social media platforms.",
    image: project2Image,
    technologies:["React", "Tailwind CSS", "JavaScript", "PHP"] ,
    icon:[FaReact, FaCss3Alt, FaJs, FaPhp],
    demo: "#projects",
    code:"#projects"
  },
  {
    id: 4,
    title:"Chat Application",
    description:"A real-time chat application built with React and Socket.io, allowing users to communicate in private and group chats.",
    image: project3Image,
    technologies:["React", "Node.js", "MySQL"],
    icon:[FaReact, FaJs, FaDatabase],
    demo: "#projects",
    code:"#projects"
  },
  {
    id: 5,
    title:"Construction Company Website",
    description:"A responsive website for a construction company built with React and Bootstrap, showcasing services, projects, and contact information.",
    image: project5Image,
    technologies:["React", "Bootstrap", "JavaScript"],
    icon:[FaReact, FaCss3Alt, FaJs],
    demo: "projects",
    code:"#projects"
  },
  {
    id: 6,
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
    company: "Personal Projects",
    role: "Full-Stack Developer",
    duration: "2025 - Present",
    description:
      "Building real-world web applications using React, JavaScript, Laravel, PHP, and MySQL while applying modern development practices.",
  },

  {
    id: 2,
    company: "Frontend Development",
    role: "Frontend Developer",
    duration: "2024 - Present",
    description:
      "Developing responsive and user-friendly interfaces using HTML, CSS, Tailwind CSS, JavaScript, and React.js.",
  },

  {
    id: 3,
    company: "Backend Development",
    role: "Backend Developer",
    duration: "2025 - Present",
    description:
      "Building dynamic web applications with PHP and Laravel, including authentication, database relationships, and application logic.",
  },

  {
    id: 4,
    company: "E-Commerce Development",
    role: "Full-Stack Developer",
    duration: "2025 - Present",
    description:
      "Developing e-commerce applications with product management, categories, orders, customers, authentication, and admin dashboard functionality.",
  },

  {
    id: 5,
    company: "API & Web Application Development",
    role: "Web Developer",
    duration: "2025 - Present",
    description:
      "Working with APIs and modern web technologies to build interactive applications such as weather applications and other data-driven projects.",
  },

  {
    id: 6,
    company: "Learning & Development",
    role: "Web Developer",
    duration: "2024 - Present",
    description:
      "Continuously improving web development and problem-solving skills through coding practice, projects, and learning modern development technologies.",
  },
];