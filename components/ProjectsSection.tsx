"use client";

import Image from "next/image";

const projects = [
  {
    title: "Blog Platform",
    description:
      "A full-stack peer-to-peer trading system with real-time chat, escrow logic, and secure transactions.",
    tech: ["Next.js", "Socket.IO", "Prisma", "PostgreSQL"],
    image: "/p10.png",
    live: "#",
    github: "#",
  },
  {
    title: "Investment Web App",
    description:
      "A scalable investment platform with dashboards, deposits, withdrawals, and admin control.",
    tech: ["Django", "Next.js", "REST API"],
    image: "/p7.png",
    live: "https://www.9ja.world/discover",
    github: "#",
  },
  {
    title: "Banking App",
    description:
      "Fast chat system with live messaging, typing indicators, and online presence.",
    tech: ["Next.js", "Socket.IO", "Tailwind"],
    image: "/p3.png",
    live: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0B0C10] flex w-full h-full flex-col relative playwrite-light text-white py-16 px-6 md:px-20">
      <div className="absolute -z-10 w-full left-0 h-full top-0 ">
        <p className="border border-cyan-300 h-10 w-10 absolute top-2 animate-spin right-9.5 "></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-9.5 max-md:top-[33%]"></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-[70%] max-md:top-[30%]"></p>
     
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce left-[40%] bottom-0 absolute max-md:hidden ">.</p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute left-[30%]  max-md:hidden"></p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute top-[60%] left-[50%]  max-md:top-[10%]"></p>
        
        </div>
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#66FCF1] mb-12 text-center">
        Projects
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#111217] rounded-xl border border-[#66FCF1]/10 overflow-hidden transition-all duration-300 hover:border-[#66FCF1]/40 hover:-translate-y-2 hover:shadow-[0_0_25px_#66FCF1]"
          >

            {/* 🖼️ IMAGE */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#66FCF1] mb-2">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-[#66FCF1]/10 text-[#66FCF1] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔗 LINKS */}
              <div className="flex gap-4 text-sm">

                <a
                  href={`#{project.live}`}
                  target="_blank"
                  className="text-[#66FCF1] hover:underline"
                >
                  🌐 Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  💻 GitHub
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}