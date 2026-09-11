import { useNavigate } from 'react-router-dom';
import { RosterScreen } from '../components/screens';

/**
 * RosterScreen page wrapper that injects router-based navigation.
 */
export function RosterPage() {
  const navigate = useNavigate();
  return <RosterScreen onSelectCharacter={(id) => navigate(`/roster/${id}`)} />;
}
