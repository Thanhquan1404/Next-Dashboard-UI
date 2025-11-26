import { LeadDetailActivityTimeline } from "@/lib/data.leads";
import { CalendarClock, PackageOpen, TrendingUp } from "lucide-react";
import Rating from '@mui/material/Rating';
interface Props {
  sequenceActivity: LeadDetailActivityTimeline[] | null;
}

const LeadActivityTimelineSequence = ({ sequenceActivity }: Props) => {
  const hasActivities = sequenceActivity && sequenceActivity.length > 0;

  return (
    <div className="flex-1 h-full border border-gray-200 rounded-xl px-5 py-4 
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
              className="h-[110px] w-full border border-gray-200 rounded-xl px-4 py-3
                         bg-gradient-to-r from-gray-50/80 to-gray-50 
                         hover:from-blue-50/90 hover:to-indigo-50/40 
                         hover:border-blue-200 hover:shadow-md
                         transition-all duration-300 cursor-default
                         flex flex-col justify-between"
            >
              {/* CLOSING DATE */}
              <div className="flex items-center justify-between">
                <span className="text-[11.5px] font-medium text-gray-500">
                  Expected Close: 
                </span>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 
                                 px-2.5 py-0.5 rounded-full">
                  {activity.closingDate
                    ? new Date(activity.closingDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Not set"}
                </span>
              </div>

              {/* ACTIVITY TITLE */}
              <div className="text-[13.5px] font-semibold text-gray-800 line-clamp-2 leading-tight">
                {activity.title}
              </div>

              {/* FOOTER: Assign + Rate */}
              <div className="flex items-center justify-between text-[11.5px]">
                <div className="flex items-center gap-2">
                  
                  <span className="font-medium text-gray-700">{activity.assignTo}</span>
                </div>

                <div className="flex items-center gap-1.5 ">
                  <div>
                    <Rating
                      size="small"
                      readOnly
                      className="font-bold text-amber-600"
                      name="simple-controlled"
                      value={activity.rate}
                    />
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