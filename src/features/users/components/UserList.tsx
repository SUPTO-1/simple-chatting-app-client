import { IUser } from "../types/user.type";
import UserCard from "./UserCard";

type IUserListProps = {
  users: IUser[];
};

export default function UserList({ users }: IUserListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:p-4">
      {users.map(user => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
}