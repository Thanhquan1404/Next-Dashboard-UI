"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback, useRef } from "react";
import { leadType, leadStageType, LeadDetailType } from "@/lib/data.leads";
import useGetListLeads from "@/fetching/lead/getListLeads";
import useAddLead from "@/fetching/lead/addLead";
import { useNotification } from "./NotificationProvider";

// CONTEXT VALUE TYPE
interface LeadStageColumnContextType {
  leadStage: leadStageType[],
  getListLeadLoading: boolean,
  addLeadLoading: boolean,
  leadItemsInStage: Record<string, leadType[]>,
  updateLeadStage: (leadId: string, newStage: string) => void,
  addingNewLead: (newLead: leadType, targetColumn: string, stageID: string) => void,
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
  const {showNotification} = useNotification();
  // INITIALIZE GET LIST LEADS REQUEST
  const { loading: getListLeadLoading, requestGetListLeads } = useGetListLeads();
  const { loading: addLeadLoading, addLead} = useAddLead();

  // LEAD ITEMS IN SPECIFIC COLUMN INITIALIZE
  const [leadItemsInStage, setLeadItemsInStage] = useState<Record<string, leadType[]>>({});
  const [leadStage, setLeadStage] = useState<leadStageType[]>([]);
  // GET LIST LEAD REQUEST
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
          expectedRevenue: item.expectedRevenue,
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
  const addingNewLead = async (newLead: leadType, targetColumn: string, stageID: string) => {
    try {
      const success: boolean = await addLead(newLead, stageID);
      
      if (!success) {
        showNotification("Failed to add lead", true);
        return false;
      }

      setLeadItemsInStage((prev) => ({
        ...prev,
        [targetColumn]: [...prev[targetColumn], newLead]
      }));
      showNotification("Successfully add a new lead");
      return true;
    } catch (err) {
      showNotification(String(err), true);
    }
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
    <LeadStageColumnContext.Provider value={{ getListLeadLoading, addLeadLoading,leadStage, leadItemsInStage, updateLeadStage, addingNewLead, addingNewLeadColum }}>
      {children}
    </LeadStageColumnContext.Provider>
  );
};