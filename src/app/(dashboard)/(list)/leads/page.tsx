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
import LoadingOverlay from "@/components/LoadingOverlay";

const Page = () => {
  // INITIALIZE NOTIFICATION PROVIDER 
  const { showNotification } = useNotification();
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const [selectedCompany, setSelectedCompany] = useState(companyOptions[0]);

  const [leadDraggingID, setLeadDraggingID] = useState<string>("");

  // LEAD ITEMS IN STAGE 
  const { leadItemsInStage, updateLeadStage, addingNewLead, leadStage, loading } = useLeadStageColumn();

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

  if (loading){
    return (
      <LoadingOverlay isLoading={true}/>
    )
  }

  return (
    <div className="flex flex-col bg-gray-50 h-screen"> 
      {selectedLeadId ? (
        <LeadDetailWindow />
      ) : (
        
        <>
          <LeadsPageHeader
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
          />

          {/* KANBAN CONTAINER */}
          <div className="flex-1 bg-gray-100"> 
            <div
              className="h-full overflow-x-auto overflow-y-hidden pb-4"  
              style={{ scrollbarGutter: "stable" }} 
            >
              <div className="flex gap-4 p-4 h-full items-start"> 
                {leadStage.map((stage: any) => (
                  <LeadStageColumn
                    key={stage.status}
                    leadStage={stage.status}
                    leadColor={stage.color}
                    leadItems={leadItemsInStage[stage.status]}
                    dragStartEvent={dragStartEvent}
                    dropEvent={dropEvent}
                    dragOverEvent={dragOverEvent}
                    handleAddingNewLead={handleAddingNewLead}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
