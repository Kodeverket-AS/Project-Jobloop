import type { LegalContent, LegalLocale } from '@/components/feature/legal/LegalPage';

export const personvernContent: Record<LegalLocale, LegalContent> = {
  nb: {
    metaTitle: 'Personvernerklæring | JobLoop',
    metaDescription:
      'Les hvordan JobLoop behandler personopplysninger når du besøker nettsiden vår eller tar kontakt med oss.',
    title: 'Personvernerklæring',
    lastUpdatedLabel: 'Sist oppdatert',
    lastUpdated: '25. september 2026',
    intro: (
      <p>
        Personvernet ditt er viktig for oss. Denne erklæringen forklarer hvilke personopplysninger
        JobLoop behandler når du besøker nettsiden vår eller tar kontakt med oss, hvorfor vi gjør
        det, og hvilke rettigheter du har.
      </p>
    ),
    sections: [
      {
        title: 'Behandlingsansvarlig',
        content: (
          <>
            <p>
              JobLoop er behandlingsansvarlig for personopplysningene som behandles i forbindelse
              med nettsiden jobloop.no og henvendelser til oss.
            </p>
            <p>
              JobLoop
              <br />
              Org.nr. 920 132 707
              <br />
              Veiten 3, 5012 Bergen
              <br />
              E-post: <a href='mailto:team@jobloop.no'>team@jobloop.no</a>
            </p>
          </>
        ),
      },
      {
        title: 'Hvilke opplysninger vi samler inn',
        content: (
          <>
            <p>
              Vi bruker ikke analyseverktøy, sporing eller annonsering på nettsiden, og vi har
              ingen skjemaer hvor du legger inn personopplysninger. Vi behandler likevel noen
              opplysninger:
            </p>
            <ul>
              <li>
                <strong>Tekniske data:</strong> Når du besøker nettsiden, registrerer serveren
                automatisk opplysninger som IP-adresse, nettlesertype og tidspunkt for besøket.
                Dette er nødvendig for å levere nettsiden og holde den sikker.
              </li>
              <li>
                <strong>Henvendelser:</strong> Sender du oss en e-post eller ringer oss, behandler
                vi navnet ditt, kontaktinformasjonen din og det du skriver til oss, slik at vi kan
                svare deg.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Formål og rettslig grunnlag',
        content: (
          <>
            <p>Vi behandler personopplysninger for å:</p>
            <ul>
              <li>
                levere og sikre nettsiden. Grunnlaget er vår berettigede interesse i en nettside
                som fungerer og er trygg (personvernforordningen art. 6 nr. 1 bokstav f).
              </li>
              <li>
                svare på henvendelser og følge opp dialogen med deg. Grunnlaget er vår berettigede
                interesse i å kommunisere med de som kontakter oss (art. 6 nr. 1 bokstav f), eller
                at behandlingen er nødvendig for å inngå eller oppfylle en avtale med deg (art. 6
                nr. 1 bokstav b).
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Informasjonskapsler (cookies)',
        content: (
          <>
            <p>Nettsiden bruker kun informasjonskapsler som er nødvendige for at den skal fungere:</p>
            <ul>
              <li>
                <strong>Språkvalg:</strong> Hvis du bytter språk, lagres valget ditt slik at siden
                vises på riktig språk neste gang.
              </li>
              <li>
                <strong>Innlogging:</strong> Enkelte interne sider krever innlogging. Når du logger
                inn, lagres en informasjonskapsel som holder deg innlogget. Denne brukes bare av
                autoriserte brukere.
              </li>
            </ul>
            <p>
              Noen sider har innebygde videoer fra YouTube. Når disse lastes inn, kan Google sette
              egne informasjonskapsler og behandle opplysninger om deg i henhold til{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
              >
                Googles personvernerklæring
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: 'Hvem vi deler opplysninger med',
        content: (
          <>
            <p>
              Vi selger aldri personopplysninger. Vi bruker noen leverandører som behandler
              opplysninger på våre vegne (databehandlere):
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> drifter nettsiden og behandler tekniske data når du besøker
                den.
              </li>
              <li>
                <strong>Sanity</strong> lagrer innhold og bilder som vises på nettsiden.
              </li>
              <li>
                <strong>Google</strong> leverer e-post- og kalendertjenestene vi bruker når du
                kontakter oss eller booker en samtale.
              </li>
            </ul>
            <p>
              Noen av disse leverandørene kan behandle opplysninger utenfor EU/EØS. I så fall
              sikres overføringen med gyldig overføringsgrunnlag, som EUs standard
              personvernbestemmelser eller EU–US Data Privacy Framework.
            </p>
          </>
        ),
      },
      {
        title: 'Lagring og sletting',
        content: (
          <p>
            Vi lagrer ikke personopplysninger lenger enn det som er nødvendig for formålet.
            Tekniske logger slettes automatisk etter kort tid. Henvendelser slettes når saken er
            ferdig behandlet, med mindre vi er pålagt å oppbevare dem lenger.
          </p>
        ),
      },
      {
        title: 'Dine rettigheter',
        content: (
          <>
            <p>Du har rett til å:</p>
            <ul>
              <li>få innsyn i hvilke opplysninger vi har om deg</li>
              <li>få rettet opplysninger som er feil</li>
              <li>få slettet opplysninger om deg</li>
              <li>kreve at behandlingen begrenses</li>
              <li>protestere mot behandling som bygger på berettiget interesse</li>
              <li>få utlevert opplysningene dine i et maskinlesbart format (dataportabilitet)</li>
            </ul>
            <p>
              Send en e-post til <a href='mailto:team@jobloop.no'>team@jobloop.no</a> hvis du vil
              bruke rettighetene dine. Vi svarer så raskt som mulig, og senest innen 30 dager.
            </p>
            <p>
              Mener du at vi behandler personopplysninger i strid med regelverket, kan du klage
              til{' '}
              <a href='https://www.datatilsynet.no/' target='_blank' rel='noopener noreferrer'>
                Datatilsynet
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: 'Endringer i erklæringen',
        content: (
          <p>
            Vi kan oppdatere denne personvernerklæringen når vi endrer hvordan vi behandler
            personopplysninger. Den gjeldende versjonen ligger alltid på denne siden, med dato for
            siste oppdatering øverst.
          </p>
        ),
      },
    ],
  },
  en: {
    metaTitle: 'Privacy Policy | JobLoop',
    metaDescription:
      'Learn how JobLoop processes personal data when you visit our website or get in touch with us.',
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated',
    lastUpdated: '25 September 2026',
    intro: (
      <p>
        Your privacy matters to us. This policy explains what personal data JobLoop processes when
        you visit our website or contact us, why we do it, and what rights you have.
      </p>
    ),
    sections: [
      {
        title: 'Data controller',
        content: (
          <>
            <p>
              JobLoop is the data controller for personal data processed in connection with the
              website jobloop.no and enquiries sent to us.
            </p>
            <p>
              JobLoop
              <br />
              Org. no. 920 132 707
              <br />
              Veiten 3, 5012 Bergen, Norway
              <br />
              Email: <a href='mailto:team@jobloop.no'>team@jobloop.no</a>
            </p>
          </>
        ),
      },
      {
        title: 'What data we collect',
        content: (
          <>
            <p>
              We do not use analytics, tracking or advertising on the website, and we have no
              forms where you enter personal data. We do, however, process some data:
            </p>
            <ul>
              <li>
                <strong>Technical data:</strong> When you visit the website, the server
                automatically records information such as your IP address, browser type and the
                time of your visit. This is necessary to deliver the website and keep it secure.
              </li>
              <li>
                <strong>Enquiries:</strong> If you email or call us, we process your name, contact
                details and what you tell us, so that we can reply to you.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Purpose and legal basis',
        content: (
          <>
            <p>We process personal data in order to:</p>
            <ul>
              <li>
                deliver and secure the website. The legal basis is our legitimate interest in a
                website that works and is safe (GDPR Article 6(1)(f)).
              </li>
              <li>
                reply to enquiries and follow up our dialogue with you. The legal basis is our
                legitimate interest in communicating with people who contact us (Article 6(1)(f)),
                or that the processing is necessary to enter into or perform an agreement with you
                (Article 6(1)(b)).
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Cookies',
        content: (
          <>
            <p>The website only uses cookies that are necessary for it to work:</p>
            <ul>
              <li>
                <strong>Language preference:</strong> If you switch language, your choice is
                stored so the site is shown in the right language next time.
              </li>
              <li>
                <strong>Login:</strong> Some internal pages require you to log in. When you do, a
                cookie is stored to keep you logged in. It is only used by authorised users.
              </li>
            </ul>
            <p>
              Some pages contain embedded YouTube videos. When these load, Google may set its own
              cookies and process data about you in accordance with{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: 'Who we share data with',
        content: (
          <>
            <p>
              We never sell personal data. We use a few providers that process data on our behalf
              (data processors):
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> hosts the website and processes technical data when you
                visit it.
              </li>
              <li>
                <strong>Sanity</strong> stores the content and images shown on the website.
              </li>
              <li>
                <strong>Google</strong> provides the email and calendar services we use when you
                contact us or book a meeting.
              </li>
            </ul>
            <p>
              Some of these providers may process data outside the EU/EEA. Where this happens, the
              transfer is protected by a valid transfer mechanism, such as the EU Standard
              Contractual Clauses or the EU–US Data Privacy Framework.
            </p>
          </>
        ),
      },
      {
        title: 'Retention and deletion',
        content: (
          <p>
            We do not keep personal data longer than necessary for the purpose. Technical logs are
            deleted automatically after a short period. Enquiries are deleted once the matter has
            been dealt with, unless we are required to keep them longer.
          </p>
        ),
      },
      {
        title: 'Your rights',
        content: (
          <>
            <p>You have the right to:</p>
            <ul>
              <li>access the data we hold about you</li>
              <li>have inaccurate data corrected</li>
              <li>have your data deleted</li>
              <li>restrict the processing</li>
              <li>object to processing based on legitimate interest</li>
              <li>receive your data in a machine-readable format (data portability)</li>
            </ul>
            <p>
              Email <a href='mailto:team@jobloop.no'>team@jobloop.no</a> if you want to exercise
              your rights. We will respond as soon as possible, and within 30 days at the latest.
            </p>
            <p>
              If you believe we process personal data in breach of the rules, you can complain to
              the Norwegian Data Protection Authority,{' '}
              <a
                href='https://www.datatilsynet.no/en/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Datatilsynet
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: 'Changes to this policy',
        content: (
          <p>
            We may update this privacy policy when we change how we process personal data. The
            current version is always available on this page, with the date of the last update at
            the top.
          </p>
        ),
      },
    ],
  },
};
