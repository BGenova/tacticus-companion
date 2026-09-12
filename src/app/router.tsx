import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import {
  DashboardScreen,
  GoalsScreen,
  FarmPlannerScreen,
  CampaignsScreen,
  HistoryScreen,
  SettingsScreen,
} from '../components/screens';
import { ACTIONS } from '../data/mock';
import { RosterPage, CharacterDetailPage } from './navigate-helpers';

function DashboardPage() {
  return <DashboardScreen actions={ACTIONS} />;
}

function GoalsPage() {
  return <GoalsScreen />;
}

function FarmPlannerPage() {
  return <FarmPlannerScreen />;
}

function CampaignsPage() {
  return <CampaignsScreen />;
}

function HistoryPage() {
  return <HistoryScreen />;
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
      { path: 'campaigns', element: <CampaignsPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
