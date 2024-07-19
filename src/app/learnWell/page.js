import Image from "next/image";
import { getData } from "../../../lib/GetData";

export default async function LearnWell() {
  const data = await getData();
  const learnWell = data[0];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      Velkommen til LearnWell, denne siden er under konstruksjon.
    </main>
  );
}