import { addPlacedStudent } from '@/services/apiStudents';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useAddStudent() {
  return useMutation({
    mutationFn: (placedStudent) => addPlacedStudent(placedStudent),
    onSuccess: () => {
      toast.success('Placed student added successfully!');
    },
    onError: () => {
      toast.error('Failed to add placed student!');
    },
  });
}
