import Image from 'next/image';
import LandingHero from '../../components/LandingHero';
import LandingIntro from '../../components/LandingIntro';
import WorkCourses from '../../components/WorkCourses';
import SchoolCourses from '../../components/SchoolCourses';
import CooperationProjects from '../../components/CooperationProjects';
import JobloopSuccess from '../../components/JobloopSuccess';
import ContactComponent from '../../components/ContactComponent';

export default function Home() {
  return (
    <>
      <LandingHero />
      <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto mb-16'>
        <LandingIntro />
        <SchoolCourses />
        <WorkCourses />
        <CooperationProjects />
        <JobloopSuccess />
        <ContactComponent />
      </main>
    </>
  );
}
