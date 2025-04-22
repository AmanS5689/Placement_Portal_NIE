import { getRecentOpportunities } from '@/services/apiDashboardFunctions';
import { useQuery } from '@tanstack/react-query';

export function useRecentOpportunities() {
  const { data: recentOpportunities, isLoading: isRecentOpportunitiesLoading } =
    useQuery({
      queryKey: ['recent-opportunities'],
      queryFn: () => getRecentOpportunities(),
    });

  return { recentOpportunities, isRecentOpportunitiesLoading };
}
