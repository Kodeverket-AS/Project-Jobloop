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

export default async function IndividuellAMO() {
  const data = await getData();
  const amo = data.tiltak[5];
  return (
    <main className="flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16 px-4">
      <HeroSub content={amo} />
    </main>
  );
}
