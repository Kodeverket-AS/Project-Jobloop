// Server komponent - searchParams, filtrering

import { ContactGroup } from '@/components/contacts/ContactGroup';
import type { Contacts } from '@/types/sanity/sanity.types';
import ContactFilters from './ContactFilters';

// Tenk: denne dataen kommer fra Sanity / API
async function getContacts(): Promise<Contacts[]> {
  // eksisterende fetch-logikk din
  return [];
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    name?: string;
    department?: string;
  }>;
}) {
  const { name = '', department = '' } = await searchParams;

  const data = await getContacts();
}
