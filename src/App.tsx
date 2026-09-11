import { useState } from 'react';
import './nocturne.css';
import type { Screen } from './types';
import { ACTIONS, CAMPAIGNS, FARM_COMPONENTS, FARM_NODES, GOALS, ROSTER } from './data/mock';
import { Sidebar } from './components/layout/Sidebar';
import {
  CharacterDetailScreen,
  DashboardScreen,
  FarmPlannerScreen,
  GoalsScreen,
  RosterScreen,
  SettingsScreen,
} from './components/screens';

/**
 * Composant racine de l'application Tacticus Planner.
 * Gère la navigation entre les écrans via un état local.
 */
function App() {
  const [screen, setScreen] = useState<Screen>('dashboard');
  const [selectedId, setSelectedId] = useState('c1');

  const handleSelectCharacter = (id: string) => {
    setSelectedId(id);
    setScreen('character');
  };

  const selectedCharacter = ROSTER.find((c) => c.id === selectedId) ?? ROSTER[0];

  const renderScreen = () => {
    switch (screen) {
      case 'dashboard':
        return <DashboardScreen campaigns={CAMPAIGNS} actions={ACTIONS} />;
      case 'roster':
        return <RosterScreen roster={ROSTER} onSelectCharacter={handleSelectCharacter} />;
      case 'character':
        return (
          <CharacterDetailScreen
            character={selectedCharacter}
            onBack={() => setScreen('roster')}
            onGoToFarm={() => setScreen('farm')}
          />
        );
      case 'goals':
        return <GoalsScreen goals={GOALS} />;
      case 'farm':
        return <FarmPlannerScreen components={FARM_COMPONENTS} nodes={FARM_NODES} />;
      case 'settings':
        return <SettingsScreen />;
    }
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
      <Sidebar activeScreen={screen} onNavigate={setScreen} />
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
        {renderScreen()}
      </main>
    </div>
  );
}

export default App;
