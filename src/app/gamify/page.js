import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";
import Curriculum from "../../../components/Curriculum";
import CourseUsefullness from "../../../components/CourseUsefulness";
import LeaderSection from "../../../components/LeaderSection";
import ForCompanies from "../../../components/ForCompanies";
import ForSchool from "../../../components/ForSchool";
import Places from "../../../components/Places";

export default async function Gamify() {
  const data = await getData();
  const gamify = data.tiltak[1];
  return (
    <main className="flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16">
      <HeroSub content={gamify} />
      <CourseSummary content={gamify} course={"Gamify"} />
      <Curriculum content={gamify} course={"Gamify"} />
      <LeaderSection 
        leaders={[
          {
            name: "Kim Brurok Stokkeland",
            position: "Teamleder og gamingpedagog, Gamify Bergen og Stavanger",
            image: "/Kim.jpg",
            description: [
              {
                _type: "block",
                children: [
                  {
                    _type: "span",
                    text: "Kim Brurok Stokkeland\nkim@jobloop.no\n+47 97 46 91 10"
                  }
                ]
              }
            ]
          },
          {
            name: "Sjur Hovi", 
            position: "Kursleder og spillpedagog, Gamify Oslo og Digitalt",
            image: "/sjur.jpeg",
            description: [
              {
                _type: "block",
                children: [
                  {
                    _type: "span",
                    text: "Sjur Hovi\nsjur@playwell.no\n+47 955 22 301"
                  }
                ]
              }
            ]
          }
        ]} 
      />
      <ForSchool content={gamify} situation={"skole"} />
    </main>
  );
}
