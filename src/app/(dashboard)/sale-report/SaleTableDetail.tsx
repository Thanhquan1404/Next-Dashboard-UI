"use client";
import { Avatar } from "@mui/material";
import { salesDataRow, saleRow } from "@/lib/data";
import { nationAvatar } from "./nationAvatarIndentification";
import { useMemo, useState } from "react";
import SortIcon from "../../../components/SortIcon";
import StatusComponent from "./StatusComponent";

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

const SaleTableDetail = () => {
  // sort function when click on header
  /// useState component for handling the sort column and sor direction
  const [sort, setSort] = useState<{ columnName: keyof saleRow; direction: "asc" | "desc" }>({
    columnName: "NameUser" as keyof saleRow,
    direction: "asc",
  });
  /// Set the direction whenever click on header
  const sortFunction = (header: TableHeaderEntry) => {
    setSort((prev) => ({
      columnName: header.key,
      direction:
        prev.columnName === header.key ? (prev.direction === "asc" ? "desc" : "asc") : "asc",
    }));
  }
  /// make the array sorted base on a specific columnName
  const sortedData = useMemo(() => {
    const arr = [...salesDataRow];
    arr.sort((a, b) => {
      const valA = a[sort.columnName];
      const valB = b[sort.columnName];

      if (typeof valA === "number" && typeof valB === "number") {
        return sort.direction === "asc" ? valA - valB : valB - valA;
      }
      return sort.direction === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
    return arr;
  }, [sort]);

  return (
    <div className="overflow-x-auto border border-gray-200 shadow-sm mt-2">
      <table className="w-full text-sm text-gray-700">
        {/* HEADER */}
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-[12px]">
          <tr>
            {tableHeader.map((data) => (
              <th
                key={data.id}
                className={`px-6 py-3 text-left cursor-pointer font-semibold tracking-wide border-b border-blue-400 ${data.width}`}
                onClick={() => sortFunction(data)}
              >
                <div className="flex gap-2">
                  {sort.columnName === data.key && <SortIcon direction={sort.direction} className={"size-4"} />}
                  <span>{data.label}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-white">
          {sortedData.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-blue-50 cursor-pointer transition-colors duration-200 border-b last:border-none"
            >
              {tableHeader.map((col, j) => (
                  <td key={j} className="px-6 py-3">
                    {col.key === "Status" ? (
                      <StatusComponent status={row["Status"]} />
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
