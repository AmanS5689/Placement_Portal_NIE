import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmailNotificationForm from '@/features/notifications/EmailNotificationForm';
import InAppNotificationForm from '@/features/notifications/InAppNotificationForm';

function Announcements() {
  return (
    <div className="min-w-[102.4rem]">
      <h3 className="mb-[3.6rem]">Send notifications</h3>
      <Tabs defaultValue="in-app" onValueChange={() => {}}>
        <TabsList>
          <TabsTrigger value="in-app">In App</TabsTrigger>
          <TabsTrigger value="by-email">By Email</TabsTrigger>
        </TabsList>
        <TabsContent value="in-app">
          <InAppNotificationForm />
        </TabsContent>
        <TabsContent value="by-email">
          <EmailNotificationForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Announcements;
