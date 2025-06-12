"use client";

import {
  Briefcase,
  GraduationCap,
  Heart,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";

export default function FocusAreasPreview() {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Education & Digital Literacy",
      description:
        "Creating equitable learning environments through formal schooling, digital education, and skill-building programs.",
      color: "from-[#941B0C] to-[#BC3908]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Heart,
      title: "Healthcare & Nutrition",
      description:
        "Ensuring access to essential healthcare, sanitation awareness, and nutrition programs.",
      color: "from-[#BC3908] to-[#F6AA1C]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Briefcase,
      title: "Livelihood & Entrepreneurship",
      description:
        "Empowering communities with skill development, micro-entrepreneurship support, and employment generation.",
      color: "from-[#F6AA1C] to-[#FFD700]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Users,
      title: "Women & Youth Empowerment",
      description:
        "Advancing social and economic participation through gender-inclusive policies and youth leadership.",
      color: "from-[#941B0C] to-[#F6AA1C]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Leaf,
      title: "Sustainable Green Economy",
      description:
        "Promoting green livelihoods, natural resource conservation, and environmental education.",
      color: "from-[#BC3908] to-[#FFD700]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Sparkles,
      title: "Spiritual & Social Welfare",
      description:
        "Fostering compassion, ethics, and civic responsibility through moral education and awareness drives.",
      color: "from-[#941B0C] to-[#BC3908]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
  ];

  return (
    <section id="focus-areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Six key pillars driving comprehensive community development and
            sustainable transformation
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${area.bgColor} p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#941B0C]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
