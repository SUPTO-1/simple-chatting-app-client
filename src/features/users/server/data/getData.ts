import axios from "axios"
import { IUser } from "../../types/user.type";

export const getAllUsers = async ()=>{
    try{
        const response = await axios.get(`${process.env.Backend_URL}/users`);
    return response.data;
    } catch(error)
    {
        console.log("Error fetching Users",error);
        throw error;
    }
};


export const getUserById = async(id:string):Promise<IUser>=>{
    console.log(id);
    try{
       const  response = await axios.get(`${process.env.Backend_URL}/users/${id}`);
        return response.data.data;
    }
    catch(error)
    {
        console.log("Error fetching Users",error);
        throw error;
    }
}