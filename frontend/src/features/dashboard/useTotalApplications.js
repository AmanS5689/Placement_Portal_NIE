import { getTotalApplications } from '@/services/apiDashboardFunctions';
import { useQuery } from '@tanstack/react-query';

export function useTotalApplications() {
  const { data: totalApplications, isLoading: isTotalApplicationsLoading } =
    useQuery({
      queryKey: ['total-applications'],
      queryFn: () => getTotalApplications(),
    });

  return { totalApplications, isTotalApplicationsLoading };
}
