"use client"
import React, { useEffect, useState } from 'react';
import { Search, Users, UserPlus, User } from 'lucide-react';
import PageNavigationComponent from '@/components/PageNavigationComponent';
import Image  from 'next/image';
import { useUser } from '@/providers/UserProvider';
import PageLoader from '@/components/PageLoader';
import { useRouter } from 'next/navigation';


const UserManagement = () => {
  // USER PROVIDER
  const { users, getListUserLoading, getUsers } = useUser();

  const router = useRouter();

  // STATE
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  if (getListUserLoading){
    return (
      <PageLoader />
    )
  }

  // Filter users based on search term
  const filteredUsers = users ? users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between h-40">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-2">Total Users</p>
            <p className="text-4xl font-bold text-gray-900">{users?.length || 0}</p>
            <p className="text-green-600 text-sm mt-2">Active users</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-full">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* New Users This Month */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between h-40">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-2">New This Month</p>
            <p className="text-4xl font-bold text-gray-900">
              {users?.filter(user => {
                const createdAt = new Date(user.createdAt);
                const now = new Date();
                return createdAt.getMonth() === now.getMonth() && createdAt.getFullYear() === now.getFullYear();
              }).length || 0}
            </p>
            <p className="text-green-600 text-sm mt-2">Recently joined</p>
          </div>
          <div className="bg-green-100 p-4 rounded-full">
            <UserPlus className="w-8 h-8 text-green-600" />
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between h-40">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-2">Active Users</p>
            <p className="text-4xl font-bold text-gray-900">{users?.length || 0}</p>
            <p className="text-blue-600 text-sm mt-2">Currently active</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-full">
            <User className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, email, or username..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Image
                        width={10}
                        height={10}
                        src={user.avatarUrl || '/avatar.png'}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.firstName} {user.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.username}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.phoneNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;