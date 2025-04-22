import Form from '@/components/shared/Form';
import { Button } from '@/components/ui/button';
import FormRow from '@/components/ui/FormRow';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function EmailNotificationForm() {
  const [criteria, setCriteria] = useState('batch');
  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]); // for custom emails
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = (i) => {
    setTags(tags.filter((_, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const customEmails = tags.map((tag) => tag.text); // prepare as array of emails
    const payload = {
      customEmails,
      value,
      message,
      criteria,
      subject,
    };

    if (criteria !== 'value' && value == '') {
      toast.error("Value can't be empty when criteria is batch/opportunity");
      return;
    }
    console.log('Submit payload:', payload);
    setCriteria('batch');
    setValue('');
    setTags([]);
    setSubject('');
    setMessage('');
    // TODO: call your mutation or API here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Subject">
        <Input
          required
          placeholder="Enter the subject for your message"
          type="text"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
      </FormRow>
      <FormRow label="Message">
        <Textarea
          required
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here"
        />
      </FormRow>
      <FormRow label="Criteria">
        <Select
          onValueChange={(value) => setCriteria(value)}
          defaultValue={criteria}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select criteria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="batch">By Batch</SelectItem>
            <SelectItem value="opportunity">By Opportunity</SelectItem>
            <SelectItem value="value">Custom Email</SelectItem>
          </SelectContent>
        </Select>
      </FormRow>
      <FormRow label="Custom emails">
        <ReactTags
          tags={tags}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          delimiters={delimiters}
          placeholder="Type email and hit Enter"
          inputFieldPosition="inline"
          autocomplete
          classNames={{
            tags: 'flex flex-wrap items-center px-[0.8rem] py-[0.4rem] border rounded-md bg-[var(--color-grey-0)] text-[1.6rem] focus-within:outline focus-within:outline-1 focus-within:outline-[var(--color-grey-200)]',
            tagInput: ' ',
            tag: 'bg-[var(--color-grey-50)] rounded-md px-[0.6rem] py-[0.2rem] text-[1.2rem] flex items-center justify-between',
            remove: 'cursor-pointer fill-black stroke-black',
            tagInputField: 'bg-transparent outline-none text-[1.6rem]',
          }}
        />
      </FormRow>

      {criteria !== null && (
        <FormRow label="Value(Empty for custom)">
          {criteria === 'batch' ? (
            <Select
              onValueChange={(value) => setValue(value)}
              defaultValue={value}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <Input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={
                criteria === 'opportunity' ? 'Enter Opportunity ID' : ''
              }
            />
          )}
        </FormRow>
      )}
      <div className="flex justify-end">
        <Button>Send Notification</Button>
      </div>
    </Form>
  );
}

export default EmailNotificationForm;
