import Image from "next/image";
import LandingHero from "../../components/LandingHero";
import LandingIntro from "../../components/LandingIntro";
import WorkCourses from "../../components/WorkCourses";
import SchoolCourses from "../../components/SchoolCourses";
import CooperationProjects from "../../components/CooperationProjects";
import JobloopSuccess from "../../components/JobloopSuccess";
import ContactComponent from "../../components/ContactComponent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <LandingHero />
      <div className="container flex flex-col items-center ">
        <LandingIntro />
        <div id="courses">
          <WorkCourses />
          <SchoolCourses />
        </div>
        <CooperationProjects />
        <JobloopSuccess />
        <ContactComponent />
      </div>
    </main>
  );
}
