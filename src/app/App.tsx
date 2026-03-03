import { ThemeProvider } from '../context/ThemeContext';
import RetroBrowser from '../components/layout/RetroBrowser';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import { useActiveNavLink } from '../hooks/useActiveNavLink';

function AppContent() {
  const activeId = useActiveNavLink();

  return (
    <RetroBrowser>
      <Navbar activeId={activeId} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </RetroBrowser>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
