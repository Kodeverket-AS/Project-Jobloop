import WorkCourses from '@/components/WorkCourses';
import CooperationProjects from '@/components/CooperationProjects';
import JobloopSuccess from '@/components/JobloopSuccess';
import ContactComponent from '@/components/ContactComponent';
import LandingIntro from '@/components/feature/landing/LandingIntro';
import LandingHero from '@/components/feature/landing/LandingHero';
import SchoolCourses from '@/components/feature/landing/SchoolCourses';

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto mb-16'>
      <LandingHero />
      <LandingIntro />
      <SchoolCourses />
      <WorkCourses />
      <CooperationProjects />
      <JobloopSuccess />
      <ContactComponent />
    </main>
  );
}
