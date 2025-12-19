"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import StatisticsHeader from "./StatisticsHeader";
import SummaryCards from "./SummaryCards";
import StatisticsGrid from "./StatisticGrid";
import useGetOrderRevenue from "@/fetching/sale-report/getOrderRevenue";
import PageLoader from "@/components/PageLoader";
import useGetQuotationRevenue from "@/fetching/sale-report/getQuotationRevenue";
import useGetTasksCompleted from "@/fetching/sale-report/getTasksCompleted";

const SalesStatisticsPage = () => {
  const {loading: getOrderRevenueLoading, getOrderRevenue} = useGetOrderRevenue();
  const {loading: getQuotationRevenueLoading, getQuotationRevenue} = useGetQuotationRevenue();
  const {loading: getTasksCompletedLoading, getTasksCompleted} = useGetTasksCompleted();


  const [statsData, setStatsData] = useState({
    orderRevenue: {
      name: "Order Revenue",
      currentAmount: 1757250000.00,
      pastAmount: 1496110000.00,
      percentage: 50,
      status: "profit" as const,
      chartData: [
        { name: "Mon", current: 0, past: 526680000.00 },
        { name: "Tue", current: 0, past: 969430000.00 },
        { name: "Wed", current: 1189100000.00, past: 0 },
        { name: "Thu", current: 481250000.00, past: 0 },
        { name: "Fri", current: 86900000.00, past: 0 },
        { name: "Sat", current: 0, past: 0 },
        { name: "Sun", current: 0, past: 0 }
      ]
    },
    quotationRevenue: {
      name: "Quotation Revenue",
      currentAmount: 1384900000.00,
      pastAmount: 5291550000.00,
      percentage: 73.83,
      status: "loss" as const,
      chartData: [
        { name: "Mon", current: 165000000.00, past: 54340000.00 },
        { name: "Tue", current: 0, past: 5237210000.00 },
        { name: "Wed", current: 470250000.00, past: 0 },
        { name: "Thu", current: 552750000.00, past: 0 },
        { name: "Fri", current: 196900000.00, past: 0 },
        { name: "Sat", current: 0, past: 0 },
        { name: "Sun", current: 0, past: 0 }
      ]
    },
    tasksCompleted: {
      name: "Tasks Completed",
      currentAmount: 17.00,
      pastAmount: 16.00,
      percentage: 6.25,
      status: "profit" as const,
      chartData: [
        { name: "Mon", current: 3.00, past: 1.00 },
        { name: "Tue", current: 4.00, past: 1.00 },
        { name: "Wed", current: 5.00, past: 5.00 },
        { name: "Thu", current: 2.00, past: 2.00 },
        { name: "Fri", current: 3.00, past: 1.00 },
        { name: "Sat", current: 0, past: 1.00 },
        { name: "Sun", current: 0, past: 5.00 }
      ]
    },
    leadConversion: {
      name: "Lead Conversion",
      currentAmount: 2.00,
      pastAmount: 10.00,
      percentage: 80.0,
      status: "loss" as const,
      chartData: [
        { name: "Mon", current: 0, past: 1.00 },
        { name: "Tue", current: 0, past: 0 },
        { name: "Wed", current: 0, past: 9.00 },
        { name: "Thu", current: 1.00, past: 0 },
        { name: "Fri", current: 1.00, past: 0 },
        { name: "Sat", current: 0, past: 0 },
        { name: "Sun", current: 0, past: 0 }
      ]
    }
  });

  // Calculate summary totals
  const totalRevenue = statsData.orderRevenue.currentAmount + statsData.quotationRevenue.currentAmount;
  const totalOrders = statsData.orderRevenue.currentAmount > 0 ? 1 : 0; // Simplified
  const totalTasks = statsData.tasksCompleted.currentAmount;
  const totalLeads = statsData.leadConversion.currentAmount;

  const handleRefresh = async () => {
    // TODO: Fetch fresh data from your API
    console.log("Refreshing data...");
    // Example: const data = await fetchStatistics();
    // setStatsData(data);
  };

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log("Exporting data...");
  };

  const fetching = useCallback(async() => {
    try{
      const orderRevenue = await getOrderRevenue();
      setStatsData(prev => ({...prev, orderRevenue: orderRevenue}))

      const quotationRevenue = await getQuotationRevenue();
      setStatsData(prev => ({...prev, quotationRevenue: quotationRevenue}))

      const tasksCompleted = await getTasksCompleted();
      setStatsData(prev => ({...prev, tasksCompleted: tasksCompleted}))
    }catch(error){
      console.error(String(error));
    }
  },[]);
  const didFetch = useRef<boolean>(false);
  useEffect(() => {
    if (didFetch.current){ return;}
    didFetch.current=true;
    fetching();
  }, []);

  if (getOrderRevenueLoading || getQuotationRevenueLoading || getTasksCompletedLoading){
    return (
      <PageLoader />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <StatisticsHeader
          onRefresh={handleRefresh}
          onExport={handleExport}
        />

        <SummaryCards
          totalRevenue={totalRevenue}
          totalOrders={totalOrders}
          totalTasks={totalTasks}
          totalLeads={totalLeads}
        />

        <StatisticsGrid
          orderRevenue={statsData.orderRevenue}
          quotationRevenue={statsData.quotationRevenue}
          tasksCompleted={statsData.tasksCompleted}
          leadConversion={statsData.leadConversion}
        />
      </div>
    </div>
  );
};

export default SalesStatisticsPage;