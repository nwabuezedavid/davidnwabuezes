"use client";

import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactList() {
  return (
    <section
      id="contact"
      className="bg-[#0B0C10] relative text-white py-20 px-6 md:px-20 text-center"
    >
      {/* TITLE */}
      <div className="absolute w-full left-0 h-full playwrite-light">
        <p className="border border-cyan-300 h-10 w-10 absolute top-2 animate-spin right-9.5 "></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-9.5 max-md:top-[33%]"></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-[70%] max-md:top-[30%]"></p>
     
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce left-[40%] bottom-0 absolute max-md:hidden ">.</p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute left-[30%]  max-md:hidden"></p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute top-[60%] left-[50%]  max-md:top-[10%]"></p>
        
        </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#66FCF1] mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        Have a project in mind? Reach out through any of these platforms — I’m always open to discussing new opportunities.
      </p>

      {/* CONTACT LIST */}
      <div className="flex flex-col items-center gap-6">

        {/* EMAIL */}
        <a
          href="mailto:youremail@gmail.com"
          className="w-full max-w-md flex items-center gap-4 border border-[#66FCF1]/20 p-4 rounded-lg hover:border-[#66FCF1] transition-all duration-300 hover:shadow-[0_0_15px_#66FCF1]"
        >
          <FiMail className="text-[#66FCF1] text-xl" />
          <div className="text-left">
            <p>Email</p>
            <p className="text-sm text-gray-400">youremail@gmail.com</p>
          </div>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          className="w-full max-w-md flex items-center gap-4 border border-[#66FCF1]/20 p-4 rounded-lg hover:border-[#66FCF1] transition-all duration-300 hover:shadow-[0_0_15px_#66FCF1]"
        >
          <FaWhatsapp className="text-[#66FCF1] text-xl" />
          <div className="text-left">
            <p>WhatsApp</p>
            <p className="text-sm text-gray-400">Chat instantly</p>
          </div>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/nwabuezedavid
          target="_blank"
          className="w-full max-w-md flex items-center gap-4 border border-[#66FCF1]/20 p-4 rounded-lg hover:border-[#66FCF1] transition-all duration-300 hover:shadow-[0_0_15px_#66FCF1]"
        >
          <FaGithub className="text-[#66FCF1] text-xl" />
          <div className="text-left">
            <p>GitHub</p>
            <p className="text-sm text-gray-400">View my projects</p>
          </div>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="w-full max-w-md flex items-center gap-4 border border-[#66FCF1]/20 p-4 rounded-lg hover:border-[#66FCF1] transition-all duration-300 hover:shadow-[0_0_15px_#66FCF1]"
        >
          <FaLinkedin className="text-[#66FCF1] text-xl" />
          <div className="text-left">
            <p>LinkedIn</p>
            <p className="text-sm text-gray-400">Let’s connect</p>
          </div>
        </a>

      </div>
    </section>
  );
}