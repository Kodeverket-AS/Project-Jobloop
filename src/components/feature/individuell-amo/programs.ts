export type IndividuellAmoProgram = {
  slug: string;
  tittel: string;
  undertittel: string;
  intro: string;
  malgruppe: string;
  varighet: string;
  fokus: string;
  mal: string;
  pdfHref: string;
};

const DM_BASE = 'https://jobloop-dm.vercel.app/';

export const individuellAmoPrograms: IndividuellAmoProgram[] = [
  {
    slug: 'kodehode',
    tittel: 'Kodehode',
    undertittel: 'Individuell AMO med Kodehode',
    intro:
      'Et skreddersydd og intensivt kompetanseløp for deg som vil inn i IT-bransjen. Vi tilpasser tech-stack, tempo og læringsmål til dine behov, og kombinerer teori, oppgaver og tett mentoroppfølging — med arbeid som mål.',
    malgruppe:
      'Motiverte arbeidssøkere som ønsker en karriere i IT — ofte de som har falt utenfor eller mangler formell utdanning.',
    varighet: '3–6 måneder, kan forlenges ved behov',
    fokus: 'Frontend, backend, Git & GitHub, portfolio-prosjekt og AI-verktøy',
    mal: 'Relevant IT-kompetanse og en direkte vei mot varig tilknytning til arbeidslivet.',
    pdfHref: `${DM_BASE}${encodeURIComponent('Kodehode - Individuell AMO.dc.html')}`,
  },
  {
    slug: 'grunnleggende-it',
    tittel: 'Grunnleggende IT',
    undertittel: 'Individuell AMO med Grunnleggende IT',
    intro:
      'Et tilpasset løp som gir deg digital kompetanse du kan bruke i hverdagen, samfunnet og arbeidslivet. Vi erstatter datavegring med digital nysgjerrighet — i et tempo og med innhold som passer deg, med tett oppfølging hele veien.',
    malgruppe:
      'Alle som ønsker å bli kjent med og bruke digitale tjenester og verktøy — særlig de som har vært lenge borte fra arbeid eller ikke har hatt tilgang til dem.',
    varighet: 'Tilpasset behov, typisk 3–6 måneder',
    fokus:
      'Microsoft Office/365, Google-plattformen, offentlige tjenester (NAV/Helsenorge), nettsikkerhet og kommunikasjon',
    mal: 'Gi deg ferdighetene du trenger for å bruke digitale tjenester og verktøy trygt — i hverdag og arbeidsliv.',
    pdfHref: `${DM_BASE}${encodeURIComponent('gIT - Individuell AMO.dc.html')}`,
  },
  {
    slug: 'skreddersydd-privatistlop',
    tittel: 'Skreddersydd privatistløp',
    undertittel: 'Individuell AMO – Skreddersydd privatistløp',
    intro:
      'Et tett og fullt ut individuelt tilpasset løp mot privatisteksamen, for deltakere som trenger den aller tetteste oppfølgingen gjennom videregående. Nøkkelen er den individuelle tilpasningen — og vi bruker blant annet spill som pedagogisk metode der det passer og gir faglig utbytte.',
    malgruppe:
      'Unge voksne som ønsker å fullføre videregående, men som trenger tett, individuell oppfølging og ikke takler store klasserom — ofte deltakere på AAP eller sosialhjelp, eller med milde til moderate psykiske helseplager.',
    varighet: '14–18 uker avhengig av eksamenstidspunkt',
    fokus: 'Kjernefag i VGS: norsk, engelsk, historie, samfunnsfag, matematikk og naturfag',
    mal: 'Bestått privatisteksamen og vitnemål — og en tryggere vei videre mot arbeid eller utdanning.',
    pdfHref: `${DM_BASE}${encodeURIComponent('Spillbasert - Individuell2 AMO.dc.html')}`,
  },
  {
    slug: 'digitale-talenter',
    tittel: 'Digitale Talenter',
    undertittel: 'Individuell AMO med Digitale Talenter',
    intro:
      'Et tilpasset løp for deg som vil utvikle dine digitale kreative ferdigheter og ta dem med inn i arbeidslivet. Vi tilpasser innhold og tempo til dine behov, og veileder deg målrettet mot en fremtid i arbeid eller utdanning.',
    malgruppe:
      'Unge voksne (18–30 år) med interesse for kreativ tech, som står langt fra arbeidslivet og ønsker å utvikle sine digitale kreative ferdigheter.',
    varighet: 'Tilpasset behov, typisk 3–6 måneder',
    fokus: 'Kreativ teknologi og programmering, med fokus på mestring og arbeidsliv',
    mal: 'Omsette interessen for kreativ tech til reell kompetanse og en konkret vei inn i arbeidslivet.',
    pdfHref: `${DM_BASE}${encodeURIComponent('Digitale Talenter - Individuell AMO.dc.html')}`,
  },
  {
    slug: 'oppfolging-og-karriereveiledning',
    tittel: 'Oppfølging og karriereveiledning',
    undertittel: 'Individuell AMO med Oppfølging og karriereveiledning',
    intro:
      'Et tilpasset løp som hjelper deg å komme i — og beholde — lønnet arbeid. Vi tar utgangspunkt i dine styrker, jobber tett med arbeidsgivere og NAV, og bygger en konkret vei mot varig tilknytning til arbeidslivet.',
    malgruppe:
      'Personer som trenger arbeidsrettet veiledning og oppfølging for å komme i eller beholde lønnet arbeid — uavhengig av om de har et arbeidsforhold ved oppstart.',
    varighet: 'Inntil 6 måneder, kan forlenges',
    fokus:
      'Yrkeskartlegging, målrettet jobbsøking, intervjutrening, veiledning på arbeidsplassen og jobbfastholdelse',
    mal: 'Varig selvforsørgelse og fast jobb — minst 70 % av deltakerne er i arbeid ved avslutning.',
    pdfHref: `${DM_BASE}${encodeURIComponent('Oppfolging og karriereveiledning - Individuell AMO.dc.html')}`,
  },
];
