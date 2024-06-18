import { Client } from "../../lib/sanity";


export async function getData() {
  return Client.fetch(`{
    "tiltak": *[_type == "tiltak"] {title, _id},
  }`);
  //{ cache: "no-cache" }
}