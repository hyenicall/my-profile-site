import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '../context/ThemeContext';
import RetroBrowser from '../components/layout/RetroBrowser';
import Navbar from '../components/layout/Navbar';
import ProjectDetailNav from '../components/layout/ProjectDetailNav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import ProjectDetail from '../components/sections/ProjectDetail';
import Footer from '../components/layout/Footer';
import { useActiveNavLink } from '../hooks/useActiveNavLink';
import { useHashRoute } from '../hooks/useHashRoute';
import { projects } from '../data/projects';

function MainView() {
  const activeId = useActiveNavLink();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView();
      });
    }
  }, []);

  return (
    <motion.div
      key="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Navbar activeId={activeId} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </motion.div>
  );
}

function DetailView({ projectId }: { projectId: number }) {
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      window.location.hash = '#projects';
    }
  }, [project]);

  if (!project) return null;

  return (
    <motion.div
      key={`project-${projectId}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <ProjectDetailNav />
      <ProjectDetail project={project} />
      <Footer />
    </motion.div>
  );
}

function AppContent() {
  const route = useHashRoute();

  const browserTitle =
    route.type === 'project'
      ? `jihye.dev \u2014 ${projects.find((p) => p.id === route.projectId)?.title ?? ''}`
      : 'jihye.dev';

  return (
    <RetroBrowser title={browserTitle}>
      <AnimatePresence mode="wait">
        {route.type === 'main' ? (
          <MainView />
        ) : (
          <DetailView projectId={route.projectId} />
        )}
      </AnimatePresence>
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
