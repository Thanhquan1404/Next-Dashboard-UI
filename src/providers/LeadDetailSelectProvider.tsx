"use client";

import { leadActivitySequences, LeadDetailActivitySequenceTimeline, LeadDetailActivityTimeline, leadDetailsSample, LeadDetailType } from "@/lib/data.leads";
import { createContext, useContext, useState } from "react";

interface LeadDetailSelectContextType {
  selectedLeadId: string | null;
  leadDetailInfo: LeadDetailType | null;
  selectLeadDetail: (leadID: string) => void;
  removeSelectedLeadDetail: () => void;
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
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [leadDetailInfo, setLeadDetailInfo] = useState<LeadDetailType | null>(null);
  const selectLeadDetail = (leadID: string) => {
    // RETRIEVE LEAD DETAIL INFOMATION
    const selectedLeadDetailInfo: LeadDetailType = leadDetailsSample[leadID];
    // RETRIEVE LEAD DETAIL ACTIVITY SEQUENCE
    const sequence: LeadDetailActivityTimeline[] = leadActivitySequences[leadID].sequenceActivities;
    console.log(sequence);
    setLeadDetailInfo(selectedLeadDetailInfo)
    setSelectedLeadId(leadID);
  };

  const removeSelectedLeadDetail = () => {
    setSelectedLeadId(null);
    setLeadDetailInfo(null);
  };

  const value: LeadDetailSelectContextType = {
    selectedLeadId,
    leadDetailInfo,
    selectLeadDetail,
    removeSelectedLeadDetail,
  };

  return (
    <LeadDetailSelectContext.Provider value={value}>
      {children}
    </LeadDetailSelectContext.Provider>
  );
};