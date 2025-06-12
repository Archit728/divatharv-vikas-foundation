import { Button } from "@/components/ui/button";
import { Building, Handshake, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PartnerPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
                Partner With <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join forces with Divatharv Vikas Foundation to amplify our
                collective impact across communities. Together, we can create
                transformative change.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <Handshake className="w-6 h-6 text-[#b86e33] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why Partner?
                  </h3>
                </div>
                <p className="text-gray-600">
                  Strategic partnerships enable us to leverage complementary
                  strengths, extend our reach, and maximize our impact on the
                  communities we serve.
                </p>
              </div>
              <Link href="#footer">
                <Button className="bg-gradient-to-r from-[#b86e33] to-[#d9a76c] hover:from-[#a05e2b] hover:to-[#c9925a] text-white px-8 py-6 rounded-full font-semibold text-lg">
                  Contact Us to Partner
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Partnership"
                  width={600}
                  height={500}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#b86e33]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Strategic Alliances
                  </h3>
                  <p className="text-sm opacity-90">
                    Creating greater impact through collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Partnership <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the various ways your organization can collaborate with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-[#b86e33] to-[#d9a76c] rounded-full flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Corporate Partnerships
              </h3>
              <p className="text-gray-700 mb-6">
                Engage your company in meaningful CSR initiatives, employee
                volunteering, and cause-related marketing campaigns.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>CSR Project Implementation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Employee Engagement</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Cause Marketing</span>
                </li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#c98b4f] to-[#e5b980] rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Institutional Collaborations
              </h3>
              <p className="text-gray-700 mb-6">
                Partner with us on research, knowledge sharing, and
                implementation of innovative development solutions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Research Partnerships</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Knowledge Exchange</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Joint Program Implementation</span>
                </li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#d9a76c] to-[#f3d9a7] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Strategic Alliances
              </h3>
              <p className="text-gray-700 mb-6">
                Form long-term strategic alliances to address complex social
                challenges through collaborative action.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Multi-stakeholder Initiatives</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Collective Impact Projects</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full mr-2"></div>
                  <span>Sustainable Development Goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
