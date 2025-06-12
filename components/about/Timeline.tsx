// "use client"

// import { Calendar, MapPin, Users, Target, Award, Rocket } from "lucide-react"

// export default function Timeline() {
//   const timelineEvents = [
//     {
//       year: "2024",
//       title: "Foundation Established",
//       description: "Divatharv Vikas Foundation registered as Section 8 organization in Kota, Rajasthan",
//       icon: MapPin,
//       color: "from-emerald-500 to-teal-500",
//     },
//     {
//       year: "2024",
//       title: "First Initiatives Launched",
//       description: "Education Drive and Women Rise Initiative programs begin serving communities",
//       icon: Rocket,
//       color: "from-blue-500 to-indigo-500",
//     },
//     {
//       year: "2024",
//       title: "Partnership Network",
//       description: "Strategic collaborations with government bodies, corporates, and international organizations",
//       icon: Users,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       year: "2025",
//       title: "Expansion Phase",
//       description: "Scaling programs across multiple districts and launching new focus areas",
//       icon: Target,
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       year: "2027",
//       title: "Mid-term Impact",
//       description: "Reaching 500,000 lives through comprehensive development programs",
//       icon: Award,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       year: "2030",
//       title: "Vision Achievement",
//       description: "Impacting one million lives through scalable, sustainable community solutions",
//       icon: Calendar,
//       color: "from-teal-500 to-cyan-500",
//     },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-slide-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
//             Our <span className="gradient-text">Journey</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From inception to our vision of impacting one million lives by 2030
//           </p>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>

//           <div className="space-y-12">
//             {timelineEvents.map((event, index) => {
//               const IconComponent = event.icon
//               const isEven = index % 2 === 0

//               return (
//                 <div
//                   key={index}
//                   className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"} animate-fade-in`}
//                   style={{ animationDelay: `${index * 0.2}s` }}
//                 >
//                   {/* Content */}
//                   <div className={`w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}>
//                     <div className="bg-white rounded-2xl p-6 shadow-xl card-hover">
//                       <div className={`flex items-center ${isEven ? "justify-end" : "justify-start"} mb-4`}>
//                         <div
//                           className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center ${isEven ? "ml-4" : "mr-4"}`}
//                         >
//                           <IconComponent className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                           <span className="text-2xl font-bold text-emerald-600">{event.year}</span>
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">{event.title}</h3>
//                       <p className="text-gray-600 leading-relaxed">{event.description}</p>
//                     </div>
//                   </div>

//                   {/* Timeline dot */}
//                   <div className="w-2/12 flex justify-center">
//                     <div
//                       className={`w-6 h-6 bg-gradient-to-br ${event.color} rounded-full border-4 border-white shadow-lg`}
//                     ></div>
//                   </div>

//                   {/* Empty space */}
//                   <div className="w-5/12"></div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { Award, Calendar, MapPin, Rocket, Target, Users } from "lucide-react";

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2024",
      title: "Foundation Established",
      description:
        "Divatharv Vikas Foundation registered as Section 8 organization in Kota, Rajasthan",
      icon: MapPin,
      color: "from-[#941B0C] to-[#BC3908]",
    },
    {
      year: "2024",
      title: "First Initiatives Launched",
      description:
        "Education Drive and Women Rise Initiative programs begin serving communities",
      icon: Rocket,
      color: "from-[#BC3908] to-[#F6AA1C]",
    },
    {
      year: "2024",
      title: "Partnership Network",
      description:
        "Strategic collaborations with government bodies, corporates, and international organizations",
      icon: Users,
      color: "from-[#F6AA1C] to-[#FFD700]",
    },
    {
      year: "2025",
      title: "Expansion Phase",
      description:
        "Scaling programs across multiple districts and launching new focus areas",
      icon: Target,
      color: "from-[#941B0C] to-[#F6AA1C]",
    },
    {
      year: "2027",
      title: "Mid-term Impact",
      description:
        "Reaching 500,000 lives through comprehensive development programs",
      icon: Award,
      color: "from-[#BC3908] to-[#FFD700]",
    },
    {
      year: "2030",
      title: "Vision Achievement",
      description:
        "Impacting one million lives through scalable, sustainable community solutions",
      icon: Calendar,
      color: "from-[#941B0C] to-[#BC3908]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#FFF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From inception to our vision of impacting one million lives by 2030
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#941B0C] via-[#BC3908] to-[#F6AA1C] rounded-full shadow-sm"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      isEven ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl card-hover border border-[#FFEBCC]/30">
                      <div
                        className={`flex items-center ${
                          isEven ? "justify-end" : "justify-start"
                        } mb-4`}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${
                            event.color
                          } rounded-full flex items-center justify-center ${
                            isEven ? "ml-4" : "mr-4"
                          } shadow-md`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-[#BC3908]">
                            {event.year}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div
                      className={`w-6 h-6 bg-gradient-to-br ${event.color} rounded-full border-4 border-white shadow-lg`}
                    ></div>
                  </div>

                  {/* Empty space */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline for smaller screens */}
        <div className="block md:hidden">
          <div className="relative pl-8">
            {/* Mobile timeline line */}
            <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-[#941B0C] via-[#BC3908] to-[#F6AA1C] rounded-full"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;

                return (
                  <div
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Mobile timeline dot */}
                    <div className="absolute -left-6 top-6">
                      <div
                        className={`w-4 h-4 bg-gradient-to-br ${event.color} rounded-full border-2 border-white shadow-md`}
                      ></div>
                    </div>

                    {/* Mobile content */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-[#FFEBCC]/30">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mr-3 shadow-md`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-[#BC3908]">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
