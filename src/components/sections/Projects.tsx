import { useState, useCallback } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { RevealContainer, RevealItem } from '../ui/ScrollReveal';
import type { Project } from '../../types';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <section className="section" id="projects">
      <div className="section-container">
        <RevealContainer>
          <RevealItem className="section-header">
            <p className="section-label">Projects</p>
            <h2 className="section-title">주요 프로젝트</h2>
            <div className="section-divider" />
          </RevealItem>
        </RevealContainer>
        <RevealContainer className="projects-grid">
          {projects.map((project) => (
            <RevealItem key={project.id}>
              <ProjectCard
                project={project}
                onSelect={() => setSelected(project)}
              />
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
      <ProjectModal project={selected} onClose={handleClose} />
    </section>
  );
}
