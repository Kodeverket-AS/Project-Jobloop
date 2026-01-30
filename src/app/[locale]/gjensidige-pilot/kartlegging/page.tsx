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
            <p>Ikke spør &quot;hvordan har du det?&quot; med en gang. Gå rett på interessen de oppga i skjemaet sitt.</p>
            <ul className='question-list'>
              <li>&quot;Jeg så du krysset av for [Spill/Interesse]. Hva er det som fenger mest med det?&quot;</li>
              <li>&quot;Spiller du mest for å vinne (rank), eller for å henge med folk (social)?&quot;
                <span className='sub-text'>Dette forteller oss om vi skal fokusere på faglig mestring eller sosial trygghet.</span>
              </li>
              <li>&quot;Hva slags setup har du hjemme? Bygd selv?&quot;</li>
            </ul>
          </div>

          <div className='step-box'>
            <div className='step-number'>Steg 2: Status uten filter</div>
            <h2>Hvordan ser hverdagen egentlig ut?</h2>
            <p>Prøv å normalisere at ting er vanskelig. Vi dømmer ikke.</p>
            <ul className='question-list'>
              <li>&quot;Hvis vi ser bort fra gamingen – hvordan ser en vanlig tirsdag ut for deg?&quot;
                <span className='sub-text'>Sover de hele dagen? Er de på skolen litt?</span>
              </li>
              <li>&quot;Når var sist du følte at skole eller jobb faktisk ga deg noe positivt?&quot;</li>
              <li>&quot;Er det noe som stresser deg spesielt mye akkurat nå? (Folk, krav, fremtid?)&quot;</li>
            </ul>
          </div>

          <div className='step-box'>
            <div className='step-number'>Steg 3: Hva trenger de fra oss?</div>
            <h2>Match med riktig spor</h2>
            <p>Her må vi finne ut om de passer inn i piloten, og hvilket spor vi skal velge.</p>
            <ul className='question-list'>
              <li>&quot;Hvis du kunne velge fritt: Ville du helst lært koding/IT for å få jobb, eller trenger du bare et sted å være for å få ro til å gjøre ferdig VGS?&quot;</li>
              <li>&quot;Hvordan lærer du best? Alene med en veileder, eller i en liten gruppe?&quot;</li>
              <li>&quot;Hva skal til for at du faktisk orker å møte opp her hos oss?&quot;</li>
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
