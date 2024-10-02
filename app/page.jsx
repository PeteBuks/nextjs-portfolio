import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Link from "next/link"

//components
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-5 xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg text-primary">Software Developer</span>
            <h1 className="h1 mb-6">Hello I am<br /><span className="purple_gradient">Nwawuba Peter</span></h1>
            <p className="max-w-[500px] mb-9 text-tertiary">I excel in elegant designs, giving you pixel-perfect designs and a superb experience. I am proficient in various programming languages and technologies, including WordPress CMS</p>

            {/* Download & socials btns */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Link href="./cv.pdf" download="cv">
                <Button
                  variant="secondary" 
                  size="lg"
                  className="uppercase flex items-center justify-center gap-2 ">
                    <span>
                      Download CV
                    </span>
                    <FiDownload className="text-xl"/>
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border-[1.5px] border-primary rounded-full flex justify-center items-center text-primary text-base hover:text-[white] hover:bg-primary trasition-all duration-500"/>
              </div>

            </div>

          </div >
          {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
        </div>
      </div>
      <Stats className="mx-auto"/>
    </section>
  )
}
