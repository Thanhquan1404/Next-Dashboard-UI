"use client";

import { useState, useRef, useEffect } from "react";

const STATUS_MAP: Record<string, string> = {
  PENDING: "bg-blue-500/60",
  DONE: "bg-green-500/60",
  EXPIRED: "bg-red-500/60",
};

const STATUS_LIST = ["PENDING", "DONE", "EXPIRED"] as const;

interface Props {
  leadActivityStatus: string;
  notChange: boolean;
}

const LeadActivityStatus = ({
  leadActivityStatus,
  notChange,
}: Props) => {
  const [activityStatus, setActivityStatus] = useState<string>(leadActivityStatus);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentStyle = STATUS_MAP[activityStatus] ?? "bg-gray-400/60";

  return (
    <div ref={ref} className="relative inline-block">
      {/* Selector */}
      <button
        type="button"
        disabled={notChange}
        onClick={() => !notChange && setOpen(v => !v)}
        className={`
          flex items-center gap-2 px-2 py-1.5 rounded-xl text-[11px]
          text-white font-medium transition
          ${currentStyle}
          ${notChange ? "cursor-not-allowed opacity-100" : "hover:opacity-90"}
        `}
      >
        {activityStatus}
        {
          !notChange ?
            (
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            )
            :
            ("")
        }
      </button>

      {/* Dropdown */}
      {open && !notChange && (
        <div className="absolute left-0 mt-2 w-[100px] rounded-xl bg-white shadow-lg border z-20">
          {STATUS_LIST.map(status => (
            <button
              key={status}
              onClick={() => {
                if (!notChange) setActivityStatus(status);
                setOpen(false);
              }}
              className={`
                w-full text-left px-3 py-2 text-xs
                hover:bg-gray-100 first:rounded-t-xl last:rounded-b-xl
                ${status === leadActivityStatus ? "font-semibold" : ""}
              `}
            >
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${STATUS_MAP[status]} text-[11px]`}
              />
              {status}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadActivityStatus;
