export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2026 Jihye. All rights reserved.</p>
        <a href="#hero" className="back-to-top" aria-label="Back to top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up" />
        </a>
      </div>
    </footer>
  );
}
