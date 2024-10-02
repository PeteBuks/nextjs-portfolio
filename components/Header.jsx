"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'


//componenrs
import Nav from './Nav'
import MobileNav from './Mobilenav'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const Header = () => {

    {/* Click event */}
    const [isClicked, setisClicked] = useState(false)
    const handleClick = () =>{
        setisClicked(!isClicked)
    }
    const pathname = usePathname()

    useEffect(() => {
      if (isClicked) {
        document.body.style.overflow = "hidden",
        window.scrollTo(0, 0)
      }else{
        document.body.style.overflow = "scroll"
      }
    });

    useEffect(() =>{
        setisClicked(false)
    }, [pathname])
    

  return (
    <header className='py-1 sm:py-2 xl:py-3 text-tertiary'>
        <div className='container mx-auto flex justify-between items-center'>

            {/* Logo */}
            <Link href="/" className='flex'>
                <Image 
                    src="/assets/images/petebuks_transparent.png"
                    width={60}
                    height={60}
                    alt='logo'
                />
                <h1 className='text-7xl font-semibold text-accent rounded-full'>.</h1>
            </Link>

             {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
             <Nav />
             <Link href="/contact">
                <Button>Hire Me</Button>
             </Link>
            </div>

             {/* Mobile nav */}
            
        
            <div className='xl:hidden'>
                <button className= "inline-block w-[20px] items-center" onClick={handleClick}>
                    <div className={`w-[100%] h-[2px] bg-primary mb-[2px] transform ease-[cubic-bezier(0.28, 0.55, 0.385, 1.65)] duration-300 ${ isClicked ? "translate-y-[6.3px] rotate-45" : ""}`}></div>
                    <div className={`w-[100%] h-[2px] bg-primary transform ease-[cubic-bezier(0.28, 0.55, 0.385, 1.65)] duration-300 ${ isClicked ? "translate-y-[-6.3px] -rotate-45" : ""}`}></div>
                     
                </button>
            </div>
             
        </div>

        {/* Mobile dropdown */}
        

        
        <div className={`xl:hiiden opacity-0 transition-all duration-300 transform ${isClicked ?  "pt-10 block opacity-100 h-[90vh] translate-y-[0vh]"  : "h-[0px] translate-y-[-80vh]"}`}>
            <MobileNav
              onClick={isClicked}
              className="">
            </MobileNav>
        </div>
        
    </header>
  )
}

export default Header