import { Link } from '@/i18n/navigation';
import type { LegalContent, LegalLocale } from '@/components/feature/legal/LegalPage';

export const vilkarContent: Record<LegalLocale, LegalContent> = {
  nb: {
    metaTitle: 'Vilkår for bruk | JobLoop',
    metaDescription: 'Vilkårene som gjelder når du bruker nettsiden til JobLoop.',
    title: 'Vilkår for bruk',
    lastUpdatedLabel: 'Sist oppdatert',
    lastUpdated: '25. september 2026',
    intro: <p>Her finner du vilkårene som gjelder når du bruker nettsiden til JobLoop.</p>,
    sections: [
      {
        title: 'Om vilkårene',
        content: (
          <p>
            Disse vilkårene gjelder for bruk av nettsiden jobloop.no, som drives av JobLoop (org.nr.
            920 132 707). Ved å bruke nettsiden godtar du vilkårene. Deltakelse i kurs, tiltak og
            andre tjenester fra JobLoop reguleres av egne avtaler.
          </p>
        ),
      },
      {
        title: 'Innholdet på nettsiden',
        content: (
          <p>
            Innholdet på nettsiden er ment som generell informasjon om JobLoop og tilbudene våre.
            Vi jobber for at informasjonen skal være riktig og oppdatert, men kan ikke garantere at
            den alltid er fullstendig. Opplysninger om kurs, tider og innhold kan endres. Ta
            kontakt med oss hvis du vil ha bekreftet noe.
          </p>
        ),
      },
      {
        title: 'Opphavsrett',
        content: (
          <p>
            Tekster, bilder, logoer og annet innhold på nettsiden tilhører JobLoop eller våre
            samarbeidspartnere, og er beskyttet av opphavsretten. Du kan ikke kopiere, publisere
            eller bruke innholdet kommersielt uten skriftlig tillatelse fra oss. Du kan gjerne dele
            lenker til sidene våre.
          </p>
        ),
      },
      {
        title: 'Lenker til andre nettsider',
        content: (
          <p>
            Nettsiden lenker til nettsider og tjenester som drives av andre, for eksempel
            samarbeidspartnere, sosiale medier og bookingtjenester. Vi har ikke ansvar for
            innholdet eller personvernpraksisen på disse sidene.
          </p>
        ),
      },
      {
        title: 'Interne sider',
        content: (
          <p>
            Enkelte deler av nettsiden er bare for autoriserte brukere og krever innlogging. Du skal
            ikke dele tilgangen din med andre eller forsøke å få tilgang til områder du ikke har
            rettigheter til.
          </p>
        ),
      },
      {
        title: 'Ansvarsbegrensning',
        content: (
          <p>
            Vi gjør vårt beste for at nettsiden skal være tilgjengelig og fungere som den skal, men
            vi kan ikke garantere at den alltid er oppe eller uten feil. JobLoop er ikke ansvarlig
            for tap som følge av bruk av nettsiden eller at den ikke er tilgjengelig, så langt det
            er tillatt etter norsk lov.
          </p>
        ),
      },
      {
        title: 'Personvern',
        content: (
          <p>
            Hvordan vi behandler personopplysninger, står i{' '}
            <Link href='/personvern'>personvernerklæringen</Link> vår.
          </p>
        ),
      },
      {
        title: 'Endringer i vilkårene',
        content: (
          <p>
            Vi kan endre disse vilkårene. Den gjeldende versjonen ligger alltid på denne siden, med
            dato for siste oppdatering øverst.
          </p>
        ),
      },
      {
        title: 'Lovvalg',
        content: (
          <p>Vilkårene reguleres av norsk lov. Tvister skal først forsøkes løst i minnelighet.</p>
        ),
      },
      {
        title: 'Kontakt',
        content: (
          <p>
            JobLoop
            <br />
            Org.nr. 920 132 707
            <br />
            Veiten 3, 5012 Bergen
            <br />
            E-post: <a href='mailto:team@jobloop.no'>team@jobloop.no</a>
          </p>
        ),
      },
    ],
  },
  en: {
    metaTitle: 'Terms of Use | JobLoop',
    metaDescription: 'The terms that apply when you use the JobLoop website.',
    title: 'Terms of Use',
    lastUpdatedLabel: 'Last updated',
    lastUpdated: '25 September 2026',
    intro: <p>These are the terms that apply when you use the JobLoop website.</p>,
    sections: [
      {
        title: 'About these terms',
        content: (
          <p>
            These terms apply to your use of the website jobloop.no, which is operated by JobLoop
            (org. no. 920 132 707). By using the website, you accept these terms. Participation in
            courses, programmes and other services from JobLoop is governed by separate
            agreements.
          </p>
        ),
      },
      {
        title: 'Website content',
        content: (
          <p>
            The content on the website is intended as general information about JobLoop and what
            we offer. We work to keep the information accurate and up to date, but cannot
            guarantee that it is always complete. Details about courses, dates and content may
            change. Please contact us if you want something confirmed.
          </p>
        ),
      },
      {
        title: 'Copyright',
        content: (
          <p>
            Text, images, logos and other content on the website belong to JobLoop or our partners
            and are protected by copyright. You may not copy, publish or use the content
            commercially without our written permission. You are welcome to share links to our
            pages.
          </p>
        ),
      },
      {
        title: 'Links to other websites',
        content: (
          <p>
            The website links to websites and services run by others, such as partners, social
            media and booking services. We are not responsible for the content or privacy practices
            of these sites.
          </p>
        ),
      },
      {
        title: 'Internal pages',
        content: (
          <p>
            Some parts of the website are only for authorised users and require you to log in. You
            must not share your access with others or try to access areas you are not authorised
            to use.
          </p>
        ),
      },
      {
        title: 'Limitation of liability',
        content: (
          <p>
            We do our best to keep the website available and working as it should, but we cannot
            guarantee that it is always up or free of errors. To the extent permitted by Norwegian
            law, JobLoop is not liable for any loss resulting from use of the website or from it
            being unavailable.
          </p>
        ),
      },
      {
        title: 'Privacy',
        content: (
          <p>
            How we process personal data is described in our{' '}
            <Link href='/personvern'>privacy policy</Link>.
          </p>
        ),
      },
      {
        title: 'Changes to these terms',
        content: (
          <p>
            We may change these terms. The current version is always available on this page, with
            the date of the last update at the top.
          </p>
        ),
      },
      {
        title: 'Governing law',
        content: (
          <p>
            These terms are governed by Norwegian law. Any disputes should first be resolved
            amicably.
          </p>
        ),
      },
      {
        title: 'Contact',
        content: (
          <p>
            JobLoop
            <br />
            Org. no. 920 132 707
            <br />
            Veiten 3, 5012 Bergen, Norway
            <br />
            Email: <a href='mailto:team@jobloop.no'>team@jobloop.no</a>
          </p>
        ),
      },
    ],
  },
};
