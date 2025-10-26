"use client";
import { Avatar } from "@mui/material";
import { salesDataRow, saleRow  } from "@/lib/data";
import { nationAvatar } from "./nationAvatarIndentification";
// table header datatype
type TableHeaderEntry = {
  id: number;
  key: keyof saleRow;
  label: string;
  width: string;
};
// table header data
const tableHeader: TableHeaderEntry[] = [
  { id: 1, key: "NameUser", label: "Name User", width: "w-2/5" },  
  { id: 2, key: "Company", label: "Company", width: "w-1/12" },
  { id: 3, key: "Phone", label: "Phone", width: "w-1/5" },
  { id: 4, key: "JoiningData", label: "Joining Date", width: "w-1/6" },
  { id: 5, key: "Projects", label: "Projects", width: "w-1/12" },
  { id: 6, key: "Status", label: "Status", width: "w-1/12" },
];
// pre-built layout for Active-Pending-Inactive-Failed icon
const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700 border border-green-400",
  Pending: "bg-yellow-100 text-yellow-700 border border-yellow-400",
  Inactive: "bg-gray-100 text-gray-700 border border-gray-400",
  Failed: "bg-red-100 text-red-700 border border-red-400",
};

const statusComponent = (status: string) => {
  const iconSize = "size-4";
  switch (status) {
    case "Active":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className={`text-xs  font-semibold`}>
            {status}
          </span>
        </div>
      );
    case "Pending":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className={`text-xs rounded-full font-semibold `}>
            {status}
          </span>
        </div>
      );
    case "Inactive":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <span className={`text-xs rounded-full font-semibold `}>
            {status}
          </span>
        </div>
      );
    case "Failed":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z" />
          </svg>
          <span className={`text-xs font-semibold `}>
            {status}
          </span>
        </div>
      );
    default:
      return <span>{status}</span>;
  }
};

const SaleTableDetail = () => {
  return (
    <div className="overflow-x-auto border border-gray-200 shadow-sm mt-2">
      <table className="w-full text-sm text-gray-700">
        {/* HEADER */}
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-[12px]">
          <tr>
            {tableHeader.map((data) => (
              <th
                key={data.id}
                className={`px-6 py-3 text-left font-semibold tracking-wide border-b border-blue-400 ${data.width}`}
              >
                {data.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-white">
          {salesDataRow.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-blue-50 cursor-pointer transition-colors duration-200 border-b last:border-none"
            >
              {tableHeader.map((col, j) => (
                <td key={j} className="px-6 py-3">
                  {col.key === "Status" ? (
                    statusComponent(row[col.key])
                  ) : col.key === "NameUser" ? (
                    <div className="flex flex-row gap-2 items-center">
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={row["UserAvatar"]}
                      />
                      <span className="font-medium text-gray-800">
                        {row[col.key]}
                      </span>
                    </div>
                  ) : col.key === "Phone" ? (
                    <div className="flex flex-row gap-2 items-center">
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={nationAvatar(row["Phone"])}
                      />
                      <span className="font-medium text-gray-800">
                        {row[col.key]}
                      </span>
                    </div>
                  ) : (
                    <span className="font-medium text-gray-800">
                      {String(row[col.key] ?? "")}
                    </span>
                  )}
                </td>
              ))}
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaleTableDetail;
