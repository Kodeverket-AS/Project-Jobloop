"use client"
import Image from "next/image"


export function SocialMediaCard({text, link, icon}){
  

   const handleClick = () => {
     window.location.href = link;}
  


    return(
      <a href={link}className="w-full flex justify-center">
       <div className="w-full  flex flex-row p-12 gap-10 rounded-xl shadow-lg items-center ">
         <div>
         {icon}
            {/* <Image src={icon} className="max-w-24"/> */}
         </div>
         <div className="flex flex-col">
            <h3>{text}</h3>
            
            <p onClick={() => handleClick} className="hover:text-jobloop-secondary-green">Se mer</p>
         </div>
       </div>
       </a>
     
    )
}