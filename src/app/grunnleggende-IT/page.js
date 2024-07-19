import Image from "next/image";
import { getData } from "../../../lib/GetData";

export default async function GrunnleggendeIT() {
  const data = await getData();
  const gIT = data[3];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      Velkommen til Grunnleggende IT, denne siden er under konstruksjon.
    </main>
  );
}