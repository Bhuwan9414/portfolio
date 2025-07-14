import { motion } from 'framer-motion';

export default function ProjectSection() {
    return (
        <div className="flex flex-col items-center mt-20 ">

            <h1 className='text-white text-5xl items-center font-semibold'>My Projects</h1>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }} // Gentle grow effect
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className="w-[1300px] bg-[#111827] p-5 rounded-lg shadow-lg mt-20  text-white cursor-pointer border-white-500 border-2 rounded-lg"
            >

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <h1 className="text-4xl mb-3 font-semibold mb-5">Todo Application</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo voluptates voluptatibus
                        minus atque odio earum fuga perferendis voluptas blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos quasi
                        accusantium corrupti velit totam laborum rem placeat possimus! Optio!
                    </p>
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }} // Gentle grow effect
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className="w-[1300px] bg-[#111827] p-5 rounded-lg shadow-lg mt-10 mb-20 text-white cursor-pointer border-white-500 border-2 rounded-lg"
            >
                <h1 className="text-4xl mb-3 font-semibold mb-5">Project No 2</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum accusantium
                    amet aliquam quod beatae voluptas nemo voluptates tempore recusandae quo officiis voluptatibus, animi
                    vitae itaque error dolorum saepe fuga expedita explicabo tenetur totam ratione soluta! Saepe eius qui quibusdam?
                </p>
            </motion.div>
        </div>
    );
}
