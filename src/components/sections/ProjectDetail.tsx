import { useEffect } from 'react';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [project.id]);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="project-detail">
      <div className="project-detail__hero">
        <img
          src={project.image.replace('/600/', '/1400/')}
          alt={project.title}
          className="project-detail__hero-img"
        />
        {project.period && (
          <span className="project-detail__period-badge">{project.period}</span>
        )}
      </div>

      <div className="section-container">
        <header className="project-detail__header">
          <h1 className="project-detail__title">{project.title}</h1>
          <div className="project-detail__tags">
            {project.tags.map((tag) => (
              <span className="project-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <p className="project-detail__description">{project.description}</p>
          <div className="project-detail__links">
            {project.github && (
              <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github" /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
              </a>
            )}
          </div>
        </header>

        <div className="project-detail__section">
          <h4><i className="fa-solid fa-user" /> My Role</h4>
          <p>{project.role}</p>
        </div>

        {project.background && (
          <div className="project-detail__section">
            <h4><i className="fa-solid fa-lightbulb" /> Background</h4>
            <p>{project.background}</p>
          </div>
        )}

        {project.decisions && project.decisions.length > 0 && (
          <div className="project-detail__section project-detail__section--decisions">
            <h4><i className="fa-solid fa-code-branch" /> Key Decisions</h4>
            <div className="project-detail__decisions-list">
              {project.decisions.map((decision, i) => (
                <div key={decision.title} className="project-detail__decision">
                  <div className="project-detail__decision-number">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="project-detail__decision-body">
                    <strong>{decision.title}</strong>
                    <p>{decision.content}</p>
                    <div className="project-detail__decision-media" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.results && project.results.length > 0 && (
          <div className="project-detail__section project-detail__section--results">
            <h4><i className="fa-solid fa-trophy" /> Results</h4>
            <ul className="project-detail__results">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-detail__pagination">
          {prevProject ? (
            <a
              href={`#project/${prevProject.id}`}
              className="project-detail__pagination-item project-detail__pagination-item--prev"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = `#project/${prevProject.id}`;
              }}
            >
              <span className="project-detail__pagination-label">
                <i className="fa-solid fa-arrow-left" /> 이전 프로젝트
              </span>
              <span className="project-detail__pagination-title">{prevProject.title}</span>
            </a>
          ) : (
            <div />
          )}
          {nextProject ? (
            <a
              href={`#project/${nextProject.id}`}
              className="project-detail__pagination-item project-detail__pagination-item--next"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = `#project/${nextProject.id}`;
              }}
            >
              <span className="project-detail__pagination-label">
                다음 프로젝트 <i className="fa-solid fa-arrow-right" />
              </span>
              <span className="project-detail__pagination-title">{nextProject.title}</span>
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
