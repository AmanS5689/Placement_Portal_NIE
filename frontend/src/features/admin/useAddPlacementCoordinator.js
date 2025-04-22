import { addPC } from '@/services/apiAdmins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useAddPlacementCoordinator() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (pcData) => addPC(pcData),
    onSuccess: () => {
      toast.success('Placement coordinator added successfully!');
      queryClient.invalidateQueries({ queryKey: ['placementCoordinators'] });
    },
    onError: () => {
      toast.error('Failed to add placement coordinator!');
    },
  });
}
