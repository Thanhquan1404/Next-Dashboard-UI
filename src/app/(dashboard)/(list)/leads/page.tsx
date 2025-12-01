"use client";
import { statusOptions, companyOptions } from "@/lib/data.leads";
import { useState } from "react";
import LeadsPageHeader from "./LeadsPageHeader";
import { leadType } from "@/lib/data.leads";
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
  const { leadItemsInStage, updateLeadStage, addingNewLead, leadStage } = useLeadStageColumn();

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
  const handleAddingNewLead = (newLead: leadType, targetColumn: string) => {
    addingNewLead(newLead, targetColumn);
    showNotification("Successfully add a new lead");
  }

  // LEAD DETAIL ID SELECTED
  const { selectedLeadId, removeSelectedLeadDetail } = useLeadDetailSelect();

  return (
    <div className={`flex flex-col bg-gray-50 ${selectedLeadId && "h-full"}`}>
      {
        selectedLeadId ?
          // LEAD DETAIL WINDOW 
          <>
            <LeadDetailWindow />
          </>
          :
          // LEAD KANBAN 
          <>
            <LeadsPageHeader
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />

            <div className="flex gap-2 overflow-x-auto p-2">
              {leadStage.map((leadStage) => (
                <LeadStageColumn
                  handleAddingNewLead={handleAddingNewLead}
                  dropEvent={dropEvent}
                  dragOverEvent={dragOverEvent}
                  dragStartEvent={dragStartEvent}
                  key={leadStage.status}
                  leadItems={leadItemsInStage[leadStage.status]}
                  leadStage={leadStage.status}
                  leadColor={leadStage.color}
                />
              ))}
            </div>
          </>
      }
    </div>
  );
};

export default Page;
