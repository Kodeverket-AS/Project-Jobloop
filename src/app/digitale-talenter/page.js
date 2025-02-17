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

export default async function DigitaleTalenter() {
  const data = await getData();
  const digTal = data.tiltak[2];
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSub content={digTal} />
      <CourseSummary content={digTal} course={"Digitale Talenter"} />
      <Curriculum content={digTal} course={"Digitale Talenter"} />
      {/*<CourseUsefullness content={digTal} course={"Digitale Talenter"} />*/}
      <LeaderSection content={digTal} leader={"Frode Moldestad Bøe"} position={"Kursleder"} />
      {/*<ForCompanies content={digTal} />*/}
      {/*<ForSchool content={digTal} situation={"samarbeidspartner"} />*/}
      {/*<Places content={digTal} />*/}
    </main>
  );
}
