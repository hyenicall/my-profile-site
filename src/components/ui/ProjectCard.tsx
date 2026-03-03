import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      className="project-card"
      data-project={project.id}
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('.project-links a')) return;
        onSelect();
      }}
    >
      <div className="project-thumbnail">
        <img
          src={project.image}
          alt={project.title}
          className="project-thumbnail-img"
        />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github}>
              <i className="fa-brands fa-github" /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live}>
              <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
