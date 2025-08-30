import ReusableBreadcrumb from "@/components/shared/BreadCrumb";
import ConversationCard from "@/features/conversations/components/ConversationCard";
import { getUserConversations } from "@/features/conversations/server/data/getData";
import { IUser } from "@/features/users/types/user.type";

export default async function ConversationsPage() {
  const userId = "68b149dc61b03452ce1e208e";
  const conversations = await getUserConversations(userId);

  const breadCrumbItems =[
    {label:"User", href:"/users"},
    {
      label:"Conversation"
    }
  ]

  return (
    <>
    <ReusableBreadcrumb items={breadCrumbItems}/>
    <div className="flex h-screen bg-white">
      {/* Conversations Panel - 2/5 width */}
      <div className="w-2/5 p-4 overflow-y-auto border-r border-gray-200">
        {conversations.map((conversation) => {
          // Find the opposite user (not the current user)
          const oppositeUser = conversation.participants.find(
            (participant: IUser) => participant._id !== userId
          ) as IUser;

          return (
            <ConversationCard
              key={conversation._id}
              conversation={conversation}
              oppositeUser={oppositeUser}
            />
          );
        })}
      </div>
      {/* Message Panel - 3/5 width (Placeholder) */}
      <div className="w-3/5 p-4 flex items-center justify-center">
        <p className="text-gray-500">Message panel placeholder</p>
      </div>
    </div>
    </>
  );
}