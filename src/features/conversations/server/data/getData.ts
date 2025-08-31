import axios from "axios";
import { IConversation } from "../../types/Iconversation.type";
import { error } from "console";
import { IMessage } from "../../types/IMessage.type";

export const getUserConversations = async(userId:string):Promise<IConversation[]>=>{
    try{
        const response = await axios.get(`${process.env.Backend_URL}/conversations/${userId}`)
        return response.data.data;
    }
    catch{
        console.log("There is some error to fetching Conversations");
        throw error;
    }
}

export const getConversationMessage = async(conversationId:string):Promise<IMessage[]>=>{
    try{
        const response = await axios.get(`${process.env.Backend_URL}/conversations/message/${conversationId}`)
        return response.data.data;
    }
    catch{
        console.log("There is some Error");
        throw error;
    }
}