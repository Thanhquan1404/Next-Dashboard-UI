"use client";
import SelectorComponent from "@/components/SelectorComponent";
import { statusOptions, companyOptions } from "@/lib/data.leads";
import { useState } from "react";
import LeadsPageHeader from "./LeadsPageHeader";

const Page = () => {
  // OPTIONS STATE
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const [selectedCompany, setSelectedCompany] = useState(companyOptions[0]);
  return (
    <div className="w-full h-full bg-white pattern-bg-blue-50">
      {/* HEADER */}
      <LeadsPageHeader 
        selectedStatus={selectedStatus} 
        setSelectedStatus={setSelectedStatus} 
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
    </div>
  );
};

export default Page;