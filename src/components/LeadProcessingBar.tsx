import { useLeadStageColumn } from "@/providers/LeadStageColumnProvider";
import { useState, useEffect } from "react";

interface Props {
  currentStage: string;
  setCurrentStage: React.Dispatch<React.SetStateAction<string | null>>;
}

const LeadProcessingBar = ({ currentStage, setCurrentStage }: Props) => {
  // GET LEAD STAGE LIST 
  const { leadStage } = useLeadStageColumn();

  // PREPROCESS BAR STATE
  const [stagePreprocessingBar, setStagePreprocessingBar] = useState<Record<string, boolean>>({});
  let barLength = 0;
  // UPDATE BAR WHEN leadStage OR currentStage changes
  useEffect(() => {
    if (!leadStage || leadStage.length === 0) return;

    const bar: Record<string, boolean> = {};
    let active = true;

    leadStage.forEach((stage) => {
      bar[stage.status] = active;
      if (stage.status === currentStage) active = false;
    });

    barLength = leadStage.length;
    setStagePreprocessingBar(bar);
  }, [leadStage, currentStage]);  

  return (
    <div className="w-full h-fit py-4 px-4 flex flex-col gap-2">
      <div className="text-[12px] font-semibold py-1">Leads Details</div>

      <div className="w-full h-[40px] flex gap-2">
        {leadStage?.map((stage, index) => {
          const isActive = stagePreprocessingBar[stage.status];
          const isCurrent = currentStage === stage.status;

          // CSS BASE
          const base =
            `w-1/${leadStage.length} h-full flex justify-center items-center text-[14px] transition-all duration-300 cursor-pointer gap-2`;

          // COLOR LOGIC
          const color = isActive
            ? isCurrent
              ? "bg-[#4CCB56] hover:bg-[#35B440] text-white"
              : "bg-[#BFF8C2] hover:bg-[#A4EEA8] text-[#2FA739] font-semibold"
            : "bg-gray-300/70 hover:bg-gray-300/90 text-gray-600/60";

          // SHAPE FOR FIRST / LAST
          const shape =
            index === 0
              ? "rounded-tl-3xl rounded-bl-3xl"
              : index === leadStage.length - 1
                ? "rounded-tr-3xl rounded-br-3xl"
                : "";

          return (
            <div
              key={index}
              onClick={() => setCurrentStage(stage.status)}
              className={`${base} ${color} ${shape}`}
            >
              {isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
              {stage.status}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeadProcessingBar;
