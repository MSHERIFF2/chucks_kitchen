"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" className="z-50">
          <h1 className="text-[#FF7A18] font-island text-[2rem] lg:text-[2.55rem] cursor-pointer whitespace-nowrap">
            Chuks Kitchen
          </h1>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-50 text-[#1F2937]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links & CTA */}
        <div className={`
          fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out z-40
          md:static md:flex-row md:bg-transparent md:translate-x-0 md:h-auto md:w-auto md:gap-x-12
          ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-x-8 font-inter text-[1rem] text-[#1F2937] font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#FF7A18] transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/explore" onClick={() => setIsOpen(false)} className="hover:text-[#FF7A18] transition-colors">Explore</Link>
            </li>
            <li>
              <Link href="/orders" onClick={() => setIsOpen(false)} className="hover:text-[#FF7A18] transition-colors">My orders</Link>
            </li>
            <li>
              <Link href="/account" onClick={() => setIsOpen(false)} className="hover:text-[#FF7A18] transition-colors">Account</Link>
            </li>
          </ul>

          <Link href="/signIn" onClick={() => setIsOpen(false)}>
            <button className="bg-[#FF7A18] text-white px-8 py-3 rounded-[10px] font-bold hover:bg-[#e66a10] transition-all w-[130px]">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}