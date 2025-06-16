import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import Header from "./layout/Header"
import { Button } from "./components/ui/Button";
import { ArrowDown } from "lucide-react";
import AboutMe from "./components/sections/AboutMe";
import { useEffect } from "react";
import WebDev from "./components/sections/WebDev";
import Timeline from "./components/sections/Timeline";
import WorkExperience from "./components/sections/WorkExperience";
import ContactMe from "./components/sections/ContactMe";
import DataScienceProjects from "./components/sections/DataScienceProjects";
import Certificates from "./components/sections/Certificates";

const content = {
  heroTitle: {
    en: "Welcome to my journey",
    es: "Bienvenido a mi travesía",
  },
  heroSubtitle: {
    en: "Exploring the intersection of engineering, web development and data science. Discover my projects, journey, and how I can bring synergy to your team.",
    es: "Explorando la intersección de la ingeniería, el desarrollo web y la ciencia de datos. Descubre mis proyectos, trayectoria y cómo puedo aportar sinergia a tu equipo.",
  },
  exploreButton: {
    en: "Explore My Work",
    es: "Explora Mi Trabajo",
  },
};


function App() {
  const location = useLocation()
  const { language } = useLanguage();
  const currentContent = {
    heroTitle: content.heroTitle[language],
    heroSubtitle: content.heroSubtitle[language],
    exploreButton: content.exploreButton[language],
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); 
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
          });
        }
      }, 100); 
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 md:py-32 text-center bg-gradient-to-br from-primary/10 via-background to-background flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/30 rounded-full filter blur-2xl animate-pulse-slow "></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/30 rounded-full filter blur-2xl animate-pulse-slower"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
                {currentContent.heroTitle}
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
              {currentContent.heroSubtitle}
            </p>
            <Button size='lg' asChild className="group transition-transform hover:scale-105">
              <Link to='#about-me'>
                {currentContent.exploreButton} <ArrowDown className="ml-2 h5 w-5 transition-transform group-hover:translate-y-1"/>
              </Link>
            </Button>
          </div>
        </section>
        <AboutMe />
        <WorkExperience/>
        <Timeline />
        <Certificates />
        <DataScienceProjects/>
        <WebDev />
        <ContactMe />
        

      </main>
    </div>
  )
}

export default App
