"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Heart, Users } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  const actions = [
    {
      icon: Heart,
      title: "Donate",
      description:
        "Support our mission with a contribution that creates lasting impact",
      color: "from-[#941B0C] to-[#BC3908]",
      href: "/donate",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description:
        "Join forces to amplify our collective impact across communities",
      color: "from-[#BC3908] to-[#F6AA1C]",
      href: "/partner",
    },
    {
      icon: Users,
      title: "Join Us",
      description:
        "Dedicate your time and skills to meaningful community service",
      color: "from-[#F6AA1C] to-[#FFD700]",
      href: "/join-us",
    },
  ];

  return (
    <section
      id="get-involved"
      className="py-20 bg-gradient-to-br from-[#941B0C] via-[#BC3908] to-[#F6AA1C] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Get <span className="text-yellow-300">Involved</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join us in creating transformational change. Every contribution,
            partnership, and volunteer hour brings us closer to impacting one
            million lives by 2030.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center card-hover animate-fade-in border border-white/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
                  {action.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {action.description}
                </p>
                <Link href={action.href}>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-emerald-900 w-full group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Impact Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2 font-playfair">
              Together We Can Achieve More
            </h3>
            <p className="text-white/80">
              Join thousands of changemakers already making a difference
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1M</div>
              <div className="text-white/80 text-sm">Target Lives by 2030</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">6</div>
              <div className="text-white/80 text-sm">Focus Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-white/80 text-sm">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                100%
              </div>
              <div className="text-white/80 text-sm">Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
