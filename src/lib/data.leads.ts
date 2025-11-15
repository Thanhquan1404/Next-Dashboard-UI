//---------------------------------------- SELECTOR OPTIONS ----------------------------------------
// STATUS OPTIONS 
export const statusOptions = ["All status", "New", "Open", "In Progress", "Opend Deal"];
// COMPANY OPTIONS
export const companyOptions = ["All company", "Apple", "Xiaomi",];

//---------------------------------------- LEADS SAMPLES ----------------------------------------
interface leadType {
  leadID: string;
  avatarURL: string;
  name: string;
  createdDate: string;
  phone: string;
  email: string;
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
    status: "New"
  },
  {
    leadID: "L002",
    avatarURL: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Trần Thị Bình",
    createdDate: "2025-11-15T09:15:00+07:00",
    phone: "+84987654321",
    email: "binh.tran@example.com",
    status: "New"
  },
  {
    leadID: "L003",
    avatarURL: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Lê Hoàng Cường",
    createdDate: "2025-11-14T16:45:00+07:00",
    phone: "+84911223344",
    email: "cuong.le@example.com",
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
    status: "Open"
  },
  {
    leadID: "L007",
    avatarURL: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Đỗ Văn Long",
    createdDate: "2025-11-11T13:25:00+07:00",
    phone: "+84966778899",
    email: "long.do@example.com",
    status: "Open"
  },
];