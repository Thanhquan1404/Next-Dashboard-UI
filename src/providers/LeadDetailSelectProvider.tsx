"use client";

import { leadActivitySequences, LeadDetailActivitySequenceTimeline, LeadDetailActivityTimeline, leadDetailsSample, LeadDetailType } from "@/lib/data.leads";
import { createContext, useContext, useState } from "react";
import { useNotification } from "./NotificationProvider";
import { useLeadStageColumn } from "./LeadStageColumnProvider";

interface LeadDetailSelectContextType {
  selectedLeadId: string | null;
  leadDetailInfo: LeadDetailType | null;
  leadSequenceActivity: LeadDetailActivityTimeline[] | null;
  selectLeadDetail: (leadID: string) => void;
  removeSelectedLeadDetail: () => void;
  addingNewLeadActivity: (newLead: LeadDetailActivityTimeline) => void,
  updateALeadDetail: (newLeadDetail: LeadDetailType) => void,
}

const LeadDetailSelectContext = createContext<LeadDetailSelectContextType | null>(null);

export const useLeadDetailSelect = () => {
  const context = useContext(LeadDetailSelectContext);
  if (!context) {
    throw new Error("useLeadDetailSelect must be used within LeadDetailSelectProvider");
  }
  return context;
};

interface LeadDetailSelectProviderProps {
  children: React.ReactNode;
}

export const LeadDetailSelectProvider = ({ children }: LeadDetailSelectProviderProps) => {
  const { leadStage, leadItemsInStage} = useLeadStageColumn();
  const [listLeadDetail, setListLeadDetail] = useState<Record<string, LeadDetailType>>(leadDetailsSample);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [leadDetailInfo, setLeadDetailInfo] = useState<LeadDetailType | null>(null);
  const [leadSequenceActivity, setLeadSequenceActivity] = useState<LeadDetailActivityTimeline[] | null>(null);
  const { showNotification } = useNotification();
  // HANDLE CLICK ON A LEAD DETAIL
  const selectLeadDetail = (leadID: string) => {
    // RETRIEVE LEAD DETAIL INFOMATION
    const selectedLeadDetailInfo: LeadDetailType = listLeadDetail[leadID];
    // RETRIEVE LEAD DETAIL ACTIVITY SEQUENCE
    const sequenceActivity: LeadDetailActivityTimeline[] = leadActivitySequences[leadID] ? leadActivitySequences[leadID].sequenceActivities : [];
    setLeadSequenceActivity(sequenceActivity);
    setLeadDetailInfo(selectedLeadDetailInfo)
    setSelectedLeadId(leadID);
  };

  //HANDLE CLICK OUT LEAD DETAIL WINDOW
  const removeSelectedLeadDetail = () => {
    setSelectedLeadId(null);
    setLeadDetailInfo(null);
    setLeadSequenceActivity(null);
  };

  // HANDLE ADDING A NEW LEAD ACTIVITY 
  const addingNewLeadActivity = (newLeadActivity: LeadDetailActivityTimeline) => {
    setLeadSequenceActivity((prev) => [
      newLeadActivity,
      ...(prev || [])
    ]
    )
    showNotification("Successfully adding a new lead activity");
  }

  // HANDLE UPDATE A LEAD DETAIL 
  const updateALeadDetail = (newLeadDetail: LeadDetailType) => {
    setListLeadDetail(prev => {
      const updated = { ...prev };             
      updated[newLeadDetail.leadID] = newLeadDetail;
      return updated;                           
    });

    setLeadDetailInfo(newLeadDetail);

    showNotification("Update lead information successfully");
  };


  const value: LeadDetailSelectContextType = {
    selectedLeadId,
    leadDetailInfo,
    leadSequenceActivity,
    selectLeadDetail,
    removeSelectedLeadDetail,
    addingNewLeadActivity,
    updateALeadDetail,
  };

  return (
    <LeadDetailSelectContext.Provider value={value}>
      {children}
    </LeadDetailSelectContext.Provider>
  );
};