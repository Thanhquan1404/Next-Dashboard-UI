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

/* ===============================
   Animation Variants
================================ */
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

/* ===============================
   Profile Page
================================ */
const Page = () => {
  return (
    <div className="min-h-screen bg-[#f4f7ff] text-gray-900">
      {/* ================= HEADER ================= */}
      <header className="bg-white/80 backdrop-blur-md shadow-md flex">
        {/* KHỐI NÚT QUAY LẠI ĐÃ HOÀN THÀNH */}
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
        {/* HẾT KHỐI NÚT QUAY LẠI */}

        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-[#1e88e5]">
            Vera CRM
          </h1>

          {/* TODO: replace with real logout handler */}
          <button className="flex items-center text-gray-600 hover:text-[#1e88e5] transition">
            <LogOut className="w-5 h-5 mr-1" />
            Logout
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* ================= LEFT: PROFILE CARD ================= */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            {/* TODO: replace avatar src */}
            <Image
              src="https://i.pravatar.cc/150"
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full mx-auto border-4 border-[#1e88e5]/30"
            />

            {/* TODO: replace user name */}
            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              Nguyen Thanh Quan
            </h2>

            {/* TODO: replace role */}
            <p className="text-[#1e88e5] font-medium mt-1">
              CRM Administrator
            </p>

            {/* TODO: replace short bio */}
            <p className="text-gray-600 text-sm mt-4">
              Passionate about building scalable CRM systems
              and improving customer experience.
            </p>

            <button className="mt-6 inline-flex items-center justify-center gap-2 bg-[#1e88e5] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1565c0] transition shadow-md">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </motion.div>

          {/* ================= RIGHT: DETAILS ================= */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            {/* ===== Personal Information ===== */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-[#1e88e5]" />
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                {/* TODO: replace email */}
                <InfoItem icon={Mail} label="Email" value="quan.nguyen@vera-crm.com" />
                {/* TODO: replace phone */}
                <InfoItem icon={Phone} label="Phone" value="+84 703 435 034" />
                {/* TODO: replace address */}
                <InfoItem icon={MapPin} label="Address" value="Ho Chi Minh City, Vietnam" />
                {/* TODO: replace DOB */}
                <InfoItem icon={Calendar} label="Date of Birth" value="12 Aug 2003" />
              </div>
            </div>

            {/* ===== Account Information ===== */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#1e88e5]" />
                Account Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                {/* TODO: dynamic username */}
                <InfoItem label="Username" value="quan.admin" />
                {/* TODO: dynamic role */}
                <InfoItem label="Role" value="Administrator" />
                {/* TODO: dynamic status */}
                <InfoItem label="Account Status" value="Active" />
                {/* TODO: dynamic created date */}
                <InfoItem label="Created At" value="15 Apr 2024" />
              </div>
            </div>

            {/* ===== Statistics ===== */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* TODO: replace stats */}
              <StatCard title="Total Leads" value="1,248" />
              <StatCard title="Deals Closed" value="312" />
              <StatCard title="Revenue Generated" value="$128,400" />
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

const StatCard = ({ title, value }: any) => (
  <div className="bg-gradient-to-br from-[#e3f2fd] to-white p-6 rounded-xl shadow-md border border-[#1e88e5]/20">
    <p className="text-sm text-gray-600">{title}</p>
    <p className="text-2xl font-extrabold text-[#1565c0] mt-2">
      {value}
    </p>
  </div>
);

export default Page;
