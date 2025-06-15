import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NeuralBackground from '../components/NeuralBackground';
import MainSection from '../components/MainSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Section is considered active when 50% is visible
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

   return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <NeuralBackground />
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main className="container mx-auto px-4">
          <MainSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}