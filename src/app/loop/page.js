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

export default async function Loop() {
  const data = await getData();
  const loop = data.tiltak[7];
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSub content={loop} />
      {/*<CourseSummary content={loop} course={"Loop"} />*/}
      {/*<Curriculum content={loop} course={"Loop"} />*/}
      {/*<CourseUsefullness content={loop} course={"Loop"} />*/}
      {/*<LeaderSection content={loop} leader={"TBC"} position={"TBC"} />*/}
      {/*<ForCompanies content={loop} />*/}
      {/*<ForSchool content={loop} situation={"samarbeidspartner"} />*/}
      {/*<Places content={loop} />*/}
    </main>
  );
}
