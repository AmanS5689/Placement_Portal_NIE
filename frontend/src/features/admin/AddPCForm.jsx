import Form from '@/components/shared/Form';
import { Button } from '@/components/ui/button';
import FormRow from '@/components/ui/FormRow';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import useAddPlacementCoordinator from './useAddPlacementCoordinator';
import Spinner from '@/components/shared/Spinner';

const initialPCData = {
  name: '',
  usn: '',
  branch: '',
  email: '',
  password: '',
  contact: '',
  batch: '',
};

function AddPCForm() {
  const { mutate: addNewPC, isLoading } = useAddPlacementCoordinator();
  const [pcData, setPCData] = useState(initialPCData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPCData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePCAdd() {
    console.log(pcData);
    addNewPC(pcData);
    setPCData(initialPCData);
  }

  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <h3 className="mb-[3.6rem]">Add Placement Coordinator</h3>
      <Form>
        <FormRow label="Name" columns={2}>
          <Input
            name="name"
            value={pcData.name}
            type="text"
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="USN" columns={2}>
          <Input
            name="usn"
            value={pcData.usn}
            type="text"
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Email" columns={2}>
          <Input
            name="email"
            value={pcData.email}
            type="email"
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Password" columns={2}>
          <Input
            name="password"
            value={pcData.password}
            type="password"
            autoComplete="new-password"
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Branch" columns={2}>
          <Input
            name="branch"
            type="text"
            onChange={handleInputChange}
            autoComplete="new-branch"
          />
        </FormRow>
        <FormRow label="Batch" columns={2}>
          <Input
            name="batch"
            value={pcData.batch}
            type="text"
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Contact" columns={2}>
          <Input
            name="contact"
            value={pcData.contact}
            type="text"
            onChange={handleInputChange}
          />
        </FormRow>
      </Form>
      <Button className="self-end mt-[2.4rem]" onClick={handlePCAdd}>
        Add PC
      </Button>
    </div>
  );
}

export default AddPCForm;
