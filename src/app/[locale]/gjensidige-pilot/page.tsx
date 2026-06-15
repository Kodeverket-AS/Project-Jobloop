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
      borderClass: 'border-blue',
    },
    {
      title: 'Ansattportal',
      description: 'Ressursside for veilederne våre. Metodikk, lenke til Proplan-registrering og forventninger.',
      href: '/gjensidige-pilot/ansattportal',
      icon: '👷',
      tag: 'Ansatt',
      borderClass: 'border-blue',
    },
    {
      title: 'Samtaleguiden',
      description: 'Manus og støtte til den aller første telefonsamtalen med kunde/foreldre.',
      href: '/gjensidige-pilot/samtale',
      icon: '📞',
      tag: 'Telefon',
      borderClass: 'border-teal',
    },
    {
      title: 'Kartleggingsguide',
      description: (
        <>
          <strong>Ny!</strong> Hva spør du om i det første møtet? Guide for å bygge relasjon og velge riktig spor.
        </>
      ),
      href: '/gjensidige-pilot/kartlegging',
      icon: '🕵️',
      tag: 'Møte',
      borderClass: 'border-teal',
    },
    {
      title: 'Prosesskart',
      description: 'Visuell oversikt over saksflyten. Hvem gjør hva, og når tar JobLoop over ansvaret?',
      href: '/gjensidige-pilot/prosess',
      icon: '🔄',
      tag: 'Flyt',
      borderClass: 'border-teal',
    },
    {
      title: 'Landingsside for kunde',
      description: 'Lenken vi sender til ungdommen. Selger inn tilbudet med fokus på interesser.',
      href: '/gjensidige',
      icon: '🌐',
      tag: 'Kunde',
      borderClass: 'border-teal',
    },
    {
      title: 'Forberedelse (Del 2)',
      description: 'Sjekkliste ungdommen fyller ut FØR kartleggingssamtalen for å stille forberedt.',
      href: '/gjensidige-pilot/forberedelse',
      icon: '📝',
      tag: 'Kunde',
      borderClass: 'border-teal',
    },
    {
      title: 'Månedsrapporten',
      description: 'Eksempel på rapportering og "Flagg-systemet" (Gult/Rødt flagg) vi bruker mot Gjensidige.',
      href: '/gjensidige-pilot/rapport',
      icon: '📊',
      tag: 'Admin',
      borderClass: 'border-red',
    },
  ];

  return (
    <>
      <main id='main' className='verktoykasse-page'>
        <header className='pilot-header' style={{ backgroundColor: '#002B49' }}>
          <div className='header-content'>
            <div className='header-spacer' aria-hidden="true" />
            <div className='header-center'>
              <div className='logo'>Gjensidige | JobLoop</div>
              <div className='subtitle'>Pilotprosjekt: Inkludering av unge (13–26 år)</div>
            </div>
            <div className='header-logout'>
              <LogoutButton />
            </div>
          </div>
        </header>

        <div className='container'>
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={`tool-card ${tool.borderClass}`}
            >
              <span className='tag'>{tool.tag}</span>
              <h3>
                <div className='icon'>{tool.icon}</div>
                {tool.title}
              </h3>
              <div className='desc'>{tool.description}</div>
            </Link>
          ))}
        </div>

        <footer>
          <p>JobLoop Pilot Verktøykasse – Versjon 2.0</p>
        </footer>
      </main>
    </>
  );
}
