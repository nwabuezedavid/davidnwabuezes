"use client";

const testimonials = [
  {
    name: "James Okafor",
    role: "Startup Founder",
    feedback:
      "David delivered exactly what we needed — a scalable and fast platform. His attention to detail and problem-solving skills are top-notch.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    feedback:
      "Working with David was seamless. He understands both the technical and business side, which made a huge difference in our project.",
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    feedback:
      "Highly professional and reliable. The system he built for us performs flawlessly even under heavy usage.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0B0C10] text-white py-16 px-6 md:px-20">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#66FCF1] text-center mb-12">
        Client Feedback
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#111217] p-6 rounded-xl border border-[#66FCF1]/10 hover:border-[#66FCF1]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#66FCF1]"
          >
            {/* QUOTE */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              “{item.feedback}”
            </p>

            {/* CLIENT INFO */}
            <div>
              <h4 className="text-[#66FCF1] font-semibold">
                {item.name}
              </h4>
              <p className="text-gray-400 text-xs">
                {item.role}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}