//---------------------------------------- SELECTOR OPTIONS ----------------------------------------

import { List } from "lucide-react";

// STATUS OPTIONS 
export const statusOptions = ["All status", "New", "Open", "In Progress", "Opend Deal"];
// COMPANY OPTIONS
export const companyOptions = ["All company", "Apple", "Xiaomi",];
export type leadSourceType = "Facebook" | "Website" | "LinkedIn" | "Form";


//---------------------------------------- LEADS SAMPLES ----------------------------------------
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
export const lead: leadType[] = [
  {
    leadID: "lead-001",
    avatarURL: "https://ui-avatars.com/api/?name=Nguyễn+Thị+Hồng+Nhung&background=ef4444&color=fff&bold=true",
    name: "Nguyễn Thị Hồng Nhung",
    createdDate: "2025-11-28T09:15:00Z",
    phone: "0901234567",
    email: "nhung.nguyen@gmail.com",
    rating: 5,
    source: "Facebook" as leadSourceType,
    status: "New",
  },
  {
    leadID: "lead-002",
    avatarURL: "https://ui-avatars.com/api/?name=Trần+Văn+Nam&background=3b82f6&color=fff&bold=true",
    name: "Trần Văn Nam",
    createdDate: "2025-11-27T14:30:00Z",
    phone: "0912345678",
    email: "namtran@company.vn",
    rating: 4,
    source: "Facebook" as leadSourceType,
    status: "Contacted",
  },
  {
    leadID: "lead-003",
    avatarURL: "https://ui-avatars.com/api/?name=Lê+Minh+Khôi&background=10b981&color=fff&bold=true",
    name: "Lê Minh Khôi",
    createdDate: "2025-11-26T10:00:00Z",
    phone: "0934567890",
    email: "khoile@fpt.edu.vn",
    rating: 5,
    source: "Website" as leadSourceType,
    status: "Interested",
  },
  {
    leadID: "lead-004",
    avatarURL: "https://ui-avatars.com/api/?name=Phạm+Thị+Lan+Anh&background=f59e0b&color=fff&bold=true",
    name: "Phạm Thị Lan Anh",
    createdDate: "2025-11-25T16:45:00Z",
    phone: "0987654321",
    email: "lananh.pham@yahoo.com",
    rating: 3,
    source: "Website" as leadSourceType,
    status: "Qualified",
  },
  {
    leadID: "lead-005",
    avatarURL: "https://ui-avatars.com/api/?name=Hoàng+Văn+Hùng&background=8b5cf6&color=fff&bold=true",
    name: "Hoàng Văn Hùng",
    createdDate: "2025-11-24T11:20:00Z",
    phone: "0923456789",
    email: "hunghoang@outlook.com",
    rating: 5,
    source: "Form" as leadSourceType,
    status: "Negotiation",
  },
  {
    leadID: "lead-006",
    avatarURL: "https://ui-avatars.com/api/?name=Vũ+Thị+Mỹ+Duyên&background=ec4899&color=fff&bold=true",
    name: "Vũ Thị Mỹ Duyên",
    createdDate: "2025-11-23T08:55:00Z",
    phone: "0891234567",
    email: "duyenvu@gmail.com",
    rating: 4,
    source: "Facebook" as leadSourceType,
    status: "Won",
  },
  {
    leadID: "lead-007",
    avatarURL: "https://ui-avatars.com/api/?name=Đặng+Quang+Vinh&background=06b6d4&color=fff&bold=true",
    name: "Đặng Quang Vinh",
    createdDate: "2025-11-22T13:10:00Z",
    phone: "0909876543",
    email: "vinh.dang@company.co",
    rating: 5,
    source: "Facebook" as leadSourceType,
    status: "New",
  },
  {
    leadID: "lead-008",
    avatarURL: "https://ui-avatars.com/api/?name=Bùi+Thị+Kim+Ngân&background=f97316&color=fff&bold=true",
    name: "Bùi Thị Kim Ngân",
    createdDate: "2025-11-21T17:30:00Z",
    phone: "0931122334",
    email: "kimngan88@gmail.com",
    rating: 4,
    source: "Form" as leadSourceType,
    status: "Contacted",
  },
  {
    leadID: "lead-009",
    avatarURL: "https://ui-avatars.com/api/?name=Đỗ+Văn+Long&background=84cc16&color=fff&bold=true",
    name: "Đỗ Văn Long",
    createdDate: "2025-11-20T09:40:00Z",
    phone: "0919988776",
    email: "longdo.business@gmail.com",
    rating: 5,
    source: "LinkedIn" as leadSourceType,
    status: "Interested",
  },
  {
    leadID: "lead-010",
    avatarURL: "https://ui-avatars.com/api/?name=Huỳnh+Thị+Thảo&background=6366f1&color=fff&bold=true",
    name: "Huỳnh Thị Thảo",
    createdDate: "2025-11-19T15:15:00Z",
    phone: "0981122334",
    email: "thao.huynh@gmail.com",
    rating: 3,
    source: "Website" as leadSourceType,
    status: "Qualified",
  },
  {
    leadID: "lead-011",
    avatarURL: "https://ui-avatars.com/api/?name=Trần+Anh+Tuấn&background=ef4444&color=fff&bold=true",
    name: "Trần Anh Tuấn",
    createdDate: "2025-11-18T10:25:00Z",
    phone: "0905566778",
    email: "tuantran.pro@gmail.com",
    rating: 5,
    source: "Website" as leadSourceType,
    status: "Negotiation",
  },
  {
    leadID: "lead-012",
    avatarURL: "https://ui-avatars.com/api/?name=Nguyễn+Hoàng+Mai&background=3b82f6&color=fff&bold=true",
    name: "Nguyễn Hoàng Mai",
    createdDate: "2025-11-17T14:50:00Z",
    phone: "0936677889",
    email: "mai.nguyen@fpt.vn",
    rating: 2,
    source: "Facebook" as leadSourceType,
    status: "Lost",
  },
  {
    leadID: "lead-013",
    avatarURL: "https://ui-avatars.com/api/?name=Phan+Văn+Đạt&background=10b981&color=fff&bold=true",
    name: "Phan Văn Đạt",
    createdDate: "2025-11-16T11:35:00Z",
    phone: "0912233445",
    email: "datphan88@gmail.com",
    rating: 4,
    source: "Facebook" as leadSourceType,
    status: "Won",
  },
  {
    leadID: "lead-014",
    avatarURL: "https://ui-avatars.com/api/?name=Lý+Thị+Bích+Phương&background=f59e0b&color=fff&bold=true",
    name: "Lý Thị Bích Phương",
    createdDate: "2025-11-15T16:20:00Z",
    phone: "0983344556",
    email: "phuongly@gmail.com",
    rating: 5,
    source: "Form" as leadSourceType,
    status: "Interested",
  },
  {
    leadID: "lead-015",
    avatarURL: "https://ui-avatars.com/api/?name=Võ+Minh+Triết&background=8b5cf6&color=fff&bold=true",
    name: "Võ Minh Triết",
    createdDate: "2025-11-14T09:10:00Z",
    phone: "0904455667",
    email: "trietvo@company.vn",
    rating: 4,
    source: "Website" as leadSourceType,
    status: "Qualified",
  },
  {
    leadID: "lead-016",
    avatarURL: "https://ui-avatars.com/api/?name=Tô+Thị+Kim+Chi&background=ec4899&color=fff&bold=true",
    name: "Tô Thị Kim Chi",
    createdDate: "2025-11-13T13:45:00Z",
    phone: "0925566778",
    email: "kimchi.to@gmail.com",
    rating: 5,
    source: "Facebook" as leadSourceType,
    status: "Negotiation",
  },
  {
    leadID: "lead-017",
    avatarURL: "https://ui-avatars.com/api/?name=Hà+Văn+Hiếu&background=06b6d4&color=fff&bold=true",
    name: "Hà Văn Hiếu",
    createdDate: "2025-11-12T10:55:00Z",
    phone: "0937788990",
    email: "hieuhapro@gmail.com",
    rating: 3,
    source: "LinkedIn" as leadSourceType,
    status: "Lost",
  },
  {
    leadID: "lead-018",
    avatarURL: "https://ui-avatars.com/api/?name=Mai+Thị+Thu+Huyền&background=f97316&color=fff&bold=true",
    name: "Mai Thị Thu Huyền",
    createdDate: "2025-11-11T15:30:00Z",
    phone: "0918899001",
    email: "huyenmai@gmail.com",
    rating: 5,
    source: "Website" as leadSourceType,
    status: "Contacted",
  },
  {
    leadID: "lead-019",
    avatarURL: "https://ui-avatars.com/api/?name=Trương+Quốc+Khánh&background=84cc16&color=fff&bold=true",
    name: "Trương Quốc Khánh",
    createdDate: "2025-11-10T08:20:00Z",
    phone: "0906677889",
    email: "khanh.truong@outlook.com",
    rating: 4,
    source: "Facebook" as leadSourceType,
    status: "Interested",
  },
  {
    leadID: "lead-020",
    avatarURL: "https://ui-avatars.com/api/?name=Đinh+Thị+Ngọc+Ánh&background=6366f1&color=fff&bold=true",
    name: "Đinh Thị Ngọc Ánh",
    createdDate: "2025-11-09T17:00:00Z",
    phone: "0988899001",
    email: "ngocanh.dinh@gmail.com",
    rating: 5,
    source: "Website" as leadSourceType,
    status: "Qualified",
  },
];
//---------------------------------------- LEAD DETAIL SAMPLES ----------------------------------------
export interface LeadDetailType {
  leadID: string;
  avatarURL: string;
  name: string;
  jobTitle: string;
  company: string;     
  nation: string;      
  createdDate: string;
  phone: string;
  email: string;
  rating: number;
  source: string;
  status: string;
}
export const leadDetailsSample: Record<string, LeadDetailType> = {
  "lead-001": {
    ...lead[0],
    jobTitle: "Sales Staff",
    company: "Vingroup",
    nation: "Vietnam",
  },
  "lead-002": {
    ...lead[1],
    jobTitle: "HR Officer",
    company: "VNPT",
    nation: "Vietnam",
  },
  "lead-003": {
    ...lead[2],
    jobTitle: "Software Engineer",
    company: "FPT Software",
    nation: "Vietnam",
  },
  "lead-004": {
    ...lead[3],
    jobTitle: "Accountant",
    company: "TH True Milk",
    nation: "Vietnam",
  },
  "lead-005": {
    ...lead[4],
    jobTitle: "Purchasing Manager",
    company: "Honda Vietnam",
    nation: "Vietnam",
  },
  "lead-006": {
    ...lead[5],
    jobTitle: "Marketing Specialist",
    company: "Google Vietnam",
    nation: "Vietnam",
  },
  "lead-007": {
    ...lead[6],
    jobTitle: "IT Manager",
    company: "Tiki",
    nation: "Vietnam",
  },
  "lead-008": {
    ...lead[7],
    jobTitle: "Operations Supervisor",
    company: "Grab Vietnam",
    nation: "Vietnam",
  },
  "lead-009": {
    ...lead[8],
    jobTitle: "Business Analyst",
    company: "VinFast",
    nation: "Vietnam",
  },
  "lead-010": {
    ...lead[9],
    jobTitle: "Project Manager",
    company: "CMC Corp",
    nation: "Vietnam",
  },
  "lead-011": {
    ...lead[10],
    jobTitle: "Sales Director",
    company: "Shopee",
    nation: "Singapore",
  },
  "lead-012": {
    ...lead[11],
    jobTitle: "Finance Controller",
    company: "Masan Group",
    nation: "Vietnam",
  },
  "lead-013": {
    ...lead[12],
    jobTitle: "CEO",
    company: "StartupX",
    nation: "Vietnam",
  },
  "lead-014": {
    ...lead[13],
    jobTitle: "HR Manager",
    company: "Vietjet Air",
    nation: "Vietnam",
  },
  "lead-015": {
    ...lead[14],
    jobTitle: "Product Manager",
    company: "MoMo",
    nation: "Vietnam",
  },
  "lead-016": {
    ...lead[15],
    jobTitle: "Marketing Director",
    company: "Unilever",
    nation: "UK",
  },
  "lead-017": {
    ...lead[16],
    jobTitle: "Operations Director",
    company: "Lazada",
    nation: "Singapore",
  },
  "lead-018": {
    ...lead[17],
    jobTitle: "CFO",
    company: "Techcombank",
    nation: "Vietnam",
  },
  "lead-019": {
    ...lead[18],
    jobTitle: "Senior Consultant",
    company: "KPMG Vietnam",
    nation: "Vietnam",
  },
  "lead-020": {
    ...lead[19],
    jobTitle: "QA Engineer",
    company: "Samsung Electronics",
    nation: "South Korea",
  },
};


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
  status: string;
  color: string;
}

export const LeadStage: leadStageType[] = [
  {
    status: "New",
    color: "#3498db" // xanh dương
  },
  {
    status: "Contacted",
    color: "#2ecc71" // xanh lá
  },
  {
    status: "Interested",
    color: "#9b59b6" // tím
  },
  {
    status: "Qualified",
    color: "#f1c40f" // vàng
  },
  {
    status: "Negotiation",
    color: "#e67e22" // cam
  },
  {
    status: "Won",
    color: "#27ae60" // xanh thắng
  },
  {
    status: "Lost",
    color: "#e74c3c" // đỏ
  }
];



