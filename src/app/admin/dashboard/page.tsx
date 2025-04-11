import { AdminCarsList } from "@/component/car/AdminCarsList";

export default function dashboardPage() {
   return (
      <>
         <h1>Dashboard</h1>
         <p>Welcome to the admin dashboard!</p>
         <p>Here you can manage your cars.</p>
         <AdminCarsList />
      </>
   );
}
