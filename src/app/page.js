import Image from "next/image";
import LandingHero from "../../components/LandingHero";
import LandingIntro from "../../components/LandingIntro";
import WorkCourses from "../../components/WorkCourses";
import SchoolCourses from "../../components/SchoolCourses";
import CooperationProjects from "../../components/CooperationProjects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <LandingHero />
      <div className="flex flex-col items-center mt-[200px] md:mt-20">
        <LandingIntro />
        <WorkCourses />
        <SchoolCourses />
        <CooperationProjects />
      </div>
    </main>
  );
}