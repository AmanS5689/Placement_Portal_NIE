import { deleteNotificationByID } from '@/services/apiNotifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useDeleteNotification() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteNotification,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: (notificationDetail) =>
      deleteNotificationByID(notificationDetail),
    onSuccess: () => {
      // Invalidate any related queries to refresh UI
      queryClient.invalidateQueries({ queryKey: ['notificationDetails'] });
      toast.success('Notification deleted successfully!');
    },
    onError: () => {
      toast.error('Failed to delete notification!');
    },
  });

  return {
    deleteNotification,
    isPending,
    isError,
    error,
    isSuccess,
  };
}
