import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 h-[50vh]"></div>
      <div className="fixed top-0 w-full h-full -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Navbar />
      <div className="container px-8 mx-auto">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
