import { ABOUT_US } from "../../constants";
import { motion } from "framer-motion"

export default function AboutUs() {
    return (
        <div className="border-b border-neutral-900 mt-6 pb-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-10">About
                    <span className="text-neutral-500"> Us</span>
                </motion.h2>

                <div className="flex flex-col flex-warp sm:justify-center">
                    {ABOUT_US.map((obj, index) => (
                        <div className="mb-8 flex flex-wrap sm:justify-center items-center" key={index}>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full flex justify-center lg:w-1/2">
                                <img
                                    className="rounded-lg mb-6"
                                    width={400}
                                    height={400}
                                    src={obj.url}
                                    alt={obj.title}
                                />
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/2">
                                <h3 className="text-xl text-center mb-4">
                                    {obj.title}
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-xl mb-3">{obj.description}</p>
                            </motion.div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    );
}
