import FormRow from '@/components/ui/FormRow';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import HrBreak from '../ui/HrBreak';
import { useUser } from '@/features/authentication/useUser';
import dateFormatter from '@/utils/dateFormatter';
import Form from './Form';

function ProfileDetails() {
  const [isEditable, setIsEditable] = useState(false);
  const user = useUser();
  return (
    <Form>
      <p className="font-semibold mb-[2.4rem]">Personal details</p>
      <FormRow label="Fullname">
        <Input
          type="text"
          value={user.name}
          onChange={() => console.log('profile section')}
          id="fullName"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Contact">
        <Input
          type="text"
          value={user.contact}
          onChange={() => console.log('profile section')}
          id="contact"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Address">
        <Input
          type="text"
          value={user.address}
          onChange={() => console.log('profile section')}
          id="address"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Gender">
        <Select defaultValue={user.gender} disabled={!isEditable}>
          <SelectTrigger className="">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
          </SelectContent>
        </Select>
      </FormRow>
      <FormRow label="Category">
        <Select defaultValue={user.category} disabled={!isEditable}>
          <SelectTrigger className="">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General">General</SelectItem>
            <SelectItem value="OBC">OBC</SelectItem>
            <SelectItem value="SC/ST">SC/ST</SelectItem>
          </SelectContent>
        </Select>
      </FormRow>
      <FormRow label="Date of Birth">
        <Input
          type="date"
          value={dateFormatter(user.dob, 'date')}
          onChange={() => console.log('profile section')}
          id="dob"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Personal email">
        <Input
          type="text"
          value={user.personal_email}
          onChange={() => console.log('profile section')}
          id="pan"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="AADHAR">
        <Input
          type="text"
          value={user.aadhar}
          onChange={() => console.log('profile section')}
          id="aadhar"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="PAN">
        <Input
          type="text"
          value={user.pan}
          onChange={() => console.log('profile section')}
          id="pan"
          disabled={!isEditable}
        />
      </FormRow>

      {/* Academic details */}
      <HrBreak />
      <p className="font-semibold mb-[2.4rem]">Academic details</p>
      <FormRow label="USN">
        <Input
          type="text"
          value={user.usn}
          onChange={() => console.log('profile section')}
          id="usn"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Batch">
        <Input
          type="text"
          value={user.batch}
          onChange={() => console.log('profile section')}
          id="batch"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="College email">
        <Input
          type="text"
          value={user.college_email}
          onChange={() => console.log('profile section')}
          id="contact"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Address">
        <Input
          type="text"
          value="32 street, JP nagar, Karnataka"
          onChange={() => console.log('profile section')}
          id="address"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Branch">
        <Select defaultValue={user.branch} className="" disabled={!isEditable}>
          <SelectTrigger className="">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CSE">CSE</SelectItem>
            <SelectItem value="ISE">ISE</SelectItem>
            <SelectItem value="ECE">ECE</SelectItem>
            <SelectItem value="EEE">EEE</SelectItem>
            <SelectItem value="MECH">MECH</SelectItem>
            <SelectItem value="CIV">CIV</SelectItem>
          </SelectContent>
        </Select>
      </FormRow>
      <FormRow label="Class X percentage">
        <Input
          type="number"
          value={user.class_10_percentage}
          onChange={() => console.log('profile section')}
          id="class_10_percentage"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Class X board">
        <Input
          type="text"
          value={user.class_10_board}
          onChange={() => console.log('profile section')}
          id="class_10_board"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Class XII percentage">
        <Input
          type="number"
          value={user.class_12_percentage}
          onChange={() => console.log('profile section')}
          id="class_12_percentage"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Class XII board">
        <Input
          type="text"
          value={user.class_12_board}
          onChange={() => console.log('profile section')}
          id="class_12_board"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Current CGPA">
        <Input
          type="number"
          value={user.current_cgpa}
          onChange={() => console.log('profile section')}
          id="current_cgpa"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Backlogs">
        <Input
          type="text"
          value={user.backlogs}
          onChange={() => console.log('profile section')}
          id="backlogs"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Placement Status">
        <Input
          type="text"
          value={user.isPlaced.toLowerCase() === 'no' ? 'Not Placed' : 'Placed'}
          onChange={() => console.log('profile section')}
          id="is_placed"
          disabled={!isEditable}
        />
      </FormRow>
      <FormRow label="Resume link">
        <Input
          type="url"
          value={user.resume_link}
          onChange={() => console.log('profile section')}
          id="resume_link"
          disabled={!isEditable}
        />
      </FormRow>
    </Form>
  );
}

export default ProfileDetails;
