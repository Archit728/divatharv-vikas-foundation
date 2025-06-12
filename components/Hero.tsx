"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Play, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // const slides = [
//   //   {
//   //     title: "Empowering Holistic Transformation",
//   //     subtitle: "For A Sustainable Future",
//   //     description: "Knowledge for progress, service for humanity",
//   //     image: "/placeholder.svg?height=600&width=800",
//   //   },
//   //   {
//   //     title: "Building Compassionate Communities",
//   //     subtitle: "Through Sustainable Development",
//   //     description: "Creating lasting positive change across India",
//   //     image: "/placeholder.svg?height=600&width=800",
//   //   },
//   //   {
//   //     title: "Transforming Lives Together",
//   //     subtitle: "One Community At A Time",
//   //     description: "Join us in our mission to impact one million lives by 2030",
//   //     image: "/placeholder.svg?height=600&width=800",
//   //   },
//   // ];
//   const slides = [
//     {
//       title: "Empowering<br/>Holistic<br/>Transformation",
//       subtitle: "For A<br/>Sustainable<br/>Future",
//       description: "Knowledge for progress, service for humanity",
//       image: "/placeholder.svg?height=600&width=800",
//     },
//     {
//       title: "Building<br/>Compassionate<br/>Communities",
//       subtitle: "Through<br/>Sustainable<br/>Development",
//       description: "Creating lasting positive change across India",
//       image: "/placeholder.svg?height=600&width=800",
//     },
//     {
//       title: "Transforming<br/>Lives<br/>Together",
//       subtitle: "One<br/>Community<br/>At A Time",
//       description: "Join us in our mission to impact one million lives by 2030",
//       image: "/placeholder.svg?height=600&width=800",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background with gradient overlay */}
//       <div className="absolute inset-0 hero-gradient">
//         <div className="absolute inset-0 bg-black/20"></div>
//       </div>

//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
//         <div
//           className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="text-center lg:text-left animate-slide-up">
//             {/* Sanskrit motto */}
//             <div className="mb-6">
//               <p className="text-yellow-300 font-medium text-lg mb-2 font-playfair">
//                 Divatharv Vikas Foundation
//               </p>
//               <p className="text-yellow-300 font-medium text-lg mb-2 font-playfair">
//                 ज्ञानम् विकासाय, सेवा लोकाय
//               </p>
//               <p className="text-white/90 text-sm uppercase tracking-wider">
//                 Knowledge for progress, service for humanity
//               </p>
//             </div>

//             {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
//               <span className="block">{slides[currentSlide].title}</span>
//               <span className="block text-yellow-300 mt-2">
//                 {slides[currentSlide].subtitle}
//               </span>
//             </h1> */}
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair leading-tight text-center lg:text-left">
//               <span
//                 className="block"
//                 dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
//               />
//               <span
//                 className="block text-yellow-300 mt-2"
//                 dangerouslySetInnerHTML={{
//                   __html: slides[currentSlide].subtitle,
//                 }}
//               />
//             </h1>

//             <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
//               {slides[currentSlide].description}
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
//               <div className="text-center">
//                 <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto overflow-hidden">
//                   <Image
//                     src="/logo_ngo.jpg"
//                     alt="Logo"
//                     width={48}
//                     height={48}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <p className="text-2xl font-bold text-white">2024</p>
//                 <p className="text-white/80 text-sm">Established</p>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
//                   <Users className="w-6 h-6 text-white" />
//                 </div>
//                 <p className="text-2xl font-bold text-white">1M</p>
//                 <p className="text-white/80 text-sm">Target Lives</p>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
//                   <Globe className="w-6 h-6 text-white" />
//                 </div>
//                 <p className="text-2xl font-bold text-white">6</p>
//                 <p className="text-white/80 text-sm">Focus Areas</p>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Button
//                 size="lg"
//                 className="bg-white text-[#b86e33] hover:bg-white/90 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
//                 onClick={() =>
//                   document
//                     .getElementById("get-involved")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//               >
//                 Get Involved
//                 <ChevronRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-white text-white hover:bg-white hover:text-emerald-800 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
//               >
//                 <Play className="mr-2 w-5 h-5" />
//                 Watch Our Story
//               </Button>
//             </div>
//           </div>

//           {/* Image/Video Section */}
//           <div className="relative animate-fade-in">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src={slides[currentSlide].image || "/placeholder.svg"}
//                 alt="Divatharv Vikas Foundation Impact"
//                 width={600}
//                 height={400}
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>

//             {/* Slide indicators */}
//             <div className="flex justify-center mt-6 space-x-2">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                     index === currentSlide ? "bg-white" : "bg-white/50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ("use client");

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empowering<br/>Holistic<br/>Transformation",
      subtitle: "For A<br/>Sustainable<br/>Future",
      description: "Knowledge for progress, service for humanity",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Building<br/>Compassionate<br/>Communities",
      subtitle: "Through<br/>Sustainable<br/>Development",
      description: "Creating lasting positive change across India",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Transforming<br/>Lives<br/>Together",
      subtitle: "One<br/>Community<br/>At A Time",
      description: "Join us in our mission to impact one million lives by 2030",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Sanskrit motto */}
            <div className="mb-6">
              <p className="text-yellow-300 font-medium text-lg mb-2 font-playfair">
                ज्ञानम् विकासाय, सेवा लोकाय
              </p>
              <p className="text-white/90 text-sm uppercase tracking-wider">
                Knowledge for progress, service for humanity
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair leading-tight text-center lg:text-left">
              <span
                className="block"
                dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
              />
              <span
                className="block text-yellow-300 mt-2"
                dangerouslySetInnerHTML={{
                  __html: slides[currentSlide].subtitle,
                }}
              />
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              {slides[currentSlide].description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto overflow-hidden">
                  <Image
                    src="/logo_ngo.jpg"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    style={{ transform: "scale(0.999)" }}
                  />
                </div>
                <p className="text-2xl font-bold text-white">2024</p>
                <p className="text-white/80 text-sm">Established</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-white">1M</p>
                <p className="text-white/80 text-sm">Target Lives</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-white">6</p>
                <p className="text-white/80 text-sm">Focus Areas</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-[#941B0C] hover:bg-white/90 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("get-involved")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Involved
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#941B0C] font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Image/Video Section */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt="Divatharv Vikas Foundation Impact"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={
          () =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth", block: "center" })
          // .getElementById("get-involved")
          // ?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
