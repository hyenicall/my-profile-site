import { experiences } from '../../data/experience';
import { RevealContainer, RevealItem } from '../ui/ScrollReveal';

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="section-container">
        <RevealContainer>
          <RevealItem className="section-header">
            <p className="section-label">Experience</p>
            <h2 className="section-title">경력 사항</h2>
            <div className="section-divider" />
          </RevealItem>
        </RevealContainer>
        <RevealContainer className="timeline">
          {experiences.map((exp) => (
            <RevealItem className="timeline-item" key={exp.period}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-date">{exp.period}</p>
                <h3>{exp.role}</h3>
                <p className="company">{exp.company} — {exp.location}</p>
                <ul>
                  {exp.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}
