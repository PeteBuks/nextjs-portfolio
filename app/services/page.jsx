"use client"

import Link from "next/link"
import { motion } from "framer-motion"


const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I excel in elegant designs, giving you pixel-perfect designs and a superb eperience",
  },
  {
    num: "02",
    title: "UI/UX Designer",
    description: "I excel in elegant designs, giving you pixel-perfect designs and a superb eperience",
  },
  {
    num: "03",
    title: "Content creation",
    description: "I excel in elegant designs, giving you pixel-perfect designs and a superb eperience",
  },
  {
    num: "04",
    title: "SEO",
    description: "I excel in elegant designs, giving you pixel-perfect designs and a superb eperience",
  },
]  

const Services = () => {
 
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial = {{opacity:0}} 
          animate={{
            opacity: 1, 
            transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}}}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
          {services.map((service, index)=>{
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div>
                <div className="text-5xl text_outline font-extrabold text-[transparent] hover:text_outline_hover">{service.num}</div>
              </div>
                <h1 className="text-4xl font-extrabold purple_gradient">{service.title}</h1>
                <p>{service.description}</p>
                <div className="border-b border-secondary w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
