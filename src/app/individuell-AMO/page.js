import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";
import Curriculum from "../../../components/Curriculum";
import CourseUsefullness from "../../../components/CourseUsefulness";

export default async function IndividuellAMO() {
  const data = await getData();
  const amo = data.tiltak[5];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={amo} />
      {/*<CourseSummary content={amo} course={"Individuell AMO"} />*/}
      {/*<Curriculum content={amo} course={"Individuell AMO"} />*/}
      {/*<CourseUsefullness content={amo} course={"Individuell AMO"} />*/}
    </main>
  );
}
