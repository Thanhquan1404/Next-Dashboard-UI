"use client";
import { statusOptions, companyOptions } from "@/lib/data.leads";
import { useState } from "react";
import LeadsPageHeader from "./LeadsPageHeader";
import LeadsNewStatusColumn from "./LeadsNewStatusColumn";

const Page = () => {
  // OPTIONS STATE
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const [selectedCompany, setSelectedCompany] = useState(companyOptions[0]);
  return (
    <div className="w-full flex flex-col h-screen gap-4 pattern-bg-blue-50">
      {/* HEADER */}
      <div>
        <LeadsPageHeader
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      </div>
      {/* LEADS STATUS KANBAN BOARD  */}
      <div className="w-full flex-1">
        {/* LEADS WITH NEW STATUS  */}
        <LeadsNewStatusColumn />
      </div>
    </div>
  );
};

export default Page;