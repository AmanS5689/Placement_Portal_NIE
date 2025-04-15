import { getAllPlacedStudents } from '@/services/apiStudents';
import { useQuery } from '@tanstack/react-query';

export default function useAllPlacedStudents(batch) {
  const {
    isLoading,
    data: allPlacedStudents,
    error,
  } = useQuery({
    queryKey: ['allStudents', batch],
    queryFn: () => getAllPlacedStudents(),
    retry: 1,
  });
  return { isLoading, error, allPlacedStudents };
}
