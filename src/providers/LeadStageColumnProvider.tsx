"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback, useRef } from "react";
import { leadType, leadStageType, LeadDetailType } from "@/lib/data.leads";
import useGetListLeads from "@/fetching/lead/getListLeads";
import useAddLead from "@/fetching/lead/addLead";
import { useNotification } from "./NotificationProvider";
import useDeleteLead from "@/fetching/lead/deleteLead";
import useUpdateLeadStage from "@/fetching/lead/updateLeadStage";

// CONTEXT VALUE TYPE
interface LeadStageColumnContextType {
  leadStage: leadStageType[],
  getListLeadLoading: boolean,
  addLeadLoading: boolean,
  deleteLeadLoading: boolean,
  updateDropStageLoading: boolean,
  leadItemsInStage: Record<string, leadType[]>,
  updateLeadStage: (leadId: string, newStage: string) => void,
  addingNewLead: (newLead: leadType, targetColumn: string, stageID: string) => void,
  addingNewLeadColum: (columnName: string, columnColor: string) => void,
  deleteALead: (leadID: string) => void,
  syncLeadDetail: (lead: LeadDetailType) => void;
  syncLeadStage: (leadID: string, stage: string) => void;
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
  const { showNotification } = useNotification();
  // INITIALIZE GET LIST LEADS REQUEST
  const { loading: deleteLeadLoading, deleteLead } = useDeleteLead();
  const { loading: getListLeadLoading, requestGetListLeads } = useGetListLeads();
  const { loading: addLeadLoading, addLead } = useAddLead();
  const { loading: updateDropStageLoading, updateLeadStage: fetchUpdateLeadStage } = useUpdateLeadStage();

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
  const updateLeadStage = async (leadId: string, newStage: string) => {
    let forwardStageID = leadStage.find(stage => stage.status === newStage)?.id || "";

    const currentStage = Object.keys(leadItemsInStage).find(stage =>
      leadItemsInStage[stage].some(lead => lead.leadID === leadId)
    ) || "";

    if (!currentStage) {
      showNotification("Current stage not found", true);
      return;
    }

    if (currentStage === newStage) {
      showNotification("The same stage");
      return;
    }

    if (!forwardStageID) {
      showNotification("The forward stage does not exist", true);
      return;
    }
    try {
      const response = await fetchUpdateLeadStage(leadId, forwardStageID);

      if (response) {
        showNotification("Successfully stage change");
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
      } else {
        showNotification("There is error in drag drop stage changing", true);
      }
    } catch (err) {
      showNotification(String(err), true);
    }
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

  // DELETE A LEAD
  const deleteALead = async (leadID: string) => {
    try {
      const success: boolean = await deleteLead(leadID);

      if (success) {
        setLeadItemsInStage(prev => {
          const newLead: Record<string, leadType[]> = prev;
          for (const stage in newLead) {
            newLead[stage] = newLead[stage].filter((item) => item.leadID !== leadID)
          }

          return newLead;
        })
        showNotification("Successfully delete a lead")
      } else {
        showNotification("There is error in delete lead", true);
      }
    } catch (err) {
      showNotification(String(err), true);
    }
  }

  // MAKE ASYNC WHEN UPDATE LEAD DETAIL 
  const syncLeadDetail = (updatedLead: LeadDetailType) => {
    setLeadItemsInStage(prev => {
      const newStage = updatedLead.status;
      if (!newStage) return prev;

      const newColumns = { ...prev };

      for (const stage in prev) {
        newColumns[stage] = prev[stage].map(lead =>
          lead.leadID === updatedLead.leadID
            ? {
              ...lead,
              name: updatedLead.name,
              phone: updatedLead.phone,
              email: updatedLead.email,
              rating: updatedLead.rating,
              expectedRevenue: updatedLead.expectedValue,
            }
            : lead
        );
      }

      return newColumns;
    });
  };

  const syncLeadStage = (leadID: string, forwardStageID: string) => {
    setLeadItemsInStage(prev => {
      let movingLead: leadType | null = null;
      let fromStage: string | null = null;

      const stageObj = leadStage.find(stage => stage.id === forwardStageID);
      const newStage = stageObj?.status;

      if (!newStage) return prev;

      for (const stage in prev) {
        const found = prev[stage].find(l => l.leadID === leadID);
        if (found) {
          movingLead = found;
          movingLead.status = newStage;
          fromStage = stage;
          break;
        }
      }

      if (!movingLead || !fromStage || fromStage === newStage) {
        return prev;
      }

      return {
        ...prev,
        [fromStage]: prev[fromStage].filter(l => l.leadID !== leadID),
        [newStage]: [
          ...(prev[newStage] || []),
          { ...movingLead, status: newStage }
        ],
      };
    });
  };



  return (
    <LeadStageColumnContext.Provider value={{
      getListLeadLoading,
      addLeadLoading,
      deleteLeadLoading,
      updateDropStageLoading,
      leadStage,
      leadItemsInStage,
      updateLeadStage,
      addingNewLead,
      addingNewLeadColum,
      deleteALead,
      syncLeadDetail,
      syncLeadStage,
    }}>
      {children}
    </LeadStageColumnContext.Provider>
  );
};