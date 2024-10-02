"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

//icons
import { FaHtml5, FaCss3, FaJs, FaWordpress, FaGithub, FaLink} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"

import Link from "next/link";
import Image from "next/image";
import SliderBtn from "@/components/SliderBtn";


//Projects
const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "PeteBuks Portfolio",
    description: "This project is in fact this partiular portfolio which took about 2 days to build using Next.Js and Tailwind css",
    stack: [{icon: <SiNextdotjs />, name:"Next.Js"}, {icon: <SiTailwindcss/>, name: "Tailwind Css"}, {icon: <TbBrandFramerMotion />, name: "Framer Motion"}],
    image: "/assets/images/project1.jpg",
    link: "https://petebuks.pro",
    github: "gjhsk",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Solgram Crypto trading",
    description: "I was part of a frontend production team in designing a crypto trading platform although it was end to end",
    stack: [{name: "Html 5", icon: <FaHtml5 />}, {name: "Css 3", icon: <FaCss3 />}, {name: "Javascript", icon: <FaJs />}],
    image: "/assets/images/project2.jpg",
    link: "https://solgramcryptotrading.com/",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Portfolio Project",
    description: "I was asked to make a portfolio template for a client on Wordpress sing Divi theme and Dracula plugin",
    stack: [{name: "WordPress Cms", icon: <FaWordpress />}],
    image: "/assets/images/project3.jpg",
    link: "https://project.petebuks.pro/",
    github: "",
  },
]



const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current index
    setProject (projects[currentIndex])
  }
  

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="
            flex flex-col gap-[20px]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-[transparent] text_outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none transition-all duration-500 capitalize purple_gradient">{project.category} Project</h2>
              {/* project description */}
              <p className="">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-6">
                {project.stack.map((item, index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="text-[35px]">
                          <div>{item.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                         <p className="capitalize">{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>

              <div className="border border-secondary"></div>

              {/* Buttons */}
              <div className="flex gap-6">

                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="flex justify-center items-center group">
                        <FaLink className="text-3xl"/>
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} className={`${project.github === "" ? "hidden" : ""}`}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="flex justify-center items-center group">
                        <FaGithub className="text-3xl"/>
                      </TooltipTrigger>
                      <TooltipContent>Github Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="mb-12 xl:h-[480px]"
              onSlideChange={handleSlideChange}
              >
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[420px] relative group flex justify-center bg-secondary">
                    {/* overlay */}
                    <div className="absolute bg-primary top-0 bottom-0 w-full h-full z-10 opacity-10"></div>

                    {/* Image slide */}

                    <div className="relative w-full h-full">
                      <Image 
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <SliderBtn containerStyles="flex gap-2 right-0 absolute bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-primary text-[white] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work