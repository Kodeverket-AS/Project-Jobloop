
import Image from "next/image"


export function SocialMediaCard({text, link, icon}){
    return(
       <div className="w-full flex flex-row p-12 gap-10 rounded-md shadow-lg">
        <div>
        {icon}
         {/* <Image src={icon} className="max-w-24"/> */}
        </div>
        <div className="flex flex-col">
           <h3>{text}</h3>
           <a href={link}>
           <p>Se mer</p>
           </a>
        </div>
       </div>

    )
}