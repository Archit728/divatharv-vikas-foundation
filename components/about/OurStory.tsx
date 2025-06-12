"use client";

import { Calendar, MapPin, Target, Users } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our <span className="gradient-text">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a vision of inclusive progress and environmental harmony
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Born in Kota
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Divatharv Vikas Foundation was established in 2024 in Kota,
                    the Education City of Rajasthan. Our location in this
                    vibrant educational hub reflects our commitment to learning
                    and development.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#BC3908] to-[#F6AA1C] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    A Vision Realized
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Inspired by the belief that true progress uplifts every
                    section of society while preserving the environment, we
                    registered as a Section 8 organization under the Ministry of
                    Corporate Affairs, GOI.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F6AA1C] to-[#FFD700] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Community-Centric Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We serve as a catalyst for lasting, positive change, rooted
                    in compassion, consciousness, and community. Our work spans
                    education, healthcare, livelihood, and environmental
                    sustainability.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#941B0C] to-[#F6AA1C] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Future-Ready Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    By combining India's rich spiritual wisdom with modern
                    development strategies, we strive to build systems that are
                    holistic, regenerative, and future-ready for sustainable
                    transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement Card */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFEBCC] rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
                  Our Commitment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We address both global imperatives and local needs through
                  innovative, inclusive, and impactful initiatives that create
                  lasting positive change.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Holistic Development
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Integrated programs addressing education, healthcare,
                    livelihood, and spiritual well-being
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Sustainable Impact
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Environmental harmony and regenerative practices at the core
                    of all initiatives
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Inclusive Growth
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensuring no one is left behind in our journey toward
                    collective progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
