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

export const leadsInNewStatusSamples = [
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
  {
    leadID: "L004",
    avatarURL: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Phạm Minh Đào",
    createdDate: "2025-11-14T14:20:00+07:00",
    phone: "+84999888777",
    email: "dao.pham@example.com",
    status: "New"
  },
  {
    leadID: "L005",
    avatarURL: "https://randomuser.me/api/portraits/men/89.jpg",
    name: "Vũ Quốc Huy",
    createdDate: "2025-11-13T11:55:00+07:00",
    phone: "+84955667788",
    email: "huy.vu@example.com",
    status: "New"
  }
];