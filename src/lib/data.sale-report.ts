//----------------------------------------GET SALE REPOST RESPONSE AND RESQUEST TYPE----------------------------------------//
export interface RevenueChartData {
  name: string;          
  current: number;       
  past: number;         
}

export interface ApiResponseSaleReportStatisticType {
  name: string;          
  currentAmount: number; 
  pastAmount: number;    
  percentage: number;    
  status: "profit" | "loss" | "neutral";
  chartData: RevenueChartData[];
}
