import { type Contacts } from '@/types/sanity/sanity.types';
import { useTranslations } from 'next-intl';
import ContactCard from './Card';

interface ContactGroupProps {
  groupID: number;
  people: Contacts[];
}

export function ContactGroup({ groupID, people = [] }: ContactGroupProps) {
  // Skip category if its empty
  if (!people.length) return null;

  const t = useTranslations('contact.titles');

  // Convert group id to readable string
  let groupName: string;
  switch (groupID) {
    case 1:
      groupName = t('admin');
      break;
    case 2:
      groupName = t('leaders');
      break;
    case 3:
      groupName = t('teachers');
      break;
    case 4:
      groupName = t('interns');
      break;
    default:
      groupName = t('undefined');
      break;
  }

  const maxWidth =
    people.length <= 2 ? 'max-w-2xl' : people.length <= 3 ? 'max-w-5xl' : 'max-w-7xl';

  return (
    <section className={`space-y-8 mx-auto ${maxWidth}`}>
      <div className='text-center'>
        <h2 className='text-2xl md:text-3xl font-bold text-kv-black pb-2 border-b-2 md:border-b-4 border-jobloop-primary-green w-fit mx-auto'>
          {groupName}
        </h2>
      </div>
      <div className='grid gap-8 justify-center justify-items-center grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
        {people.map((contact) => (
          <ContactCard key={contact._id} contact={contact} />
        ))}
      </div>
    </section>
  );
}
