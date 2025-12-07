import { ApiResponseDataLeadActivity, LeadDetailActivityTimeline } from "@/lib/data.leads";
import { CalendarClock, PackageOpen, TrendingUp } from "lucide-react";
import Rating from '@mui/material/Rating';
import LeadActivityStatus from "@/components/LeadActivityStatus";
interface Props {
  sequenceActivity: ApiResponseDataLeadActivity[] | null;
}

const LeadActivityTimelineSequence = ({ sequenceActivity }: Props) => {
  const hasActivities = sequenceActivity && sequenceActivity.length > 0;

  return (
    <div className="flex-1 border border-gray-200 rounded-xl px-5 py-4 h-full
                    flex flex-col shadow-sm bg-white">

      {/* HEADER */}
      <div className="flex items-center gap-2 text-[14px] font-semibold text-gray-700 mb-4">
        Recent Activities
      </div>

      {/* EMPTY STATE – PROFESSIONAL & CLEAN */}
      {!hasActivities ? (
        <div className="flex-1 flex flex-col items-center justify-center py-16 text-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 
                            rounded-full flex items-center justify-center">
              <PackageOpen className="w-11 h-11 text-blue-500 opacity-80" />
            </div>
          </div>

          <h3 className="text-[13px] font-semibold text-gray-800 mb-2">
            No activities yet
          </h3>
        </div>
      ) : (
        /* ACTIVITIES LIST */
        <div className="space-y-3 overflow-y-auto flex-1 pr-1 -mr-1">
          {sequenceActivity.map((activity, index) => (
            <div
              key={index}
              className="h-fit w-full border border-gray-200 rounded-xl px-4 py-3
                         bg-gradient-to-r from-gray-50/80 to-gray-50 
                         hover:from-blue-50/90 hover:to-indigo-50/40 
                         hover:border-blue-200 hover:shadow-md
                         transition-all duration-300 cursor-default
                         flex flex-col justify-between"
            >
              {/* CLOSING DATE */}
              <div className="flex items-center justify-between">
                <div className="flex">
                  <span className="text-[11.5px] font-medium text-gray-500">
                    Expected Close:
                  </span>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 
                                 px-2.5 py-0.5 rounded-full">
                    {activity.validUntil}
                  </span>
                </div>
                <div 
                  onClick={() => console.log(activity.id)}
                  className="hover:opacity-100 opacity-0 transition-all duration-500 cursor-pointer flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>

              </div>

              {/* ACTIVITY TITLE */}
              <div className="text-[13.5px] font-semibold text-gray-800 line-clamp-2 leading-tight py-2 my-2">
                {activity.content}
              </div>

              {/* FOOTER: Assign + Rate */}
              <div className="flex items-center justify-between text-[11.5px]">
                <div className="flex items-center gap-2">

                  <LeadActivityStatus leadActivityStatus={activity.status} notChange={activity.completed} />
                </div>

                <div className="flex items-center gap-1.5 ">
                  <div className="text-green-500">
                    {activity.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadActivityTimelineSequence;