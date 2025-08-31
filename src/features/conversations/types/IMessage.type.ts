export interface IMessage {
    _id:string;
    conversationId:string;
    senderId:string;
    content:string;
    attachments?:string[];
    createdAt:Date;
    updatedAt:Date;

}