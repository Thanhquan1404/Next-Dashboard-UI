"use client";
import { statusOptions, companyOptions, LeadStage } from "@/lib/data.leads";
import { useEffect, useState } from "react";
import LeadsPageHeader from "./LeadsPageHeader";
import LeadsNewStatusColumn from "./LeadsNewStatusColumn";
import LeadsOpenStatusColumn from "./LeadsOpenStatusColumn";
import LeadsInProgressStatusColumn from "./LeadsInProgressStatusColumn";
import LeadsOpenDealStatusColumn from "./LeadsOpenDealStatusColumn";
import {
  // leadsInNewStatusSamples,
  // leadsInOpenStatusSample,
  // leadsInProgressStatusSample,
  // leadsOpenDealStatusSample,
  leadType,
  ColumnKey,
  // LeadStage,
  // LeadItems
} from "@/lib/data.leads";
import { useNotification } from "@/providers/NotificationProvider";
import LeadDetailWindow from "./LeadDetailWindow";
import { useLeadDetailSelect } from "@/providers/LeadDetailSelectProvider";
import { useLeadStageColumn } from "@/providers/LeadStageColumnProvider";
import LeadStageColumn from "./LeadStageColumn";

const Page = () => {
  // INITIALIZE NOTIFICATION PROVIDER 
  const { showNotification } = useNotification();
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const [selectedCompany, setSelectedCompany] = useState(companyOptions[0]);

  const [leadDraggingID, setLeadDraggingID] = useState<string>("");

  // LEAD ITEMS IN STAGE 
  const { leadItemsInStage, updateLeadStage } = useLeadStageColumn();

  // DRAG START
  const dragStartEvent = (
    e: React.DragEvent<HTMLDivElement>,
    leadID: string
  ) => {
    setLeadDraggingID(leadID);
  };

  // DRAG OVER
  const dragOverEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // DROP
  const dropEvent = (statusColumnName: string) => {
    updateLeadStage(leadDraggingID, statusColumnName);
    showNotification("Drag successfully");
  };

  // HANDLE ADDING NEW LEAD 
  const handleAddingNewLead = (newLead: leadType) => {
    let targetColumn: ColumnKey;

    switch (newLead.status) {
      case "New":
        targetColumn = "newStatus";
        break;
      case "Open":
        targetColumn = "openStatus";
        break;
      case "In Progress":
        targetColumn = "inProgressingStatus";
        break;
      case "Open Deal":
        targetColumn = "openDealStatus";
        break;
      default:
        targetColumn = "newStatus";
    }

    // setLeadItems((prev) => ({
    //   ...prev,
    //   [targetColumn]: [...prev[targetColumn], newLead],
    // }));

    showNotification("Successfully add a new lead");
  }

  // LEAD DETAIL ID SELECTED
  const { selectedLeadId } = useLeadDetailSelect();

  return (
    <div className="flex flex-col bg-gray-50">
      <LeadsPageHeader
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />

      <div className="flex gap-2 overflow-x-auto p-2">
        {LeadStage.map((leadStage) => (
          <LeadStageColumn
            dropEvent={dropEvent}
            dragOverEvent={dragOverEvent}
            dragStartEvent={dragStartEvent}
            key={leadStage}
            leadItems={leadItemsInStage[leadStage]}
            leadStage={leadStage}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
