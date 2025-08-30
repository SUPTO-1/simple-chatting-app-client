"use client";

import { IUser } from "../types/user.type";
import {
  MapPin,
  Droplets,
  Mail,
  Phone,
  Calendar,
  Shield,
  Globe,
  Heart,
  Star,
  MessageSquare,
  User
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type IViewUserDetailsProps = {
  user: IUser;
};

export default function ViewUserDetails({ user }: IViewUserDetailsProps) {
  // Format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return "Not available";
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Main profile card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Profile header with cover photo */}
          <div className="h-40 bg-gradient-to-r from-indigo-600 to-blue-500 relative">
            <div className="absolute inset-0 bg-black/5"></div>
            
            {/* Profile image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3">
              <div className="relative">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
                  {user.profilePhoto ? (
                    <Image
                      src={user.profilePhoto}
                      height={180}
                      width={180}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                      <User className="text-white w-10 h-10 md:w-14 md:h-14" />
                    </div>
                  )}
                </div>
                {user.isActive && (
                  <div className="absolute bottom-1 right-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-400 border-2 border-white shadow-sm"></div>
                )}
              </div>
            </div>
          </div>

          {/* Profile content */}
          <div className="pt-20 pb-10 px-6 md:px-10">
            {/* Name and basic info */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1.5">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
                {user.bio || "No bio provided"}
              </p>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button 
                  variant="outline" 
                  className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 px-6 py-2.5 text-sm font-medium transition-colors duration-200"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </div>

            {/* Main info grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Personal Information */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-pink-600" />
                  Personal Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                    <Mail className="w-4 h-4 mr-3 text-indigo-600" />
                    <span className="text-gray-700 text-sm">{user.email}</span>
                  </div>
                  {user.mobileNumber && (
                    <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                      <Phone className="w-4 h-4 mr-3 text-green-600" />
                      <span className="text-gray-700 text-sm">{user.mobileNumber}</span>
                    </div>
                  )}
                  {user.bloodGroup && (
                    <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                      <Droplets className="w-4 h-4 mr-3 text-red-600" />
                      <span className="text-gray-700 text-sm">{user.bloodGroup}</span>
                    </div>
                  )}
                  {user.gender && (
                    <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                      <Shield className="w-4 h-4 mr-3 text-purple-600" />
                      <span className="text-gray-700 capitalize text-sm">{user.gender}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Address Information
                </h2>
                {user.address ? (
                  <div className="space-y-3">
                    {user.address.street && (
                      <div className="flex items-start p-2.5 bg-white rounded-md shadow-sm">
                        <MapPin className="w-4 h-4 mr-3 text-indigo-600 mt-0.5" />
                        <span className="text-gray-700 text-sm">{user.address.street}</span>
                      </div>
                    )}
                    {(user.address.city || user.address.state || user.address.country) && (
                      <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                        <Globe className="w-4 h-4 mr-3 text-green-600" />
                        <span className="text-gray-700 text-sm">
                          {[user.address.city, user.address.state, user.address.country].filter(Boolean).join(", ")}
                        </span>
                      </div>
                    )}
                    {user.address.zip && (
                      <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                        <span className="text-gray-700 text-sm ml-7">ZIP: {user.address.zip}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-3 bg-white rounded-md shadow-sm text-center text-gray-500 text-sm">
                    No address information available
                  </div>
                )}
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-600" />
                Account Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                  <Calendar className="w-4 h-4 mr-3 text-indigo-600" />
                  <span className="text-gray-700 text-sm">
                    Joined: {formatDate(user.createdAt)}
                  </span>
                </div>
                <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                  <Calendar className="w-4 h-4 mr-3 text-green-600" />
                  <span className="text-gray-700 text-sm">
                    Last updated: {formatDate(user.updatedAt)}
                  </span>
                </div>
                {user.lastLogin && (
                  <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                    <Calendar className="w-4 h-4 mr-3 text-purple-600" />
                    <span className="text-gray-700 text-sm">
                      Last login: {formatDate(user.lastLogin)}
                    </span>
                  </div>
                )}
                <div className="flex items-center p-2.5 bg-white rounded-md shadow-sm">
                  <Shield className="w-4 h-4 mr-3 text-orange-600" />
                  <span className="text-gray-700 capitalize text-sm">
                    Role: {user.role || "user"}
                  </span>
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-center p-4 bg-indigo-50/50 rounded-lg">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                <div className={`w-2.5 h-2.5 rounded-full mr-2 ${user.isActive ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                {user.isActive ? 'Active' : 'Inactive'} User
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}