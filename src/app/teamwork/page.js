import Image from 'next/image';
import { getData } from '../../../lib/GetData';
// import HeroSub from "@/components/herosub";
import HeroSub from '@/components/herosubTeamwork';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import CourseUsefullness from '@/components/CourseUsefulness';
import LeaderSection from '@/components/LeaderSection';
import ForCompanies from '@/components/ForCompanies';
import ForSchool from '@/components/ForSchool';
import Places from '@/components/Places';
import { ExternalLinkButton } from '@/components/buttons';
export default async function Teamwork() {
  const data = await getData();
  const teamwork = data.tiltak[6];
  console.log(teamwork);
  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] my-16 mx-auto'>
      <HeroSub content={teamwork} />
    </main>
  );
}
