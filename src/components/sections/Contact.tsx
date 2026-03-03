import { RevealContainer, RevealItem } from '../ui/ScrollReveal';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-container">
        <RevealContainer>
          <RevealItem className="section-header">
            <p className="section-label">Contact</p>
            <h2 className="section-title">연락하기</h2>
            <div className="section-divider" />
          </RevealItem>
        </RevealContainer>
        <RevealContainer className="contact-grid">
          <RevealItem className="contact-info">
            <h3>함께 일해요</h3>
            <p>
              새로운 프로젝트, 협업 제안, 또는 궁금한 점이 있으시면
              언제든지 연락해 주세요. 빠른 시일 내에 답변드리겠습니다.
            </p>
            <a href="mailto:hello@jihye.dev" className="contact-email">
              <i className="fa-regular fa-envelope" /> hello@jihye.dev
            </a>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="#" className="social-link" aria-label="Blog">
                <i className="fa-solid fa-blog" />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </RevealItem>

          <RevealItem>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" placeholder="홍길동" />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" placeholder="example@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">메시지</label>
                <textarea id="message" placeholder="메시지를 입력해 주세요" />
              </div>
              <button type="submit" className="btn-submit">
                <i className="fa-regular fa-paper-plane" /> 보내기
              </button>
            </form>
          </RevealItem>
        </RevealContainer>
      </div>
    </section>
  );
}
