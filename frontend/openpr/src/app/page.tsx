import Image from "next/image";

import Silk from "@/app/components/background";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <Silk />
      </div>

      {/* Foreground Content */}
      <div className="flex flex-col items-center justify-center text-white text-center min-h-screen px-4">
        <h1 className="text-4xl font-bold mb-4">OpenPR</h1>
        <p className="text-lg mb-8 max-w-xl">
          A platform to explore and contribute to open-source projects.
        </p>
        <Image
          src="/logo.png"
          alt="OpenPR Logo"
          width={150}
          height={150}
          className="mb-8"
        />
        <a
          href="/explore"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Explore Projects
        </a>
      </div>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div>
//       <Silk />
//       <div >
       
//         <h1 >OpenPR</h1>

//         <p className="text-lg mb-8">A platform to explore and contribute to open-source projects.</p>
//         <Image
//           src="/logo.png"
//           alt="OpenPR Logo"
//           width={150}
//           height={150}
//           className="mb-8"
//         />
//         <a
//           href="/explore"
//           className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
//         >
//           Explore Projects
//         </a>
//       </div>

//     </div>
//   );
// }
