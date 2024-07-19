import Image from "next/image";
import { getData } from "../../../lib/GetData";

export default async function Teamwork() {
  const data = await getData();
  const teamwork = data[6];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      Velkommen til Teamwork, denne siden er under konstruksjon.
    </main>
  );
}