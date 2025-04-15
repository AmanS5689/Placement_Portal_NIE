import Form from '@/components/shared/Form';
import { Button } from '@/components/ui/button';
import FormRow from '@/components/ui/FormRow';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import useAddStudent from './useAddStudent';
import Spinner from '@/components/shared/Spinner';

function AddPlacedStudentModal({ onClose }) {
  const { mutate: addPlacedStudent, isLoading } = useAddStudent();
  const [placedStudent, setPlacedStudent] = useState({
    usn: '',
    opportunity_id: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPlacedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePlacedStudentAdd() {
    addPlacedStudent(placedStudent);
    setPlacedStudent({
      usn: '',
      opportunity_id: '',
    });
    onClose();
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-[500]"
      ></div>
      <div className="fixed bg-[var(--color-grey-0)] min-w-[72rem] left-[37%] top-[40%] z-[999] shadow-lg p-4">
        <Form>
          <FormRow label="USN">
            <Input
              type="text"
              name="usn"
              value={placedStudent.usn}
              onChange={handleInputChange}
            />
          </FormRow>
          <FormRow label="Opportunity ID">
            <Input
              type="text"
              name="opportunity_id"
              value={placedStudent.opportunity_id}
              onChange={handleInputChange}
            />
          </FormRow>
        </Form>
        <div className="text-end">
          <Button onClick={handlePlacedStudentAdd}>Add</Button>
        </div>
      </div>
    </>
  );
}

export default AddPlacedStudentModal;
