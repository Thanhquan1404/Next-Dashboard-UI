"use client";

import Image from "next/image";
import { leadType, ColumnKey } from "@/lib/data.leads";
import { useState } from "react";

interface Props {
  leadItems: leadType[];
  dragStartEvent: (e: React.DragEvent<HTMLDivElement>, leadID: string) => void;
  dropEvent: (statusColumnName: ColumnKey) => void;
  dragOverEvent: (e: React.DragEvent<HTMLDivElement>) => void;
}

const LeadsInProgressStatusColumn = ({
  leadItems,
  dragStartEvent,
  dropEvent,
  dragOverEvent,
}: Props) => {
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  return (
    <div
      className={`
        w-1/4 h-full flex flex-col gap-4 p-2 rounded-xl border
        transition-all duration-200 ease-out
        ${isBeingDragged
          ? "bg-yellow-50 border-yellow-400 shadow-lg scale-[1.01]"
          : "bg-white/30 border-transparent"
        }
      `}
      onDrop={(e) => {
        e.preventDefault();
        setIsBeingDragged(false);
        dropEvent("inProgressingStatus");
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsBeingDragged(true);
        dragOverEvent(e);
      }}
      onDragLeave={() => setIsBeingDragged(false)}
    >
      {/* HEADER */}
      <div
        className="
          w-full h-[45px] px-4 flex justify-between items-center
          rounded-lg bg-white shadow-sm border border-gray-200
          hover:shadow-md transition-all duration-200
        "
      >
        <div className="flex gap-2 items-center text-gray-700 font-semibold text-sm">
          <div className="w-[14px] h-[14px] rounded-full bg-yellow-400 shadow-sm" />
          In Progess
        </div>

        <div className="bg-gray-200 px-2 py-[3px] rounded-md shadow-sm text-gray-700 text-xs">
          {leadItems.length} leads
        </div>
      </div>

      {/* LEAD CARDS */}
      {leadItems.map((leadItem) => (
        <div
          key={leadItem.leadID}
          draggable
          onDragStart={(e) => dragStartEvent(e, leadItem.leadID)}
          className="
            bg-white rounded-xl px-4 py-3 
            border border-gray-200 shadow-sm
            hover:shadow-lg hover:border-blue-400 hover:-translate-y-[2px]
            transition-all duration-200 cursor-pointer
          "
        >
          {/* PERSONAL INFO */}
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <Image
              src={leadItem.avatarURL}
              width={42}
              height={42}
              alt="Profile image"
              className="rounded-full shadow-sm"
            />
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700 text-sm">
                  {leadItem.name}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="size-5 text-gray-500 hover:text-blue-500 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 1 1 
                    0-1.5.75.75 0 0 1 0 1.5ZM12 
                    12.75a.75.75 0 1 1 0-1.5.75.75 
                    0 0 1 0 1.5ZM12 18.75a.75.75 0 
                    1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </div>

              <span className="text-xs text-gray-400">
                {new Date(leadItem.createdDate).toLocaleString("vi-VN")}
              </span>
            </div>
          </div>

          {/* CONTACT */}
          <div className="pt-3 flex flex-col gap-2 text-sm text-gray-600">

            {/* PHONE */}
            <div className="flex gap-2 items-center hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" fill="none"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 
                  15 15h2.25a2.25 2.25 0 0 0 
                  2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 
                  1.293c-.282.376-.769.542-1.21.38a12.035 
                  12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 
                  3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 
                  2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              {leadItem.phone}
            </div>

            {/* EMAIL */}
            <div className="flex gap-2 items-center hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" fill="none"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 
                  2.25 0 0 1-2.25 2.25h-15a2.25 
                  2.25 0 0 1-2.25-2.25V6.75m19.5 
                  0A2.25 2.25 0 0 0 19.5 
                  4.5h-15a2.25 2.25 0 0 0-2.25 
                  2.25m19.5 0v.243a2.25 2.25 0 
                  0 1-1.07 1.916l-7.5 
                  4.615a2.25 2.25 0 0 
                  1-2.36 0L3.32 8.91a2.25 
                  2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {leadItem.email}
            </div>

            {/* LEAD STATUS */}
            <div
              className="
                bg-yellow-400/90 text-yellow-900 px-2 py-1 rounded-lg 
                w-fit text-xs font-medium shadow-sm
              "
            >
              {leadItem.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadsInProgressStatusColumn;
