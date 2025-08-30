import ReusableBreadcrumb from "@/components/shared/BreadCrumb";
import UserList from "@/features/users/components/UserList";
import { getAllUsers } from "@/features/users/server/data/getData";

export default async function page() {
  const users = await getAllUsers();
  const usersList = users.data;
  console.log(usersList);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Users" },
  ];

  return (
    <div>
      <ReusableBreadcrumb items={breadcrumbItems} />
      <h1 className="text-center text-base font-medium md:text-xl md:font-semibold my-10">Find Friends to Connect with them!!</h1>
      <UserList users={usersList} />
    </div>
  );
}
