import { getActiveOpportunities } from '@/services/apiDashboardFunctions';
import { useQuery } from '@tanstack/react-query';

export function useActiveOpportunities() {
  const { data: activeOpportunities, isLoading: isActiveOpportunitiesLoading } =
    useQuery({
      queryKey: ['active-opportunities'],
      queryFn: () => getActiveOpportunities(),
    });

  return { activeOpportunities, isActiveOpportunitiesLoading };
}
