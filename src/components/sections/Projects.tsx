import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import { RevealContainer, RevealItem } from '../ui/ScrollReveal';

export default function Projects() {
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
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}
