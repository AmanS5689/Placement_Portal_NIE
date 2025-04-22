import Spinner from '@/components/shared/Spinner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AdminNotification from '@/features/notifications/AdminNotification';
import useAdminNotificationsDetails from '@/features/notifications/useAdminNotificationsDetails';
import { useState } from 'react';

function AdminNotifications() {
  const [batch, setBatch] = useState('2025');
  const { notificationDetailsData, isLoading } =
    useAdminNotificationsDetails(batch);

  if (isLoading) return <Spinner />;
  console.log(notificationDetailsData);
  return (
    <div>
      <div className="flex justify-between items-center mb-[3.6rem]">
        <h3>Notification details</h3>
        <Select onValueChange={(value) => setBatch(value)} defaultValue={batch}>
          <SelectTrigger className="w-[10rem]">
            <SelectValue placeholder="Batch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-[2.4rem] shadow-md">
        {notificationDetailsData.map((notificationDetail) => {
          return (
            <AdminNotification
              key={notificationDetail.id}
              notificationDetail={notificationDetail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AdminNotifications;
