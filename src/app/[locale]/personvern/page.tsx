import type { Metadata } from 'next';
import LegalPage, { getLegalLocale } from '@/components/feature/legal/LegalPage';
import { personvernContent } from './content';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = personvernContent[getLegalLocale(locale)];
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function Personvern({ params }: Props) {
  const { locale } = await params;
  return <LegalPage {...personvernContent[getLegalLocale(locale)]} />;
}
