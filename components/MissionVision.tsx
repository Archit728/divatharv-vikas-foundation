"use client";

import { Eye, Heart, Lightbulb, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-[#FFF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by compassion, guided by wisdom, and committed to sustainable
            transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-xl card-hover animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-playfair">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To empower individuals and communities through integrated,
              sustainable development programs aligned with national priorities
              and global development frameworks.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-[#941B0C] mr-2" />
                <span className="text-sm text-gray-600">Community-Centric</span>
              </div>
              <div className="flex items-center">
                <Lightbulb className="w-5 h-5 text-[#941B0C] mr-2" />
                <span className="text-sm text-gray-600">Innovation-Driven</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl card-hover animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BC3908] to-[#F6AA1C] rounded-full flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-playfair">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To impact one million lives by 2030 through scalable,
              community-centric solutions that promote inclusive growth and
              environmental harmony.
            </p>
            <div className="bg-gradient-to-r from-[#FFF5E6] to-[#FFEBCC] rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#941B0C]">
                  1,000,000
                </span>
                <span className="text-sm text-[#941B0C] font-medium">
                  Lives by 2030
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl animate-slide-up">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 font-playfair">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Compassion
              </h4>
              <p className="text-gray-600">
                Driven by empathy and care for every individual we serve
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BC3908] to-[#F6AA1C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Consciousness
              </h4>
              <p className="text-gray-600">
                Mindful approach to sustainable and holistic development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F6AA1C] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#941B0C]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Community
              </h4>
              <p className="text-gray-600">
                Building strong, resilient communities through collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
