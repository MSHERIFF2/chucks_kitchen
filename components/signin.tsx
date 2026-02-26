"use client"; // Required for the eye-toggle state
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"; // Import new icons

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side Image and overlay */}
      <div className="relative w-1/2 hidden lg:block overflow-hidden">
        <div className="absolute inset-0 bg-[#FF7A18]/70 z-10 flex flex-col justify-center px-12 text-white">
          <h1 className="font-inter font-bold text-[3rem] mb-4 text-center w-[404px]">
            Chuks Kitchen
          </h1>
          <p className="text-[1.5rem] leading-[34px] font-inter font-medium w-[404px] text-center">
            Your journey to delicious, authentic Nigerian meals starts here.
            Sign up or log in to order your favorites today!
          </p>
        </div>

        <Image
          src="/onboardingImage.png"
          width={720}
          height={1024}
          alt="Hero picture"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Right side Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center bg-white p-8">
        <div className="max-w-[460px] mx-auto w-full flex flex-col gap-y-6">
          <div className="text-center">
            <h1 className="text-[#FF7A18] font-island text-[3rem] mb-2">
              Chuks Kitchen
            </h1>
            <p className="font-inter font-medium text-[24px] text-gray-700">
              Login your Account
            </p>
          </div>

          <form className="flex flex-col gap-y-4" action="/home">
            {/* Email Input */}
            <div className="flex flex-col gap-y-2">
              <label className="font-inter font-medium">Email or phone number</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  className="w-full border border-[#BDBDBD] rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-[#FF7A18] outline-none transition-all"
                  placeholder="name@gmail.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-y-2">
              <label className="font-inter font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-[#BDBDBD] rounded-xl py-3 pl-10 pr-12 focus:ring-2 focus:ring-[#FF7A18] outline-none transition-all"
                  placeholder="••••••••"
                />
                {/* Eye Toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <span className="font-inter text-[#1E88E5] text-right cursor-pointer hover:underline text-sm">
              Forgot Password?
            </span>

            <button
              type="submit"
              className="bg-[#FF7A18] text-white py-4 rounded-[10px] font-semibold text-[1rem] hover:bg-[#e66d15] transition-all mt-2"
            >
              Continue
            </button>

            <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-xs uppercase">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </form>

          {/* Social buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/#" className="flex items-center justify-center border border-[#BDBDBD] py-3 gap-3 rounded-[10px] font-semibold hover:bg-gray-50 transition-all">
              <FcGoogle size={24} />
              <span>Continue with Google</span>
            </Link>
            <Link href="/#" className="flex items-center justify-center border border-[#BDBDBD] py-3 gap-3 rounded-[10px] font-semibold hover:bg-gray-50 transition-all">
              <FaFacebook size={24} className="text-[#1877F2]" />
              <span>Continue with Facebook</span>
            </Link>
          </div>

          <div className="flex gap-x-2 font-inter justify-center text-sm">
            <span>Don’t have an account?</span>
            <Link href="/signUp" className="text-[#1C7FF9] font-semibold hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}