import { Tiltak } from '@/types/sanity/sanity.types';
import { Client } from './Sanity';

export async function getData(): Promise<{ tiltak: Tiltak[] }> {
  return Client.fetch(`{
    "tiltak": *[_type == "tiltak"] | order(index),                  
  }`);
}
