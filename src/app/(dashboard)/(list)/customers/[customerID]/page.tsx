"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, Mail, Phone, Building2, Calendar, Star, User, Clock, Edit2, Trash2 } from 'lucide-react';
import Image from 'next/image';
import useGetCustomerDetail from '@/fetching/customer/getCustomerDetail';
import { useParams } from 'next/navigation';
import PageLoader from '@/components/PageLoader';
import { useRouter } from 'next/navigation';

const getInitials = (name: string) => {
  if (!name) return "?";
  return name
    .split(" ")
    .map(w => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const formatDate = (date: string) => {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const CustomerDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [customer, setCustomer] = useState<any>();
  const params = useParams();
  const customerID = params.customerID as string;
  const { loading: getCustomerDetailLoading, getCustomerDetail } = useGetCustomerDetail();
  const router = useRouter();


  useEffect(() => {
    if (!customerID) return;

    const fetchData = async () => {
      try {
        const result = await getCustomerDetail(customerID);
        setCustomer(result.data)
      } catch (error) {
        console.error("Failed to fetch customer detail:", error);
      }
    };

    fetchData();
  }, []);

  if(!customer){
    return(
      <PageLoader />
    )
  }



  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header with Back Button */}
      <div className="mb-6 flex items-center justify-between">
        <button className="flex items-center text-gray-600 hover:text-gray-900 transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium" onClick={() => { router.push("/customers")}}>Back to Customers</span>
        </button>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </button>
          <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                {customer.avatarUrl ? (
                  <Image
                    width={20}
                    height={20}
                    src={customer.avatarUrl}
                    alt={customer.fullName}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    {getInitials(customer.fullName)}
                  </div>
                )}
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">{customer.fullName}</h1>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < customer.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({customer.rating}/5)</span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Active
              </span>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm font-medium text-gray-900">{customer.email}</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone Number</p>
                  <p className="text-sm font-medium text-gray-900">{customer.phoneNumber}</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Building2 className="w-5 h-5 text-purple-600 mr-3" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Company</p>
                  <p className="text-sm font-medium text-gray-900">{customer.company}</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Date of Birth</p>
                  <p className="text-sm font-medium text-gray-900">{formatDate(customer.dateOfBirth)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Customer profile updated</p>
                  <p className="text-xs text-gray-500 mt-1">{formatDate(customer.updatedAt)}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Customer created</p>
                  <p className="text-xs text-gray-500 mt-1">{formatDate(customer.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Notes</h2>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Add notes about this customer..."
            ></textarea>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
              Save Note
            </button>
          </div>
        </div>

        {/* Right Column - Additional Info */}
        <div className="space-y-6">
          {/* Assigned To Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Assigned To</h2>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-lg font-bold">
                {getInitials(`${customer.assignTo.firstName} ${customer.assignTo.lastName}`)}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {customer.assignTo.firstName} {customer.assignTo.lastName}
                </p>
                <p className="text-xs text-gray-500">{customer.assignTo.email}</p>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
              Reassign Customer
            </button>
          </div>

          {/* Customer Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Statistics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Orders</span>
                <span className="text-lg font-bold text-gray-900">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Spent</span>
                <span className="text-lg font-bold text-gray-900">$12,450</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average Order</span>
                <span className="text-lg font-bold text-gray-900">$518</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Last Order</span>
                <span className="text-sm font-medium text-gray-900">2 days ago</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition text-sm font-medium">
                Send Email
              </button>
              <button className="w-full px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition text-sm font-medium">
                Call Customer
              </button>
              <button className="w-full px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition text-sm font-medium">
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Metadata */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Metadata</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Customer ID</p>
                <p className="text-gray-900 font-mono text-xs mt-1">{customer.id}</p>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-xs">Created: {formatDate(customer.createdAt)}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-xs">Updated: {formatDate(customer.updatedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;