// "use client";

// import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
// const quickLinks = [
//   { name: "About Us", href: "/about" },
//   { name: "Focus Areas", href: "/#focus-areas" },
//   { name: "Initiatives", href: "/#initiatives" },
//   { name: "Get Involved", href: "/#get-involved" },
//   { name: "Contact", href: "/#contact" },
// ];

//   const socialLinks = [
//     { icon: Facebook, href: "https://www.instagram.com/divatharvvikasfoundation/", name: "Facebook" },
//     { icon: Instagram, href: "#", name: "Instagram" },
//   ];

//   return (
//     <footer id="footer" className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
//           {/* Organization Info */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
//                 <Image
//                   src="/logo_ngo.jpg"
//                   alt="Divatharv Vikas Foundation Logo"
//                   width={48}
//                   height={48}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold font-playfair">
//                   Divatharv Vikas Foundation
//                 </h3>
//               </div>
//             </div>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Empowering holistic transformation for a sustainable future
//               through compassion, consciousness, and community-driven
//               initiatives.
//             </p>
//             <div className="space-y-3">
//               <div className="flex items-center">
//                 <MapPin className="w-5 h-5 text-[#fbecca] mr-3 flex-shrink-0" />
//                 <p className="text-sm text-gray-300">
//                   1, Competition colony, Rangbari Road Main Road, Kota-324005,
//                   Rajasthan, India
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="w-5 h-5 text-[#fbecca] mr-3" />
//                 <p className="text-sm text-gray-300">+91-8619308398</p>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="w-5 h-5 text-[#fbecca] mr-3" />
//                 <p className="text-sm text-gray-300">
//                   divatharvvikasfoundation@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-start-3 lg:col-span-1">
//             <h4 className="text-lg font-semibold mb-6 font-playfair">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks
//                 .filter((link) => link.name !== "Contact")
//                 .map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       href={link.href}
//                       className="text-gray-300 hover:text-[#fbecca] transition-colors duration-200 text-sm"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//             </ul>
//           </div>

//           {/* Connect with Us */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 font-playfair">
//               Connect with Us
//             </h4>
//             <div className="space-y-4">
//               <div>
//                 <h5 className="text-sm font-medium text-[#fbecca] mb-2">
//                   Follow Us
//                 </h5>
//                 <div className="flex space-x-3">
//                   {socialLinks.map((social) => {
//                     const IconComponent = social.icon;
//                     return (
//                       <Link
//                         key={social.name}
//                         href={social.href}
//                         className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#b86e33] transition-colors duration-200"
//                         aria-label={social.name}
//                       >
//                         <IconComponent className="w-4 h-4" />
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-sm text-gray-400 mb-4 md:mb-0">
//               <p>
//                 &copy; 2024 Divatharv Vikas Foundation. All rights reserved.
//               </p>
//               <p className="mt-1">
//                 Registration No: 093132 | CIN: U88900RJ2024NPL093132 | PAN:
//                 AAKCD6984B
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Focus Areas", href: "/#focus-areas" },
    { name: "Initiatives", href: "/#initiatives" },
    { name: "Events", href: "/events" },
    { name: "Get Involved", href: "/#get-involved" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/16aRWrMz5P/?mibextid=qi2Omg",
      name: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/divatharvvikasfoundation/",
      name: "Instagram",
    },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo_ngo.jpg"
                  alt="Divatharv Vikas Foundation Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">
                  Divatharv Vikas Foundation
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering holistic transformation for a sustainable future
              through compassion, consciousness, and community-driven
              initiatives.
            </p>
            <Image
              src="footer iftdo.jpg"
              alt="iftdo logo"
              width={150}
              height={100}
            ></Image>
            <p className="text-gray-300 leading-relaxed">
              Member of IFTDO: <br /> Driving Global Change
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-start-3 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 font-playfair">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks
                .filter((link) => link.name !== "Contact")
                .map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#fbecca] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-playfair">
              Connect with Us
            </h4>
            <div className="space-y-6">
              {/* Social Links */}
              <div>
                <h5 className="text-sm font-medium text-[#F6AA1C] mb-2">
                  Follow Us
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#941B0C] transition-colors duration-200"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#F6AA1C] mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    1, Competition colony, Rangbari Road Main Road, Kota-324005,
                    Rajasthan, India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#F6AA1C] mr-3" />
                  <p className="text-sm text-gray-300">+91-8619308398</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#F6AA1C] mr-3" />
                  <p className="text-sm text-gray-300">
                    divatharvvikasfoundation@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>
                &copy; 2024 Divatharv Vikas Foundation. All rights reserved.
              </p>
              <p className="mt-1">
                Registration No: 093132 | CIN: U88900RJ2024NPL093132 | PAN:
                AAKCD6984B
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
