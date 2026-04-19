"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] text-gray-400 py-10 px-6 md:px-20 border-t border-[#66FCF1]/10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-[#66FCF1] font-bold text-lg">
            Davtech
          </h3>
          <p className="text-sm">
            Building scalable web systems.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#66FCF1]">Home</Link>
          <Link href="/#projects" className="hover:text-[#66FCF1]">Projects</Link>
          <Link href="/#contact" className="hover:text-[#66FCF1]">Contact</Link>
        </div>

        {/* RIGHT SOCIALS */}
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-[#66FCF1]">GitHub</a>
          <a href="#" className="hover:text-[#66FCF1]">LinkedIn</a>
          <a href="#" className="hover:text-[#66FCF1]">Twitter</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs mt-8 border-t border-[#66FCF1]/10 pt-4">
        © {new Date().getFullYear()} Davtech. All rights reserved.
      </div>

    </footer>
  );
}