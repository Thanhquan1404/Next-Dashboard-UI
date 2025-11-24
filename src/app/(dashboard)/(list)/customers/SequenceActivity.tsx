import { customerSequenceActivity } from "@/lib/data.customers";
import { useState } from "react";

const SequenceActivity = () => {
  const customerID = "001";
  const customerSequenceActivities = customerSequenceActivity.find((item) => item.customerID === customerID);

  const [isViewMore, setIsViewMore] = useState<boolean>(false);

  return (
    <div className='w-full h-full flex flex-col min-h-0'>
      {/* TITLE  */}
      <div className="w-full h-fit flex py-2">
        <div className="w-1/2 px-4 text-[14px] text-gray-500">
          Activity
        </div>
        <div className="w-1/2 flex justify-end px-4">
          <button className="text-[10px] px-2 font-medium" onClick={() => {
            console.log("cl")
            setIsViewMore( prev => !prev)}}>
            { isViewMore ? "View Less Activity" : "View More Activity"}
          </button>
        </div>
      </div>
      {/* SEQUENCE ACTIVITY  */}
      <div className={ `w-full flex-1 px-4 flex flex-col gap-2 min-h-0 ${isViewMore ? "overflow-y-auto" : "overflow-hidden"} `}>
        {
          customerSequenceActivities && customerSequenceActivities.sequenceActivities.map((item, index) => {
            if (index === 0) {
              return (
                <div key={index} className={`flex gap-2 items-center`}>
                  {/* STATUS ICON  */}
                  <div className="w-[25px] h-[25px] bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  {/* CONTENT  */}
                  <div className="w-[90%]">
                    <span className="text-[12px] font-semibold">{item.subject}</span> <span className="text-[12px] text-gray-500/90">{item.verb}</span> <span className="text-[12px] font-semibold">{item.object}</span> <br />
                    <span className="text-[10px] text-gray-500 ">
                      {item.date}
                    </span>
                  </div>
                </div>
              );
            }
            return (
              <div key={index} className="flex gap-2 items-center">
                {/* STATUS ICON  */}
                <div className="w-[25px] h-[25px] bg-gray-300/80 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                {/* CONTENT  */}
                <div className="w-[90%]">
                  <span className="text-[12px] font-semibold">{item.subject}</span> <span className="text-[12px] text-gray-500/90">{item.verb}</span> <span className="text-[12px] font-semibold">{item.object}</span> <br />
                  <span className="text-[10px] text-gray-500 ">
                    {item.date}
                  </span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default SequenceActivity