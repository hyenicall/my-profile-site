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
      </div>

      <div className="section-container">
        <header className="project-detail__header">
          <h1 className="project-detail__title">{project.title}</h1>
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

        {/* Role / Period */}
        <div className="project-detail__meta">
          <div className="project-detail__meta-item">
            <span className="project-detail__meta-label">Role</span>
            <span className="project-detail__meta-value">{project.role.split('.')[0]}</span>
          </div>
          {project.period && (
            <div className="project-detail__meta-item">
              <span className="project-detail__meta-label">Period</span>
              <span className="project-detail__meta-value">{project.period}</span>
            </div>
          )}
        </div>

        {/* Background */}
        {project.background && (
          <div className="project-detail__section">
            <h4><i className="fa-solid fa-lightbulb" /> Background</h4>
            <p>{project.background}</p>
          </div>
        )}

        {/* My Contributions — 리크루터가 먼저 보는 정보 */}
        {project.contributions && project.contributions.length > 0 && (
          <div className="project-detail__section">
            <h4><i className="fa-solid fa-user-check" /> My Contributions</h4>
            <div className="project-detail__contributions-grid">
              {project.contributions.map((contribution) => (
                <div key={contribution.area} className="project-detail__contribution">
                  <div className="project-detail__contribution-area">{contribution.area}</div>
                  <div className="project-detail__contribution-desc">{contribution.description}</div>
                  {contribution.impact && (
                    <div className="project-detail__contribution-impact">{contribution.impact}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="project-detail__section project-detail__section--techstack">
            <h4><i className="fa-solid fa-layer-group" /> Tech Stack</h4>
            {project.techStack.map((category) => (
              <div key={category.category} className="project-detail__techstack-category">
                <div className="project-detail__techstack-title">{category.category}</div>
                <div className="project-detail__techstack-grid">
                  {category.items.map((item) => (
                    <div key={item.name} className="project-detail__techstack-item">
                      <div className="project-detail__techstack-name">{item.name}</div>
                      {item.detail && (
                        <div className="project-detail__techstack-detail">{item.detail}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="project-detail__section project-detail__section--architecture">
            <h4><i className="fa-solid fa-sitemap" /> Architecture</h4>
            {project.architecture.map((note) => (
              <div key={note.title} className="project-detail__architecture-block">
                <div className="project-detail__architecture-subtitle">{note.title}</div>
                {note.type === 'diagram' ? (
                  <pre className="project-detail__architecture-diagram">{note.content}</pre>
                ) : (
                  <p className="project-detail__architecture-text">{note.content}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Key Decisions */}
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

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="project-detail__section">
            <h4><i className="fa-solid fa-fire" /> Challenges</h4>
            <div className="project-detail__challenges-list">
              {project.challenges.map((challenge, i) => (
                <div key={challenge.problem} className="project-detail__challenge">
                  <div className="project-detail__challenge-number">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="project-detail__challenge-body">
                    <div className="project-detail__challenge-step">
                      <div className="project-detail__challenge-step-label">Problem</div>
                      <div className="project-detail__challenge-step-text">{challenge.problem}</div>
                    </div>
                    <div className="project-detail__challenge-step">
                      <div className="project-detail__challenge-step-label">Approach</div>
                      <div className="project-detail__challenge-step-text">{challenge.approach}</div>
                    </div>
                    <div className="project-detail__challenge-step">
                      <div className="project-detail__challenge-step-label">Outcome</div>
                      <div className="project-detail__challenge-step-text">{challenge.outcome}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="project-detail__section project-detail__section--outcomes">
            <h4><i className="fa-solid fa-trophy" /> Results</h4>
            <ul className="project-detail__results">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Pagination */}
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
