import Image from "next/image";
import { IConversation } from "../types/Iconversation.type";
import { IUser } from "@/features/users/types/user.type";

interface ConversationCardProps {
  conversation: IConversation;
  oppositeUser: IUser;
}

const ConversationCard: React.FC<ConversationCardProps> = ({ conversation, oppositeUser }) => {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors mb-4">
      <div className="flex items-center">
        <Image
        height={200}
        width={200}
          src={oppositeUser.profilePhoto || "https://via.placeholder.com/50"}
          alt={`${oppositeUser.firstName} ${oppositeUser.lastName}`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">
            {oppositeUser.firstName} {oppositeUser.lastName}
          </h3>
          <p className="text-sm text-gray-600">
            Blood Group: {oppositeUser.bloodGroup || "Not specified"}
          </p>
          <p className="text-sm text-gray-600">
            Last Login: {oppositeUser.lastLogin ? new Date(oppositeUser.lastLogin).toLocaleString() : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;