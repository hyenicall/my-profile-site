import { RevealContainer, RevealItem } from '../ui/ScrollReveal';

const INFO_ITEMS = [
  { label: '이름', value: 'Jihye' },
  { label: '역할', value: 'Frontend Engineer' },
  { label: '위치', value: 'Seoul, South Korea' },
  { label: '경력', value: '4년+' },
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
              <h3>프론트엔드 엔지니어, Jihye</h3>
              <p>
                안녕하세요! 클라우드 인프라 플랫폼과 WebRTC 화상회의 서비스를 설계하고 구현해 온
                프론트엔드 엔지니어입니다. 복잡한 비즈니스 요구사항을 직관적인 UI로 풀어내는 데
                집중하며, 확장 가능한 아키텍처 설계에 깊은 관심을 가지고 있습니다.
              </p>
              <p>
                React와 TypeScript를 중심으로 다양한 상태 관리 도구와 빌드 시스템을 활용하며,
                CI/CD 파이프라인 구축부터 다국어 지원까지 제품 전반의 프론트엔드 경험을 다뤄왔습니다.
                팀과 함께 더 나은 제품을 만들어가고 싶습니다.
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
