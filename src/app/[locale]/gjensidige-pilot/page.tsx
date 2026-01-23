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
      href: '/gjensidige-pilot/pilot',
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
      <style>{`
        .verktoykasse-page {
          font-family: 'Segoe UI', sans-serif;
          margin: 0;
          background-color: #f4f6f8;
          color: #333;
        }
        .verktoykasse-page header {
          background-color: #002B49;
          color: white;
          padding: 40px 20px;
          text-align: center;
          position: relative;
        }
        .verktoykasse-page .header-content {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }
        .verktoykasse-page .logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .verktoykasse-page .subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
        }
        .verktoykasse-page .container {
          max-width: 1100px;
          margin: -30px auto 50px auto;
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .verktoykasse-page .tool-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.2s;
          border-top: 5px solid #ccc;
          text-decoration: none;
          color: #333;
          display: block;
          height: 100%;
          box-sizing: border-box;
          position: relative;
        }
        .verktoykasse-page .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .verktoykasse-page .tool-card h3 {
          margin-top: 0;
          color: #002B49;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.2rem;
        }
        .verktoykasse-page .icon {
          font-size: 1.5rem;
          background: #EBF2F6;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .verktoykasse-page .desc {
          font-size: 0.9rem;
          color: #666;
          margin-top: 10px;
          line-height: 1.5;
        }
        .verktoykasse-page .tag {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 0.7rem;
          text-transform: uppercase;
          color: #999;
          font-weight: bold;
        }
        .verktoykasse-page .border-blue {
          border-top-color: #002B49;
        }
        .verktoykasse-page .border-teal {
          border-top-color: #4AB5A3;
        }
        .verktoykasse-page .border-red {
          border-top-color: #C3002F;
        }
        .verktoykasse-page footer {
          text-align: center;
          color: #888;
          padding: 20px;
          font-size: 0.9rem;
        }
      `}</style>
      <main className='verktoykasse-page'>
        <header>
          <div className='header-content'>
            <LogoutButton />
            <div className='logo'>Gjensidige | JobLoop</div>
            <div className='subtitle'>Pilotprosjekt: Inkludering av unge (13–26 år)</div>
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
