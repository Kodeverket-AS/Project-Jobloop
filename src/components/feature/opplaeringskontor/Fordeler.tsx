// "use client";

// import { useEffect, useRef } from "react";
// import React from "react";

// interface FordelerProps {
//   title?: string;
//   items?: FordelItem[];
// }

// interface FordelItem {
//   title: string;
//   text: string;
// }

// const Fordeler: React.FC<FordelerProps> = ({
//   title = "Fordeler for bedrifter som samarbeider med vårt opplæringskontor",
//   items
// }) => {
//   const cardsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (cardsRef.current) {
//       const cards = cardsRef.current.querySelectorAll('.card-slide-in');
//       cards.forEach((card) => {
//         observer.observe(card);
//       });
//     }

//     return () => observer.disconnect();
//   }, []);

//   const defaultItems: FordelItem[] = [
//     {
//       title: "Støtte gjennom hele lærlingperioden",
//       text: "Vi hjelper bedriften med alt fra rekruttering til oppfølging og veiledning av lærlingen."
//     },
//     {
//       title: "Enklere administrasjon",
//       text: "Vi tar oss av det meste av papirarbeidet, kontrakter og rapportering til fylkeskommunen."
//     },
//     {
//       title: "Trygghet og kvalitetssikring",
//       text: "Vi sørger for at opplæringen følger læreplanene og oppfyller kravene i fagopplæringen."
//     },
//     {
//       title: "Råd og veiledning",
//       text: "Bedriften får tilgang til faglig og pedagogisk støtte underveis."
//     },
//     {
//       title: "Mulighet til å forme fremtidens fagarbeidere",
//       text: "Ved å ta inn lærlinger bidrar bedriften til rekruttering og utvikling i bransjen."
//     },
//     {
//       title: "Økonomiske fordeler",
//       text: "Bedrifter som tar imot lærlinger kan få tilskudd og økonomisk støtte gjennom ordninger for fagopplæring."
//     }
//   ];

//   return (
//     <div className="w-full bg-jobloop-primary-green/50 rounded-2xl py-16 mb-16">
//       <div className="max-w-[1536px] mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 ">
//           {title}
//         </h2>

//         <div className="flex flex-col gap-6 items-center" ref={cardsRef}>
//         {(items || defaultItems).map((fordel, index) => (
//           <div
//             key={index}
//             className="card-slide-in bg-white rounded-2xl p-6 border-l-4 border-jobloop-primary-green hover:shadow-lg transition-all duration-300 hover:scale-105 w-9/10 md:w-4/5"
//             style={{
//               transitionDelay: `${index * 0.1}s`
//             }}
//           >
//             <div>
//               <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">
//                 {fordel.title}
//               </h3>
//               <p className="text-lg text-jobloop-primary-grey">
//                 {fordel.text}
//               </p>
//             </div>
//           </div>
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fordeler;
