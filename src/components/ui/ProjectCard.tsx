import type { Project } from '../../types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="project-card"
      data-project={project.id}
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('.project-links a')) return;
        window.location.hash = `#project/${project.id}`;
      }}
    >
      <div className="project-thumbnail">
        <img
          src={project.image}
          alt={project.title}
          className="project-thumbnail-img"
        />
        {project.period && (
          <span className="project-period-badge">{project.period}</span>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="project-tag project-tag--more">+{project.tags.length - 4}</span>
          )}
        </div>
        {project.results && project.results.length > 0 && (
          <p className="project-highlight">
            <i className="fa-solid fa-chevron-right" /> {project.results[0]}
          </p>
        )}
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
          <span className="project-detail-cta">
            자세히 보기 <i className="fa-solid fa-arrow-right" />
          </span>
        </div>
      </div>
    </div>
  );
}
