// import { motion } from 'framer-motion';

// export default function ProjectSection() {
//     return (
//         <div className="flex flex-col items-center mt-20 ">

//             <h1 className='text-white text-5xl items-center font-semibold'>Things I’ve Built</h1>

//             <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05 }} // Gentle grow effect
//                 transition={{ duration: 0.3, ease: 'easeInOut' }}
//                 viewport={{ once: true }}
//                 className="w-[1300px] bg-[#111827] p-5 rounded-lg shadow-lg mt-20  text-white cursor-pointer border-white-500 border-2 rounded-lg"
//             >

//                 <a href="#" target="_blank" rel="noopener noreferrer">
//                     <h1 className="text-4xl mb-3 font-semibold mb-5">Todo Application</h1>
//                     <p>
//                         Built a full-stack task manager with React Hooks, and MongoDB. Secured APIs with Express
//                         and designed a responsive UI using Tailwind CSS. Learned full-stack architecture and state
//                         driven UI development.
//                     </p>
//                 </a>
//             </motion.div>

//             <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05 }} // Gentle grow effect
//                 transition={{ duration: 0.3, ease: 'easeInOut' }}
//                 viewport={{ once: true }}
//                 className="w-[1300px] bg-[#111827] p-5 rounded-lg shadow-lg mt-10 mb-20 text-white cursor-pointer border-white-500 border-2 rounded-lg"
//             >
//                 <h1 className="text-4xl mb-3 font-semibold mb-5">Project No 2</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum accusantium
//                     amet aliquam quod beatae voluptas nemo voluptates tempore recusandae quo officiis voluptatibus, animi
//                     vitae itaque error dolorum saepe fuga expedita explicabo tenetur totam ratione soluta! Saepe eius qui quibusdam?
//                 </p>
//             </motion.div>
//         </div>
//     );
// }


import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectSection() {
    return (
        <div id='projects' className="flex flex-col items-center mt-20">

            <h1 className="text-white text-5xl font-semibold">Things I’ve Built</h1>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }} // Gentle grow effect
                transition={{ duration: 0.1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className="bg-[#111827] p-6 rounded-lg shadow-lg border border-white/20 hover:border-blue-400 transition-all w-full max-w-4xl mt-20 mb-15"
            >


                <h2 className="text-3xl font-semibold mb-4 text-white">Todo Application</h2>
                <p className="text-gray-300 mb-5">
                    A full-stack task manager application built using the MERN stack (MongoDB, Express, React, Node.js). Users can add, update, and delete tasks in real time with smooth state management using React Hooks. The backend APIs are secured with proper routing and validations in Express, and data is stored in MongoDB. Designed a fully responsive and modern user interface using Tailwind CSS. This project helped me solidify my understanding of CRUD operations, RESTful APIs, and full-stack application architecture.
                </p>


                <div className="flex flex-wrap gap-2 text-sm text-white">
                    <span className="bg-gray-800 px-2 py-1 rounded">React</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Express</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Node</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">MongoDB</span>
                </div>

                <div className="flex gap-4 mt-5">
                    <a
                        href="https://github.com/Bhuwan9414/Todo-app"
                        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                        target="_blank" rel="noreferrer"
                    >
                        <FiGithub className="inline mr-1" /> Code
                    </a>
                    <a
                        href="https://yourapp.com"
                        className="border text-white border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                        target="_blank" rel="noreferrer"
                    >
                        <FiExternalLink className="inline mr-1" /> Demo
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
