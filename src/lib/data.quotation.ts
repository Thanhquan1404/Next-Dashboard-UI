//---------------------------------------- QUOTATION TABLE -----------------------------------------
export type QuotationRow = {
  QuotationID?: string | null;
  CreatedAt?: string | null;
  CustomerName?: string | null;
  FinalAmount?: number | null;
  Status?: string | null;
  Items?: number | null;
  ValidUntil?: string | null;
};

export const quotationSamples: QuotationRow[] = [
  {
    QuotationID: "QT-2025-0001",
    CreatedAt: "2025-11-28T10:30:00Z",
    CustomerName: "Acme Industries Ltd.",
    FinalAmount: 15840.00,
    Status: "Sent",
    Items: 12,
    ValidUntil: "2025-12-28T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0002",
    CreatedAt: "2025-12-01T14:15:22Z",
    CustomerName: "Sarah Chen",
    FinalAmount: 3200.50,
    Status: "Draft",
    Items: 3,
    ValidUntil: "2026-01-01T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0003",
    CreatedAt: "2025-12-05T09:00:00Z",
    CustomerName: "Global Logistics GmbH",
    FinalAmount: 98765.00,
    Status: "Draft",
    Items: 45,
    ValidUntil: null, // not set yet for drafts
  },
  {
    QuotationID: "QT-2025-0004",
    CreatedAt: "2025-11-15T16:45:10Z",
    CustomerName: "Mike Johnson",
    FinalAmount: 5670.00,
    Status: "Expired",
    Items: 8,
    ValidUntil: "2025-12-15T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0005",
    CreatedAt: "2025-12-07T11:20:00Z",
    CustomerName: "BrightFuture Startup",
    FinalAmount: 12499.99,
    Status: "Draft",
    Items: 5,
    ValidUntil: "2026-01-07T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0006",
    CreatedAt: "2025-12-08T08:00:00Z",
    CustomerName: null, // new lead, name not entered yet
    FinalAmount: null,
    Status: "Draft",
    Items: 7,
    ValidUntil: null,
  },
  {
    QuotationID: "QT-2025-0001",
    CreatedAt: "2025-11-28T10:30:00Z",
    CustomerName: "Acme Industries Ltd.",
    FinalAmount: 15840.00,
    Status: "Sent",
    Items: 12,
    ValidUntil: "2025-12-28T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0002",
    CreatedAt: "2025-12-01T14:15:22Z",
    CustomerName: "Sarah Chen",
    FinalAmount: 3200.50,
    Status: "Sent",
    Items: 3,
    ValidUntil: "2026-01-01T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0003",
    CreatedAt: "2025-12-05T09:00:00Z",
    CustomerName: "Global Logistics GmbH",
    FinalAmount: 98765.00,
    Status: "Canceled",
    Items: 45,
    ValidUntil: null, // not set yet for drafts
  },
  {
    QuotationID: "QT-2025-0004",
    CreatedAt: "2025-11-15T16:45:10Z",
    CustomerName: "Mike Johnson",
    FinalAmount: 5670.00,
    Status: "Expired",
    Items: 8,
    ValidUntil: "2025-12-15T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0005",
    CreatedAt: "2025-12-07T11:20:00Z",
    CustomerName: "BrightFuture Startup",
    FinalAmount: 12499.99,
    Status: "Canceled",
    Items: 5,
    ValidUntil: "2026-01-07T23:59:59Z",
  },
  {
    QuotationID: "QT-2025-0006",
    CreatedAt: "2025-12-08T08:00:00Z",
    CustomerName: null, // new lead, name not entered yet
    FinalAmount: null,
    Status: "Canceled",
    Items: 7,
    ValidUntil: null,
  },
];

//---------------------------------------- QUOTATION STATISTIC -----------------------------------------
export type QuotationStatisticType = Record<string, number>;



//---------------------------------------- QUOTATION API RESPONSE -----------------------------------------
export interface QuotationItem {
  productId: string;
  name: string;
  discount: number;
  discountType: "PERCENT" | "AMOUNT" | string; 
  unitPrice: number;
  quantity: number;
  subtotal: number;
}

export interface UserRef {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  email: string;
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
}

export interface ApiResponseListAllQuotation {
  id: string;
  lead: Lead;
  title: string;
  content: string;
  validUntil: string; 
  status: "Draft" | "Sent" | "Accepted" | "Rejected" | "Expired" | string; 
  fileUrl: string | null;
  items: QuotationItem[];
  createdBy: UserRef;
  createdAt: string; 
  updatedAt: string; 
  untaxedAmount: number;
  finalAmount: number | null;
}