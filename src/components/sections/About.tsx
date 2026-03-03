import { RevealContainer, RevealItem } from '../ui/ScrollReveal';

const INFO_ITEMS = [
  { label: '이름', value: 'Jihye' },
  { label: '역할', value: 'Frontend Developer' },
  { label: '위치', value: 'Seoul, South Korea' },
  { label: '학력', value: '컴퓨터공학 전공' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <RevealContainer>
          <RevealItem className="section-header">
            <p className="section-label">About Me</p>
            <h2 className="section-title">안녕하세요, 저를 소개합니다</h2>
            <div className="section-divider" />
          </RevealItem>
        </RevealContainer>
        <div className="about-grid">
          <RevealContainer>
            <RevealItem className="about-image">
              <img
                src="https://picsum.photos/280/340"
                alt="Profile photo"
                className="about-image-photo"
              />
            </RevealItem>
          </RevealContainer>
          <RevealContainer>
            <RevealItem className="about-text">
              <h3>프론트엔드 개발자, Jihye</h3>
              <p>
                안녕하세요! 저는 사용자 중심의 웹 경험을 만들어가는 프론트엔드 개발자입니다.
                직관적이고 접근성 높은 인터페이스를 설계하는 것에 열정을 가지고 있으며,
                최신 웹 기술을 활용하여 빠르고 아름다운 웹 애플리케이션을 구축합니다.
              </p>
              <p>
                React, Next.js, Vue.js 등 모던 프레임워크에 능숙하며,
                디자인 시스템 구축과 성능 최적화에 깊은 관심을 가지고 있습니다.
                끊임없이 배우고 성장하며, 팀과 함께 더 나은 제품을 만들어가고 싶습니다.
              </p>
              <div className="about-info">
                {INFO_ITEMS.map(({ label, value }) => (
                  <div className="about-info-item" key={label}>
                    <span className="label">{label}</span>
                    <span className="value">{value}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </RevealContainer>
        </div>
      </div>
    </section>
  );
}
