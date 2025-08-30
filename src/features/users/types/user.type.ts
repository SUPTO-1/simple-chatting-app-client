export interface IAddress{
    street?: string;
    city?: string;
    state?:string;
    country?: string;
    zip?: string;
}
export interface IUser{
    _id:string;
    userId: string;
    firstName: string;
    lastName:string;
    email:string;
    password:string;
    mobileNumber?: string;
    profilePhoto?: string;
    bio?: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    address?:IAddress;
    gender: "male" | "female" | "other";
    isActive?: boolean;
    role?: "user" | "admin";
    lastLogin?: Date;
    createdAt?: Date;
    updatedAt?: Date;

}