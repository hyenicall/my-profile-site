import { useState, useEffect } from 'react';

export type Route =
  | { type: 'main'; hash: string }
  | { type: 'project'; projectId: number };

function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '');
  const projectMatch = raw.match(/^project\/(\d+)$/);
  if (projectMatch) {
    return { type: 'project', projectId: Number(projectMatch[1]) };
  }
  return { type: 'main', hash: raw };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}
