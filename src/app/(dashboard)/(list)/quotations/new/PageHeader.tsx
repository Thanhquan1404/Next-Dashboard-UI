interface Props {
  validToSendEmail: boolean,
  title?: string;
  onChange?: (newTitle: string) => void;
}


const PageHeader = ({ title = "New quotation", onChange, validToSendEmail }: Props) => {
  return (
    <div className=" p-2 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4  bg-white">
        <div className="flex items-center justify-between "> 
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={title}
              placeholder="New quotation"
              onChange={(e) => onChange?.(e.target.value)}
              className="text-lg font-semibold text-gray-800 bg-transparent outline-none w-fit min-w-[190px] max-w-[200px] "
            />

            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Draft
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm">
              Cancel
            </button>

            <button className={`px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 rounded-lg flex items-center gap-1 text-sm ${!validToSendEmail && "opacity-50" }`} disabled={validToSendEmail}>
              Save
            </button>

            <button disabled={validToSendEmail} className={`px-4 py-2 bg-blue-600 text-white text-sm cursor-pointer rounded-lg ${!validToSendEmail ? "bg-gray-500" : "hover:bg-blue-700"}`}>
              Send Email
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PageHeader;
