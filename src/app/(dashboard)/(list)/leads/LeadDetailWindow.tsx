import Image from "next/image"
import { useEffect, useState } from "react";
import AddingLeadActivityTimeline from "./AddingLeadActivityTimeline";
import { useLeadDetailSelect } from "@/providers/LeadDetailSelectProvider";
import LeadActivityTimelineSequence from "./LeadActivityTimelineSequence";
import UpLoadAvatar from "@/components/UpLoadAvatar";
import { useLeadStageColumn } from "@/providers/LeadStageColumnProvider";
import { LeadDetailType } from "@/lib/data.leads";

const LeadDetailWindow = () => {
  // LEAD DETAIL PROVIDER 
  const { removeSelectedLeadDetail, leadDetailInfo, leadSequenceActivity, updateALeadDetail } = useLeadDetailSelect();
  // LEAD STAGE PROVIDER 
  const { leadStage } = useLeadStageColumn();

  // UPDATE STATE 
  const [updateAvatar, setUpdateAvatar] = useState(leadDetailInfo?.avatarURL || "");
  const [updateCompany, setUpdateCompany] = useState(leadDetailInfo?.company || "");
  const [updateEmail, setUpdateEmail] = useState(leadDetailInfo?.email || "");
  const [updateJobTitle, setUpdateJobTitle] = useState(leadDetailInfo?.jobTitle || "");
  const [updateName, setUpdateName] = useState(leadDetailInfo?.name || "");
  const [updatePhone, setUpdatePhone] = useState(leadDetailInfo?.phone || "");
  const [updateRating, setUpdateRating] = useState(Number(leadDetailInfo?.rating) || 1);
  const [updateSource, setUpdateSource] = useState(leadDetailInfo?.source || "");
  const [updateStatus, setUpdateStatus] = useState<string | null>(leadDetailInfo?.status || null);

  // UPDATED FLAG
  const [isUpdated, setIsUpdated] = useState(false);
  // HANDLE CLICK CONFIRM CHANGE BUTTON
  const handleConfirmChangeToggle = () => {
    if (!leadDetailInfo) return;

    const newLeadDetail: LeadDetailType = {
      leadID: leadDetailInfo.leadID ?? "",
      avatarURL: updateAvatar || leadDetailInfo.avatarURL || "",
      name: updateName || leadDetailInfo.name || "",
      jobTitle: updateJobTitle || leadDetailInfo.jobTitle || "",
      company: updateCompany || leadDetailInfo.company || "",
      phone: updatePhone || leadDetailInfo.phone || "",
      email: updateEmail || leadDetailInfo.email || "",
      status: updateStatus || leadDetailInfo.status || "",
      source: updateSource || leadDetailInfo.source || "",
      nation: leadDetailInfo.nation ?? "",
      createdDate: leadDetailInfo.createdDate ?? "",
      rating: updateRating || leadDetailInfo.rating || 1,
    };

    updateALeadDetail(newLeadDetail);
    resetAllUpdatestate();
  };

  // RESET ALL UPDATE STATE
  const resetAllUpdatestate = () => {
    setUpdateAvatar(leadDetailInfo?.avatarURL || "");
    setUpdateCompany(leadDetailInfo?.company || "");
    setUpdateEmail(leadDetailInfo?.email || "");
    setUpdateJobTitle(leadDetailInfo?.jobTitle || "");
    setUpdatePhone(leadDetailInfo?.phone || "");
    setUpdateStatus(leadDetailInfo?.status || null);
    setIsUpdated(false);
  };

  // HANDLE ANY UPDATE FIELDS CHANGED
  useEffect(() => {
    if (!leadDetailInfo) return;

    if (
      updateAvatar !== leadDetailInfo.avatarURL ||
      updateCompany !== leadDetailInfo.company ||
      updateEmail !== leadDetailInfo.email ||
      updateJobTitle !== leadDetailInfo.jobTitle ||
      updateName !== leadDetailInfo.name ||
      updatePhone !== leadDetailInfo.phone ||
      updateRating !== Number(leadDetailInfo.rating) ||
      updateSource !== leadDetailInfo.source ||
      updateStatus !== leadDetailInfo.status
    ) {
      setIsUpdated(true);
    } else {
      setIsUpdated(false);
    }
  }, [
    updateAvatar,
    updateCompany,
    updateEmail,
    updateJobTitle,
    updateName,
    updatePhone,
    updateRating,
    updateSource,
    updateStatus,
    leadDetailInfo,
  ]);

  // PROCESSING BAR INITIALIZATION
  const [processingStatusBar, setProcessingStatusBar] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    leadStage.forEach((stage) => {
      initial[stage.status] = false;
    });
    return initial;
  });

  // PROCESSING BAR SYNC
  useEffect(() => {
    setProcessingStatusBar((prev) => {
      const newState = { ...prev };
      if (!updateStatus) return newState;

      let active = true;
      leadStage.forEach((stage) => {
        newState[stage.status] = active;
        if (stage.status === updateStatus) active = false;
      });

      return newState;
    });
  }, [updateStatus, leadStage]);

  // UPDATE LEAD DETAIL SYNC 
  useEffect(() => {
    if (!leadDetailInfo) return;

    setUpdateAvatar(leadDetailInfo.avatarURL || "");
    setUpdateCompany(leadDetailInfo.company || "");
    setUpdateEmail(leadDetailInfo.email || "");
    setUpdateJobTitle(leadDetailInfo.jobTitle || "");
    setUpdateName(leadDetailInfo.name || "");
    setUpdatePhone(leadDetailInfo.phone || "");
    setUpdateRating(Number(leadDetailInfo.rating) || 1);
    setUpdateSource(leadDetailInfo.source || "");
    setUpdateStatus(leadDetailInfo.status || null);

    setIsUpdated(false);
  }, [leadDetailInfo]);


  // HEADER SECTION
  const sectionHeader = ["Activity Timeline", "Deals"];
  const [selectedSectionHeader, setSelectedSectionHeader] =
    useState("Activity Timeline");


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
          <UpLoadAvatar avatar={updateAvatar ? updateAvatar : leadDetailInfo?.avatarURL} setAvatar={setUpdateAvatar} />
          <div>
            {/* LEAD NAME  */}
            <p className="text-[18px] font-semibold">{leadDetailInfo?.name}</p>
            {/* LEAD COMPANY  */}
            <p className="text-[12px] text-gray-500/80">{leadDetailInfo?.company}, {leadDetailInfo?.nation}</p>
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
          {
            isUpdated && (
              <>
                <div
                  onClick={() => handleConfirmChangeToggle()}
                  className={`cursor-pointer px-1 py-1 rounded-full border-blue-600/80 border-[1px] w-fit h-fit text-blue-600 hover:scale-[1.15] transition-all duration-500 ${isUpdated ? "text-green-500 border-green-500" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div
                  onClick={() => resetAllUpdatestate()}
                  className={`cursor-pointer px-1 py-1 rounded-full border-blue-600/80 border-[1px] w-fit h-fit text-blue-600 hover:scale-[1.15] transition-all duration-500 ${isUpdated ? "text-red-500 border-red-500" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
              </>
            )
          }
        </div>
      </div>
      {/* LEAD CONTACT INFORMATION  */}
      <div className="flex h-[80px] border-t-[1px] border-b-[1px] px-4 w-full justify-evenly">
        {/* JOB TITLE */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Job title</div>
          <input className="text-[14px] w-full h-fit font-semibold outline-none" type="text" value={updateJobTitle} onChange={(e) => setUpdateJobTitle(e.target.value)} />
        </div>

        {/* EMAIL */}
        <div className="w-1/6 h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Email</div>
          <input className="text-[14px] w-full h-fit font-semibold outline-none" type="text" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} />
        </div>

        {/* PHONE */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Phone</div>
          <input className="text-[14px] w-full h-fit font-semibold outline-none" type="text" value={updatePhone} onChange={(e) => setUpdatePhone(e.target.value)} />
        </div>

        {/* COMPANY */}
        <div className="w-fit h-full flex flex-col justify-center items-start">
          <div className="text-[12px] text-gray-500/90">Company</div>
          <input className="text-[14px] w-full h-fit font-semibold outline-none" type="text" value={updateCompany} onChange={(e) => setUpdateCompany(e.target.value)} />
        </div>

        {/* CREATED DATE */}
        <div className="w-1/6 h-full flex flex-col justify-center items-start">
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
            leadStage.map((stage, index) => {
              // FIRST ITEM
              if (index === 0) {
                return (
                  <div
                    key={index}
                    onClick={() => setUpdateStatus(stage.status)}
                    className={`
                  w-1/6 h-full flex rounded-tl-3xl rounded-bl-3xl
                  justify-center items-center text-[14px]
                  transition-all duration-300 cursor-pointer
                  ${processingStatusBar[stage.status]
                        ? "bg-[#BFF8C2] hover:bg-[#A4EEA8] text-[#2FA739]"
                        : "bg-gray-300/70 hover:bg-gray-300/90"
                      }
          `}
                  >
                    <div className="font-semibold flex gap-2 justify-center items-center">
                      {processingStatusBar[stage.status] && (
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
                      {stage.status}
                    </div>
                  </div>
                );
              }

              // LAST ITEM
              if (index === leadStage.length - 1) {
                return (
                  <div
                    key={index}
                    onClick={() => setUpdateStatus(stage.status)}
                    className={`
                  w-1/6 h-full flex rounded-tr-3xl rounded-br-3xl
                  justify-center items-center text-[14px]
                  transition-all duration-300 cursor-pointer
                  ${processingStatusBar[stage.status]
                        ? "bg-[#4CCB56] hover:bg-[#35B440] text-white"
                        : "bg-gray-300/70 hover:bg-gray-300/90 text-gray-600/60"
                      }
          `}
                  >
                    {processingStatusBar[stage.status] && (
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
                    {stage.status}
                  </div>
                );
              }

              // MIDDLE ITEMS
              return (
                <div
                  key={index}
                  onClick={() => setUpdateStatus(stage.status)}
                  className={`
                  w-1/6 h-full flex justify-center items-center text-[14px] 
                  transition-all duration-300 gap-2 cursor-pointer
                  ${processingStatusBar[stage.status]
                      ? updateStatus === stage.status
                        ? "bg-[#4CCB56] hover:bg-[#35B440] text-white"
                        : "bg-[#BFF8C2] hover:bg-[#A4EEA8] text-[#2FA739] font-semibold"
                      : "bg-gray-300/70 hover:bg-gray-300/90 text-gray-600/60"
                    }
        `}
                >
                  {processingStatusBar[stage.status] && (
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
                  {stage.status}
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
          <AddingLeadActivityTimeline />
        </div>
        {/* LeadActivityTimeLineSequence  */}
        <LeadActivityTimelineSequence sequenceActivity={leadSequenceActivity ? leadSequenceActivity : null} />

      </div>
    </div>
  )
}

export default LeadDetailWindow