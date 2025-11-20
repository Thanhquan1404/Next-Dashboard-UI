"use client";

import { lastWeekFinancialData } from "@/lib/data";

type Report = {
  title: string;
  amount: number;
  duration: string;
  status: string;
  percentage: number;
};

const moneyFormat = (money: number): string => {
  if (money >= 1_000_000) {
    // Convert to million with one decimal (e.g., 1,000,000 → "1.0M")
    return `${(money / 1_000_000).toFixed(1)}M`;
  } else if (money >= 1_000) {
    // Use locale formatting for thousands (e.g., 23,500 → "23,500")
    return money.toLocaleString();
  } else {
    // Just return normal number
    return money.toString();
  }
};


const LastWeekFinancialReport = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {lastWeekFinancialData.map((saleReport: Report, index: number) => {
        const isProfit = saleReport.status === "profit";
        const arrowColor = isProfit ? "text-green-500" : "text-red-500";

        const arrowIcon = isProfit ? (
          // Up arrow
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-5 ${arrowColor}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        ) : (
          // Down arrow
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-5 ${arrowColor}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6 15 12.75l-4.306-4.306a11.95 11.95 0 0 0-5.814 5.518l-2.74 1.22m0 0 5.94 2.281m-5.94-2.28 2.28-5.941"
            />
          </svg>
        );

        return (
          <div
            key={index}
            className="w-full lg:w-1/4 bg-white rounded-2xl p-4 border border-gray-200 cursor-pointer 
                       transform transition-all duration-300 
                       hover:scale-101 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
          >
            {/* Title */}
            <span className="text-xs font-semibold text-gray-600">{saleReport.title}</span>

            {/* Main info */}
            <div className="flex gap-2 items-center mt-2">
              <h1 className="font-bold text-[20px]">${moneyFormat(saleReport.amount)}</h1>
              {arrowIcon}
              <span
                className={`text-xs font-semibold ${
                  isProfit ? "text-green-500" : "text-red-500"
                }`}
              >
                {isProfit ? "+" : "-"}
                {saleReport.percentage}%
              </span>
            </div>

            {/* Duration */}
            <span className="text-xs text-gray-500 mt-1 block">
              {saleReport.duration}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LastWeekFinancialReport;
