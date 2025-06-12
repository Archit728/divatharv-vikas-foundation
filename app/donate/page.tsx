import { FileCheck, Heart, Landmark } from "lucide-react";
import Image from "next/image";

export default function DonatePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
                Make a <span className="gradient-text">Difference</span> Today
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your contribution helps us create lasting impact across
                communities. Every donation brings us closer to our goal of
                impacting one million lives by 2030.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-[#b86e33] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why Donate?
                  </h3>
                </div>
                <p className="text-gray-600">
                  Your donation directly supports our initiatives in education,
                  healthcare, livelihood, women and youth empowerment,
                  sustainable development, and social welfare.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {/* <Button className="bg-gradient-to-r from-[#b86e33] to-[#d9a76c] hover:from-[#a05e2b] hover:to-[#c9925a] text-white px-8 py-6 rounded-full font-semibold text-lg">
                  Donate Now
                </Button> */}
                {/* <Button
                  variant="outline"
                  className="border-[#b86e33] text-[#b86e33] hover:bg-[#fef6e4] px-8 py-6 rounded-full font-semibold text-lg"
                >
                  Contact Us
                </Button> */}
              </div>
            </div>
            {/* <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/QR.png"
                  alt="Donation Impact"
                  width={400}
                  height={450}
                  className="w-full  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#b86e33]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Your Impact</h3>
                  <p className="text-sm opacity-90">
                    See how your contribution transforms lives
                  </p>
                </div>
              </div>
            </div> */}
            <div className="relative animate-fade-in max-w-sm mx-auto lg:mx-0">
              {/* QR Code Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/QR.png"
                  alt="Donation QR Code"
                  width={412}
                  height={481}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Description Text Below Image */}
              <div className="mt-4 bg-white rounded-xl p-5 shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-[#b86e33] mb-2">
                  Your Impact
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  See how your contribution transforms lives. Every scan, every
                  rupee counts towards building a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Banking <span className="gradient-text">Details</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your contribution directly to our bank account
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#b86e33] to-[#d9a76c] rounded-full flex items-center justify-center mr-4">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-playfair">
                  Bank Transfer
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">
                    Account Name:
                  </div>
                  <div className="text-gray-900">
                    Divatharv Vikas Foundation
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">Bank:</div>
                  <div className="text-gray-900">
                    ICICI Bank, Kota Mahaveer Nagar
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">
                    Account No:
                  </div>
                  <div className="text-gray-900">687705601134</div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">IFSC:</div>
                  <div className="text-gray-900">ICIC0006877</div>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-[#fef6e4] to-[#fbecca] rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#b86e33] to-[#d9a76c] rounded-full flex items-center justify-center mr-4">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-playfair">
                  Tax Benefits
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  All donations to Divatharv Vikas Foundation are eligible for
                  tax exemption under Section 80G of the Income Tax Act.
                </p>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Important Information
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>We'll provide an official receipt for your donation</li>
                    <li>
                      You can claim tax benefits by submitting this receipt
                    </li>
                    <li>
                      For any queries related to donations, please contact us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Donate */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-50 to-[#fef6e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Other Ways to <span className="gradient-text">Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond financial contributions, there are many ways to support our
              mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-[#b86e33] to-[#d9a76c] rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Monthly Giving
              </h3>
              <p className="text-gray-600 mb-6">
                Set up a recurring donation to provide sustained support for our
                programs and initiatives.
              </p>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="w-full border-[#b86e33] text-[#b86e33] hover:bg-[#fef6e4]"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#c98b4f] to-[#e5b980] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                In-Kind Donations
              </h3>
              <p className="text-gray-600 mb-6">
                Donate goods, services, or expertise to support our various
                programs and initiatives.
              </p>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="w-full border-[#b86e33] text-[#b86e33] hover:bg-[#fef6e4]"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#d9a76c] to-[#f3d9a7] rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Corporate Partnerships
              </h3>
              <p className="text-gray-600 mb-6">
                Partner with us for CSR initiatives, employee engagement, or
                cause-related marketing.
              </p>
              <Link href="/partner">
                <Button
                  variant="outline"
                  className="w-full border-[#b86e33] text-[#b86e33] hover:bg-[#fef6e4]"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
