"use client";

import Image from "next/image";
import { leadType, ColumnKey } from "@/lib/data.leads";
import { useState } from "react";
import Rating from '@mui/material/Rating';
import LeadSourceComponent from "@/components/LeadSourceComponent";
import { useLeadDetailSelect } from "@/providers/LeadDetailSelectProvider";
interface Props {
  leadItems: leadType[];
  dragStartEvent: (e: React.DragEvent<HTMLDivElement>, leadID: string) => void;
  dropEvent: (statusColumnName: ColumnKey) => void;
  dragOverEvent: (e: React.DragEvent<HTMLDivElement>) => void;
  handleAddingNewLead: (newLead: leadType) => void,
}

const LeadsNewStatusColumn = ({
  leadItems,
  dragStartEvent,
  dropEvent,
  dragOverEvent,
  handleAddingNewLead,
}: Props) => {
  // STATE 
  const [isBeingDragged, setIsBeingDragged] = useState(false);
  // ADDING LEAD TOGGLE STATE 
  const [addingLeadToggle, setAddingLeadToggle] = useState<boolean>(false);
  // HANDLE ADDING A NEW LEAD 
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [leadRate, setLeadRate] = useState("");
  // RESET ALL STATE
  const resetAllState = () => {
    setLeadName("");
    setLeadPhone("");
    setLeadEmail("");
    setLeadRate("");
    setLeadSource("");
  }
  // HANDLE SAVE BUTTON TOGGLE
  const handleSaveButtonToggle = () => {
    const newLead: leadType = {
      leadID: crypto.randomUUID(),
      avatarURL: "",
      name: leadName,
      createdDate: new Date().toISOString(),
      phone: leadPhone,
      email: leadEmail,
      rating: Number(leadRate),
      source: leadSource,
      status: "New",
    };
    handleAddingNewLead(newLead);
    resetAllState();
  }
  // INITIALIZE LEAD SELECT CONTEXT 
  const {selectLeadDetail} = useLeadDetailSelect();
  
  return (
    <div
      className={`
        w-1/4 h-full flex flex-col gap-4 p-2 rounded-xl border
        transition-all duration-200 ease-out
        ${isBeingDragged
          ? "bg-gray-50 border-gray-400 shadow-lg scale-[1.01]"
          : "bg-white/30 border-transparent"
        }
      `}
      onDrop={(e) => {
        e.preventDefault();
        setIsBeingDragged(false);
        dropEvent("newStatus");
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
          <div className="w-[14px] h-[14px] rounded-full bg-gray-400 shadow-sm" />
          New
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
          onClick={() => selectLeadDetail(leadItem.leadID)}
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
              src={!leadItem.avatarURL ? "/profile.png" : leadItem.avatarURL}
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

            {/* LEAD STATUS AND RATING */}
            <div className="w-full flex gap-1 items-center">
              <div
                className="
                bg-gray-400/90 text-gray-900 px-2 py-1 rounded-lg 
                w-fit text-[10px] font-medium shadow-sm
              "
              >
                {leadItem.status}
              </div>
              <div>
                <LeadSourceComponent leadSource={leadItem.source} />
              </div>
              <div>
                <Rating
                  size="small"
                  readOnly
                  name="simple-controlled"
                  value={leadItem.rating}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {
        addingLeadToggle ? (
          <div className="w-full flex flex-col gap-2">

            {/* Lead Name */}
            <input
              placeholder="Lead name"
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full
                   focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />

            {/* Phone */}
            <input
              placeholder="Phone"
              value={leadPhone}
              onChange={(e) => setLeadPhone(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full
                   focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />

            {/* Email */}
            <input
              placeholder="Email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full
                   focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />

            {/* Lead Source */}
            <div className="flex gap-2">
              <select
                value={leadSource}
                onChange={(e) => setLeadSource(e.target.value)}
                className={`border border-gray-300 rounded-md px-2 py-1 text-sm w-full bg-white
                   focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none ${!leadSource && "text-gray-500"}`}
              >
                <option value="">Lead Source</option>
                <option value="Facebook">Facebook</option>
                <option value="Website">Website</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Form">Form</option>
              </select>

              {/* Lead Status */}
              <select
                value={leadRate}
                onChange={(e) => setLeadRate(e.target.value)}
                className={`border border-gray-300 rounded-md px-2 py-1 text-sm w-full bg-white
                   focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none ${!leadRate && "text-gray-500"}`}
              >
                <option value="">Rate</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* Save + Cancel */}
            <div className="flex gap-2 w-full">

              <button
                disabled={!leadName || !leadPhone || !leadEmail || !leadRate}
                onClick={() => {
                  handleSaveButtonToggle();
                  setAddingLeadToggle(prev => !prev)
                }}
                className={`
            px-3 py-1.5 rounded-md text-xs font-medium w-1/2 transition-all duration-150
            ${!leadName || !leadPhone || !leadEmail || !leadRate
                    ? "bg-blue-300 text-white cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.97]"}
          `}
              >
                Save
              </button>

              <button
                className="px-3 py-1.5 bg-gray-300/50 text-xs font-medium rounded-md w-1/2
                     hover:scale-[1.05] active:scale-[0.97] transition-all duration-150"
                onClick={() => {
                  setAddingLeadToggle((prev) => !prev)
                  resetAllState();
                }}
              >
                Cancel
              </button>

            </div>
          </div>
        ) : (
          <div
            className="
              flex justify-center items-center gap-1 px-3 py-1.5
              border border-gray-300 bg-white
              text-xs font-medium text-gray-700
              rounded-full cursor-pointer select-none
              transition-all duration-200
              hover:shadow-md hover:bg-gray-50 hover:scale-[1.03]
              active:scale-[0.97]
            "
            onClick={() => setAddingLeadToggle(prev => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>New</span>
          </div>
        )
      }
    </div>
  );
};

export default LeadsNewStatusColumn;
