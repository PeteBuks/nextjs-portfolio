"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

{/* Links */}

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    }
    ]

const Nav = () => {

    const pathname = usePathname()

  return (
    <nav className="flex gap-10">
        {links.map((link, index)=>{
            return (
            <Link href={link.path} key={index}
                className= {`${link.path === pathname && "border-b-[2px] border-primary text-primary"} capitalize font-medium hover:text-primary hover:border-b-[2px] hover:border-primary`}
                >
                {link.name}
            </Link>)
        })}
    </nav>
  )
}

export default Nav