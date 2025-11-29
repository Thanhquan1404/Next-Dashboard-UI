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
//---------------------------------------- LEAD KEY ---------------------------------------- 
// LEAD STATUS 
export type ColumnKey = "newStatus" | "openStatus" | "inProgressingStatus" | "openDealStatus";
// LEAD PROCESSING STATUS 
export type leadProcessingStatus = "New" | "Contacted" | "Interested" | "Qualified" | "Negotiation" | "Won-Lost";

// data/leads.ts
export const LeadStage: string[] = [
  "New",
  "Contacted",
  "Interested",
  "Qualified",
  "Negotiation",
  "Won",
  "Lost"
];

export const LeadItems: leadType[] = [
  {
    leadID: "lead-001",
    avatarURL: "https://ui-avatars.com/api/?name=Nguyễn+Thị+Hồng+Nhung&background=ef4444&color=fff&bold=true",
    name: "Nguyễn Thị Hồng Nhung",
    createdDate: "2025-11-28T09:15:00Z",
    phone: "0901234567",
    email: "nhung.nguyen@gmail.com",
    rating: 5,
    source: "Facebook Ads",
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
    source: "Google Ads",
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
    source: "Website",
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
    source: "Referral",
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
    source: "Zalo OA",
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
    source: "TikTok",
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
    source: "Facebook Ads",
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
    source: "Event",
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
    source: "Google Ads",
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
    source: "Referral",
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
    source: "Website",
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
    source: "Zalo OA",
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
    source: "Facebook Ads",
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
    source: "Google Ads",
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
    source: "Referral",
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
    source: "Event",
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
    source: "TikTok",
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
    source: "Website",
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
    source: "Facebook Ads",
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
    source: "Google Ads",
    status: "Qualified",
  },
];
