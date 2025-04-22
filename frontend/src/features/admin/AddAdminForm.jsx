import Form from '@/components/shared/Form';
import { Button } from '@/components/ui/button';
import FormRow from '@/components/ui/FormRow';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import useAddAdmin from './useAddAdmin';
import Spinner from '@/components/shared/Spinner';

const initialAdminData = {
  name: '',
  email: '',
  password: '',
  contact: '',
  role: 'ADMIN',
};

function AddAdminForm() {
  const { mutate: addNewAdmin, isLoading } = useAddAdmin();
  let [adminData, setAdminData] = useState(initialAdminData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setAdminData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAdminAdd() {
    console.log(adminData);
    addNewAdmin(adminData);
    setAdminData(initialAdminData);
  }
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <h3 className="mb-[3.6rem]">Add admin</h3>
      <Form>
        <FormRow label="Name" columns={2}>
          <Input
            name="name"
            type="text"
            value={adminData.name}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Email" columns={2}>
          <Input
            name="email"
            type="email"
            value={adminData.email}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Password" columns={2}>
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            value={adminData.password}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Contact" columns={2}>
          <Input
            name="contact"
            type="text"
            value={adminData.contact}
            onChange={handleInputChange}
          />
        </FormRow>
      </Form>
      <Button className="self-end mt-[2.4rem]" onClick={handleAdminAdd}>
        Add Admin
      </Button>
    </div>
  );
}

export default AddAdminForm;
