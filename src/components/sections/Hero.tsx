import { useTypingAnimation } from '../../hooks/useTypingAnimation';

const TYPING_TEXTS = [
  'Frontend Engineer',
  'Architecture Designer',
  'React Specialist',
  'Problem Solver',
];

function smoothScrollTo(href: string) {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const displayText = useTypingAnimation(TYPING_TEXTS);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-pixel-avatar">
          <span className="pixel-avatar">👾</span>
          <span className="pixel-speech-bubble">Hello!</span>
        </div>
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Jihye</h1>
        <p className="hero-title">
          <span id="typing-text">{displayText}</span>
          <span className="typing-cursor" />
        </p>
        <p className="hero-description">
          클라우드 인프라와 WebRTC 화상회의 서비스를 설계하고 구현하는 프론트엔드 엔지니어입니다.
        </p>
        <div className="hero-cta">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#projects'); }}
          >
            <i className="fa-solid fa-arrow-down" /> 프로젝트 보기
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact'); }}
          >
            <i className="fa-regular fa-envelope" /> 연락하기
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
