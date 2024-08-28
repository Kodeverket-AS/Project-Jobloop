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

export default async function Spillbasert() {
  const data = await getData();
  const spillbasert = data.tiltak[4];
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSub content={spillbasert} />
      <CourseSummary content={spillbasert} course={"Spillbasert"} />
      <Curriculum content={spillbasert} course={"Spillbasert"} />
      {/*<CourseUsefullness content={spillbasert} course={"Spillbasert"} />*/}
      <LeaderSection content={spillbasert} leader={"Sjur Hovi"} position={"Kursleder"} />
      {/*<ForCompanies content={spillbasert} />*/}
      {/*<ForSchool content={spillbasert} situation={"skole"} />*/}
      {/*<Places content={spillbasert} />*/}
    </main>
  );
}
