"use client";

const education = [
  {
    title: "Bachelor of Computer Science",
    school: "Enugu State University of Science & Technology",
    year: "2023 - onging",
    description:
      "Focused on software engineering, data structures, and full-stack development. Built multiple real-world projects including scalable web applications.",
  },
  {
    title: "Full-Stack Web Development",
    school: "Self-Taught / Online Learning",
    year: "2022 - Present",
    description:
      "Specialized in React, Next.js, Django, Node.js, and Prisma. Gained hands-on experience by building production-ready applications and systems.",
  },
  {
    title: "Certifications & Continuous Learning",
    school: "Online Platforms",
    year: "Ongoing",
    description:
      "Continuously improving skills through courses, documentation, and real-world problem solving in modern web technologies.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-[#0B0C10] h-fit w-full  playwrite-light flex flex-col relative text-white py-16 px-6 md:px-20">
      <div className="absolute w-full left-0 h-full playwrite-light">
        <p className="border border-cyan-300 h-10 w-10 absolute top-2 animate-spin right-9.5 "></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-9.5 max-md:top-[33%]"></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-[70%] max-md:top-[30%]"></p>
     
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce left-[40%] bottom-0 absolute max-md:hidden ">.</p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute left-[30%]  max-md:hidden"></p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute top-[60%] left-[50%]  max-md:top-[10%]"></p>
        
        </div>
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#66FCF1] mb-12 text-center">
        Education
      </h2>

      {/* TIMELINE */}
      <div className="relative border-l border-[#66FCF1]/30 ml-4 space-y-10">

        {education.map((item, index) => (
          <div key={index} className="relative pl-6">

            {/* DOT */}
            <span className="absolute -left-[9px] top-2 w-4 h-4 bg-[#66FCF1] rounded-full shadow-[0_0_10px_#66FCF1]"></span>

            {/* CONTENT */}
            <div className="bg-[#111217] p-6 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/40 transition-all duration-300">
              
              <h3 className="text-lg font-semibold text-[#66FCF1]">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {item.school} • {item.year}
              </p>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}