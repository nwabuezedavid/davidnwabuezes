import ContactList from "@/components/contact";
import EducationSection from "@/components/EducationSection";
import Testimonials from "@/components/feedback";
import FirstLevel from "@/components/firstlevel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HireMe from "@/components/Hireme";
import HireMeSection from "@/components/HireMeSection";
import NavBar from "@/components/nav";
import ProjectsSection from "@/components/ProjectsSection";
import InterYreas from "@/components/years";
 

export default function Home() {
  return (
  <section className="bg-[#0B0C10] text-white min-h-screen">
<NavBar/>
<Header/>
<InterYreas/>
<FirstLevel/>
<HireMeSection/>
<EducationSection/>
<ProjectsSection/>
<Testimonials/>
<HireMe/>
<ContactList/>
<Footer/>
  </section>
  );
}
