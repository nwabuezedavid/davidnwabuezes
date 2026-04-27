"use client";

import Image from "next/image";

const skills = [
  { name: "Frontend (React / Next.js)", level: 90 },
  { name: "Backend (Django / Node.js)", level: 90 },
  { name: "Database (PostgreSQL / SQLite)", level: 85 },
  { name: "ORM & Database Tools (Prisma)", level: 85 },
  { name: "API Development & Integration", level: 90 },
  { name: "Real-time Systems (Socket.IO)", level: 85 },
  { name: "UI/UX & Performance Optimization", level: 80 },
];

export default function HireMeSection() {
  return (
    <section className="bg-[#0B0C10] relative playwrite-light  text-white py-16 px-6 md:px-20">

        <div className="absolute  w-full left-0 h-full">
        <p className="border border-cyan-300 h-10 w-10 absolute top-2 animate-spin right-9.5 "></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-9.5 max-md:top-[33%]"></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-[70%] max-md:top-[30%]"></p>
     
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce left-[40%] bottom-0 absolute max-md:hidden ">.</p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute left-[30%]  max-md:hidden"></p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute top-[60%] left-[50%]  max-md:top-[10%]"></p>
        
        </div>
      <div className="grid z-50 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#66FCF1] mb-6">
            Why You Should Hire Me
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I’m a full-stack developer focused on building scalable, high-performance
            web applications. From responsive frontends to secure backend systems,
            I create solutions designed for real users and long-term growth.
          </p>

          {/* SKILLS */}
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#66FCF1] transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 cursor-pointer italic playwrite-light bg-[#45A29E] text-black px-6 py-2 rounded-full font-bold hover:bg-[#66FCF1] transition-all duration-300">
           
            <a href="https://github.com/nwabuezedavid" target="_blank" rel="noopener noreferrer"> View My GitHub</a>
          </button>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center">
          <div className="relative w-[100%] h-[500px] ">
            <Image
              src="/hire.png" // 👉 replace with your image in /public
              alt="Developer"
              fill
              className="object-fill w-full h-full rounded-b-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}