import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import {
  DashboardScreen,
  GoalsScreen,
  FarmPlannerScreen,
  SettingsScreen,
} from '../components/screens';
import { ACTIONS, CAMPAIGNS, FARM_COMPONENTS, FARM_NODES, GOALS } from '../data/mock';
import { RosterPage, CharacterDetailPage } from './navigate-helpers';

function DashboardPage() {
  return <DashboardScreen campaigns={CAMPAIGNS} actions={ACTIONS} />;
}

function GoalsPage() {
  return <GoalsScreen goals={GOALS} />;
}

function FarmPlannerPage() {
  return <FarmPlannerScreen components={FARM_COMPONENTS} nodes={FARM_NODES} />;
}

function SettingsPage() {
  return <SettingsScreen />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'roster', element: <RosterPage /> },
      { path: 'roster/:id', element: <CharacterDetailPage /> },
      { path: 'goals', element: <GoalsPage /> },
      { path: 'farm', element: <FarmPlannerPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
