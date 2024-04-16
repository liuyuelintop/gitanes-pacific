import { PARTNERS } from "../../constants"
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

export default function Partners() {
    return (
        <div className="mt-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="text-center text-2xl sm:text-3xl text-cyan-800 mb-6">Our Partners</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex justify-center items-center flex-wrap mt-8 gap-10">
                {PARTNERS.map((partner, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(partner.duration)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl  p-4">
                        <img

                            className="rounded"
                            style={{ maxWidth: '150px', maxHeight: '100px' }}
                            src={partner.url}
                            alt={partner.name}
                        />
                    </motion.div>
                ))
                }
            </motion.div>
        </div>
    )
}
