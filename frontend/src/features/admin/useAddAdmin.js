import { addAdmin } from '@/services/apiAdmins';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useAddAdmin() {
  return useMutation({
    mutationFn: (adminData) => addAdmin(adminData),
    onSuccess: () => {
      toast.success('Admin added successfully!');
    },
    onError: () => {
      toast.error('Failed to add admin!');
    },
  });
}
