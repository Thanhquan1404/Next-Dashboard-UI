"use client";
import {Avatar} from "@mui/material";
import { tableRowDataType } from "@/lib/data";

// table header
type TableHeaderEntry = {
  id: number;
  key: keyof tableRowDataType; 
  label: string;
  width: string;
};
const headers: TableHeaderEntry[] = [
  { id: 1, key: "info",       label: "Info",        width: "flex-1 min-w-64 max-w-96" },   
  { id: 2, key: "customerID", label: "Customer ID", width: "w-30" },
  { id: 3, key: "majority",   label: "Majority",    width: "w-20" },
  { id: 4, key: "company",    label: "Company",     width: "w-30" },
  { id: 5, key: "phone",      label: "Phone",       width: "w-36" },
  { id: 6, key: "address",    label: "Address",     width: "w-56" },
  { id: 7, key: "actions",    label: "Actions",     width: "w-32" },                     
];

const CustomerTable = ({data}: {data: tableRowDataType[]}) => {
  const handleClickFunction = (event: any) => {
    const element = event.currentTarget.closest("tr");
    console.log(element);
  }
  console.log("CustomerTable data:", data, Array.isArray(data));
  
  return (
    <div className="w-full h-full overflow-x-auto">
      <table className="w-full border-collapse">
        {/* TABLE HEADER */}
        <thead className=" text-gray-600 uppercase text-[12px]">
          <tr>
            {headers.map((header) => {
              if (header.label === "Info" || header.label === "Actions"){
                return (
                  <th
                    key={header.id}
                    className={`px-3 py-2 text-left cursor-pointer text-[10px] tracking-wide ${header.width}`}
                  >
                    {header.label}
                  </th>
                );
              }
              return (
              <th
                key={header.id}
                className={`px-3 py-2 text-left cursor-pointer text-[10px] tracking-wide hidden md:table-cell ${header.width}`}
              >
                {header.label}
              </th>);
            })}
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="bg-white text-sm">
          {data.map((row, rowIndex) => (
            <tr
              id={row.customerID}
              key={rowIndex}
              className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-150 odd:bg-gray-100  "
            >
              {headers.map((header, colIndex) => {
                if (header.label !== "Actions") {
                  if (header.label === "Info"){
                    return (
                      <td key={colIndex} className="px-3 py-2 flex gap-2 items-center">
                        <Avatar sx={{width: "30px", height: "30px"}} src="https://avatar.iran.liara.run/public"/>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-semibold">{row[header.key]}</span>
                          <span className="text-xs text-gray-500">{row["gmail"]}</span>
                        </div>
                      </td>
                    );
                  }

                  return (
                    <td key={colIndex} className="px-3 py-2 text-xs hidden md:table-cell">
                      <span>{row[header.key]}</span>
                    </td>
                  );
                }
                return (
                  <td key={colIndex} >
                    <div className="w-3/4 h-fit flex items-center justify-center gap-2 ">
                      <button id={row["customerID"]} className="bg-white p-1 rounded-xl border-b border-blue-500" onClick={handleClickFunction}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                      <button id={row["customerID"]} className="bg-white p-1 rounded-xl border-b border-blue-500" onClick={handleClickFunction}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </td>
                );

              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
