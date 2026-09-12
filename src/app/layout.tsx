import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import type { Screen } from '../types';

const ROUTE_TO_SCREEN: Record<string, Screen> = {
  '/': 'dashboard',
  '/roster': 'roster',
  '/goals': 'goals',
  '/farm': 'farm',
  '/campaigns': 'campaigns',
  '/history': 'history',
  '/legendary-events': 'legendaryEvents',
  '/settings': 'settings',
};

const SCREEN_TO_ROUTE: Record<Screen, string> = {
  dashboard: '/',
  roster: '/roster',
  character: '/roster',
  goals: '/goals',
  farm: '/farm',
  campaigns: '/campaigns',
  history: '/history',
  legendaryEvents: '/legendary-events',
  settings: '/settings',
};

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeScreen: Screen =
    ROUTE_TO_SCREEN[location.pathname] ??
    (location.pathname.startsWith('/roster/') ? 'character' : 'dashboard');

  const handleNavigate = (screen: Screen) => {
    navigate(SCREEN_TO_ROUTE[screen]);
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Sidebar activeScreen={activeScreen} onNavigate={handleNavigate} />
      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: 'var(--space-6) var(--space-4) var(--space-8)',
          maxWidth: 1180,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
