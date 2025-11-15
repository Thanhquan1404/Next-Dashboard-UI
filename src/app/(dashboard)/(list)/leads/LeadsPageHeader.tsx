import SelectorComponent from "@/components/SelectorComponent";
import { statusOptions, companyOptions } from "@/lib/data.leads";

interface Props {
  selectedStatus: string,
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>,
  selectedCompany: string,
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>,
}
const LeadsPageHeader = ({selectedStatus, setSelectedStatus, setSelectedCompany, selectedCompany}: Props) => {
  return (
    <div className="w-full h-[120px] px-4 py-4">
      <div className="w-full h-1/2 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">
          Leads
        </div>
        <button
          className="bg-blue-500 px-3 py-2 flex gap-2 items-center rounded-lg text-white text-sm shadow-md hover:bg-blue-600 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ease-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          New opportunity
        </button>
      </div>

      <div className="w-full h-1/2 mt-2 flex justify-between items-center">
        <div className="w-1/3 flex gap-3">
          <SelectorComponent
            width="w-fit"
            rounded="rounded-lg"
            label=""
            options={statusOptions}
            optionSelector={selectedStatus}
            setOptionSelector={setSelectedStatus}
          />
          <SelectorComponent
            width="w-fit"
            rounded="rounded-lg"
            label=""
            options={companyOptions}
            optionSelector={selectedCompany}
            setOptionSelector={setSelectedCompany}
          />
        </div>

        <div className="flex gap-2 text-sm px-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
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
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
          Filter
        </div>
      </div>
    </div>
  )
}

export default LeadsPageHeader