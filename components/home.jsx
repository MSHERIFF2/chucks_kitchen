import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Utensils, Truck } from "lucide-react";

export default function Home() {
  return (
    // Changed flex-row to flex-col for mobile, lg:flex-row for desktop
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side Image - Hidden on very small screens or resized */}
      <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
        <Image
          src="/onboardingImage.png"
          alt="Hero picture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between py-6 lg:py-12">
        {/* Nav Part - Adjusted margins for mobile (mx-6) vs desktop (mx-16) */}
        <div className="flex justify-between items-center bg-white mb-12 mx-6 lg:mx-16">
          <Link href="/">
            <h1 className="text-[#FF7A18] font-island text-[2rem] lg:text-[2.55rem] leading-tight">
              Chuks Kitchen
            </h1>
          </Link>

          <Link
            href="/signIn"
            className="border-2 border-[#1E88E5] text-[#1E88E5] text-sm lg:text-base font-semibold px-4 lg:px-8 py-2 lg:py-[0.9375rem] rounded-[10px] hover:bg-[#1E88E5] hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Heading & Text */}
        <div className="flex flex-col mx-6 lg:mx-16 gap-6">
          <h1 className="font-bold text-[1.75rem] lg:text-[2.5rem] leading-tight text-[#1F2937]">
            Your Authentic Taste of Nigeria
          </h1>
          <p className="text-[#4B5563] text-base lg:text-lg font-medium leading-relaxed">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          {/* Features Section */}
          {/* This container stacks on mobile and spreads out on desktop */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-y-6 gap-x-8 mt-4">
            <FeatureRow icon={<Utensils />} text="Freshly Prepared" />
            <FeatureRow icon={<Utensils />} text="Support Local Business" />
            <FeatureRow icon={<Truck />} text="Fast & Reliable Delivery" />
          </div>
        </div>

        {/* Buttons - Mobile: Full width, Desktop: Specific width */}
        <div className="flex flex-col gap-4 mt-12 mx-6 lg:mx-16">
          <button className="bg-[#FF7A18] text-white py-4 px-6 rounded-[10px] font-semibold text-lg hover:bg-[#e66d15] transition-all">
            Start Your Order
          </button>
          <button className="text-[#1E88E5] bg-white py-4 px-6 rounded-[10px] font-semibold text-lg border-2 border-[#1E88E5] hover:bg-blue-50 transition-all">
            Learn More About Us
          </button>
        </div>

        {/* Copy Right Section */}
        <div className="mx-6 lg:mx-16 mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-500 text-sm">© 2024 Chuks Kitchen.</span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[#64B5F6] text-sm hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#64B5F6] text-sm hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper to keep code clean
function FeatureRow({ icon, text }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-[#FFE1C4] rounded-[13px] p-2 flex items-center justify-center w-11 h-11 shrink-0">
        {/* Clone icon to apply specific Tailwind classes */}
        {require("react").cloneElement(icon, {
          className: "text-[#FF7A18] w-6 h-6",
        })}
      </div>
      <span className="text-base font-medium text-gray-800">{text}</span>
    </div>
  );
}
