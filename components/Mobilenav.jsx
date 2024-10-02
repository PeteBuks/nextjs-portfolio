import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const MobileNav = () => {


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
        },
    ]

    const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-5 justify-center items-center z-10">
        {links.map((link, index)=>{
            return (
            <Link href={link.path} key={index}
                className= {`${link.path === pathname && "border-b-[1.5px] border-primary text-primary"} capitalize font-medium text-sm hover:text-primary hover:border-b-[1.5px] hover:border-primary`}
                >
                {link.name}
            </Link>)
        })}
    </nav>
  )
}

export default MobileNav