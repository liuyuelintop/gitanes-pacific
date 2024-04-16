import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

export default function Hero({ hero }) {
    return (
        <div className="flex flex-col  mt-10 pb-4">
            {hero.url && (
                <motion.img src={hero.url}
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="mt-8 p-3 max-h-[600px] w-full object-cover" />
            )}
            {
                hero.title && (
                    <motion.h1
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="text-xl lg:text-2xl mt-2 sm:mt-4  text-neutral-300 text-center">{hero.title}</motion.h1>
                )
            }
            {hero.description && (
                <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="mt-2 text-lg lg:text-2xl  text-neutral-400 text-center">{hero.description}
                </motion.p>
            )}
        </div>
    )
}
