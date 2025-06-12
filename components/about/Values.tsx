"use client";

import { Globe, Heart, Lightbulb, Sparkles, Target, Users } from "lucide-react";

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Driven by empathy and care for every individual we serve",
      color: "from-[#941B0C] to-[#BC3908]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Lightbulb,
      title: "Consciousness",
      description: "Mindful approach to sustainable and holistic development",
      color: "from-[#BC3908] to-[#F6AA1C]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Target,
      title: "Community",
      description:
        "Building strong, resilient communities through collaboration",
      color: "from-[#F6AA1C] to-[#FFD700]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description:
        "Ensuring no one is left behind in our journey toward progress",
      color: "from-[#941B0C] to-[#F6AA1C]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Environmental harmony at the core of all our initiatives",
      color: "from-[#BC3908] to-[#FFD700]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Combining traditional wisdom with modern development strategies",
      color: "from-[#941B0C] to-[#BC3908]",
      bgColor: "from-[#FFF5E6] to-[#FFEBCC]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The fundamental principles that guide our mission and shape our
            approach to community transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.bgColor} rounded-2xl p-8 card-hover animate-fade-in border border-[#FFEBCC]/50 shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mb-6 shadow-md`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
