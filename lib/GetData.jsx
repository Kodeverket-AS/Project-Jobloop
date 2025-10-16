import { Client } from './Sanity';

export async function getData() {
  return Client.fetch(`{
    "tiltak": *[_type == "tiltak"] | order(index) {
      title, 
      heading, 
      introtext, 
      image, 
      targetGroup, 
      targetGroupShort, 
      duration,
      lectureType,
      locations,
      curriculum,
      use,
      leader,
      courseLeaders,
      image2,
      employer,
      image3,
      school,
      image4,
      cities,
      FAQ1,
      FAA1,
      FAQ2,
      FAA2,
      FAQ3,
      FAA3,
      index,
      _id
    },                  
  }`);
  //{ cache: "no-cache" }
}
