"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
            initial= {{opacity: 0}}
            animate= {{
            opacity: 1,
            transition: {delay: 1.8, duration: 0.4, ease: "easeIn"}}}>
            <motion.div 
                initial= {{opacity: 0}}
                animate= {{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}}}
                className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] mix-blend-darken absolute">
                <Image 
                    src="/assets/images/pbprofile1_png.png" priority quality={100} fill
                    alt="profile"
                    className="object-contain rounded-full ml-[5px]"
                />
            </motion.div >

            {/* Animated Circle */}
            <motion.svg 
                className="w-[260px] xl:w-[466px] h-[260px] xl:h-[466px]"
                fill="transparent"
                viewBox="0 0 468 468"
                xmlns="http://w3.org/2000/svg">

                <motion.circle 
                cx="233"
                cy="233"
                r="233"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial= {{strokeDasharray: "24 10 0 0"}}
                animate= {{
                    strokeDasharray: ["50 120 25 25", "16 25 92 22", "4 250 22 22"],
                    rotate: [120, 260] 
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo