import { LeadDetailActivityTimeline } from "@/lib/data.leads";
import { listUserSamples } from "@/lib/data.user"
import { useLeadDetailSelect } from "@/providers/LeadDetailSelectProvider";
import { useNotification } from "@/providers/NotificationProvider";
import { useState } from "react"

// CREATE A NEW LEAD ACTIVITY 
const createLeadActivity = (
  inputTitle: string,
  inputAssignTo: string,
  inputRate: string,
  inputClosingDate: string
): LeadDetailActivityTimeline => {
  const title = inputTitle.trim();
  const assignToId = inputAssignTo.trim();
  const rateStr = inputRate.trim();
  const closingDate = inputClosingDate.trim();

  if (!title) throw new Error("Please enter a title");
  if (!assignToId) throw new Error("Please select who to assign to");
  if (!rateStr || isNaN(Number(rateStr)) || Number(rateStr) < 1 || Number(rateStr) > 5) throw new Error("Please select a valid rate (1-5)");
  if (!closingDate) throw new Error("Please select a closing date");

  const assignedUser = listUserSamples.find((item) => item.UserID === assignToId);
  if (!assignedUser) throw new Error("Selected user not found");
  const selectedDate = new Date(closingDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate <= today) {
    throw new Error("Closing date must be in the future (tomorrow or later)");
  }
  return {
    title,
    assignTo: assignedUser.username,
    rate: Number(rateStr),
    closingDate,
  };
};

const AddingLeadActivityTimeline = () => {
  const resetAllState = () => {
    setInputTitle("");
    setInputAssignTo("");
    setInputClosingDate("");
    setInputRate("");
  }
  // STATE
  const { showNotification} = useNotification();
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputClosingDate, setInputClosingDate] = useState<string>("");
  const [inputRate, setInputRate] = useState<string>("");
  const [inputAssignTo, setInputAssignTo] = useState<string>("");

  const {addingNewLeadActivity} = useLeadDetailSelect();

  const handleAddingNewLead = () => {
    try {
      const newActivity = createLeadActivity(
        inputTitle,
        inputAssignTo,
        inputRate,
        inputClosingDate,
      );

      addingNewLeadActivity(newActivity);
      showNotification("Activity added successfully!", false);

      // Reset form
      resetAllState();
    } catch (error: any) {
      showNotification(error.message, true); 
      resetAllState();
    }
  };
  return (
    <div className="w-full flex-1 px-2 pt-4 flex flex-col gap-4 text-[13px]">

      {/* TEXTAREA */}
      <div className="w-full h-[200px] rounded-lg px-3 py-2 bg-gray-100 border border-gray-200">
        <textarea
          onChange={(e) => setInputTitle(e.target.value)}
          value={inputTitle ? inputTitle : ""}
          className="w-full h-full bg-transparent resize-none outline-none text-gray-700"
          placeholder="Type new activities..."
        ></textarea>
      </div>

      {/* FORM ROW */}
      <div className="w-full flex flex-1 gap-6 items-start">

        {/* Assign To */}
        <div className="flex flex-col gap-1 w-[30%]">
          <label className="text-gray-500 text-[12px]">Assign to</label>
          <select
            value={inputAssignTo ? inputAssignTo : ""}
            onChange={(e) => setInputAssignTo(e.target.value)}
            className="
                    border border-gray-300 rounded-lg px-2 py-1 h-[35px] bg-white text-sm
                    focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none
                  "
          >
            <option value={""}>Assign to</option>
            {
              listUserSamples.map( (userInfo, index) => {
                return (
                  <option key={index} value={userInfo.UserID}>{userInfo.username}</option>
                );
              })
            }
          </select>
        </div>

        {/* Closing date */}
        <div className="flex flex-col gap-1 w-[30%]">
          <label className="text-gray-500 text-[12px]">Closing date</label>
          <input
            type="date"
            value={inputClosingDate ? inputClosingDate : ""}
            onChange={(e) => setInputClosingDate(e.target.value)}
            className="
                    border border-gray-300 rounded-lg px-2 py-1 h-[35px] bg-white text-sm
                    focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all 
                    outline-none text-gray-700
                  "
          />
        </div>

        {/* Rate */}
        <div className="flex flex-col gap-1 w-[20%]">
          <label className="text-gray-500 text-[12px]">Rate</label>
          <select
            value={inputRate ? inputRate : ""}
            onChange={(e) => setInputRate(e.target.value)}
            className="
                    border border-gray-300 rounded-lg px-2 py-1 h-[35px] bg-white text-sm
                    focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none
                  "
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

      </div>

      <div className="h-[30px] w-full flex justify-between">
        {/* RESET BUTTON */}
        <button
          onClick={() => resetAllState()}
          className="
                  w-fit h-fit px-3 py-1
                  border border-gray-300 text-gray-600
                  rounded-xl text-[12px]
                  transition-all duration-300
                  hover:bg-gray-100 hover:text-gray-700
                  active:scale-[0.97]
                "
        >
          Reset
        </button>

        {/* SAVE BUTTON */}
        <button
          onClick={() => handleAddingNewLead()}
          className={`
            w-fit h-fit px-3 py-1
            rounded-xl text-white text-[12px]
            bg-blue-500/70
            shadow-sm
            transition-all duration-300
            hover:bg-blue-500 hover:shadow-md
            active:scale-[0.97]
          `}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AddingLeadActivityTimeline