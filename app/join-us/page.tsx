import { Button } from "@/components/ui/button";
import { Calendar, Heart, MapPin, Users } from "lucide-react";
import Image from "next/image";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
                Join <span className="gradient-text">Our Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Become part of our mission to create transformative change.
                Dedicate your time and skills to meaningful community service.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-[#b86e33] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why Join Us?
                  </h3>
                </div>
                <p className="text-gray-600">
                  As a volunteer or team member, you'll gain valuable
                  experience, develop new skills, and make a meaningful
                  difference in the lives of others.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/1MnrL2rYiyU0cAkulIcsakER71xLpVYPo1Y--hTjZccM/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-[#b86e33] to-[#d9a76c] hover:from-[#a05e2b] hover:to-[#c9925a] text-white px-8 py-6 rounded-full font-semibold text-lg">
                  Apply Now
                </Button>
              </a>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Join Our Team"
                  width={600}
                  height={500}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#b86e33]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Make an Impact</h3>
                  <p className="text-sm opacity-90">
                    Use your skills to create positive change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Volunteer <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the various ways you can contribute your time and skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-[#b86e33] to-[#d9a76c] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Field Volunteer
              </h3>
              <p className="text-gray-700 mb-6">
                Work directly with communities on our education, healthcare, and
                livelihood initiatives.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Community Outreach</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Event Support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Program Implementation</span>
                </li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#c98b4f] to-[#e5b980] rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Skill-Based Volunteer
              </h3>
              <p className="text-gray-700 mb-6">
                Contribute your professional skills in areas like design,
                technology, marketing, or finance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Content Creation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Digital Marketing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Financial Advisory</span>
                </li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#d9a76c] to-[#f3d9a7] rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Remote Volunteer
              </h3>
              <p className="text-gray-700 mb-6">
                Support our mission from anywhere in the world through virtual
                volunteering opportunities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Research & Documentation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Online Tutoring</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Social Media Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
