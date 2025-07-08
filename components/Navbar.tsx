// "use client";

// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Focus Areas", href: "/#focus-areas" },
//     { name: "Initiatives", href: "/#initiatives" },
//     { name: "Contact", href: "/#footer" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3">
//             <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
//               <Image
//                 src="/logo_ngo.jpg"
//                 alt="Divatharv Vikas Foundation Logo"
//                 width={40}
//                 height={40}
//               />
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-xl font-bold text-[#b86e33] font-playfair">
//                 Divatharv Vikas Foundation
//               </h1>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
//               </Link>
//             ))}
//             <Button className="bg-gradient-to-r from-[#b86e33] to-[#d9a76c] hover:from-[#a05e2b] hover:to-[#c9925a] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105">
//               <Link href="/donate">Donate Now</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
//             >
//               {isOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>

//           {/* Mobile logo text */}
//           <div className="md:hidden">
//             <h1 className="text-sm font-bold text-[#b86e33] font-playfair">
//               Divatharv Vikas Foundation
//             </h1>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="px-3 py-2">
//                 <Button className="w-full bg-gradient-to-r from-[#b86e33] to-[#d9a76c] hover:from-[#a05e2b] hover:to-[#c9925a] text-white rounded-full font-medium">
//                   <Link href="/donate">Donate Now</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Focus Areas", href: "/#focus-areas" },
    { name: "Initiatives", href: "/#initiatives" },
    { name: "Gallery", href: "/our-gallery" },
    { name: "Contact", href: "/#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and NGO Name */}
          <Link href="/" className="flex items-center space-x-3 flex-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/logo_ngo.jpg"
                alt="Divatharv Vikas Foundation Logo"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#941B0C] font-playfair">
                <span className="hidden sm:inline">
                  Divatharv Vikas Foundation
                </span>
                <span className="sm:hidden text-sm">
                  Divatharv Vikas Foundation
                </span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#BC3908] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BC3908] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-[#941B0C] to-[#BC3908] hover:from-[#BC3908] hover:to-[#F6AA1C] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#BC3908] transition-colors duration-200 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[#BC3908] font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-[#941B0C] to-[#BC3908] hover:from-[#BC3908] hover:to-[#F6AA1C] text-white rounded-full font-medium">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
