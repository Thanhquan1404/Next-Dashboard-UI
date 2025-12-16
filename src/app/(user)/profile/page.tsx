"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Shield,
  Edit,
  LogOut
} from "lucide-react";
import Link from "next/link";
import useGetInfo from "@/fetching/profile/getInfo";
import { useCallback, useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import { GetInfoResponse } from "@/lib/data.authentication";
import { useRouter } from "next/navigation";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


const Page = () => {
  const {loading: getInfoLoading, getInfo} = useGetInfo();
  const [userInfo, setUserInfo] = useState<GetInfoResponse | null>(null);
  const router = useRouter();

  const getUserInfo = useCallback( async() => {
    try{
      const info = await getInfo();
      setUserInfo(info);
    }catch{
      router.push("/");
    }
  }, []);

  useEffect( () => {
    getUserInfo()
  }, []);

  if (getInfoLoading && !userInfo){
    return <PageLoader />
  }

  return (
    <div className="min-h-screen bg-[#f4f7ff] text-gray-900">
      {/* ================= HEADER ================= */}
      <header className="bg-white/80 backdrop-blur-md shadow-md flex">
        <div className="flex items-center pl-4">
          <Link
            href="/dashboard"
            className="p-2 rounded-full hover:bg-gray-100 transition duration-150 ease-in-out text-gray-600 hover:text-[#1e88e5]"
            aria-label="Go to Dashboard"
          >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
          </Link>
        </div>

        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-[#1e88e5]">
            Vera CRM
          </h1>

          <button className="flex items-center text-gray-600 hover:text-[#1e88e5] transition">
            <LogOut className="w-5 h-5 mr-1" />
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <Image
              src={`${userInfo?.avatarUrl || "/profile.png"}`}
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full mx-auto border-4 border-[#1e88e5]/30"
            />

            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              {userInfo?.lastName} {userInfo?.firstName}
            </h2>

            {/* TODO: replace role */}
            <p className="text-[#1e88e5] font-medium mt-1">
              CRM Administrator
            </p>

            <p className="text-gray-600 text-sm mt-4">
              Passionate about building scalable CRM systems
              and improving customer experience.
            </p>

            <button className="mt-6 inline-flex items-center justify-center gap-2 bg-[#1e88e5] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1565c0] transition shadow-md">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-[#1e88e5]" />
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <InfoItem icon={Mail} label="Email" value={userInfo?.email || "update soon"} />
                <InfoItem icon={Phone} label="Phone" value={userInfo?.phoneNumber || "update soon"} />
                <InfoItem icon={MapPin} label="Address" value={userInfo?.address || "update soon"} />
                <InfoItem icon={Calendar} label="Date of Birth" value={"update soon"} />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#1e88e5]" />
                Account Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <InfoItem label="Username" value={userInfo?.username} />
                <InfoItem label="Role" value="Administrator" />
                <InfoItem label="Account Status" value="Active" />
                <InfoItem label="Created At" value={userInfo?.createdAt} />
              </div>
            </div>

          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};


const InfoItem = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-start gap-3">
    {Icon && <Icon className="w-5 h-5 text-[#1e88e5] mt-0.5" />}
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

export default Page;
