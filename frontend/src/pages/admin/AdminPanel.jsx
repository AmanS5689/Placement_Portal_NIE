import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddAdminForm from '@/features/admin/AddAdminForm';
import AddPCForm from '@/features/admin/AddPCForm';

function AdminPanel() {
  return (
    <div className="min-w-[10.4rem]">
      <Tabs defaultValue="admin" onValueChange={() => {}}>
        <TabsList className="mb-[3.6rem]">
          <TabsTrigger value="admin">Admin</TabsTrigger>
          <TabsTrigger value="pc">Coordinator</TabsTrigger>
        </TabsList>
        <TabsContent value="admin">
          <AddAdminForm />
        </TabsContent>
        <TabsContent value="pc">
          <AddPCForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminPanel;
