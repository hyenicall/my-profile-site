import { skillCategories } from '../../data/skills';
import { RevealContainer, RevealItem } from '../ui/ScrollReveal';
import type { Skill } from '../../types';

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.imageUrl) {
    return (
      <span className="skill-icon">
        <img src={skill.imageUrl} alt={skill.name} className="skill-icon-img" />
      </span>
    );
  }
  if (skill.isTextIcon) {
    return (
      <span className="skill-icon">
        {skill.icon.startsWith('fa-') ? <i className={skill.icon} /> : skill.icon}
      </span>
    );
  }
  return <i className={skill.icon} />;
}

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="section-container">
        <RevealContainer>
          <RevealItem className="section-header">
            <p className="section-label">Skills</p>
            <h2 className="section-title">기술 스택</h2>
            <div className="section-divider" />
          </RevealItem>
        </RevealContainer>

        {skillCategories.map((category) => (
          <RevealContainer className="skills-category" key={category.title}>
            <RevealItem>
              <h3 className="skills-category-title">{category.title}</h3>
            </RevealItem>
            <RevealItem>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <SkillIcon skill={skill} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </RevealContainer>
        ))}
      </div>
    </section>
  );
}
