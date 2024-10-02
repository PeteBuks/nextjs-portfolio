"use client"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import { motion } from "framer-motion"
import ContactForm from "@/components/ContactForm"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 807 064 0688",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Petebukason@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Igbo-Etche, Port-Harcort, Nigeria",
  },
]

const send = async () =>{
  await sendMail({
    name: document.getElementById("fullName"),
    to: document.getElementById("email"),
    subject: document.getElementById("subject"),
    text: document.getElementById("emailbody"),
  })
}

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
      opacity: 1,
      transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}
      }}
      className="py-6"
    >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <ContactForm />
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((info, index)=>{
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] frosty_glass text-primary flex items-center justify-center">
                      <div className="text-[30px]">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-tertiary">{info.title}</p>
                      <p className="text-lg">{info.description}</p>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default Contact
