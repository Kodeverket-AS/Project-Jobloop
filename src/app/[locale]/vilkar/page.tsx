import type { Metadata } from 'next';
import LegalPage, { getLegalLocale } from '@/components/feature/legal/LegalPage';
import { vilkarContent } from './content';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = vilkarContent[getLegalLocale(locale)];
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function Vilkar({ params }: Props) {
  const { locale } = await params;
  return <LegalPage {...vilkarContent[getLegalLocale(locale)]} />;
}
