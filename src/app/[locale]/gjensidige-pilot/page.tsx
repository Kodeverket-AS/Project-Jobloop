import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import LogoutButton from './LogoutButton';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gjensidige Pilot - Verktøykasse',
    description: 'Intern ressursportal for Gjensidige Pilot prosjektet',
  };
}

export default function GjensidigePilot() {
  const tools = [
    {
      title: 'Produktinfo',
      description: 'Start her! Faktaark om piloten. Målgruppe, kriterier for "nei", og de tre sporene forklart.',
      href: '/gjensidige-pilot/interninfo',
      icon: 'ℹ️',
      tag: 'Info',
      borderColor: 'border-blue-600',
    },
    {
      title: 'Ansattportal',
      description: 'Ressursside for veilederne våre. Metodikk, lenke til Proplan-registrering og forventninger.',
      href: '/gjensidige-pilot/ansattportal',
      icon: '👷',
      tag: 'Ansatt',
      borderColor: 'border-blue-600',
    },
    {
      title: 'Samtaleguiden',
      description: 'Manus og støtte til den aller første telefonsamtalen med kunde/foreldre.',
      href: '/gjensidige-pilot/samtale',
      icon: '📞',
      tag: 'Telefon',
      borderColor: 'border-teal-500',
    },
    {
      title: 'Kartleggingsguide',
      description: 'Hva spør du om i det første møtet? Guide for å bygge relasjon og velge riktig spor.',
      href: '/gjensidige-pilot/kartlegging',
      icon: '🕵️',
      tag: 'Møte',
      borderColor: 'border-teal-500',
    },
    {
      title: 'Prosesskart',
      description: 'Visuell oversikt over saksflyten. Hvem gjør hva, og når tar JobLoop over ansvaret?',
      href: '/gjensidige-pilot/prosess',
      icon: '🔄',
      tag: 'Flyt',
      borderColor: 'border-teal-500',
    },
    {
      title: 'Landingsside for kunde',
      description: 'Lenken vi sender til ungdommen. Selger inn tilbudet med fokus på interesser.',
      href: '/gjensidige-pilot/pilot',
      icon: '🌐',
      tag: 'Kunde',
      borderColor: 'border-teal-500',
    },
    {
      title: 'Forberedelse (Del 2)',
      description: 'Sjekkliste ungdommen fyller ut FØR kartleggingssamtalen for å stille forberedt.',
      href: '/gjensidige-pilot/forberedelse',
      icon: '📝',
      tag: 'Kunde',
      borderColor: 'border-teal-500',
    },
    {
      title: 'Månedsrapporten',
      description: 'Eksempel på rapportering og "Flagg-systemet" (Gult/Rødt flagg) vi bruker mot Gjensidige.',
      href: '/gjensidige-pilot/rapport',
      icon: '📊',
      tag: 'Admin',
      borderColor: 'border-red-600',
    },
  ];

  return (
    <main className='min-h-screen bg-gray-50 py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <header className='bg-[#002B49] text-white py-10 px-6 text-center mb-8 rounded-lg relative'>
          <LogoutButton />
          <h1 className='text-3xl font-bold mb-2'>Gjensidige | JobLoop</h1>
          <p className='text-lg opacity-90'>Pilotprosjekt: Inkludering av unge (13–26 år)</p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border-t-4 relative group'
              style={{ borderTopColor: tool.borderColor.includes('blue') ? '#002B49' : tool.borderColor.includes('teal') ? '#4AB5A3' : '#C3002F' }}
            >
              <span className='absolute top-4 right-4 text-xs uppercase text-gray-400 font-bold'>
                {tool.tag}
              </span>
              <div className='flex items-center gap-3 mb-3'>
                <div className='text-2xl bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center'>
                  {tool.icon}
                </div>
                <h3 className='text-xl font-semibold text-[#002B49] group-hover:text-[#4AB5A3] transition-colors'>
                  {tool.title}
                </h3>
              </div>
              <p className='text-sm text-gray-600 leading-relaxed'>{tool.description}</p>
            </Link>
          ))}
        </div>

        <footer className='text-center text-gray-500 mt-12 py-6'>
          <p>JobLoop Pilot Verktøykasse – Versjon 2.0</p>
        </footer>
      </div>
    </main>
  );
}
