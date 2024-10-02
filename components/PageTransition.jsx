"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();
    return (
      <AnimatePresence>
          <div key={pathname}>
                <motion.div
                initial= {{opacity: 1}}
                animate= {{
                  opacity: 0, transition: {delay: 1, duration: 0.4, ease: "easeInOut"},
                }}
                className="h-screen w-screen fixed top-0 pointer-events-none flex justify-center items-center">
                    <div className="h-[100vh] w-full bg-[white] absolute z-[-1]"></div>
                    <div className="bg_gradient_2"></div>
                    <motion.span className="loader"></motion.span>
                </motion.div>
                {children}
          </div>
      </AnimatePresence>
    )
  }

export default PageTransition