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
    <main className="flex flex-col items-center gap-12 w-full max-w-[1536px] mx-auto">
      <HeroSub content={gamify} />
      <CourseSummary content={gamify} course={"Gamify"} />
      <Curriculum content={gamify} course={"Gamify"} />
      <LeaderSection content={gamify} leader={"Kim Brurok Stokkeland & Sjur Hovi"} position={"Kursleder"} />
      <ForSchool content={gamify} situation={"skole"} />
    </main>
  );
}
