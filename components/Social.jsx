import Link from "next/link"
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


 const socials = [
        {icon: <FaGithub />, path: "https://github.com/PeteBuks"},
        {icon: <FaXTwitter />, path: "https://x.com/LustyLuffy57294"},
        {icon: <FaWhatsapp />, path: "https://wa.me/+2348070640688"},
        {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/peter-nwawuba-b84a1831a/"},
    ];

const Social = ({containerStyles, iconStyles}) => { 
    
    return <div className={containerStyles}>
        {socials.map((item, index)=>{
            return <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
``}

export default Social