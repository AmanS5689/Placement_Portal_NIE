import { getTotalPlacedStudents } from '@/services/apiDashboardFunctions';
import { useQuery } from '@tanstack/react-query';

export function useTotalPlacedStudents() {
  const { data: totalPlacedStudents, isLoading: isTotalPlacedStudentsLoading } =
    useQuery({
      queryKey: ['total-placed-students'],
      queryFn: () => getTotalPlacedStudents(),
    });

  return { totalPlacedStudents, isTotalPlacedStudentsLoading };
}
