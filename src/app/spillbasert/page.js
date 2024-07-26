import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";
import Curriculum from "../../../components/Curriculum";
import CourseUsefullness from "../../../components/CourseUsefulness";
import LeaderSection from "../../../components/LeaderSection";

export default async function Spillbasert() {
  const data = await getData();
  const spillbasert = data.tiltak[4];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={spillbasert} />
      <CourseSummary content={spillbasert} course={"Spillbasert"} />
      <Curriculum content={spillbasert} course={"Spillbasert"} />
      <CourseUsefullness content={spillbasert} course={"Spillbasert"} />
      <LeaderSection content={spillbasert} leader={"Sjur Hovi"} position={"Kursleder"} />
    </main>
  );
}
