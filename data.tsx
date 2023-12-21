import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsAndroid2 } from "react-icons/bs";
import { IProject, Service, Skill } from "./types";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about: "Adept at developing attractive and scalable Single Page Applications using <b>HTML</b>, <b>CSS</b>, <b>React.js</b>, and <b>Next.js</b> to elevate the user experience.",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about: "I've had the opportunity to work on REST APIs, utilizing the strengths of <b>MongoDB</b> for efficient database management and on <b>Express.js</b> with <b>Node.js</b> for server-side development.",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "<b>Codeforces Specialist</b> and <b>LeetCode Knight</b> with solid proficiency in <b>C++</b>, showcasing achievements in competitive coding.",
    },
    {
        Icon: BsAndroid2,
        title: "Android Development",
        about: "I've had the opportunity to work in <b>Android Studio</b> using Java for a while, and I've also integrated <b>Firebase</b> into my projects along the way. ",
    },
    {
        Icon: AiOutlineAntDesign,
        title: "Position of Responsiblities",
        about: "Engaged in two college hubs, serving as Vice President in one and Coordinator in the other, contributing leadership and technical skills in technical roles.",
    },
    {
        Icon: LiaChalkboardTeacherSolid,
        title: "Teaching Assistant",
        about: "Worked part-time at Ask Senior, assisting students enrolled in their CP course by addressing their doubts and providing support.",
    },

];

export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "C++",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "JavaScript",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "React",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Express",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Node",
        level: "60",
    },
];

export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Git/Github",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "Firebase",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "ChatGPT",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "VS Code",
        level: "70",
    },
];

export const projects: IProject[] = [
    {
        name: "COVID Tracker",
        description:
            "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "Algorithm Visualizer",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
            "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        name: "Dev Talks",
        image_path: "/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
            "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Bootstrap",
        ],
    },

    {
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
    },

    {
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
    },
    {
        name: "Football App",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
];