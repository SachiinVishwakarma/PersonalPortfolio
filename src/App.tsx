import { useState } from "react";

import SplashScreen from "./components/SplashScreen/SplashScreen";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <SplashScreen onFinish={() => setLoading(false)} />
      )}

      <div
        className={`relative transition-opacity duration-1000 ${loading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}