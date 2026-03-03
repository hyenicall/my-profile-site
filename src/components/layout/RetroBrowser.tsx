import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function RetroBrowser({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="retro-browser">
      <div className="retro-browser__titlebar">
        <div className="retro-browser__dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="retro-browser__title">jihye.dev</span>
        <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          <span className="theme-toggle__icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
      </div>
      <div className="retro-browser__content">
        {children}
      </div>
    </div>
  );
}
