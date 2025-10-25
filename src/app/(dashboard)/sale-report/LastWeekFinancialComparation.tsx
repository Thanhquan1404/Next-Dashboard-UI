import { lastWeekFinancialComparation } from "@/lib/data";
import FinancialComparationChart from "./FinancialComparationChart";

type chartPoint = {
  name: string,
  current: number,
  past: number,
};

type ComparationData = {
  name: string,
  currentAmount: number,
  status: string,
  percentage: number,
  pastAmount: number,
  chartData: chartPoint[],
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


const LastWeekFinancialComparation = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {lastWeekFinancialComparation.map((comparationReport: ComparationData, index: number) => {
        const isProfit = comparationReport.status === "profit";
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
            className="w-full h-fit lg:w-1/4 bg-white rounded-2xl border border-gray-200 cursor-pointer 
                      transform transition-all duration-300 
                      hover:scale-101 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
          >
            {/* TITLE AREA  */}
            <div className="py-4 flex flex-col gap-2 px-4">
              <span className="text-xs font-semibold text-gray-600">{comparationReport.name}</span>
              <h1 className="font-bold text-[20px]" >${moneyFormat(comparationReport.currentAmount)}</h1>
              <span className={`text-xs font-semibold flex flex-row ${isProfit ? "text-green-500" : "text-red-500"
                }`} >
                {arrowIcon}
                {comparationReport.percentage}%
              </span>
              <span className="text-[10px] text-gray-500 mt-1 block">vs ${moneyFormat(comparationReport.pastAmount)} last</span>
            </div>
            <FinancialComparationChart data={comparationReport.chartData} />
            <div className="border-t-2 text-[12px] px-4 py-6 flex flex-row justify-between">
              <span className="flex flex-row items-center gap-2">
                View More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </span>
              <span className="flex flex-row text-blue-500 items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download
              </span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default LastWeekFinancialComparation