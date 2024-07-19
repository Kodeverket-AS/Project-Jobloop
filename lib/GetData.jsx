import { Client } from "./Sanity";

export async function getData() {
  return Client.fetch(`{
    "tiltak": *[_type == "tiltak"] | order(index) {title, heading, introtext, "image": image.asset->url, targetGroup, targetGroupShort, duration, lectureType, locations, curriculum, use, leader, "image2": image2.asset->url, employer, "image3": image3.asset->url, school, "image4": image4.asset->url, cities, FAQ1, FAA1, FAQ2, FAA2, FAQ3, FAA3, index _id},
  }`);
  //{ cache: "no-cache" }
}
