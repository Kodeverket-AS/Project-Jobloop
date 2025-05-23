import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_DATASET;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const Client = createClient({
    projectId: "dm8vyhbj",
    dataset: "production",
    apiVersion: "2025-04-09", // https://www.sanity.io/docs/api-versioning
    useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

// Handle sanity images without GROQ manipulation
const builder = imageUrlBuilder(Client);
export function urlFor(source) {
    return builder.image(source);
}
