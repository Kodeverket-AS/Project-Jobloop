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

export default async function LearnWell() {
  const data = await getData();
  const learnWell = data.tiltak[0];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={learnWell} />
      <CourseSummary content={learnWell} course={"LearnWell"} />
      {/*<Curriculum content={learnWell} course={"LearnWell"} />*/}
      <CourseUsefullness content={learnWell} course={"LearnWell"} />
      <LeaderSection content={learnWell} leader={"Beate Johnsen & Tom Mæland"} position={"Kursleder"} />
      {/*<ForCompanies content={learnWell} />*/}
      {/*<ForSchool content={learnWell} situation={"Skole"} />*/}
      <Places content={learnWell} />
    </main>
  );
}
