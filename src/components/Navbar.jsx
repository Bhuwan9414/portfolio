import { CiHome } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


export default function () {
    return <div className="fixed top-0 flex justify-center w-full bg-black shadow-md">
        <div className="flex justify-center gap-20 p-4 mt-6 h-15 w-max">


            <div className="group relative flex flex-col items-center">
                <a href="#">
                    <CiHome className="text-white text-3xl hover:scale-200 transition-transform duration-300" />
                </a>
                <span className="absolute -top-6 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Home
                </span>
            </div>

            <div className="group relative flex flex-col items-center">
                <a href="#projects">
                    <FaProjectDiagram className="text-white text-3xl hover:scale-200 transition-transform duration-300" />
                </a>
                <span className="absolute -top-6 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Projects
                </span>
            </div>

            <div className="group relative flex flex-col items-center">
                <a href="#contact">
                    <GrContactInfo className="text-white text-3xl hover:scale-200 transition-transform duration-300" />
                </a>
                <span className="absolute -top-6 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Contact
                </span>
            </div>

            <div className="group relative flex flex-col items-center">
                <a
                    href="https://www.linkedin.com/in/bhuwan-suthar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CiLinkedin className="text-white text-3xl hover:scale-200 transition-transform duration-300" />
                </a>
                <span className="absolute -top-6 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                </span>
            </div>

            <div className="group relative flex flex-col items-center">
                <a href="https://github.com/Bhuwan9414"
                   target="_blank"
                >
                    <FaGithub className="text-white text-3xl hover:scale-200 transition-transform duration-300" />
                </a>
                <span className="absolute -top-6 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    GitHub
                </span>
            </div>
        </div>
    </div>
}
