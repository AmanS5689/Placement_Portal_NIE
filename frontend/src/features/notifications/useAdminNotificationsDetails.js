import { getNotificationDetails } from '@/services/apiNotifications';
import { useQuery } from '@tanstack/react-query';

export default function useAdminNotificationsDetails(batch) {
  const {
    isLoading,
    data: notificationDetailsData,
    error,
  } = useQuery({
    queryKey: ['notificationDetails', batch],
    queryFn: () => getNotificationDetails(batch),
    retry: 1,
    enabled: !!batch,
  });
  return { isLoading, error, notificationDetailsData };
}
