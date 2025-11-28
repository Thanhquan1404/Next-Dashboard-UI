//---------------------------------------- SELECTOR OPTIONS ----------------------------------------
// STATUS OPTIONS 
export const statusOptions = ["All status", "New", "Open", "In Progress", "Opend Deal"];
// COMPANY OPTIONS
export const companyOptions = ["All company", "Apple", "Xiaomi",];

//---------------------------------------- LEADS SAMPLES ----------------------------------------
export interface leadType {
  leadID: string;
  avatarURL: string;
  name: string;
  createdDate: string;
  phone: string;
  email: string;
  rating: number;
  source: string;        
  status: string;
}

export const leadsInNewStatusSamples: leadType[] = [
  {
    leadID: "L001",
    avatarURL: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Nguyễn Văn An",
    createdDate: "2025-11-15T10:30:00+07:00",
    phone: "+84912345678",
    email: "an.nguyen@example.com",
    rating: 2,
    source: "Facebook",
    status: "New"
  },
  {
    leadID: "L002",
    avatarURL: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Trần Thị Bình",
    createdDate: "2025-11-15T09:15:00+07:00",
    phone: "+84987654321",
    email: "binh.tran@example.com",
    rating: 2,
    source: "Website",
    status: "New"
  },
  {
    leadID: "L003",
    avatarURL: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Lê Hoàng Cường",
    createdDate: "2025-11-14T16:45:00+07:00",
    phone: "+84911223344",
    email: "cuong.le@example.com",
    rating: 2,
    source: "LinkedIn",
    status: "New"
  },
];

export const leadsInOpenStatusSample: leadType[] = [
  {
    leadID: "L006",
    avatarURL: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Hoàng Thị Kim",
    createdDate: "2025-11-12T08:40:00+07:00",
    phone: "+84933445566",
    email: "kim.hoang@example.com",
    rating: 5,
    source: "Form",
    status: "Open"
  },
  {
    leadID: "L007",
    avatarURL: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Đỗ Văn Long",
    createdDate: "2025-11-11T13:25:00+07:00",
    phone: "+84966778899",
    email: "long.do@example.com",
    rating: 2,
    source: "Facebook",
    status: "Open"
  },
];

export const leadsInProgressStatusSample: leadType[] = [
  {
    leadID: "L011",
    avatarURL: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "Ngô Văn Quân",
    createdDate: "2025-11-07T10:35:00+07:00",
    phone: "+84977889900",
    email: "quan.ngo@example.com",
    rating: 2,
    source: "Website",
    status: "In Progress"
  },
  {
    leadID: "L012",
    avatarURL: "https://randomuser.me/api/portraits/women/39.jpg",
    name: "Đặng Thị Lan",
    createdDate: "2025-11-06T14:20:00+07:00",
    phone: "+84911223344",
    email: "lan.dang@example.com",
    rating: 2,
    source: "LinkedIn",
    status: "In Progress"
  }
];

export const leadsOpenDealStatusSample: leadType[] = [
  {
    leadID: "L016",
    avatarURL: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Phan Văn Sơn",
    createdDate: "2025-11-02T11:40:00+07:00",
    phone: "+84933445566",
    email: "son.phan@example.com",
    rating: 2,
    source: "Form",
    status: "Open Deal"
  },
  {
    leadID: "L017",
    avatarURL: "https://randomuser.me/api/portraits/women/64.jpg",
    name: "Tô Thị Hồng",
    createdDate: "2025-11-01T15:30:00+07:00",
    phone: "+84977889900",
    email: "hong.to@example.com",
    rating: 2,
    source: "Facebook",
    status: "Open Deal"
  },
  {
    leadID: "L018",
    avatarURL: "https://randomuser.me/api/portraits/men/37.jpg",
    name: "Đinh Công Minh",
    createdDate: "2025-10-31T09:15:00+07:00",
    phone: "+84922334455",
    email: "minh.dinh@example.com",
    rating: 2,
    source: "Website",
    status: "Open Deal"
  },
];

//---------------------------------------- LEAD DETAIL TYPE ----------------------------------------
// ────────────────────────────────────── INTERFACE ──────────────────────────────────────
export interface LeadDetailType {
  leadID: string;
  avatarURL: string;
  name: string;
  jobTitle: string;
  company: string;     // ← mới
  nation: string;      // ← mới
  createdDate: string;
  phone: string;
  email: string;
  rating: number;
  source: string;
  status: ColumnKey;
}

// ────────────────────────────────────── LEAD DETAIL SAMPLE ──────────────────────────────────────
export const leadDetailsSample: Record<string, LeadDetailType> = {
  "L001": {
    leadID: "L001",
    avatarURL: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Nguyễn Văn An",
    jobTitle: "Marketing Manager",
    company: "FPT Software",
    nation: "Vietnam",
    createdDate: "2025-11-15T10:30:00+07:00",
    phone: "+84912345678",
    email: "an.nguyen@example.com",
    rating: 2,
    source: "Facebook",
    status: "New" as ColumnKey
  },
  "L002": {
    leadID: "L002",
    avatarURL: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Trần Thị Bình",
    jobTitle: "HR Director",
    company: "Viettel Group",
    nation: "Vietnam",
    createdDate: "2025-11-15T09:15:00+07:00",
    phone: "+84987654321",
    email: "binh.tran@example.com",
    rating: 2,
    source: "Website",
    status: "New" as ColumnKey
  },
  "L003": {
    leadID: "L003",
    avatarURL: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Lê Hoàng Cường",
    jobTitle: "CEO",
    company: "VinFast",
    nation: "Vietnam",
    createdDate: "2025-11-14T16:45:00+07:00",
    phone: "+84911223344",
    email: "cuong.le@example.com",
    rating: 2,
    source: "LinkedIn",
    status: "New" as ColumnKey
  },
  "L006": {
    leadID: "L006",
    avatarURL: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Hoàng Thị Kim",
    jobTitle: "Purchasing Manager",
    company: "Samsung Electronics",
    nation: "South Korea",
    createdDate: "2025-11-12T08:40:00+07:00",
    phone: "+84933445566",
    email: "kim.hoang@example.com",
    rating: 5,
    source: "Form",
    status: "Open" as ColumnKey
  },
  "L007": {
    leadID: "L007",
    avatarURL: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Đỗ Văn Long",
    jobTitle: "IT Manager",
    company: "Google Asia Pacific",
    nation: "Singapore",
    createdDate: "2025-11-11T13:25:00+07:00",
    phone: "+84966778899",
    email: "long.do@example.com",
    rating: 2,
    source: "Facebook",
    status: "Open" as ColumnKey
  },
  "L011": {
    leadID: "L011",
    avatarURL: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "Ngô Văn Quân",
    jobTitle: "Sales Director",
    company: "Shopee Vietnam",
    nation: "Singapore",
    createdDate: "2025-11-07T10:35:00+07:00",
    phone: "+84977889900",
    email: "quan.ngo@example.com",
    rating: 2,
    source: "Website",
    status: "In Progress" as ColumnKey
  },
  "L016": {
    leadID: "L016",
    avatarURL: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Phan Văn Sơn",
    jobTitle: "CFO",
    company: "Masan Group",
    nation: "Vietnam",
    createdDate: "2025-11-02T11:40:00+07:00",
    phone: "+84933445566",
    email: "son.phan@example.com",
    rating: 2,
    source: "Form",
    status: "Open Deal" as ColumnKey
  },
  "L017": {
    leadID: "L017",
    avatarURL: "https://randomuser.me/api/portraits/women/64.jpg",
    name: "Tô Thị Hồng",
    jobTitle: "Operation Director",
    company: "Lazada Vietnam",
    nation: "Singapore",
    createdDate: "2025-11-01T15:30:00+07:00",
    phone: "+84977889900",
    email: "hong.to@example.com",
    rating: 2,
    source: "Facebook",
    status: "Open Deal" as ColumnKey
  },
  "L018": {
    leadID: "L018",
    avatarURL: "https://randomuser.me/api/portraits/men/37.jpg",
    name: "Đinh Công Minh",
    jobTitle: "CEO",
    company: "Techcombank",
    nation: "Vietnam",
    createdDate: "2025-10-31T09:15:00+07:00",
    phone: "+84922334455",
    email: "minh.dinh@example.com",
    rating: 2,
    source: "Website",
    status: "Open Deal" as ColumnKey
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
//---------------------------------------- LEAD KEY
// LEAD STATUS 
export type ColumnKey = "newStatus" | "openStatus" | "inProgressingStatus" | "openDealStatus";
// LEAD PROCESSING STATUS 
export type leadProcessingStatus = "New" | "Contacted" | "Interested" | "Qualified" | "Negotiation" | "Won-Lost";

