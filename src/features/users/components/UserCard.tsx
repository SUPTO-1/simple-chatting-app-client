"use client";

import { IUser } from "../types/user.type";
import { 
  MessageSquare, 
  Eye, 
  MapPin, 
  Droplets, 
  Mail,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type IUserCardProps = {
  user: IUser;
};

export default function UserCard({ user }: IUserCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col h-full">
      {/* Card Header with Profile Background */}
      <div className="h-20 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
        <div className="absolute -bottom-12 left-4 md:left-6">
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
              {user.profilePhoto ? (
                <Image
                  src={user.profilePhoto} 
                  height={200}
                  width={200}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-xl md:text-2xl font-bold">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            {user.isActive && (
              <div className="absolute bottom-0 right-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 border-2 border-white"></div>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-12 md:pt-14 p-4 md:p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-1">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500 flex items-center mt-1 text-sm">
            <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            <span className="truncate">{user.email}</span>
          </p>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
          {user.bloodGroup && (
            <div className="flex items-center text-xs md:text-sm text-gray-600">
              <Droplets className="w-3 h-3 md:w-4 md:h-4 mr-1 text-red-500" />
              {user.bloodGroup}
            </div>
          )}
          
          {user.address?.city && (
            <div className="flex items-center text-xs md:text-sm text-gray-600">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-500" />
              <span className="truncate">{user.address.city}</span>
            </div>
          )}
        </div>

        {/* Action Buttons - Stack on small screens, row on medium+ */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-auto">
          <Link href={`/users/${user._id}`} className="w-full sm:flex-1">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center py-2 text-xs md:text-sm border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Details
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="w-full sm:flex-1 flex items-center justify-center py-2 text-xs md:text-sm border-green-500 text-green-600 hover:bg-green-50"
          >
            <MessageSquare className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}