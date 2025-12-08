//---------------------------------------- QUOTATION TABLE -----------------------------------------
export type QuotationRow = {
  QuotationID?: string | null;
  QuotationContent?: string | null;
  CreatedAt?: string | null;
  CustomerName?: string | null;
  FinalAmount?: number | null;
  Status?: string | null;
  Items?: number | null;
  ValidUntil?: string | null;
};

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