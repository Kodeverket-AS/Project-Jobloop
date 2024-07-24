import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/courseSummary";

export default async function Teamwork() {
  const data = await getData();
  const teamwork = data.tiltak[6];
  console.log(teamwork);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={teamwork} />
      {/*<CourseSummary content={teamwork} course={"Teamwork"} />*/}
    </main>
  );
}
