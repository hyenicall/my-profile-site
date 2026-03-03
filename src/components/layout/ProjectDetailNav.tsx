export default function ProjectDetailNav() {
  return (
    <nav className="project-detail-nav">
      <a
        href="#projects"
        className="project-detail-nav__back"
        onClick={(e) => {
          e.preventDefault();
          window.location.hash = '#projects';
        }}
      >
        <i className="fa-solid fa-arrow-left" /> 프로젝트 목록으로
      </a>
    </nav>
  );
}
