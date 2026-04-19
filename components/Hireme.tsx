"use client";

export default function HireMe() {
  return (
    <section className="bg-[#0B0C10] text-white py-20 px-6 md:px-20 text-center">

      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#66FCF1] mb-6">
        Let’s Build Something Great Together
      </h2>

      {/* SUBTEXT */}
      <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed mb-10">
        I help businesses and individuals turn ideas into powerful, scalable web applications.
        Whether you need a full product, a backend system, or a modern frontend — I’m ready to bring your vision to life with clean, efficient code.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">

        {/* PRIMARY CTA */}
        <button className="group relative overflow-hidden bg-[#45A29E] text-black uppercase h-[44px] text-sm rounded-full cursor-pointer px-8 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_#66FCF1]">
          <span className="relative z-10 text-white group-hover:text-black">
            <a href="mailto:nwabuezedavid333@gmail.com">
            Hire Me Now
 
</a>
          </span>
          <span className="absolute inset-0 bg-[#66FCF1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>

        {/* SECONDARY CTA */}
        <a
          href="#projects"
          className="border border-[#45A29E] text-[#45A29E] uppercase h-[44px] flex items-center justify-center text-sm rounded-full px-8 font-bold tracking-wide transition-all duration-300 hover:text-[#66FCF1] hover:border-[#66FCF1]"
        >
          View My Work
        </a>

      </div>

    </section>
  );
}