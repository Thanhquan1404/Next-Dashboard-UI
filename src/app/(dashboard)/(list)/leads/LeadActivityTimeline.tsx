const LeadActivityTimeline = () => {
  return (
    <div className="w-full flex-1 px-2 pt-4 flex flex-col gap-4 text-[13px]">

      {/* TEXTAREA */}
      <div className="w-full h-[200px] rounded-lg px-3 py-2 bg-gray-100 border border-gray-200">
        <textarea
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
            className="
                    border border-gray-300 rounded-lg px-2 py-1 h-[35px] bg-white text-sm
                    focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none
                  "
          >
            <option value="">Select member...</option>
            <option value="1">John Doe</option>
            <option value="2">Emily Carter</option>
            <option value="3">Michael Lee</option>
          </select>
        </div>

        {/* Closing date */}
        <div className="flex flex-col gap-1 w-[30%]">
          <label className="text-gray-500 text-[12px]">Closing date</label>
          <input
            type="date"
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
          className="
                  w-fit h-fit px-3 py-1
                  rounded-xl text-white text-[12px]
                  bg-[#4EA8FF]
                  shadow-sm
                  transition-all duration-300
                  hover:bg-[#3997F5] hover:shadow-md
                  active:scale-[0.97]
                "
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default LeadActivityTimeline