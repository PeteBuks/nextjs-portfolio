"use client"

import CountUp from "react-countup"

const stats = [
    {
        num: "6",
        text: "Years of experience",
    },
    {
        num: "14",
        text: "Projects completed",
    },
    {
        num: "5",
        text: "Total clients worldwide",
    },
    {
        num: "8",
        text: "Technologies mastered",
    },
]

const Stats = () => {
  return (
    <section className="pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 mx-auto max-w-[80vh] xl:max-w-none">
                {stats.map((item, index)=>{
                return <div key={index}
                    className="flex-1 flex gap-3 items-center justify-center xl:justify-start">
                    <CountUp 
                    end= {item.num}
                    delay={2}
                    duration={5}
                    className="text-4xl xl:text-6xl font-extrabold"
                    />
                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px] leading-snug text-tertiary"}`}>
                        {item.text}
                    </p>
                </div>
            })}
            </div>
        </div>
    </section>
  )
}

export default Stats