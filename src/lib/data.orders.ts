//-------------------- ORDER TABLE --------------------//
//****** HEADER TABLE *****/
export interface HeaderDataType {
  id: number,
  key: string,
  label: string,
  width: string,
  justifyItems: string,
}
export const tableHeaders: HeaderDataType[] = [
  {
    id: 1,
    key: "ORDERS",
    label: "Order",
    width: "w-[15%]",
    justifyItems: "justify-start",
  },
  {
    id: 2,
    key: "CREATEDDATE",
    label: "Created",
    width: "w-[20%]",
    justifyItems: "justify-start",
  },
  {
    id: 3,
    key: "FROMVENDOR",
    label: "Vendor",
    width: "w-[25%]",
    justifyItems: "justify-start",
  },
  {
    id: 4,
    key: "STATUS",
    label: "Status",
    width: "w-[8%]",
    justifyItems: "justify-center",
  },
  {
    id: 5,
    key: "ITEMRECEIVED",
    label: "items received",
    width: "w-[24%]",
    justifyItems: "justify-center",
  },
  {
    id: 6,
    key: "SENDMAIL",
    label: "Send mail",
    width: "w-[8%]",
    justifyItems: "justify-center",
  },
  {
    id: 7,
    key: "NULL",
    label: "",
    width: "w-[2%]",
    justifyItems: "justify-center"
  }
];
//***** TABLE BODY *****/
export interface TableOrderRowDataType {
  ORDERS: string;
  CREATEDDATE: string;
  FROMVENDOR: string;
  STATUS: string;
  ITEMORDER: number;
  ITEMRECEIVED: number;
  SENDEMAIL: boolean;
  NULL: string;
}

export const tableOrderData: TableOrderRowDataType[] = [
  {
    ORDERS: "#PO-2025-0001",
    CREATEDDATE: "2025-11-18 09:15:32",
    FROMVENDOR: "Công ty TNH Hà Nội Tech",
    STATUS: "Đã nhận đủ",
    ITEMORDER: 200,
    ITEMRECEIVED: 150,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0002",
    CREATEDDATE: "2025-11-17 14:22:10",
    FROMVENDOR: "Nhà cung cấp Sài Gòn Plastic",
    STATUS: "Chờ nhận hàng",
    ITEMORDER: 100,
    ITEMRECEIVED: 0,
    SENDEMAIL: false,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0003",
    CREATEDDATE: "2025-11-15 10:05:45",
    FROMVENDOR: "Viettel Solutions",
    STATUS: "Nhận một phần",
    ITEMORDER: 150,
    ITEMRECEIVED: 87,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0004",
    CREATEDDATE: "2025-11-20 08:30:00",
    FROMVENDOR: "Công ty Á Châu Electronics",
    STATUS: "Đã hủy",
    ITEMORDER: 100,
    ITEMRECEIVED: 0,
    SENDEMAIL: false,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0005",
    CREATEDDATE: "2025-11-19 16:45:12",
    FROMVENDOR: "Nhà máy Thép Hòa Phát",
    STATUS: "Nhận một phần",
    ITEMORDER: 500,
    ITEMRECEIVED: 420,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0006",
    CREATEDDATE: "2025-11-14 11:11:11",
    FROMVENDOR: "Công ty TNHH MTV Dệt May",
    STATUS: "Đã nhận đủ",
    ITEMORDER: 1500,
    ITEMRECEIVED: 1200,
    SENDEMAIL: false,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0007",
    CREATEDDATE: "2025-11-20 07:20:55",
    FROMVENDOR: "Nhà cung cấp Linh Kiện 247",
    STATUS: "Chờ nhận hàng",
    ITEMORDER: 100,
    ITEMRECEIVED: 0,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0008",
    CREATEDDATE: "2025-11-12 13:40:20",
    FROMVENDOR: "Công ty Thực phẩm phẩm Biển Xanh",
    STATUS: "Đã nhận đủ",
    ITEMORDER: 600,
    ITEMRECEIVED: 500,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0009",
    CREATEDDATE: "2025-11-16 17:55:33",
    FROMVENDOR: "Đối tác Logistics Toàn Cầu",
    STATUS: "Nhận một phần",
    ITEMORDER: 100,
    ITEMRECEIVED: 65,
    SENDEMAIL: false,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0010",
    CREATEDDATE: "2025-11-19 10:10:10",
    FROMVENDOR: "Nhà máy Gỗ An Cường",
    STATUS: "Đã nhận đủ",
    ITEMORDER: 500,
    ITEMRECEIVED: 300,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0011",
    CREATEDDATE: "2025-11-13 15:25:40",
    FROMVENDOR: "Công ty Hóa chất Đức Giang",
    STATUS: "Chờ nhận hàng",
    ITEMORDER: 100,
    ITEMRECEIVED: 0,
    SENDEMAIL: false,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0012",
    CREATEDDATE: "2025-11-18 11:33:22",
    FROMVENDOR: "Nhà cung cấp Bao bì Minh Phát",
    STATUS: "Nhận một phần",
    ITEMORDER: 2000,
    ITEMRECEIVED: 1800,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "#PO-2025-0013",
    CREATEDDATE: "2025-11-20 06:15:00",
    FROMVENDOR: "Công ty In ấn Sài Gòn",
    STATUS: "Chờ nhận hàng",
    ITEMORDER: 100,
    ITEMRECEIVED: 0,
    SENDEMAIL: false,
    NULL: ""
  },
  {
    ORDERS: "PO-2025-0014",
    CREATEDDATE: "2025-11-17 09:50:15",
    FROMVENDOR: "Nhà máy Nhựa Bình Minh",
    STATUS: "Đã nhận đủ",
    ITEMORDER: 3000,
    ITEMRECEIVED: 2500,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "PO-2025-0015",
    CREATEDDATE: "2025-11-19 14:20:30",
    FROMVENDOR: "Công ty Thiết bị Y tế Việt Nhật",
    STATUS: "Nhận một phần",
    ITEMORDER: 100,
    ITEMRECEIVED: 45,
    SENDEMAIL: true,
    NULL: ""
  },
  {
    ORDERS: "PO-2025-0016",
    CREATEDDATE: "2025-11-15 08:08:08",
    FROMVENDOR: "Nhà cung cấp Văn phòng phẩm 365",
    STATUS: "Đã nhận đủ",
    ITEMORDER: 1000,
    ITEMRECEIVED: 800,
    SENDEMAIL: false,
    NULL: ""
  },
  {
    ORDERS: "PO-2025-0017",
    CREATEDDATE: "2025-11-20 10:45:20",
    FROMVENDOR: "Công ty TNHH MTV Nông sản",
    STATUS: "Chờ nhận hàng",
    ITEMORDER: 600,
    ITEMRECEIVED: 400, 
    SENDEMAIL: false,
    NULL: ""
  }
]