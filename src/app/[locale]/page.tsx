import LandingIntro from '@/components/feature/landing/LandingIntro';
import LandingHero from '@/components/feature/landing/LandingHero';
import SchoolCourses from '@/components/feature/landing/SchoolCourses';
import WorkCourses from '@/components/feature/landing/WorkCourses';
import CooperationProjects from '@/components/feature/landing/CooperationProjects';
import JobloopSuccess from '@/components/feature/landing/JobloopSuccess';
import ContactComponent from '@/components/feature/landing/ContactComponent';

export default function Home() {
  return (
    <>
      <LandingHero />
      <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto mb-16 px-4'>
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
