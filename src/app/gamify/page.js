import Image from "next/image";
import { getData } from "../../../lib/GetData";

export default async function Gamify() {
  const data = await getData();
  const gamify = data[1];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      Velkommen til Gamify, denne siden er under konstruksjon.
    </main>
  );
}