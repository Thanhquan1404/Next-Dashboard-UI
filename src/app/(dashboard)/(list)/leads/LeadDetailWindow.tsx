import Image from "next/image"
import { useEffect, useState } from "react";
import LeadActivityTimeline from "./LeadActivityTimeLine";
import { leadProcessingStatus } from "@/lib/data.leads";
import { useLeadDetailSelect } from "@/providers/LeadDetailSelectProvider";

const LeadDetailWindow = () => {
  // INITIALIZE LEAD SELECT CONTEXT 
  const { removeSelectedLeadDetail, leadDetailInfo} = useLeadDetailSelect();
  
  // INITIAlIZE LEAD STATUS PROCESSING BAR 
  const processingBar: leadProcessingStatus[] = ["New", "Contacted", "Interested", "Qualified", "Negotiation", "Won-Lost"];
  type leadProcessingBar = Record<leadProcessingStatus, boolean>;
  const [processingStatusBar, setProcessingStatusBar] = useState<leadProcessingBar>({
    New: false,
    Contacted: false,
    Interested: false,
    Qualified: false,
    Negotiation: false,
    "Won-Lost": false,
  });
  const [currentStatus, setCurrentStatus] = useState<leadProcessingStatus | null>(null);

  // MATCHING PROCESSING STATUS BAR WITH CURRENT STATUS BAR
  useEffect(() => {
    setProcessingStatusBar(prev => {
      const newState: leadProcessingBar = { ...prev };
      if (currentStatus === null) { return newState };
      let active = true;

      for (const status of processingBar) {
        newState[status] = active;
        if (status === currentStatus) active = false;
      }

      return newState;
    });
  }, [currentStatus]);
  // LEAD ACTIVITY AND RECENT DEALS
  const sectionHeader = ["Activity Timeline", "Deals"];
  const [selectedSectionHeader, setSelectedSectionHeader] = useState<string>("Activity Timeline");

  

  return (
    <div className='w-full h-full bg-white pt-5 rounded-xl flex flex-col'>
      {/* LEAD GENERAL INFORMATION  */}
      <div className="w-full h-fit flex justify-between px-4 pb-4 border-gray-300/80">
        {/* AVATAR AND NAME  */}
        <div className="flex items-center gap-2">
          <div 
            onClick={() => removeSelectedLeadDetail()}
            className="h-full rounded-xl flex items-center px-1 hover:bg-blue-500/80 hover:text-white/80 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          <Image src={`${leadDetailInfo?.avatarURL ? leadDetailInfo.avatarURL : "/profile.png"}`} alt="Lead avatar" width={35} height={35} className="rounded-full"/>
          <div>
            {/* LEAD NAME  */}
            <p className="text-[18px] font-semibold">{leadDetailInfo?.name}</p>
            {/* LEAD COMPANY  */}
            <p className="text-[12px] text-gray-500/80">AABC Firm, USA</p>
          </div>
        </div>

        {/* PHONE AND EMAIL BUTTON  */}
        <div className="flex gap-2 items-center">
          <div className="px-1 py-1 rounded-full border-blue-600/80 border-[1px] w-fit h-fit text-blue-600 hover:scale-[1.15] transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>

          <div className="px-1 py-1 rounded-full border-blue-600/80 border-[1px] w-fit h-fit text-blue-600 hover:scale-[1.15] transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
        </div>
      </div>
      {/* LEAD CONTACT INFORMATION  */}
      <div className="flex h-[80px] border-t-[1px] border-b-[1px] px-4 w-full justify-between">
        {/* JOB TITLE */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Job title</div>
          <div className="text-[14px] font-semibold">{leadDetailInfo?.jobTitle}</div>
        </div>

        {/* EMAIL */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Email</div>
          <div className="text-[14px] font-semibold">{leadDetailInfo?.email}</div>
        </div>

        {/* PHONE */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Phone</div>
          <div className="text-[14px] font-semibold">{leadDetailInfo?.phone}</div>
        </div>

        {/* COMPANY */}
        <div className="w-fit h-full flex flex-col justify-center items-startr">
          <div className="text-[12px] text-gray-500/90">Company</div>
          <div className="text-[14px] font-semibold">ABC Firm</div>
        </div>

        {/* CREATED DATE */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Created at</div>
          <div className="text-[14px] font-semibold">
            {leadDetailInfo?.createdDate
              ? new Date(leadDetailInfo.createdDate).toLocaleString("vi-VN")
              : "-"}
          </div>
        </div>

        {/* ASSIGN TO */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Assign to</div>
          <div className="text-[14px] font-semibold">John Doe</div>
        </div>
      </div>
      {/* LEAD PROCESSING BAR  */}
      <div className="w-full h-fit py-4 px-4 flex flex-col gap-2">
        <div className="text-[12px] font-semibold py-1">
          Leads Details
        </div>
        <div className="w-full h-[40px] flex gap-2">
          {
            processingBar.map((status, index) => {
              // FIRST ITEM
              if (index === 0) {
                return (
                  <div
                    key={index}
                    onClick={() => setCurrentStatus(status)}
                    className={`
                  w-1/6 h-full flex rounded-tl-3xl rounded-bl-3xl
                  justify-center items-center text-[14px]
                  transition-all duration-300 cursor-pointer
                  ${processingStatusBar[status]
                        ? "bg-[#BFF8C2] hover:bg-[#A4EEA8] text-[#2FA739]"
                        : "bg-gray-300/70 hover:bg-gray-300/90"
                      }
          `}
                  >
                    <div className="font-semibold flex gap-2 justify-center items-center">
                      {processingStatusBar[status] && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      )}
                      {status}
                    </div>
                  </div>
                );
              }

              // LAST ITEM
              if (index === processingBar.length - 1) {
                return (
                  <div
                    key={index}
                    onClick={() => setCurrentStatus(status)}
                    className={`
                  w-1/6 h-full flex rounded-tr-3xl rounded-br-3xl
                  justify-center items-center text-[14px]
                  transition-all duration-300 cursor-pointer
                  ${processingStatusBar[status]
                        ? "bg-[#4CCB56] hover:bg-[#35B440] text-white"
                        : "bg-gray-300/70 hover:bg-gray-300/90 text-gray-600/60"
                      }
          `}
                  >
                    {processingStatusBar[status] && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )}
                    {status}
                  </div>
                );
              }

              // MIDDLE ITEMS
              return (
                <div
                  key={index}
                  onClick={() => setCurrentStatus(status)}
                  className={`
                  w-1/6 h-full flex justify-center items-center text-[14px] 
                  transition-all duration-300 gap-2 cursor-pointer
                  ${processingStatusBar[status]
                      ? currentStatus === status
                        ? "bg-[#4CCB56] hover:bg-[#35B440] text-white"
                        : "bg-[#BFF8C2] hover:bg-[#A4EEA8] text-[#2FA739] font-semibold"
                      : "bg-gray-300/70 hover:bg-gray-300/90 text-gray-600/60"
                    }
        `}
                >
                  {processingStatusBar[status] && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  )}
                  {status}
                </div>
              );
            })
          }
        </div>
      </div>
      {/* LEAD ACTIVITY AND RECENT DEALS */}
      <div className="w-full flex-1 flex px-4 py-4 gap-2">
        <div className="w-[70%] h-full border border-gray-200 rounded-xl px-4 py-3 flex flex-col shadow-sm bg-white">

          {/* HEADER SECTION (tabs) */}
          <div className="w-full h-[35px] flex gap-4 border-b border-gray-200">
            {sectionHeader.map((section, index) => {
              const isActive = selectedSectionHeader === section;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedSectionHeader(section)}
                  className={`
                    relative text-[12px] h-full font-semibold
                    flex justify-center items-center px-3 cursor-pointer
                    transition-all duration-300 select-none
                    ${isActive ? "text-[#0A66A3]" : "text-gray-600 hover:text-[#0582D2]"}
                  `}
                >
                  {section}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-[3px] rounded-full
                      bg-gradient-to-r from-[#3BAEF0] to-[#0582D2]
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0"}
                    `}
                  ></span>

                  {/* Homer hover animation (when inactive) */}
                  {!isActive && (
                    <span
                      className="
                        absolute bottom-0 left-0 h-[3px] bg-[#AEE3FF] rounded-full
                        scale-x-0 origin-left transition-transform duration-300
                        hover:scale-x-100
                      "
                    ></span>
                  )}
                </div>
              );
            })}
          </div>

          {/* ACTIVITY TIME LINE */}
          <LeadActivityTimeline />
        </div>
        {/* LeadActivityTimeLineSequence  */}
        <div className="flex-1 h-full border border-gray-200 rounded-xl px-4 py-3 
                flex flex-col shadow-sm bg-white gap-3">

          {/* HEADER */}
          <div className="text-[14px] font-semibold text-gray-700">
            Recent {selectedSectionHeader}
          </div>

          {/* CARD */}
          <div className="h-[110px] w-full border border-gray-100 rounded-xl px-3 py-3
                  bg-gray-50 hover:bg-gray-100/70 transition-all duration-300
                  shadow-inner flex flex-col justify-between">

            {/* CLOSING DATE */}
            <div className="text-[12px] text-gray-500/80">Closing date</div>
            <div className="text-[13px] font-semibold text-gray-700">
              {selectedSectionHeader} ID
            </div>

            {/* AMOUNT */}
            <div className="text-[12px] text-gray-500/80">Amount</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeadDetailWindow