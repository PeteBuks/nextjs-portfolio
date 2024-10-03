"use client"

import { FaHtml5, FaCss3, FaJs, FaWordpress, FaReact, FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"


//about Data
const about = {
    title: "About Me",
    description: "I am a web developer who loves creativity and entertainment, I am highly motivated and detail oriented with over 5 years of experience developing responsive websites with wordpress and other web technologies like React.",
    info: [
      {
        fieldName: "Name",
        fieldValue:"Nwawuba Peter",
      },
      {
        fieldName: "Phone",
        fieldValue:"(+234-807 064 0688 )",
      },
      {
        fieldName: "Experience",
        fieldValue:"5+ Years",
      },
      {
        fieldName: "LinkedIn",
        fieldValue:"@PeteBuks_",
      },
      {
        fieldName: "Nationality",
        fieldValue:"Nigerian",
      },
      {
        fieldName: "Email",
        fieldValue:"Petebukason@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue:"Available",
      },
      {
        fieldName: "Name",
        fieldValue:"Nwawuba Peter",
      },
      {
        fieldName: "Language",
        fieldValue:"English",
      },
    ]
  }


//experience data
const experience = {
  title: "My experience",
  description: "Over the years, I have picked up a few experiences during my web development journey, I hope ot add a lot more",
  items: [
    {
      company: "Freelancer",
      position: "fullstack development",
      duration: "2023 - present",
    },
    {
      company: "Divine Favour Computers",
      position: "Frontend Developer",
      duration: "2023 (6-months)",
    },
    {
      company: "Bk Reacts (YouTube)",
      position: "Video editor",
      duration: "2023 - 2024",
    },
    {
      company: "Web Labs Ng",
      position: "Javascript/WordPress Instructor",
      duration: "2022 - 2023",
    },
    {
      company: "Wordpress developer",
      position: "Maymat fashion store",
      duration: "2020 - 2022",
    },
    
    {
      company: "Immakulate Inc",
      position: "WordPress developer Intern",
      duration: "2018 - 2019",
    }
  ]
}

//education data
const education = {
  title: "My education",
  description: "Education have been a very important factor to me for both learning and my social circle. Here are some of them",
  items: [
    {
      institute: "FUTO, Nigeria",
      degree: "BTech Mathematics",
      duration: "2018 - 2024"
    },
    {
      institute: "Immakulate Inc",
      degree: "Web Specialist Certificate",
      duration: "2017 (6-months)"
    },
    {
      institute: "AFCS Agbani, Enugu",
      degree: "Secondary school 0 level degree",
      duration: "2012 - 2018"
    },      
  ]
}

//skills data
const skills = {
  title: "My skills",
  description: "I have learned more than a hand full of skills in my webdev journey. Here are some of them",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.jS"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaWordpress/>,
      name: "wordpress CMS"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
  ]
}


const Resume = () => {
  return (
    <motion.div initial = {{opacity:0}} 
          animate={{
            opacity: 1, 
            transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}}}
          className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5">
            <TabsTrigger value= "experience">Experience</TabsTrigger>
            <TabsTrigger value= "education">Education</TabsTrigger>
            <TabsTrigger value= "skills">Skills</TabsTrigger>
            <TabsTrigger value= "about">About Me</TabsTrigger>
          </TabsList>

        {/* content */}

        <div className="min-h-[70vh] w-full"> 


          {/* experience */}
          <TabsContent value="experience">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="lg:text-4xl text-2xl font-bold purple_gradient">{experience.title}</h3>
              <p className="max-w-[680px] text-sm text-tertiary mx-auto xl:mx-0">{experience.description}</p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=>{
                    return <li key={index} className="flex flex-col justify-center items-center lg:items-start h-[184px] py-6 px-10 gap-1 frosty_glass">
                      <span>{item.duration}</span>
                      <h5 className="font-semibold text-tertiary text-lg max-w-[260px] text-center lg:text-left min-h-[60px]">{item.position}</h5>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p>{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>


          {/* education */}
          <TabsContent value="education">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold purple_gradient">{education.title}</h3>
              <p className="max-w-[680px] text-sm text-tertiary mx-auto xl:mx-0">{education.description}</p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=>{
                    return <li key={index} className="flex flex-col justify-center items-center lg:items-start h-[184px] py-6 px-10 gap-1 frosty_glass">
                      <span>{item.duration}</span>
                      <h5 className="font-semibold text-tertiary text-lg max-w-[260px] text-center lg:text-left min-h-[60px]">{item.degree}</h5>
                      <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-sm">{item.institute}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>


          {/* skills */}
          <TabsContent value="skills">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold purple_gradient">{skills.title}</h3>
              <p className="max-w-[680px] text-sm text-tertiary mx-auto xl:mx-0">{skills.description}</p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center">
                {skills.skillList.map((skill, index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="flex w-full h-[150px] justify-center items-center frosty_glass">
                          <div className="text-6xl text-[#646464] flex justify-center items-center h-[150px] w-[150px] hover:scale-[1.2] transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                         <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>


          <TabsContent value="about">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold purple_gradient">{about.title}</h3>
              <p className="max-w-[680px] text-sm text-tertiary mx-auto xl:mx-0">{about.description}</p>

              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index)=>{
                  return <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                    <span className="text-tertiary text-sm">{item.fieldName}:</span>
                    <span className="text-base">{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
        </Tabs>
      </div>
    </motion.div> 
  )
}

export default Resume
