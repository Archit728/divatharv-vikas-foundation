// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   BookOpen,
//   Briefcase,
//   HandHeart,
//   Heart,
//   Sparkles,
//   Users,
// } from "lucide-react";
// import Image from "next/image";

// export default function InitiativesPreview() {
//   const initiatives = [
//     {
//       icon: BookOpen,
//       title: "Divatharv Education Drive",
//       description:
//         "Reaching underserved children with school kits, academic support, and inclusive education for special needs children.",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "from-[#941B0C] to-[#BC3908]",
//     },
//     {
//       icon: Users,
//       title: "Women Rise Initiative",
//       description:
//         "Empowering women through digital skills, financial literacy, and health awareness with our 'Train Mothers as Trainers' model.",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "from-[#BC3908] to-[#F6AA1C]",
//     },
//     {
//       icon: Briefcase,
//       title: "Training & Development for Empowered Livelihoods",
//       description:
//         "Expert-led sessions and CSR collaborations providing skill development and capacity-building workshops.",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "from-[#F6AA1C] to-[#FFD700]",
//     },
//     {
//       icon: Heart,
//       title: "Advancing Community Health",
//       description:
//         "Vaccination camps, health check-ups, blood donation drives ensuring healthcare access for all communities.",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "from-[#941B0C] to-[#BC3908]",
//     },
//     {
//       icon: Sparkles,
//       title: "Nurturing Spiritual Growth",
//       description:
//         "Community programs fostering spiritual well-being, mindfulness, and holistic personal development.",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "from-[#BC3908] to-[#F6AA1C]",
//     },
//     {
//       icon: HandHeart,
//       title: "Compassionate Social Initiatives",
//       description:
//         "Essential support including food distribution, programs for incarcerated individuals, and vital community services.",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "from-[#F6AA1C] to-[#FFD700]",
//     },
//   ];

//   return (
//     <section
//       id="initiatives"
//       className="py-20 bg-gradient-to-br from-gray-50 to-[#FFF5E6]"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-slide-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
//             Our <span className="gradient-text">Initiatives</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Transformative programs creating lasting impact across communities
//             through innovative, sustainable solutions
//           </p>
//         </div>

//         {/* Featured Initiative */}
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 animate-fade-in">
//           <div className="grid lg:grid-cols-2 gap-0">
//             <div className="relative h-64 lg:h-auto">
//               <Image
//                 src="/placeholder.svg?height=400&width=600"
//                 alt="Featured Initiative"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#941B0C]/80 to-transparent"></div>
//               <div className="absolute top-6 left-6">
//                 <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
//                   Featured Initiative
//                 </span>
//               </div>
//             </div>
//             <div className="p-8 lg:p-12 flex flex-col justify-center">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center mr-4">
//                   <BookOpen className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 font-playfair">
//                   Divatharv Education Drive
//                 </h3>
//               </div>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 Our flagship education initiative reaches underserved children
//                 with comprehensive school kits, academic support, and
//                 specialized programs for children with special needs. We've
//                 earned heartfelt media recognition for the real change we bring
//                 to young lives.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <span className="bg-[#FFF5E6] text-[#941B0C] px-3 py-1 rounded-full text-sm font-medium">
//                   School Kits Distribution
//                 </span>
//                 <span className="bg-[#FFF5E6] text-[#941B0C] px-3 py-1 rounded-full text-sm font-medium">
//                   Special Needs Support
//                 </span>
//                 <span className="bg-[#FFF5E6] text-[#941B0C] px-3 py-1 rounded-full text-sm font-medium">
//                   Academic Mentoring
//                 </span>
//               </div>
//               <Button className="bg-gradient-to-r from-[#941B0C] to-[#BC3908] hover:from-[#BC3908] hover:to-[#F6AA1C] text-white w-fit">
//                 Learn More About This Initiative
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Initiatives Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {initiatives.slice(1).map((initiative, index) => {
//             const IconComponent = initiative.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="relative h-48">
//                   <Image
//                     src={initiative.image || "/placeholder.svg"}
//                     alt={initiative.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-80`}
//                   ></div>
//                   <div className="absolute top-4 left-4">
//                     <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                       <IconComponent className="w-5 h-5 text-white" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
//                     {initiative.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed mb-4">
//                     {initiative.description}
//                   </p>
//                   <Button
//                     variant="outline"
//                     className="w-full hover:bg-emerald-50 hover:border-emerald-300"
//                   >
//                     Explore Initiative
//                   </Button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Briefcase,
  HandHeart,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import InitiativeModal from "./InitiativeModal";

export default function InitiativesPreview() {
  const [selectedInitiative, setSelectedInitiative] = useState<number | null>(
    null
  );

  const initiativesData = [
    {
      icon: BookOpen,
      title: "Divatharv Education Drive",
      description:
        "Reaching underserved children with school kits, academic support, and inclusive education for special needs children.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#941B0C] to-[#BC3908]",
      content:
        "Through our Education Drive, we reach underserved children with school kits, academic support, and awareness campaigns that spark a love for learning. We also extend inclusive education to mentally ill and special needs children, nurturing their growth with empathy and care. Our work has earned heartfelt recognition in the media, reflecting the real change we bring to young lives.",
      images: [
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
      ],
      tags: [
        "School Kits Distribution",
        "Special Needs Support",
        "Academic Mentoring",
        "Media Recognition",
      ],
    },
    {
      icon: Users,
      title: "Women Rise Initiative",
      description:
        "Empowering women through digital skills, financial literacy, and health awareness with our 'Train Mothers as Trainers' model.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#BC3908] to-[#F6AA1C]",
      content:
        "We empower women and girls in both rural and urban areas through training in digital skills, financial literacy, and health awareness. Focused on building independence, our programs help them become confident and self-reliant. The 'Train Mothers as Trainers' model creates a ripple of empowered change-makers in every community.",
      images: [
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
      ],
      tags: [
        "Digital Skills",
        "Financial Literacy",
        "Health Awareness",
        "Train Mothers as Trainers",
      ],
    },
    {
      icon: Briefcase,
      title: "Training & Development for Empowered Livelihoods",
      description:
        "Expert-led sessions and CSR collaborations providing skill development and capacity-building workshops.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#F6AA1C] to-[#FFD700]",
      content:
        "Through expert-led sessions and CSR-backed collaborations, we provide skill development and capacity-building workshops for youth, women, and grassroots employees. These trainings focus on real-world employability, entrepreneurship, and digital fluency. By engaging communities and corporate partners, we bridge the gap between talent and opportunity.",
      images: [
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
      ],
      tags: [
        "Skill Development",
        "CSR Collaborations",
        "Entrepreneurship",
        "Digital Fluency",
      ],
    },
    {
      icon: Heart,
      title: "Advancing Community Health",
      description:
        "Vaccination camps, health check-ups, blood donation drives ensuring healthcare access for all communities.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#941B0C] to-[#BC3908]",
      content:
        "Divatharv Vikas Foundation drives inclusive healthcare by organizing vaccination camps, free health check-ups, and awareness programs across urban and rural areas. We actively promote blood donation and eye donation drives, ensuring that lifesaving support reaches those in need. By empowering women, youth, and families to protect their health and build resilience, our efforts guarantee greater access to essential medical services and foster healthier, independent communities.",
      images: [
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
      ],
      tags: [
        "Vaccination Camps",
        "Health Check-ups",
        "Blood Donation",
        "Eye Donation",
      ],
    },
    {
      icon: Sparkles,
      title: "Nurturing Spiritual Growth",
      description:
        "Community programs fostering spiritual well-being, mindfulness, and holistic personal development.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#BC3908] to-[#F6AA1C]",
      content:
        "Divatharv Vikas Foundation fosters spiritual well-being and self-consciousness through various community programs and services. We guide individuals on their journey toward inner peace, mindfulness, and holistic development. Our initiatives create a supportive environment for personal transformation & strengthened values.",
      images: [
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
      ],
      tags: [
        "Spiritual Well-being",
        "Mindfulness",
        "Personal Transformation",
        "Community Programs",
      ],
    },
    {
      icon: HandHeart,
      title: "Compassionate Social Initiatives",
      description:
        "Essential support including food distribution, programs for incarcerated individuals, and vital community services.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#F6AA1C] to-[#FFD700]",
      content:
        "Divatharv Vikas Foundation uplifts communities by providing essential support such as food for the needy, transformative programs for incarcerated individuals, and free distribution of vital services and materials. Our humanity-driven efforts aim to restore dignity, foster hope, and create lasting positive change. We believe in empowering every life with care and opportunity.",
      images: [
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
        "/placeholder.svg?height=400&width=800",
      ],
      tags: [
        "Food Distribution",
        "Incarcerated Programs",
        "Community Support",
        "Dignity Restoration",
      ],
    },
  ];

  const handleInitiativeClick = (index: number) => {
    setSelectedInitiative(index);
  };

  const handleCloseModal = () => {
    setSelectedInitiative(null);
  };

  return (
    <>
      <section
        id="initiatives"
        className="py-20 bg-gradient-to-br from-gray-50 to-[#FFF5E6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
              Our <span className="gradient-text">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative programs creating lasting impact across communities
              through innovative, sustainable solutions
            </p>
          </div>

          {/* Featured Initiative */}
          {/* <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured Initiative"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#941B0C]/80 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured Initiative
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-playfair">
                    Divatharv Education Drive
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our flagship education initiative reaches underserved children
                  with comprehensive school kits, academic support, and
                  specialized programs for children with special needs. We've
                  earned heartfelt media recognition for the real change we
                  bring to young lives.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#FFF5E6] text-[#941B0C] px-3 py-1 rounded-full text-sm font-medium">
                    School Kits Distribution
                  </span>
                  <span className="bg-[#FFF5E6] text-[#941B0C] px-3 py-1 rounded-full text-sm font-medium">
                    Special Needs Support
                  </span>
                  <span className="bg-[#FFF5E6] text-[#941B0C] px-3 py-1 rounded-full text-sm font-medium">
                    Academic Mentoring
                  </span>
                </div>
                <Button
                  onClick={() => handleInitiativeClick(0)}
                  className="bg-gradient-to-r from-[#941B0C] to-[#BC3908] hover:from-[#BC3908] hover:to-[#F6AA1C] text-white w-fit"
                >
                  Learn More About This Initiative
                </Button>
              </div>
            </div>
          </div> */}

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {initiativesData.map((initiative, index) => {
              const IconComponent = initiative.icon;
              // const actualIndex = index + 1;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48">
                    <Image
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-80`}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    <Button
                      onClick={() => handleInitiativeClick(index)}
                      variant="outline"
                      className="w-full border-[#BC3908] text-[#BC3908] hover:bg-[#FFF5E6] hover:border-[#941B0C]"
                    >
                      Explore Initiative
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiative Modal */}
      <InitiativeModal
        isOpen={selectedInitiative !== null}
        onClose={handleCloseModal}
        initiative={
          selectedInitiative !== null
            ? initiativesData[selectedInitiative]
            : null
        }
      />
    </>
  );
}
