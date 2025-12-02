"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback, useRef } from "react";
import { leadType, leadStageType } from "@/lib/data.leads";
import useGetListLeads from "@/fetching/lead/getListLeads";

// CONTEXT VALUE TYPE
interface LeadStageColumnContextType {
  leadStage: leadStageType[],
  loading: boolean,
  leadItemsInStage: Record<string, leadType[]>,
  updateLeadStage: (leadId: string, newStage: string) => void,
  addingNewLead: (newLead: leadType, targetColumn: string) => void,
  addingNewLeadColum: (columnName: string, columnColor: string) => void,
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
  // INITIALIZE GET LIST LEADS REQUEST
  const { loading, data, error, requestGetListLeads } = useGetListLeads();
  // LEAD ITEMS IN SPECIFIC COLUMN INITIALIZE
  const [leadItemsInStage, setLeadItemsInStage] = useState<Record<string, leadType[]>>({});
  const [leadStage, setLeadStage] = useState<leadStageType[]>([]);
  // ACTIVATE API REQUEST 
  const getListLeads = useCallback(async () => {
    try {
      const { data, leadStage } = await requestGetListLeads();

      if (!data || !leadStage) {
        setLeadStage([]);
        setLeadItemsInStage({});
        return;
      }

      setLeadStage(leadStage);

      const initial: Record<string, leadType[]> = {};

      leadStage.forEach((stageColumn) => {
        const stageData = data.find(item => item.id === stageColumn.id);

        const leadsInThisStage: leadType[] = stageData?.leads.map((item) => ({
          leadID: item.id,
          avatarURL: "", 
          name: item.fullName,
          createdDate: item.createdAt, 
          phone: item.phoneNumber || "",
          email: item.email || "",
          rating: item.rating ?? 0,
          source: "Facebook", 
          status: stageColumn.status,
        })) ?? []; 

        initial[stageColumn.status] = leadsInThisStage;
      });

      setLeadItemsInStage(initial);
    } catch (err) {
      console.error("Error fetching leads:", err);
      setLeadItemsInStage({});
      setLeadStage([]);
    }
  }, [requestGetListLeads]);

  const didFetch = useRef(false);
  useEffect(() => {
    if (!didFetch.current) {
      getListLeads();
      didFetch.current = true;
    }
  }, []);

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

      if (!leadToMove || !fromStage || fromStage === newStage) {
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
    setLeadItemsInStage((prev) => ({
      ...prev,
      [targetColumn]: [...prev[targetColumn], newLead]
    }));
  }

  // ADDING NEW COLUMN 
  const addingNewLeadColum = (columnName: string, columnColor: string) => {
    if (columnName === "") {
      throw new Error("Fill in column name")
    }
    setLeadStage((prev) => [...prev,
    {
      status: columnName,
      color: columnColor,
      id: crypto.randomUUID(),
    }
    ]);

    setLeadItemsInStage((prev) => ({
      ...prev,
      [columnName]: []
    }));
  };


  return (
    <LeadStageColumnContext.Provider value={{ loading, leadStage, leadItemsInStage, updateLeadStage, addingNewLead, addingNewLeadColum }}>
      {children}
    </LeadStageColumnContext.Provider>
  );
};