"use client"

import { Heart, Users, Globe, Target } from "lucide-react"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF5E6] to-[#FFEBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="bg-[#FFEBCC] text-[#941B0C] px-4 py-2 rounded-full text-sm font-medium">
                About Divatharv Vikas Foundation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
              Building a <span className="gradient-text">Compassionate</span> and{" "}
              <span className="gradient-text">Conscious</span> India
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Established in 2024 in Kota, Rajasthan, we are a Section 8 registered organization committed to holistic
              social development and sustainable growth across all segments of society.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2024</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#BC3908] to-[#F6AA1C] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1M</div>
                <div className="text-sm text-gray-600">Target Lives</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F6AA1C] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">6</div>
                <div className="text-sm text-gray-600">Focus Areas</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#941B0C] to-[#F6AA1C] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2030</div>
                <div className="text-sm text-gray-600">Vision Year</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">Our Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-medium text-[#941B0C]">"ज्ञानम् विकासाय, सेवा लोकाय"</span> - Knowledge for progress,
                service for humanity. We believe that true progress uplifts every section of society while preserving
                the environment for generations to come.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Divatharv Vikas Foundation Team"
                width={500}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Transforming Communities</h3>
                <p className="text-sm opacity-90">Through compassion, consciousness, and community action</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#F6AA1C] to-[#FFD700] rounded-full flex items-center justify-center animate-float">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
