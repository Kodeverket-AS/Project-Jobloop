import { Tiltak } from '@/types/sanity/sanity.types';
import { Client } from './Sanity';

export async function getData(): Promise<Tiltak[]> {
  return Client.fetch(`{
    "tiltak": *[_type == "tiltak"] | order(index),                  
  }`);
}
