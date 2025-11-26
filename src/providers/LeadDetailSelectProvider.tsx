"use client";

import { createContext, useContext, useState } from "react";

interface LeadDetailSelectContextType {
  selectedLeadId: string | null;
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

  const selectLeadDetail = (leadID: string) => {
    console.log(leadID);
    setSelectedLeadId(leadID);
  };

  const removeSelectedLeadDetail = () => {
    setSelectedLeadId(null);
  };

  const value: LeadDetailSelectContextType = {
    selectedLeadId,
    selectLeadDetail,
    removeSelectedLeadDetail,
  };

  return (
    <LeadDetailSelectContext.Provider value={value}>
      {children}
    </LeadDetailSelectContext.Provider>
  );
};