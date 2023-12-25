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
        name: "VSCode",
        level: "70",
    },
];

export const projects: IProject[] = [
    {
        id: 1,
        name: "CodersHub",
        displayName : "Demo Video",
        description:
            "CodersHub simplifies access to coding profiles, addressing challenges faced by coders on platforms like LeetCode and Codeforces via mobile devices. The mobile application streamlines the process of checking profiles and ratings, eliminating the need for taking screenshots or repeated logins. With its user-friendly interface, CodersHub consolidates coding profiles, providing a seamless experience for tackling daily problems from various platforms in one place.",
        image_path: "/images/CodersHub.png",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/HarshSharma20503/CodersHub",
        category: ["android","firebase"],
        key_techs: ["Android Studio", "Java", "Web Scraping", "Firebase Auth", "Firebase Storage", "Firebase Messaging", "Python"],
    },
    {
        id: 2,
        name: "Concadmic",
        displayName : "Project",
        image_path: "/images/Concadmic.png",
        deployed_url: "https://concadmic.web.app/",
        github_url: "https://github.com/HarshSharma20503/Concadmic",
        category: ["react","firebase"],
        description:
            "Concadmic is a comprehensive and a user-friendly platform where several blogs of experienced seniors along with all required academic resources are available and easily accessible to all the students of their particular college. It also serves as a networking platform where any student can easily reach out to their seniors or peers. Apart from the blogging feed and the academic resources section, there is an events section where all the upcoming college events of that college and other colleges will be posted.",
        key_techs: ["React", "Firebase Auth", "Firebase Storage", "Bootstrap"],
    },
    {
        id: 3,
        name: "JIIT OPTICA Official Website",
        displayName : "Project",
        image_path: "/images/OpticaWebsite.png",
        deployed_url: "https://jiitopticachapter.in/",
        github_url: "https://github.com/jiitopticachapter/optica-website-2023",
        category: ["react"],
        description:
            "As the virtual face of JIIT Optica Chapter, our official website serves as a dynamic hub for prospective members, fostering meaningful connections and providing crucial insights into our rich history of events. Not only does it act as a gateway for future involvement, but it also stands as a testament to our accomplishments, offering sponsors a comprehensive view of our impactful journey.",
        key_techs: [
            "React",
            "React-router-dom",
            "Saas",
            "Bootstrap",
        ],
    },

    {
        id: 4,
        name: "Portfolio",
        displayName : "Project",
        image_path: "/images/Portfolio.png",
        deployed_url: "https://portfolio-harsh-sharmas-projects-6287656d.vercel.app/",
        github_url: "https://github.com/harshsharma20503/portfolio",
        category: ["Next"],
        description:
            "Explore my portfolio project—a concise compilation offering a comprehensive overview of my diverse skill set and experiences. Through an intuitive interface, it seamlessly presents a spectrum of projects, emphasizing simplicity, functionality, and practicality, providing a nuanced reflection of my professional journey.",
        key_techs: ["Next", "Typescript", "Tailwind"],
    },
    {
        id: 5,
        name: "Employee Record Management System",
        displayName : "None",
        image_path: "/images/EmployeeRecord.png",
        deployed_url: "/",
        github_url: "https://github.com/HarshSharma20503/Employee-Record-Management-System",
        category: ["C++"],
        description:
            "This project is an Employee Record Management System implemented in C++. It allows users to perform various operations related to employee records, such as inserting, deleting, searching, modifying, and viewing employee records.",
        key_techs: ["C++", "AVL Tree", "Trie"],
    },
    {
        id: 6,
        name: "NotesApp",
        displayName : "Demo Video",
        description:
            "NotesApp is a simple Android application developed using Android Studio, Java, and Firebase. This app allows users to create, update, and delete notes, while also incorporating Firebase authentication for user management. Additionally, Firebase Storage is utilized for efficient and secure storage of media files associated with the notes.",
        image_path: "/images/NotesApp.png",
        deployed_url: "https://www.youtube.com/watch?v=K2l7DIuo5Ik",
        github_url: "https://github.com/HarshSharma20503/NotesApp",
        category: ["android","firebase"],
        key_techs: ["Android Studio", "Java","Firebase Auth", "Firebase Storage"],
    },
];