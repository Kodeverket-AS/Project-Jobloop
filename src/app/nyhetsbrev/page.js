import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import LinkedIn from "../../../public/LinkedIn.png"
import Facebook2 from "../../../public/Facebook2.svg"
import Instagram from "../../../public/Instagram.svg"
import { SocialMediaCard } from "../../../components/socialMediaCard";


export default function Nyhetsbrev({text, link, icon}) {
  
  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen p-0 pb-20">
      <div className="w-4/6 flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          
          <SocialMediaCard text="facebook" link="https://www.facebook.com/JobLoop.Norge/" icon={<FaFacebook className="w-16 h-16 fill-[#1877F2]" />} />
          <SocialMediaCard text="LinkedIn" link="https://www.linkedin.com/company/jobloop/" icon={<FaLinkedin className="w-16 h-16 fill-[#1877F2]" />}/>
         </div>

         <div className="flex flex-row gap-10">
          <SocialMediaCard text="Instagram" link ="https://www.instagram.com/jobloop.norge/" icon={<Image src={Instagram} className="w-16 h-16"/>}/>
          <SocialMediaCard text="Twitter" icon={<FaTwitter className="w-16 h-16 fill-[#1877F2]" />}/>
        </div>
      </div>
    </main>
  )
}
