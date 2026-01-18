import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
} from 'react-icons/fa';

import { MdOutlineWaves } from "react-icons/md";

import { 
  SiDjango, 
  SiFirebase ,
  SiTypescript,
  SiBlender,

} from 'react-icons/si';
import { Code, CameraIcon, Cog } from 'lucide-react'

export const projects = [
    {
      id: 1,
      title: "Python Game OOP-SOLID principles",
      category: "Python Game Development",
      image: "assets/py_screen.png",
      description: "A Python-based game that demonstrates OOP and SOLID principles. Features include modular design, unit testing, and a clean architecture.",
      technologies: [
        // "Python", "OOP", "SOLID"
        {name: "Python", icon: FaPython},
        {name: "OOP", icon: Code},
        {name: "SOLID", icon: Code},
      ],
      liveUrl: "https://github.com/Eorico/Python-Project",
      githubUrl: "https://github.com/Eorico/Python-Project",
      thumbnails : [
        "assets/py_screen1.png",
        "assets/py_screen2.png",
        "assets/py_screen3.png",
        "assets/py_screen4.png",
      ]
    },
    {
      id: 2,
      title: "MAMBA EO",
      category: "Web Application",
      image: "/assets/WEB_DEV1.png",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements. Built with performance and accessibility in mind.",
      technologies: [
        {name: "Html5", icon: FaHtml5},
        {name: "CSS3", icon: FaCss3Alt},
        {name: "JavaScript", icon: FaJs},
      ],
      liveUrl: "https://port-folio-eo-rnxj.vercel.app/",
      githubUrl: "https://github.com/Eorico/PortFolioEo",
      thumbnails : [
        "/assets/WEB_DEV1.png",
        "/assets/WEB_DEV2.png",
        "/assets/WEB_DEV3.png",
      ]
    },
    {
      id: 3,
      title: "Gym Website",
      category: "Web Application",
      image: "/assets/GYMWEB1.png",
      description: "A gym website with class schedules, trainer profiles, and membership plans. Built with React and integrated with a backend for dynamic content.",
      technologies: [
        // "HTML5", "CSS3", "Python3", "Django", "JavaScript"
        {name: "Html5", icon: FaHtml5},
        {name: "CSS3", icon: FaCss3Alt},
        {name: "Python", icon: FaPython},
        {name: "Django", icon: SiDjango},
        {name: "JavaScript", icon: FaJs},
      ],
      liveUrl: "https://gym-web-5eko.onrender.com",
      githubUrl: "https://github.com/Eorico/Gym-Website",
      thumbnails : [
        "/assets/GYMWEB1.png",
        "/assets/GYMWEB2.png",
        "/assets/GYMWEB3.png",
        "/assets/GYMWEB4.png",
      ]
    },
    {
      id: 4,
      title: "Cray Fish Simulator - Machine Learning",
      category: "Python Game Development",
      image: "/assets/CRAYFISH1.png",
      description: "A simulation of crayfish and face detection using machine learning techniques. Built with Python and OpenCV.",
      technologies: [
        // "Python3", "OpenCV", "Machine Learning"
        {name: "Python", icon: FaPython},
        {name: "OpenCV", icon: CameraIcon},
        {name: "Machine Learning", icon: Cog},
      ],
      liveUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main",
      githubUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main",
      thumbnails : [
        "/assets/CRAYFISH1.png",
        "/assets/CRAYFISH2.png",
        "/assets/CRAYFISH3.png",
      ]
    },
    {
      id: 5,
      title: "Learning page: Chemistry Hub",
      category: "Web Application",
      image: "/assets/CHEMHUB1.png",
      description: "a learning page to learn chemistry concepts built with HTML, CSS, and JavaScript. then it is integrated with a react javascript.",
      technologies: [
        // "HTML", "CSS", "JavaScript", "React"
        {name: "Html5", icon: FaHtml5},
        {name: "CSS3", icon: FaCss3Alt},
        {name: "JavaScript", icon: FaJs},
        {name: "React", icon: FaReact},
      ],
      liveUrl: "https://chemistry-learning-hub.onrender.com/",
      githubUrl: "https://github.com/Eorico/Chemistry-Learning-Hub",
      thumbnails : [
        "/assets/CHEMHUB1.png",
        "/assets/CHEMHUB2.png",
        "/assets/CHEMHUB3.png",
      ]
    },
    {
      id: 6,
      title: "E-SIGNIE",
      category: "Mobile Application",
      image: "/assets/ESIGNIE1.png",
      description: "a mobile application that allows users to sign documents electronically, built with React Native and integrated with a backend for document management.",
      technologies: [
        // "JavaScript", "React Native", "TypeScript", "Firebase"
        {name: "javaScript", icon: FaJs},
        {name: "React Native", icon: FaReact},
        {name: "TypeScript", icon: SiTypescript},
        {name: "Firebase", icon: SiFirebase},
      ],
      liveUrl: "/assets/e-signie.apk",
      githubUrl: "https://github.com/Eorico/eSignie-App",
      thumbnails : [
        "/assets/ESIGNIE1.png",
        "/assets/ESIGNIE2.png",
        "/assets/ESIGNIE3.png",
        "/assets/ESIGNIE4.png",
        "/assets/ESIGNIE5.png",
        "/assets/ESIGNIE6.png",
      ]
    },
    {
      id: 7,
      title: "EORIX",
      category: "Web Application",
      image: "/assets/CHATBOTAI1.png",
      description: "Eorix is an AI-powered chatbot built with machine learning to deliver intelligent, context-aware conversations. It is designed to understand user intent, learn from interactions, and continuously improve its responses. Eorix demonstrates the practical application of machine learning, natural language processing, and modern web technologies in creating an interactive and responsive AI system.",
      technologies: [
        // "React", "TypeScript", "", "Machine Learning", "Blender 3D Model", "DeepSeek"
        {name: "React", icon: FaReact},
        {name: "TypeScript", icon: SiTypescript},
        {name: "Machine Learning", icon: Cog},
        {name: "Blender 3D Model", icon: SiBlender},
        {name: "DeepSeek", icon: MdOutlineWaves},
      ],
      liveUrl: "https://eorix-chat-bot-ai.vercel.app/",
      githubUrl: "https://github.com/Eorico/Eorix_ChatBOT_AI",
      thumbnails : [
        "/assets/CHATBOTAI1.png",
        "/assets/CHATBOTAI2.png",
        "/assets/CHATBOTAI3.png",
      ]
    },
    {
      id: 8,
      title: "?",
      category: "",
      image: "",
      description: "ON PROCESS",
      technologies: [],
      liveUrl: "",
      githubUrl: "",
      thumbnails : [
        
      ]
    },
    {
      id: 9,
      title: "?",
      category: "",
      image: "",
      description: "ON PROCESS",
      technologies: [],
      liveUrl: "",
      githubUrl: "",
      thumbnails : [
        
      ]
    },
  ];