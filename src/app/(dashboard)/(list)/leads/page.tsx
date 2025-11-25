"use client";
import { statusOptions, companyOptions } from "@/lib/data.leads";
import { useState } from "react";
import LeadsPageHeader from "./LeadsPageHeader";
import LeadsNewStatusColumn from "./LeadsNewStatusColumn";
import LeadsOpenStatusColumn from "./LeadsOpenStatusColumn";
import LeadsInProgressStatusColumn from "./LeadsInProgressStatusColumn";
import LeadsOpenDealStatusColumn from "./LeadsOpenDealStatusColumn";
import {
  leadsInNewStatusSamples,
  leadsInOpenStatusSample,
  leadsInProgressStatusSample,
  leadsOpenDealStatusSample,
  leadType,
  ColumnKey,
} from "@/lib/data.leads";
import { useNotification } from "@/providers/NotificationProvider";

const Page = () => {
  // INITIALIZE NOTIFICATION PROVIDER 
  const { showNotification } = useNotification();
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const [selectedCompany, setSelectedCompany] = useState(companyOptions[0]);

  const [leadDraggingID, setLeadDraggingID] = useState<string>("");

  type ColumnState = Record<ColumnKey, leadType[]>;
  const [leadItems, setLeadItems] = useState<ColumnState>({
    newStatus: leadsInNewStatusSamples,
    openStatus: leadsInOpenStatusSample,
    inProgressingStatus: leadsInProgressStatusSample,
    openDealStatus: leadsOpenDealStatusSample,
  });

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
  const dropEvent = (statusColumnName: ColumnKey) => {
    setLeadItems((prev) => {
      const allLeads = [
        ...prev.newStatus,
        ...prev.openStatus,
        ...prev.inProgressingStatus,
        ...prev.openDealStatus,
      ];

      let draggingLead = allLeads.find(
        (leadItem) => leadItem.leadID === leadDraggingID
      );
      if (!draggingLead) return prev;

      const newState: ColumnState = {
        newStatus: prev.newStatus.filter((item) => item.leadID !== leadDraggingID),
        openStatus: prev.openStatus.filter((item) => item.leadID !== leadDraggingID),
        inProgressingStatus: prev.inProgressingStatus.filter((item) => item.leadID !== leadDraggingID),
        openDealStatus: prev.openDealStatus.filter((item) => item.leadID !== leadDraggingID),
      };

      switch (statusColumnName) {
        case "newStatus": draggingLead.status = "New"; break;
        case "openStatus": draggingLead.status = "Open"; break;
        case "inProgressingStatus": draggingLead.status = "In Progress"; break;
        case "openDealStatus": draggingLead.status = "Open Deal"; break;
      }


      newState[statusColumnName].push(draggingLead);
      return newState;
    });

    setLeadDraggingID("");
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

    setLeadItems((prev) => ({
      ...prev,
      [targetColumn]: [...prev[targetColumn], newLead],
    }));

    showNotification("Successfully add a new lead");
  }

  return (
    <div className="w-full flex flex-col h-screen gap-4 pattern-bg-blue-50">
      <LeadsPageHeader
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />

      <div className="w-full flex-1 flex gap-4">
        <LeadsNewStatusColumn
          leadItems={leadItems.newStatus}
          dragStartEvent={dragStartEvent}
          dropEvent={dropEvent}
          dragOverEvent={dragOverEvent}
          handleAddingNewLead={handleAddingNewLead}
        />
        <LeadsOpenStatusColumn
          leadItems={leadItems.openStatus}
          dragStartEvent={dragStartEvent}
          dropEvent={dropEvent}
          dragOverEvent={dragOverEvent}
          handleAddingNewLead={handleAddingNewLead}
        />
        <LeadsInProgressStatusColumn
          leadItems={leadItems.inProgressingStatus}
          dragStartEvent={dragStartEvent}
          dropEvent={dropEvent}
          dragOverEvent={dragOverEvent}
          handleAddingNewLead={handleAddingNewLead}
        />
        <LeadsOpenDealStatusColumn
          leadItems={leadItems.openDealStatus}
          dragStartEvent={dragStartEvent}
          dropEvent={dropEvent}
          dragOverEvent={dragOverEvent}
          handleAddingNewLead={handleAddingNewLead}
        />
      </div>
    </div>
  );
};

export default Page;
