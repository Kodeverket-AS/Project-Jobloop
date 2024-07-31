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
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={gamify} />
      <CourseSummary content={gamify} course={"Gamify"} />
      <Curriculum content={gamify} course={"Gamify"} />
      <CourseUsefullness content={gamify} course={"Gamify"} />
      <LeaderSection content={gamify} leader={"Kim Brurok Stokkeland & Sjur Hovi"} position={"Kursleder"} />
      {/*<ForCompanies content={gamify} />*/}
      <ForSchool content={gamify} situation={"skole"} />
      <Places content={gamify} />
    </main>
  );
}
