// import Image from 'next/image';
// import React from 'react';

// interface ReviewKHProps {
//   name?: string;
//   position?: string;
//   company?: string;
//   text?: string;
//   image?: string;
// }

// const ReviewKH: React.FC<ReviewKHProps> = ({
//   name = "Andreas Takvam",
//   position = "Project Manager",
//   company = "Kodeverket",
//   text = "\"Som prosjektleder i et IT-selskap har jeg hatt gleden av å samarbeide med flere lærlinger fra JobLoop. De har vist imponerende engasjement, teknisk forståelse og evne til å lære raskt. For oss har dette samarbeidet vært en stor ressurs – lærlingene bidrar med ny energi og nye perspektiver, samtidig som de får verdifull erfaring i ekte prosjekter. Vi er svært fornøyde og ser frem til å ta imot flere lærlinger i fremtiden!\"",
//   image = "/AndreasT-300x300.png"
// }) => {
//   return (
//     <div className="w-full ">
//       <div className="bg-white rounded-2xl py-8 shadow-lg border border-gray-100  mx-auto px-4">
//         <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center px-12">
//           <div className="flex gap-4 items-center ">
//             <Image
//               src={image}
//               alt={name}
//               width={300}
//               height={300}
//               className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover mb-4"
//             />
//             <div className="flex flex-col">
//             <h3 className="text-xl font-bold text-jobloop-primary-grey mb-1">
//               {name}
//             </h3>
//             <p className="text-jobloop-primary-orange font-semibold mb-1">
//               {position}
//             </p>
//             <p className="text-jobloop-primary-grey">
//               {company}
//             </p>
//             </div>
//           </div>

//           <blockquote className="text-lg lg:text-xl text-jobloop-primary-grey italic leading-relaxed flex-1 text-center md:text-left">
//             {text}
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewKH;
