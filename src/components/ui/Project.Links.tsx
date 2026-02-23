import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { MdOutlineWaves } from 'react-icons/md';
import { SiDjango, SiFirebase, SiTypescript, SiBlender } from 'react-icons/si';
import { Code, CameraIcon, Cog } from 'lucide-react';

// ✅ Import all images
import py_screen from '../../../public/assets/py_screen.png';
import py_screen1 from '../../../public/assets/py_screen1.png';
import py_screen2 from '../../../public/assets/py_screen2.png';
import py_screen3 from '../../../public/assets/py_screen3.png';
import py_screen4 from '../../../public/assets/py_screen4.png';

import web_dev1 from '../../../public/assets/WEB_DEV1.png';
import web_dev2 from '../../../public/assets/WEB_DEV2.png';
import web_dev3 from '../../../public/assets/WEB_DEV3.png';

import gymweb1 from '../../../public/assets/GYMWEB1.png';
import gymweb2 from '../../../public/assets/GYMWEB2.png';
import gymweb3 from '../../../public/assets/GYMWEB3.png';
import gymweb4 from '../../../public/assets/GYMWEB4.png';

import crayfish1 from '../../../public/assets/CRAYFISH1.png';
import crayfish2 from '../../../public/assets/CRAYFISH2.png';
import crayfish3 from '../../../public/assets/CRAYFISH3.png';

import chemhub1 from '../../../public/assets/CHEMHUB1.png';
import chemhub2 from '../../../public/assets/CHEMHUB2.png';
import chemhub3 from '../../../public/assets/CHEMHUB3.png';

import esignie1 from '../../../public/assets/ESIGNIE1.png';
import esignie2 from '../../../public/assets/ESIGNIE2.png';
import esignie3 from '../../../public/assets/ESIGNIE3.png';
import esignie4 from '../../../public/assets/ESIGNIE4.png';
import esignie5 from '../../../public/assets/ESIGNIE5.png';
import esignie6 from '../../../public/assets/ESIGNIE6.png';

import chatbot1 from '../../../public/assets/CHATBOTAI1.png';
import chatbot2 from '../../../public/assets/CHATBOTAI2.png';
import chatbot3 from '../../../public/assets/CHATBOTAI3.png';

import fishbot from '../../../public/assets/FISHBOT.png';


const fishrobot = '../../../public/assets/fishrobot.glb';

export const projects = [
  {
    id: 1,
    title: "Python Game OOP-SOLID principles",
    category: "Python Game Development",
    image: py_screen,
    description: "A Python-based game that demonstrates OOP and SOLID principles. Features include modular design, unit testing, and a clean architecture.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "OOP", icon: Code },
      { name: "SOLID", icon: Code },
    ],
    liveUrl: "https://github.com/Eorico/Python-Project",
    githubUrl: "https://github.com/Eorico/Python-Project",
    thumbnails: [py_screen1, py_screen2, py_screen3, py_screen4]
  },
  {
    id: 2,
    title: "MAMBA EO",
    category: "Web Application",
    image: web_dev1,
    description: "A modern, responsive portfolio website with smooth animations and interactive elements. Built with performance and accessibility in mind.",
    technologies: [
      { name: "Html5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
    ],
    liveUrl: "https://port-folio-eo-rnxj.vercel.app/",
    githubUrl: "https://github.com/Eorico/PortFolioEo",
    thumbnails: [web_dev1, web_dev2, web_dev3]
  },
  {
    id: 3,
    title: "Gym Website",
    category: "Web Application",
    image: gymweb1,
    description: "A gym website with class schedules, trainer profiles, and membership plans. Built with React and integrated with a backend for dynamic content.",
    technologies: [
      { name: "Html5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "JavaScript", icon: FaJs },
    ],
    liveUrl: "https://gym-web-5eko.onrender.com",
    githubUrl: "https://github.com/Eorico/Gym-Website",
    thumbnails: [gymweb1, gymweb2, gymweb3, gymweb4]
  },
  {
    id: 4,
    title: "Cray Fish Simulator - Machine Learning",
    category: "Python Game Development",
    image: crayfish1,
    description: "A simulation of crayfish and face detection using machine learning techniques. Built with Python and OpenCV.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "OpenCV", icon: CameraIcon },
      { name: "Machine Learning", icon: Cog },
    ],
    liveUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main",
    githubUrl: "https://github.com/Eorico/CrayFish_Prototype/tree/main",
    thumbnails: [crayfish1, crayfish2, crayfish3]
  },
  {
    id: 5,
    title: "Learning page: Chemistry Hub",
    category: "Web Application",
    image: chemhub1,
    description: "A learning page to learn chemistry concepts built with HTML, CSS, and JavaScript, then integrated with React.",
    technologies: [
      { name: "Html5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
    ],
    liveUrl: "https://chemistry-learning-hub.onrender.com/",
    githubUrl: "https://github.com/Eorico/Chemistry-Learning-Hub",
    thumbnails: [chemhub1, chemhub2, chemhub3]
  },
  {
    id: 6,
    title: "E-SIGNIE",
    category: "Mobile Application",
    image: esignie1,
    description: "A mobile application that allows users to sign documents electronically, built with React Native and integrated with a backend for document management.",
    technologies: [
      { name: "JavaScript", icon: FaJs },
      { name: "React Native", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Firebase", icon: SiFirebase },
    ],
    liveUrl: "/assets/e-signie.apk",
    githubUrl: "https://github.com/Eorico/eSignie-App",
    thumbnails: [esignie1, esignie2, esignie3, esignie4, esignie5, esignie6]
  },
  {
    id: 7,
    title: "EORIX",
    category: "Web Application",
    image: chatbot1,
    description: "Eorix is an AI-powered chatbot built with machine learning to deliver intelligent, context-aware conversations.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Machine Learning", icon: Cog },
      { name: "Blender 3D Model", icon: SiBlender },
      { name: "DeepSeek", icon: MdOutlineWaves },
    ],
    liveUrl: "https://eorix-chat-bot-ai.vercel.app/",
    githubUrl: "https://github.com/Eorico/Eorix_ChatBOT_AI",
    thumbnails: [chatbot1, chatbot2, chatbot3]
  },
  {
    id: 8,
    title: "Device Programming",
    category: "",
    image: fishbot,
    model: fishrobot,
    description: "A line following robot built using Arduino and various electronic components.",
    technologies: [
      { name: "C++", icon: Code },
      { name: "Arduino", icon: Cog },
      { name: "Electronics", icon: MdOutlineWaves },
      { name: "IoT", icon: MdOutlineWaves },
    ],
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
    thumbnails: []
  },
];