"use client";

import { Heart, Quote, Target, Users } from "lucide-react";
import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#FFF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            From the <span className="gradient-text">Founder's Desk</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A personal message from Ms. Anita Chauhan, Founder & Director
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Founder Image & Info */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Ms. Anita Chauhan"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full border-4 border-emerald-200"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                Ms. Anita Chauhan
              </h3>
              <p className="text-[#BC3908] font-medium mb-4">
                Founder & Director
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visionary leader committed to building a compassionate and
                conscious India through transformational development
                initiatives.
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-xl relative">
              <Quote className="w-12 h-12 text-emerald-200 absolute top-4 left-4" />

              <div className="pt-8 space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  From the very beginning, I have believed that progress is
                  meaningful only when it uplifts every section of society and
                  preserves the environment for generations to come. With this
                  belief and a deep commitment to purposeful action, the
                  Divatharv Vikas Foundation was born — as a platform to create
                  transformational, sustainable change rooted in compassion,
                  consciousness, and community.
                </p>

                <div className="bg-gradient-to-r from-[#FFF5E6] to-[#FFEBCC] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">
                    My Personal Calling
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    To build a compassionate and conscious India, where the 'Art
                    of Giving' is a way of life, and every initiative reflects
                    values, dignity, and sustainability. My mission as the
                    founder is to nurture future-ready citizens through programs
                    grounded in spirituality, driven by science, and guided by
                    service — ensuring that no one is left behind.
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  We are building systems and solutions that are holistic,
                  regenerative, and future-ready—combining India's spiritual
                  wisdom with modern development strategies. Whether it's
                  through our efforts in education, skill development, women and
                  youth empowerment, environmental stewardship, healthcare, or
                  rural entrepreneurship, every action we take is guided by our
                  core belief: that true development must be inclusive,
                  impactful, and lasting.
                </p>

                <div className="bg-gradient-to-r from-[#FFEBCC] to-[#FFE4B5] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">
                    Return on Association (RoA)
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    This commitment is underpinned by a powerful philosophy:
                    'Return on Association' (RoA) – where every individual's
                    contribution actively gives back to their family, society,
                    nation, and workplace, creating exponential value for all
                    stakeholders.
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  I extend my heartfelt gratitude to all those who walk this
                  journey with us — our partners, volunteers, supporters, and
                  changemakers. Your trust strengthens our resolve, and your
                  collaboration helps us reach further and deeper into the
                  communities we serve.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Together, let us continue building a future that is not only
                  brighter — but more just, sustainable, and compassionate for
                  all.
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <p className="text-gray-900 font-semibold">
                      With conviction and gratitude,
                    </p>
                    <p className="text-[#BC3908] font-bold text-lg font-playfair">
                      Anita Chauhan
                    </p>
                    <p className="text-gray-600 text-sm">
                      Founder & Director, Divatharv Vikas Foundation
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#941B0C] to-[#BC3908] rounded-full flex items-center justify-center mb-1">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs text-gray-600">Community</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#BC3908] to-[#F6AA1C] rounded-full flex items-center justify-center mb-1">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs text-gray-600">Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
