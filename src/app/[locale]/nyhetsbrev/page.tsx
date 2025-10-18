import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { SocialMediaCard } from '@/components/socialMediaCard';

// todo convert to icon?
import Instagram from '../../../public/Instagram.svg';

export default function Nyhetsbrev() {
  return (
    <main className='w-full max-w-[1536px] flex flex-col items-center justify-center p-0 pb-24 pt-20 lg:pt-0'>
      <h1 className='pb-12 text-jobloop-primary-grey'>Sosiale medier</h1>
      <div className='w-full flex flex-col lg:flex-row gap-10 p-16 justify-center'>
        <SocialMediaCard
          text='Facebook'
          link='https://www.facebook.com/JobLoop.Norge/'
          icon={<FaFacebook className='w-16 h-16 fill-[#1877F2]' />}
        />
        <SocialMediaCard
          text='LinkedIn'
          link='https://www.linkedin.com/company/jobloop/'
          icon={<FaLinkedin className='w-16 h-16 fill-[#1877F2]' />}
        />
        <SocialMediaCard
          text='Instagram'
          link='https://www.instagram.com/jobloop.norge/'
          icon={
            <Image
              src={Instagram}
              className='min-w-16 min-h-16 max-w-16 max-h-16'
              alt='Instagram logo'
            />
          }
        />
      </div>
    </main>
  );
}
