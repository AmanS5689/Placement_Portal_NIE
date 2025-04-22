import dateFormatter from '@/utils/dateFormatter';
import useDeleteNotification from './useDeleteNotification';
import { HiMiniTrash } from 'react-icons/hi2';

function AdminNotification({ notificationDetail }) {
  const { deleteNotification, isPending, isSuccess, error } =
    useDeleteNotification();

  const handleDelete = () => {
    deleteNotification({ notification_id: notificationDetail.id });
  };
  return (
    <div className="bg-[var(--color-grey-0)] p-[2.4rem] flex flex-col gap-[1.6rem]">
      <div className="flex justify-between text-[1.4rem]">
        <span className="bg-[var(--color-blue-600)] text-[var(--color-white)] px-[1.2rem] py-[0.6rem] rounded-md ">
          ID: {notificationDetail.id}
        </span>
        <span className="font-semibold">
          Created at:{' '}
          {dateFormatter(`${notificationDetail.created_at}`, 'string')}
        </span>
      </div>
      <div>
        <p className="text-[2rem] font-semibold">{notificationDetail.title}</p>
        <p>{notificationDetail.message}</p>
      </div>
      <div className="text-[1.4rem] flex justify-between items-center">
        <p>
          Read by:{' '}
          <span className="font-semibold">
            {notificationDetail.read_count}/
            {notificationDetail.total_recipients}
          </span>
        </p>
        <HiMiniTrash
          size={'3rem'}
          onClick={handleDelete}
          disabled={isPending}
          className="cursor-pointer px-[0.4rem] bg-red-500 text-white rounded-sm hover:bg-red-400"
        />

        {/* <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={isPending}
          className=""
        >
          {isPending ? 'Deleting...' : 'Delete'}
        </Button> */}
      </div>
      <div className=""></div>
    </div>
  );
}

export default AdminNotification;
