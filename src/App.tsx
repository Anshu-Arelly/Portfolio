import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import GrowthMetrics from './components/Metrics/GrowthMetrics';
import BrandingService from './components/Services/BrandingService';
import WomenCommunity from './components/Community/WomenCommunity';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';

function App() {
  useEffect(() => {
    document.title = "Anshu Arelly | Software Developer & LinkedIn Strategist";
  }, []);

  return (
    <div className="bg-[#fffff1] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GrowthMetrics />
        <BrandingService />
        <WomenCommunity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;