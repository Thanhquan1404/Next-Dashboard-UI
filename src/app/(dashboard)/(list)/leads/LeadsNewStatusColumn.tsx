import Image from "next/image";
import { leadsInNewStatusSamples } from "@/lib/data.leads";

const LeadsNewStatusColumn = () => {
  return (
    <div className="w-1/4 h-full flex flex-col gap-4">
      {/* HEADER  */}
      <div className="
        w-full h-[45px] px-4 flex justify-between items-center
        bg-gray-100 rounded-md
        bg-white  
        shadow-sm 
        hover:bg-green-50 hover:border-green-400 hover:shadow-md hover:scale-[1.01]
        transition-all duration-200 ease-out cursor-pointer
      ">

        {/* STATUS + CIRCLE */}
        <div className="flex gap-2 items-center text-gray-700 font-semibold text-sm">
          <div className="w-[14px] h-[14px] rounded-full bg-green-400 shadow-sm" />
          New
        </div>

        {/* LEAD COUNT */}
        <div className="
          bg-gray-200 px-2 py-[3px] rounded-md shadow-sm
          text-gray-700 text-xs
          hover:bg-gray-300 transition-colors duration-200
        ">
          {leadsInNewStatusSamples.length} leads
        </div>

      </div>

      {/* LEAD COMPONENT  */}
      {
        leadsInNewStatusSamples.map((leadItem) => {
          return (
            <div key={leadItem.leadID} draggable className="
        bg-white rounded-xl w-full px-4 py-3 shadow-sm border border-gray-200
        hover:shadow-lg hover:border-blue-400 hover:-translate-y-[2px]
        transition-all duration-200 ease-out cursor-pointer
      ">
              {/* PERSONAL INFORMATION */}
              <div className="flex items-center gap-3 pb-3 border-b">
                <Image src={`${leadItem.avatarURL}`} width={42} height={42} alt="Profile image"
                  className="rounded-full shadow-sm"
                />
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 text-sm">
                      Andrew Peterson
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
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

                  <span className="text-xs text-gray-400">Today 10:30PM</span>
                </div>
              </div>

              {/* CONTACT DETAILS + STATUS */}
              <div className="pt-3 flex flex-col gap-2 text-sm text-gray-600">

                {/* PHONE */}
                <div className="flex gap-2 items-center hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="size-4">
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
                  603 555-0123
                </div>

                {/* EMAIL */}
                <div className="flex gap-2 items-center hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="size-4">
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
                  andrew@example.com
                </div>

                {/* LEAD STATUS */}
                <div className="
            bg-yellow-400/90 text-yellow-900 px-2 py-1 rounded-lg w-fit text-xs font-medium
            shadow-sm
          ">
                  In Process
                </div>
              </div>
            </div>
          );
        })
      }

    </div>
  );
};

export default LeadsNewStatusColumn;
