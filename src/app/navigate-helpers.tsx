import { useNavigate, useParams } from 'react-router-dom';
import { RosterScreen, CharacterDetailScreen } from '../components/screens';

/**
 * RosterScreen page wrapper that injects router-based navigation.
 */
export function RosterPage() {
  const navigate = useNavigate();
  return <RosterScreen onSelectCharacter={(id) => navigate(`/roster/${id}`)} />;
}

/**
 * CharacterDetailScreen page wrapper that injects the route param and router-based navigation.
 */
export function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  return (
    <CharacterDetailScreen
      characterId={id ?? ''}
      onBack={() => navigate('/roster')}
      onGoToFarm={() => navigate('/farm')}
    />
  );
}
