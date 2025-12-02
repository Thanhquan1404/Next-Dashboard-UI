"use client";

import { 
  leadActivitySequences, 
  LeadDetailActivityTimeline,  
  LeadDetailType 
} from "@/lib/data.leads";
import { createContext, useCallback, useContext, useState, useEffect } from "react";
import { useNotification } from "./NotificationProvider";
import useGetLeadDetail from "@/fetching/lead/getLeadDetail";
import useUpdateLeadStage from "@/fetching/lead/updateLeadStage";

interface LeadDetailSelectContextType {
  selectedLeadId: string | null;
  leadDetailInfo: LeadDetailType | null;
  leadSequenceActivity: LeadDetailActivityTimeline[] | null;
  loadingGetLeadDetail: boolean;
  selectLeadDetail: (leadID: string) => void;
  removeSelectedLeadDetail: () => void;
  addingNewLeadActivity: (newLead: LeadDetailActivityTimeline) => void;
  updateALeadDetail: (newLeadDetail: LeadDetailType) => void;
  updateLeadStage: (leadID: string, forwardStageID: string) => void;
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
  const [listLeadDetail, setListLeadDetail] = useState<Record<string, LeadDetailType>>({});
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [leadDetailInfo, setLeadDetailInfo] = useState<LeadDetailType | null>(null);
  const [leadSequenceActivity, setLeadSequenceActivity] = useState<LeadDetailActivityTimeline[] | null>(null);
  const { showNotification } = useNotification();

  const { loading: loadingGetLeadDetail,  getLeadDetailInformation } = useGetLeadDetail();
  const { loading: loadingUpdateLeadStage, updateLeadStage: updateStage} = useUpdateLeadStage();
  // HANDLE CLICK ON A LEAD
  const selectLeadDetail = (leadID: string) => {
    setSelectedLeadId(leadID);
  };

  // HANDLE CLOSE LEAD DETAIL
  const removeSelectedLeadDetail = () => {
    setSelectedLeadId(null);
    setLeadDetailInfo(null);
    setLeadSequenceActivity(null);
  };

  // ASYNC FETCH LEAD DETAIL WHEN selectedLeadId CHANGES
  const fetchLeadDetail = useCallback(async (leadID: string) => {
    if (!leadID) return;

    try {
      const response = await getLeadDetailInformation(leadID);

      if (!response) return;
      
      setLeadDetailInfo(response);

      // // Map sequence activities from local sample or API if exists
      // const sequenceActivity: LeadDetailActivityTimeline[] = response.sequenceActivities || leadActivitySequences[leadID]?.sequenceActivities || [];
      // setLeadSequenceActivity(sequenceActivity);

    } catch (err) {
      console.log(err);
      showNotification("Failed to get lead detail", true);
    }
  }, [getLeadDetailInformation, showNotification]);

  useEffect(() => {
    if (selectedLeadId) {
      fetchLeadDetail(selectedLeadId);
    } else {
      setLeadDetailInfo(null);
      setLeadSequenceActivity(null);
    }
  }, [selectedLeadId]);

  // ADD NEW LEAD ACTIVITY
  const addingNewLeadActivity = (newLeadActivity: LeadDetailActivityTimeline) => {
    setLeadSequenceActivity(prev => [newLeadActivity, ...(prev || [])]);
    showNotification("Successfully added a new lead activity");
  };

  // UPDATE LEAD DETAIL
  const updateALeadDetail = (newLeadDetail: LeadDetailType) => {
    setListLeadDetail(prev => ({ ...prev, [newLeadDetail.leadID]: newLeadDetail }));
    setLeadDetailInfo(newLeadDetail);
    showNotification("Lead information updated successfully");
  };
  // UPDATE LEAD STAGE 
  const updateLeadStage = async (leadID: string, forwardStageID: string) => {
    try {
      const success  = await updateStage(leadID, forwardStageID);

      if (success){
        showNotification("Successfully update lead stage")
      } else{
        showNotification("Error in update lead stage", true);
      }
    } catch (err) {
      showNotification(String(err), true);
    }
  }

  const value: LeadDetailSelectContextType = {
    selectedLeadId,
    leadDetailInfo,
    leadSequenceActivity,
    loadingGetLeadDetail,
    selectLeadDetail,
    removeSelectedLeadDetail,
    addingNewLeadActivity,
    updateALeadDetail,
    updateLeadStage
  };

  return (
    <LeadDetailSelectContext.Provider value={value}>
      {children}
    </LeadDetailSelectContext.Provider>
  );
};
