//---------------------------------------- SELECTOR OPTIONS ----------------------------------------

import { List } from "lucide-react";

// STATUS OPTIONS 
export const statusOptions = ["All status", "New", "Open", "In Progress", "Opend Deal"];
// COMPANY OPTIONS
export const companyOptions = ["All company", "Apple", "Xiaomi",];
export type leadSourceType = "Facebook" | "Website" | "LinkedIn" | "Form";


//---------------------------------------- LEADS ----------------------------------------
export interface leadType {
  leadID: string;
  avatarURL: string;
  name: string;
  createdDate: string;
  phone: string;
  email: string;
  rating: number;
  source: leadSourceType;
  status: string;
}

//---------------------------------------- LEAD DETAIL ----------------------------------------
export interface LeadDetailType {
  leadID: string;
  avatarURL: string;
  name: string;
  expectedValue: number;
  company: string;
  nation: string;
  createdDate: string;
  phone: string;
  email: string;
  rating: number;
  source: string;
  status: string;
  assignTo: string;
}


//---------------------------------------- LEAD DETAIL SEQUENCE ACTIVITY TIMELINE ----------------------------------------
export interface LeadDetailActivityTimeline {
  title: string,
  assignTo: string,
  closingDate: string,
  rate: number;
}
export interface LeadDetailActivitySequenceTimeline {
  leadID: string,
  sequenceActivities: LeadDetailActivityTimeline[],
}

// ---------------------------------------- LEAD DETAIL SEQUENCE ACTIVITY TIMELINE SAMPLES ----------------------------------------
export const leadActivitySequences: Record<string, LeadDetailActivitySequenceTimeline> = {
  "L001": {
    leadID: "L001",
    sequenceActivities: [
      {
        title: "First call",
        assignTo: "Sales A",
        closingDate: "2025-11-20T00:00:00+07:00",
        rate: 3
      },
      {
        title: "Gửi báo giá",
        assignTo: "Sales A",
        closingDate: "2025-11-22T00:00:00+07:00",
        rate: 4
      }
    ]
  },
  "L006": {
    leadID: "L006",
    sequenceActivities: [
      {
        title: "Gọi xác nhận form",
        assignTo: "Sales Pro",
        closingDate: "2025-11-13T00:00:00+07:00",
        rate: 5
      },
      {
        title: "Hẹn gặp trực tiếp",
        assignTo: "Sales Pro",
        closingDate: "2025-11-28T00:00:00+07:00",
        rate: 5
      }
    ]
  },
  "L016": {
    leadID: "L016",
    sequenceActivities: [
      {
        title: "Chốt giá sơ bộ",
        assignTo: "Closer Team",
        closingDate: "2025-11-15T00:00:00+07:00",
        rate: 5
      },
      {
        title: "Gửi hợp đồng",
        assignTo: "Closer Team",
        closingDate: "2025-11-18T00:00:00+07:00",
        rate: 5
      },
      {
        title: "Ký kết",
        assignTo: "CEO",
        closingDate: "2025-11-25T00:00:00+07:00",
        rate: 5
      }
    ]
  }
};


//---------------------------------------- LEAD KEY ---------------------------------------- 

// LEAD PROCESSING STATUS 
export interface leadStageType {
  id: string,
  status: string;
  color: string;
}

//---------------------------------------- GET LIST LEADS REQUEST ---------------------------------------- 
export interface AssignedUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ApiResponseDataLeadType {
  id: string,
  fullName: string,
  expectedRevenue: number,
  rating: number,
  phoneNumber: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  responsibleBy: {
    id: string,
    firstName: string,
    lastName: string,
    email: string
  }
}

