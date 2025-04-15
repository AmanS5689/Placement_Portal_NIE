import { getAllPC } from '@/services/apiAdmins';
import { useQuery } from '@tanstack/react-query';

export default function usePlacementCoordinators() {
  const {
    isLoading,
    data: placementCoordinators,
    error,
  } = useQuery({
    queryKey: ['placementCoordinators'],
    queryFn: () => getAllPC(),
    retry: 1,
  });
  return { isLoading, error, placementCoordinators };
}
