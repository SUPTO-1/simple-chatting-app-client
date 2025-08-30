export interface IMessage {
    conversationId:string;
    senderId:string;
    content:string;
    attachments?:string[];
    createdAt:Date;
    updatedAt:Date;

}