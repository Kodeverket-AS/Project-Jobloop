import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";
import Curriculum from "../../../components/Curriculum";

export default async function DigitaleTalenter() {
  const data = await getData();
  const digTal = data.tiltak[2];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={digTal} />
      <CourseSummary content={digTal} course={"Digitale Talenter"} />
      <Curriculum content={digTal} course={"Digitale Talenter"} />
    </main>
  );
}
