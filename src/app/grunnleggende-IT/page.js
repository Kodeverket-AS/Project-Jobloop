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

export default async function GrunnleggendeIT() {
  const data = await getData();
  const gIT = data.tiltak[3];
  return (
    <main className="flex flex-col items-center gap-12 w-full max-w-[1536px] mx-auto">
      <HeroSub content={gIT} />
      <CourseSummary content={gIT} course={"Grunnleggende IT"} />
      <Curriculum content={gIT} course={"Grunnleggende IT"} />
      <LeaderSection content={gIT} leader={"Oda Kristin Abelseth"} position={"Kursleder"} />
    </main>
  );
}
