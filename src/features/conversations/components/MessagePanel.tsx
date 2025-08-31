// features/conversations/components/MessagePanel.tsx
import { getConversationMessage } from "../server/data/getData";
import { IMessage } from "../types/IMessage.type";

interface MessagePanelProps {
  firstConversationId: string;
}

export default async function MessagePanel({ firstConversationId }: MessagePanelProps) {
  console.log("MessagePanel conversationId:", firstConversationId);
  const messages = await getConversationMessage(firstConversationId);
  console.log("Messages:", messages);

  // Hardcoded current user ID for styling (replace with auth logic)
  const currentUserId = "68b149dc61b03452ce1e208e"; // Replace with actual user ID from auth context

  return (
    <div className="w-3/5 p-4 overflow-y-auto bg-gray-50">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">No messages in this conversation.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((message: IMessage) => (
            <div
              key={message._id}
              className={`flex ${
                message.senderId === currentUserId ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-lg shadow-sm ${
                  message.senderId === currentUserId
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <p className="text-sm font-semibold">
                  {message.senderId === currentUserId ? "You" : "Other User"}
                </p>
                <p className="text-sm">{message.content}</p>
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2">
                    {message.attachments.map((attachment, index) => (
                      <a
                        key={index}
                        href={attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs underline ${
                          message.senderId === currentUserId
                            ? "text-blue-200"
                            : "text-blue-600"
                        }`}
                      >
                        Attachment {index + 1}
                      </a>
                    ))}
                  </div>
                )}
                <p
                  className={`text-xs mt-1 ${
                    message.senderId === currentUserId
                      ? "text-blue-200"
                      : "text-gray-400"
                  }`}
                >
                  {new Date(message.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}