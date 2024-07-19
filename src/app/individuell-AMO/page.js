import Image from "next/image";
import { getData } from "../../../lib/GetData";

export default async function IndividuellAMO() {
  const data = await getData();
  const amo = data[5];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      Velkommen til Individuell AMO, denne siden er under konstruksjon.
    </main>
  );
}