import ReusableBreadcrumb from "@/components/shared/BreadCrumb";
import ViewUserDetails from "@/features/users/components/ViewUserDetails";
import { getUserById } from "@/features/users/server/data/getData";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function ViewUserPage({ params }: Props) {
  const user = await getUserById(params.id);

  if (!user) {
    notFound(); // Handle case where user is not found
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
    { label: `${user.firstName} ${user.lastName}` },
  ];

  return (
    <div>
      <ReusableBreadcrumb items={breadcrumbItems} />
      <ViewUserDetails user={user} />
    </div>
  );
}