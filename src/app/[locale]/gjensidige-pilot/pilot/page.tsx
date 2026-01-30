import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gjensidige & JobLoop Pilot',
    description: 'Nytt pilottilbud for kunder av Gjensidige',
  };
}

export default function Pilot() {
  return (
    <>
      <style>{`
        :root {
          --dark-blue: #002B49;
          --red: #C3002F;
          --teal: #4AB5A3;
          --light-bg: #EBF2F6;
        }
        .pilot-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background-color: #f4f6f8;
          color: #333;
          line-height: 1.6;
        }
        .pilot-page header {
          background-color: #ffffff;
          padding: 20px 10%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 5px solid var(--dark-blue);
        }
        .pilot-page .logo {
          font-size: 24px;
          font-weight: bold;
          color: var(--dark-blue);
        }
        .pilot-page .sub-logo {
          color: #666;
          font-size: 0.9rem;
        }
        .pilot-page .hero {
          background-color: var(--dark-blue);
          color: #ffffff;
          padding: 60px 20px;
          text-align: center;
        }
        .pilot-page .hero h1 {
          margin-bottom: 15px;
          font-size: 2.5rem;
        }
        .pilot-page .hero p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 40px auto;
          opacity: 0.9;
        }
        .pilot-page .intro h2 {
          font-size: 2rem;
        }
        .pilot-page .faq h2 {
          font-size: 2rem;
        }
        .pilot-page .contact h2 {
          font-size: 1.5rem;
        }
        .pilot-page .cta-box h3 {
          font-size: 1.2rem;
        }
        .pilot-page .main-video {
          background-color: #001f35;
          width: 100%;
          max-width: 600px;
          height: 340px;
          margin: 0 auto;
          border: 2px dashed rgba(255,255,255,0.3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .pilot-page .play-icon {
          font-size: 50px;
          color: white;
          opacity: 0.8;
          cursor: pointer;
        }
        .pilot-page .intro {
          background-color: #ffffff;
          padding: 50px 20px;
          text-align: center;
        }
        .pilot-page .intro h2 {
          color: var(--dark-blue);
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        .pilot-page .tracks-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding: 0 5% 60px 5%;
        }
        .pilot-page .card {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-top: 6px solid var(--teal);
          border-radius: 8px;
          width: 350px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .pilot-page .card-video {
          background-color: #333;
          height: 180px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
        }
        .pilot-page .card-video::after {
          content: "▶";
          font-size: 30px;
          background: rgba(0,0,0,0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pilot-page .card-content {
          padding: 25px;
        }
        .pilot-page .card h3 {
          color: var(--dark-blue);
          margin-top: 10px;
          margin-bottom: 10px;
          font-size: 1.4rem;
        }
        .pilot-page .card p {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        .pilot-page p {
          line-height: 1.6;
        }
        .pilot-page .age-badge {
          background-color: var(--light-bg);
          color: var(--dark-blue);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: bold;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 10px;
        }
        .pilot-page .card ul {
          padding-left: 20px;
          margin-top: 0;
          color: #444;
          font-size: 0.95rem;
          list-style-type: disc;
        }
        .pilot-page .card li {
          margin-bottom: 8px;
        }
        .pilot-page .faq {
          background-color: #ffffff;
          padding: 60px 20px;
          border-top: 1px solid #eee;
        }
        .pilot-page .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .pilot-page .faq h2 {
          text-align: center;
          color: var(--dark-blue);
          margin-bottom: 40px;
          font-size: 1.5rem;
        }
        .pilot-page .faq-item {
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }
        .pilot-page .faq-question {
          font-weight: bold;
          font-size: 1.1rem;
          color: var(--dark-blue);
          margin-bottom: 10px;
          display: block;
        }
        .pilot-page .faq-answer {
          color: #555;
          font-size: 0.95rem;
        }
        .pilot-page .contact {
          background-color: var(--light-bg);
          padding: 60px 20px;
          text-align: center;
        }
        .pilot-page .cta-box {
          background-color: #ffffff;
          max-width: 600px;
          margin: 0 auto;
          padding: 50px 40px 40px 40px;
          border-radius: 8px;
          border-left: 10px solid var(--red);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .pilot-page .btn {
          display: inline-block;
          background-color: var(--red);
          color: #ffffff;
          padding: 15px 35px;
          text-decoration: none;
          font-weight: bold;
          border-radius: 50px;
          margin-top: 30px;
          font-size: 1.1rem;
          transition: background 0.3s;
        }
        .pilot-page .btn:hover {
          background-color: #a10026;
        }
        .pilot-page footer {
          background-color: var(--dark-blue);
          color: #ccc;
          text-align: center;
          padding: 30px;
          font-size: 0.9rem;
        }
      `}</style>
      <main className='pilot-page min-h-screen'>
      <header>
        <div className='logo'>
          Gjensidige | <span style={{ color: '#4AB5A3' }}>JobLoop</span>
        </div>
        <div className='sub-logo'>Pilotprosjekt 2026</div>
      </header>

      <section className='hero'>
        <h1>Nytt pilottilbud for kunder av Gjensidige</h1>
        <p>Vi bruker interessene dine til å bygge mestring, motivasjon og en vei videre i livet.</p>
        
        <div className='main-video'>
          <div style={{ textAlign: 'center' }}>
            <div className='play-icon'>▶</div>
            <p style={{ marginTop: '10px', color: '#ddd' }}>VIDEO: Hei, er du forsikret i Gjensidige?</p>
          </div>
        </div>
      </section>

      <section className='intro'>
        <h2>Hvilket spor passer for deg?</h2>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Vi har tre hovedveier, avhengig av hvor gammel du er og hva du trenger akkurat nå. <br />
          <strong>Usikker?</strong> Det gjør ingenting. Vi finner ut av det sammen.
        </p>
      </section>

      <section className='tracks-container'>
        <div className='card'>
          <div className='card-video' style={{ background: '#2c3e50' }}>
            <span style={{ position: 'absolute', bottom: '10px', left: '15px', fontSize: '0.8rem' }}>Video: Stå i skolen</span>
          </div>
          <div className='card-content'>
            <span className='age-badge'>13 – 16 år</span>
            <h3>Stå i skolen</h3>
            <p><strong>Konsept for utdanning:</strong> For deg som går på ungdomsskolen, men hvor hverdagen er tung og fraværet øker.</p>
            <p>Vi bruker gaming og teknologi pedagogisk for å gi deg mestringsopplevelser. Du er hos oss 1–2 dager i uken som et avbrekk, mens vi samarbeider tett med skolen din.</p>
            <ul>
              <li>Finn motivasjon gjennom interesse</li>
              <li>Sosial trening i trygge rammer</li>
              <li>Mål: Trives bedre og fullføre 10. trinn</li>
            </ul>
          </div>
        </div>

        <div className='card'>
          <div className='card-video' style={{ background: '#34495e' }}>
            <span style={{ position: 'absolute', bottom: '10px', left: '15px', fontSize: '0.8rem' }}>Video: Bestå fag</span>
          </div>
          <div className='card-content'>
            <span className='age-badge'>16 – 26 år</span>
            <h3>Fullføre VGS</h3>
            <p><strong>Konsept for utdanning:</strong> For deg som har falt ut av videregående, eller trenger en annen arena for å fullføre.</p>
            <p>Dette er en alternativ læringsarena. Her kan du jobbe med fagene dine, få leksehjelp eller lese til privatisteksamen i ditt eget tempo, uten stresset fra et klasserom.</p>
            <ul>
              <li>Individuell tilrettelegging</li>
              <li>Fokus på enkeltfag eller vitnemål</li>
              <li>Vi samarbeider med OT/Skole</li>
            </ul>
          </div>
        </div>

        <div className='card'>
          <div className='card-video' style={{ background: '#27ae60' }}>
            <span style={{ position: 'absolute', bottom: '10px', left: '15px', fontSize: '0.8rem' }}>Video: Veien til jobb</span>
          </div>
          <div className='card-content'>
            <span className='age-badge'>16 – 26 år</span>
            <h3>Jobb og IT-kompetanse</h3>
            <p><strong>Konsept for arbeid:</strong> For deg som står utenfor skole og jobb, og vil lære praktisk koding, design eller IT.</p>
            <p>Her får du praktisk opplæring i ferdigheter bedriftene trenger. Vi fokuserer på &quot;tech&quot; og kreativitet som døråpner til arbeidslivet.</p>
            <ul>
              <li>Lær koding, design og utvikling</li>
              <li>Praksis i samarbeidsbedrifter</li>
              <li>Veien mot lærlingplass eller jobb</li>
            </ul>
          </div>
        </div>

      </section>

      <section className='faq'>
        <div className='faq-container'>
          <h2>Ofte stilte spørsmål</h2>
          
          <div className='faq-item'>
            <span className='faq-question'>Koster det noe å være med?</span>
            <p className='faq-answer'>Nei. For deg som får plass gjennom dette pilotprosjektet med Gjensidige, er hele tilbudet dekket av forsikringen din.</p>
            </div>

          <div className='faq-item'>
            <span className='faq-question'>Er dette behandling eller terapi?</span>
            <p className='faq-answer'>Nei. JobLoop er en lærings- og mestringsarena, ikke en klinikk. Vi fokuserer på dine interesser og styrker, ikke på diagnoser. Men vi tilpasser oss selvfølgelig hvis du har utfordringer som angst eller ADHD.</p>
            </div>

          <div className='faq-item'>
            <span className='faq-question'>Må jeg være supergod i gaming eller koding?</span>
            <p className='faq-answer'>Absolutt ikke! Det viktigste er at du har en interesse for det digitale. Vi tilpasser nivået til akkurat der du er, enten du er nybegynner eller har holdt på lenge.</p>
            </div>

          <div className='faq-item'>
            <span className='faq-question'>Mister jeg plassen min på skolen?</span>
            <p className='faq-answer'>Nei. Spesielt for &quot;Konsept for utdanning&quot; samarbeider vi tett med skolen din slik at du beholder elevstatusen din. Målet vårt er å hjelpe deg å fullføre.</p>
            </div>

          <div className='faq-item'>
            <span className='faq-question'>Hva skjer hvis jeg ikke tør å møte opp fysisk?</span>
            <p className='faq-answer'>Vi har full forståelse for at dørstokkmila kan være lang. Derfor kan vi starte digitalt via Discord eller Teams, slik at du blir trygg på veilederen din før du møter oss fysisk.</p>
          </div>

        </div>
      </section>

      <section className='contact'>
        <h2>Høres dette interessant ut?</h2>
        <br />
        <p>Du trenger ikke vite nøyaktig hva som passer. Det er jobben vår.</p>
        <br />
        
        <div className='cta-box'>
          <h3>Ta kontakt for kartlegging</h3>
          <br />
          <p>Send oss en e-post eller ring, så tar vi en uforpliktende prat. Vi finner ut hvilket spor som gir deg best utbytte.</p>
          
          <div style={{ marginTop: '20px', fontSize: '1.1rem' }}>
        
            <p><strong>Prosjektleder Kim</strong></p>
            <br />
            <p>📞 97 46 91 10 &nbsp; | &nbsp; ✉️ <a href='mailto:kim@jobloop.no' style={{ color: 'var(--dark-blue)', textDecoration: 'underline' }}>kim@jobloop.no</a></p>
          </div>

          <a href='mailto:kim@jobloop.no' className='btn'>Send e-post nå</a>
        </div>
      </section>

      <footer>
        <p>Et samarbeid mellom Gjensidige Forsikring og JobLoop AS.</p>
        <p>Pilotprosjekt – Innhold kan endres underveis.</p>
      </footer>

      <div className='max-w-4xl mx-auto px-4 pb-8'>
        <Link
          href='/gjensidige-pilot'
          className='inline-block mt-6 text-[#4AB5A3] hover:text-[#002B49] transition-colors'
        >
          ← Tilbake til verktøykassen
        </Link>
      </div>
      </main>
    </>
  );
}
