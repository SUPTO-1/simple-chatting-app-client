import { IUser } from "@/features/users/types/user.type";

export interface IConversation{
    _id:string,
    participants:IUser[],
    isGroup:boolean;
    groupName?:string;
    groupPhoto?:string;
    createdAt:Date;
    updatedAt?: Date;
}