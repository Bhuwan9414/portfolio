import { CiMail } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { motion } from "framer-motion";


export default function () {

    return <div className="flex justify-center mt-45 ">
        <div className="flex flex-col justify-center h-max w-150 ">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-white font-medium text-7xl">I'm Bhuwan.</h1>
                <p className="text-white mt-5 text-lg">"As a Full-Stack Developer focused on the MERN stack and DevOps practices, I specialize in building performant APIs and interactive frontends. I enjoy working across the development lifecycle — from designing backend logic to exploring cloud-based deployment and automation."</p>

                <div className="text-3xl text-white flex justify-center mt-15 gap-5 ">

                    <div className="group relative flex flex-col items-center">
                        <a href="mailto:sutharbhuwan2@gmail.com">
                            <CiMail className="text-white text-3xl hover:scale-200 transition-transform duration-300" />
                        </a>
                        <span className="absolute -top-6 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Mail
                        </span>
                    </div>

                    <div className="group relative flex flex-col items-center">
                        <a href="/resume.pdf">
                            <MdOutlineFileDownload className="text-white text-3xl hover:scale-200 transition-transform duration-300" />
                        </a>
                        <span className="absolute -top-6 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Resume
                        </span>
                    </div>

                </div>

                <div className="text-4xl text-white flex justify-center mt-30 hover:scale-200 transition-transform duration-200">
                    <a href="#projects">
                        <IoIosArrowDown />
                    </a>
                </div>
            </motion.div>
        </div>
    </div>

}