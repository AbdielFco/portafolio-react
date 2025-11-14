import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AcademicProjects from "./components/AcademicProjects";
import PracticeProjects from "./components/PracticeProjects";
import Contact from "./components/Contact";
import {
  featuredProjects,
  practiceProjects,
  academicProjects,
} from "./data/projects";
import { technologies } from "./data/technologies";
import Studies from "./components/Studies";
import { studiesData } from "./data/studies";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex justify-center">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 min-h-screen shadow-2xl">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            scrollToSection={scrollToSection}
          />
          <main className="px-5 mb-5 flex flex-col gap-16 py-10">
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Projects projects={featuredProjects} technologies={technologies} />
            <AcademicProjects
              projects={academicProjects}
              technologies={technologies}
            />
            <PracticeProjects
              projects={practiceProjects}
              technologies={technologies}
            />
            <Studies studies={studiesData} />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
