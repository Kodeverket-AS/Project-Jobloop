import { Client } from "./Sanity";

export async function getData() {
  return Client.fetch(`{
    "tiltak": *[_type == "tiltak"] | order(index) {title, heading, introtext, "image":image.asset->url, "alt":image.alt, targetGroup, targetGroupShort, duration, lectureType, locations, curriculum, use, leader, "image2":image2.asset->url, "alt2":image2.alt, employer, "image3":image3.asset->url, "alt3":image3.alt, school, "image4":image4.asset->url, "alt4":image4.alt, cities, FAQ1, FAA1, FAQ2, FAA2, FAQ3, FAA3, index, _id},
  }`,
  {
    next: {
      revalidate: 10,
    },
  });
  //{ cache: "no-cache" }
}
