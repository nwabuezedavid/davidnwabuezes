"use client"


import { useState } from "react";
import Link from "next/link";


const NavBar = () => {
  return (
    <>
      <main className="max-md:hidden text-white p-4 font-light flex w-full items-center justify-center sticky top-0 z-50"> <div className="flex rounded-full border-[0.2px] w-[35%] justify-between items-center p-3 border-[#66FCF1]"> <Link href="#" className="active:text-[#66FCF1] text-[#66FCF1] border-b-1 ">Home</Link> <Link href="#about" className="hover:text-[#66FCF1] border-b- " >About</Link> <Link href="#education" className="hover:text-[#66FCF1] border-b- " >Education</Link> <Link href="#contact" className="hover:text-[#66FCF1] border-b- " >Contact</Link> </div> <button className="group ml-8 relative overflow-hidden bg-[#45A29E] text-black mainfon uppercase h-[42px] text-xs italic rounded-full cursor-pointer px-6 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_#66FCF1]"> {/* Text */} <span className="relative text-white z-10 transition-colors duration-300 group-hover:text-black">       <a href="mailto:nwabuezedavid333@gmail.com">
  Hire Me Now
 
</a>  </span> {/* Animated background slide */} <span className="absolute inset-0 bg-[#66FCF1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span> </button> </main>
      <div className="md:hidden">

        <NavBar2 />
      </div>
    </>
  )
}

export default NavBar



const NavBar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="text-white p-4 w-full sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">

        {/* 🔹 LEFT: Hire Me (mobile only) */}
        <button className="md:hidden group relative overflow-hidden bg-[#45A29E] text-black mainfon uppercase h-[38px] text-xs italic rounded-full cursor-pointer px-5 font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_#66FCF1]">
          <span className="relative z-10 text-white group-hover:text-black">
            <a href="mailto:nwabuezedavid333@gmail.com">
              Hire Me Now

            </a>
          </span>
          <span className="absolute inset-0 bg-[#66FCF1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>

        {/* 🔹 DESKTOP NAV */}
        <div className="hidden md:flex rounded-full border-[0.2px] w-[35%] justify-between items-center p-3 border-[#66FCF1]">
          <Link href="/" className="text-[#66FCF1]">Home</Link>
          <Link href="#about" className="hover:text-[#66FCF1]">About</Link>
          <Link href="#education" className="hover:text-[#66FCF1]">Education</Link>
          <Link href="#contact" className="hover:text-[#66FCF1]">Contact</Link>
        </div>

        {/* 🔹 RIGHT: Toggle (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`h-[2px] w-6 bg-[#66FCF1] transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}`}></span>
          <span className={`h-[2px] w-6 bg-[#66FCF1] transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-[2px] w-6 bg-[#66FCF1] transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
        </button>

        {/* 🔹 DESKTOP CTA */}
        <button className="hidden md:block group ml-8 relative overflow-hidden bg-[#45A29E] text-black mainfon uppercase h-[42px] text-xs italic rounded-full cursor-pointer px-6 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_#66FCF1]">
          <span className="absolute inset-0 bg-[#66FCF1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative text-white z-10 group-hover:text-black">
            <a href="mailto:nwabuezedavid333@gmail.com">
              Hire Me Now

            </a>
          </span>
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`md:hidden absolute left-0 top-[70px] w-full bg-black/90 backdrop-blur-md transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">

          <Link href="#" onClick={() => setOpen(false)} className="text-[#66FCF1] text-lg">
            Home
          </Link>
          <Link href="#about" onClick={() => setOpen(false)} className="hover:text-[#66FCF1] text-lg">
            About
          </Link>
          <Link href="#education" onClick={() => setOpen(false)} className="hover:text-[#66FCF1] text-lg">
            Education
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-[#66FCF1] text-lg">
            Contact
          </Link>

        </div>
      </div>
    </main>
  );
};

