import { Client } from "./Sanity";

export async function sanityFetch<QueryResponse>({ query }: { query: string;}) {
  return Client.fetch<QueryResponse>(query, {}, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 10 : 12
    }
  });
}