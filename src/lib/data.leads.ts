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
    status: "Open"
  },
  {
    leadID: "L007",
    avatarURL: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Đỗ Văn Long",
    createdDate: "2025-11-11T13:25:00+07:00",
    phone: "+84966778899",
    rating: 2,
    email: "long.do@example.com",
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
    status: "Open Deal"
  },
];

//---------------------------------------- LEADS DRAG DROP EVENT ----------------------------------------
export type ColumnKey = "newStatus" | "openStatus" | "inProgressingStatus" | "openDealStatus";
