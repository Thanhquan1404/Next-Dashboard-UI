"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { leadType, LeadItems, LeadStage } from "@/lib/data.leads";

// CONTEXT VALUE TYPE
interface LeadStageColumnContextType {
  leadItemsInStage: Record<string, leadType[]>;
  updateLeadStage: (leadId: string, newStage: string) => void;
  addingNewLead: (newLead: leadType, targetColumn: string) => void;
}

// CREATE CONTEXT
const LeadStageColumnContext = createContext<LeadStageColumnContextType | null>(null);

// CUSTOM HOOK
export const useLeadStageColumn = () => {
  const context = useContext(LeadStageColumnContext);
  if (!context) {
    throw new Error("useLeadStageColumn must be used within LeadStageColumnProvider");
  }
  return context;
};

// PROVIDER PROPS
interface LeadStageColumnProviderProps {
  children: ReactNode;
}

export const LeadStageColumnProvider: React.FC<LeadStageColumnProviderProps> = ({ children }) => {
  const [leadStage, setLeadStage] = useState<string[]>(LeadStage);
  // LEAD ITEMS IN SPECIFIC COLUMN INITIALIZE
  const [leadItemsInStage, setLeadItemsInStage] = useState<Record<string, leadType[]>>(() => {
    const initial: Record<string, leadType[]> = {};

    leadStage.forEach((stage) => {
      initial[stage] = LeadItems.filter((item) => item.status === stage);
    });

    return initial;
  });

  // UPDATE LEAD IN STAGE WHEN DRAG AND DROP
  const updateLeadStage = (leadId: string, newStage: string) => {
    setLeadItemsInStage((prev) => {
      let leadToMove: leadType | undefined = undefined;
      let fromStage: string | null = null;

      for (const stage in prev) {
        const index = prev[stage].findIndex((item) => item.leadID === leadId);
        if (index !== -1) {
          leadToMove = prev[stage][index];
          fromStage = stage;
          break;
        }
      }

      if (!leadToMove || !fromStage) {
        return prev; 
      }

      const newColumns: Record<string, leadType[]> = { ...prev };

      newColumns[fromStage] = prev[fromStage].filter((item) => item.leadID !== leadId);

      newColumns[newStage] = [
        ...(prev[newStage] || []), 
        { ...leadToMove, status: newStage } 
      ];

      return newColumns;
    });
  };

  // ADDING A NEW LEAD 
  const addingNewLead = (newLead: leadType, targetColumn: string) => {
    setLeadItemsInStage( (prev) => ({
      ...prev,
      [targetColumn]: [...prev[targetColumn], newLead]
    }));
  }

  return (
    <LeadStageColumnContext.Provider value={{ leadItemsInStage, updateLeadStage, addingNewLead }}>
      {children}
    </LeadStageColumnContext.Provider>
  );
};