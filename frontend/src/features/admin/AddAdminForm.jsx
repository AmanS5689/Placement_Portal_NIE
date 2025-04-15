import Form from '@/components/shared/Form';
import { Button } from '@/components/ui/button';
import FormRow from '@/components/ui/FormRow';
import { Input } from '@/components/ui/input';

function AddAdminForm() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-[3.6rem]">Add admin</h3>
      <Form>
        <FormRow label="Name" columns={2}>
          <Input type="text" />
        </FormRow>
        <FormRow label="Email" columns={2}>
          <Input type="email" />
        </FormRow>
        <FormRow label="Password" columns={2}>
          <Input type="password" autocomplete="new-password" />
        </FormRow>
        <FormRow label="Contact" columns={2}>
          <Input type="text" />
        </FormRow>
      </Form>
      <Button className="self-end mt-[2.4rem]">Add Admin</Button>
    </div>
  );
}

export default AddAdminForm;
