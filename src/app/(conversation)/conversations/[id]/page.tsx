// import ReusableBreadcrumb from "@/components/shared/BreadCrumb";
// import ConversationCard from "@/features/conversations/components/ConversationCard";
// import MessagePanel from "@/features/conversations/components/MessagePanel";
// import { getUserConversations } from "@/features/conversations/server/data/getData";
// import { IUser } from "@/features/users/types/user.type";

// export default async function ConversationsPage() {
//   const userId = "68b149dc61b03452ce1e208e";
//   const conversations = await getUserConversations(userId);
//   const firstConversationId = conversations[0]._id;

//   const breadCrumbItems = [
//     { label: "User", href: "/users" },
//     {
//       label: "Conversation",
//     },
//   ];

//   return (
//     <>
//       <ReusableBreadcrumb items={breadCrumbItems} />
//       <div className="flex h-screen bg-white">
//         {/* Conversations Panel - 2/5 width */}
//         <div className="w-2/5 p-4 overflow-y-auto border-r border-gray-200">
//           {conversations.map((conversation) => {
//             const oppositeUser = conversation.participants.find(
//               (participant: IUser) => participant._id !== userId
//             ) as IUser;

//             return (
//               <ConversationCard
//                 key={conversation._id}
//                 oppositeUser={oppositeUser}
//               />
//             );
//           })}
//         </div>
//         {/* Message Panel - 3/5 width (Placeholder) */}
//         {firstConversationId ? (
//           <MessagePanel firstConversationId={firstConversationId} ></MessagePanel>
//         ) : (
//           <div className="w-3/5 p-4 flex items-center justify-center">
//             <p className="text-gray-500">Message panel placeholder</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
import ReusableBreadcrumb from "@/components/shared/BreadCrumb";
import ConversationCard from "@/features/conversations/components/ConversationCard";
import { getUserConversations } from "@/features/conversations/server/data/getData";
import { IUser } from "@/features/users/types/user.type";
import { redirect } from "next/navigation";

export default async function ConversationsPage() {
  const userId = "68b149dc61b03452ce1e208e";
  console.log(userId);
  const conversations = await getUserConversations(userId);

  if (!conversations || conversations.length === 0) {
    return (
      <div className="p-4">
        <ReusableBreadcrumb items={[{ label: "User", href: "/users" }, { label: "Conversation" }]} />
        <p className="text-gray-500">No conversations found.</p>
      </div>
    );
  }

  // Optionally, redirect to the first conversation
  const firstConversationId = "68b14e0461b03452ce1e2204"
  // Uncomment the following line if you want to auto-redirect to the first conversation
  redirect(`/conversations/${userId}/${firstConversationId}`);

  const breadCrumbItems = [
    { label: "User", href: "/users" },
    { label: "Conversation" },
  ];

  return (
    <>
      <ReusableBreadcrumb items={breadCrumbItems} />
      <div className="flex h-screen bg-white">
        {/* Conversations Panel - 2/5 width */}
        <div className="w-2/5 p-4 overflow-y-auto border-r border-gray-200">
          {conversations.map((conversation) => {
            const oppositeUser = conversation.participants.find(
              (participant: IUser) => participant._id !== userId
            ) as IUser;

            return (
              <ConversationCard
                key={conversation._id}
                oppositeUser={oppositeUser}
              />
            );
          })}
        </div>
        {/* Message Panel - 3/5 width */}
        <div className="w-3/5 p-4 flex items-center justify-center">
          <p className="text-gray-500">Select a conversation to view messages</p>
        </div>
      </div>
    </>
  );
}