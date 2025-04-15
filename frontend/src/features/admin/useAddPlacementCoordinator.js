import { addPC } from '@/services/apiAdmins';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useAddPlacementCoordinator() {
  return useMutation({
    mutationFn: () => addPC(),
    onSuccess: () => {
      toast.success('Placement coordinator added successfully!');
    },
    onError: () => {
      toast.error('Failed to add placement coordinator!');
    },
  });
}
