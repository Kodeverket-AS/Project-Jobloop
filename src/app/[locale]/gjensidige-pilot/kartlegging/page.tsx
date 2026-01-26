import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kartleggingsguide: Første møte',
    description: 'Mal for det første møtet med ungdommen',
  };
}

export default function Kartlegging() {
  return (
    <>
      <style>{`
        :root {
          --jobloop-teal: #4AB5A3;
          --jobloop-dark: #2C8C7D;
          --gjensidige-blue: #002B49;
          --soft-bg: #e0f2f1;
        }
        .kartlegging-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f6f8;
          color: #333;
          line-height: 1.6;
        }
        .kartlegging-page header {
          background-color: var(--jobloop-dark);
          color: white;
          padding: 30px 20px;
          text-align: center;
          border-bottom: 5px solid var(--gjensidige-blue);
        }
        .kartlegging-page header h1 {
          margin: 0;
          font-size: 2rem;
        }
        .kartlegging-page header p {
          opacity: 0.9;
          margin-top: 5px;
        }
        .kartlegging-page .container {
          max-width: 800px;
          margin: 30px auto;
          padding: 0 20px;
        }
        .kartlegging-page .golden-rule {
          background-color: #fff3cd;
          border: 1px solid #ffeeba;
          color: #856404;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .kartlegging-page .golden-rule strong {
          font-size: 1.1rem;
        }
        .kartlegging-page .step-box {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 25px;
          position: relative;
          border-left: 5px solid var(--jobloop-teal);
        }
        .kartlegging-page .step-number {
          position: absolute;
          top: -15px;
          left: 20px;
          background: var(--jobloop-teal);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
        }
        .kartlegging-page h2 {
          margin-top: 10px;
          color: var(--gjensidige-blue);
          font-size: 1.3rem;
          padding-bottom: 20px;
        }
        .kartlegging-page .question-list {
          list-style: none;
          padding: 0;
          margin-top: 15px;
        }
        .kartlegging-page .question-list li {
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
          font-weight: 500;
        }
        .kartlegging-page .question-list li::before {
          content: "💬";
          position: absolute;
          left: 0;
          font-size: 1rem;
        }
        .kartlegging-page .sub-text {
          font-weight: normal;
          font-size: 0.9rem;
          color: #666;
          display: block;
          margin-top: 3px;
        }
        .kartlegging-page .checklist-area {
          background-color: var(--gjensidige-blue);
          color: white;
          padding: 30px;
          border-radius: 8px;
          margin-top: 40px;
        }
        .kartlegging-page .checklist-area h3 {
          margin-top: 0;
          color: var(--jobloop-teal);
          font-size: 1.1rem;
          padding-bottom: 10px;
        }
        .kartlegging-page .checkbox-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          opacity: 0.9;
        }
        .kartlegging-page .checkbox-box {
          width: 20px;
          height: 20px;
          border: 2px solid var(--jobloop-teal);
          display: inline-block;
          border-radius: 4px;
        }
      `}</style>
      <main className='kartlegging-page'>
        <header>
          <h1>Kartleggingsguide</h1>
          <p>Mal for det første møtet med ungdommen (og evt. foreldre)</p>
        </header>

        <div className='container'>
          <div className='golden-rule'>
            <span style={{ fontSize: '2rem' }}>💡</span>
            <div>
              <strong>Huskeregel:</strong> Ikke vær en saksbehandler. Vær en nysgjerrig nerd. <br />
              Målet med dette møtet er 80% relasjon og 20% planlegging.
            </div>
          </div>

          <div className='step-box'>
            <div className='step-number'>Steg 1: Isbryteren (Gaming/Interesse)</div>
            <h2>Start med det som er gøy</h2>
            <p>Ikke spør "hvordan har du det?" med en gang. Gå rett på interessen de oppga i skjemaet sitt.</p>
            <ul className='question-list'>
              <li>"Jeg så du krysset av for [Spill/Interesse]. Hva er det som fenger mest med det?"</li>
              <li>"Spiller du mest for å vinne (rank), eller for å henge med folk (social)?"
                <span className='sub-text'>Dette forteller oss om vi skal fokusere på faglig mestring eller sosial trygghet.</span>
              </li>
              <li>"Hva slags setup har du hjemme? Bygd selv?"</li>
            </ul>
          </div>

          <div className='step-box'>
            <div className='step-number'>Steg 2: Status uten filter</div>
            <h2>Hvordan ser hverdagen egentlig ut?</h2>
            <p>Prøv å normalisere at ting er vanskelig. Vi dømmer ikke.</p>
            <ul className='question-list'>
              <li>"Hvis vi ser bort fra gamingen – hvordan ser en vanlig tirsdag ut for deg?"
                <span className='sub-text'>Sover de hele dagen? Er de på skolen litt?</span>
              </li>
              <li>"Når var sist du følte at skole eller jobb faktisk ga deg noe positivt?"</li>
              <li>"Er det noe som stresser deg spesielt mye akkurat nå? (Folk, krav, fremtid?)"</li>
            </ul>
          </div>

          <div className='step-box'>
            <div className='step-number'>Steg 3: Hva trenger de fra oss?</div>
            <h2>Match med riktig spor</h2>
            <p>Her må vi finne ut om de passer inn i piloten, og hvilket spor vi skal velge.</p>
            <ul className='question-list'>
              <li>"Hvis du kunne velge fritt: Ville du helst lært koding/IT for å få jobb, eller trenger du bare et sted å være for å få ro til å gjøre ferdig VGS?"</li>
              <li>"Hvordan lærer du best? Alene med en veileder, eller i en liten gruppe?"</li>
              <li>"Hva skal til for at du faktisk orker å møte opp her hos oss?"</li>
            </ul>
          </div>

          <div className='checklist-area'>
            <h3>✅ Veilederens Sjekkliste (Etter møtet)</h3>
            <p>Før du logger saken i Proplan, må du ha svar på dette:</p>
            <br />

            <div className='checkbox-row'>
              <div className='checkbox-box'></div>
              <span>Er ungdommen i målgruppen? (Ingen tung rus/psykiatri?)</span>
            </div>
            <div className='checkbox-row'>
              <div className='checkbox-box'></div>
              <span>Har vi valgt spor? (Skole / VGS / Jobb)</span>
            </div>
            <div className='checkbox-row'>
              <div className='checkbox-box'></div>
              <span>Er vi enige om oppmøteplan? (F.eks. Tirsdag og Torsdag kl 10-14)</span>
            </div>
            <div className='checkbox-row'>
              <div className='checkbox-box'></div>
              <span>Har vi avklart med foreldre/skole hvem som gjør hva?</span>
            </div>

            <p style={{ marginTop: '20px', marginBottom: '20px', fontStyle: 'italic', color: '#ccc' }}>
              Husk: Send en kort oppsummering til Kim (Gult/Grønt flagg) etter første møte.
            </p>
          </div>
        </div>

        <div className='container'>
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
