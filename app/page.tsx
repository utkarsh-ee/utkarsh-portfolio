import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Systems from "@/components/Systems";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Lab from "@/components/Lab";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Systems />
        <Projects />
        <CaseStudies />
        <Lab />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
