import type { Screen } from '../../types';

/** Props du composant {@link Sidebar}. */
export interface SidebarProps {
  /** Écran actuellement actif. */
  activeScreen: Screen;
  /** Callback de changement d'écran. */
  onNavigate: (screen: Screen) => void;
}

/** Entrée de navigation dans la sidebar. */
interface NavEntry {
  screen: Screen;
  label: string;
  icon: React.ReactNode;
  /** Écrans supplémentaires considérés comme actifs pour ce bouton. */
  activeAlso?: Screen[];
}

const NAV_ENTRIES: NavEntry[] = [
  {
    screen: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11l8-7 8 7M6 10v9h12v-9" />
      </svg>
    ),
  },
  {
    screen: 'roster',
    label: 'Roster',
    activeAlso: ['character'],
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M2.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
        <circle cx="17.3" cy="9.3" r="2.3" />
        <path d="M15.8 14.3c2.6.5 4.7 2.6 4.7 5.7" />
      </svg>
    ),
  },
  {
    screen: 'goals',
    label: 'Goals',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    screen: 'farm',
    label: 'Farm Planner',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h2M4 12h2M4 18h2M9 6h11M9 12h11M9 18h11" />
      </svg>
    ),
  },
  {
    screen: 'campaigns',
    label: 'Campaigns',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V8l8-5 8 5v13M4 21h16M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    screen: 'history',
    label: 'History',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    screen: 'legendaryEvents',
    label: 'Legendary Events',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4L12 2z" />
      </svg>
    ),
  },
  {
    screen: 'settings',
    label: 'Settings',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6.1 6.1l2.1 2.1M15.8 15.8l2.1 2.1M6.1 17.9l2.1-2.1M15.8 8.2l2.1-2.1" />
      </svg>
    ),
  },
];

/**
 * Barre de navigation latérale de l'application.
 *
 * @param props - {@link SidebarProps}
 */
export function Sidebar({ activeScreen, onNavigate }: SidebarProps) {
  const isActive = (entry: NavEntry) =>
    activeScreen === entry.screen || entry.activeAlso?.includes(activeScreen);

  return (
    <nav
      style={{
        width: 224,
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        padding: 'var(--space-4)',
        borderRight: '1px solid var(--color-divider)',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          padding: '0 var(--space-2) var(--space-4)',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 2,
            background: 'var(--color-accent)',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-heading-weight)',
            fontSize: 15,
            letterSpacing: '0.01em',
          }}
        >
          TACTICUS PLANNER
        </span>
      </div>

      {NAV_ENTRIES.map((entry) => (
        <button
          key={entry.screen}
          type="button"
          className={`btn ${isActive(entry) ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => onNavigate(entry.screen)}
          style={{ justifyContent: 'flex-start', gap: 'var(--space-3)', width: '100%' }}
        >
          {entry.icon}
          {entry.label}
        </button>
      ))}

      <div
        style={{
          marginTop: 'auto',
          padding: 'var(--space-3) var(--space-2) 0',
          borderTop: '1px solid var(--color-divider)',
          fontSize: 11,
          color: 'color-mix(in srgb, var(--color-text) 55%, transparent)',
        }}
      >
        Données locales · aucune synchronisation active
      </div>
    </nav>
  );
}
