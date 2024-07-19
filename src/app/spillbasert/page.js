import Image from "next/image";
import { getData } from "../../../lib/GetData";

export default async function Spillbasert() {
  const data = await getData();
  const spillbasert = data[4];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      Velkommen til Spillbasert, denne siden er under konstruksjon.
    </main>
  );
}