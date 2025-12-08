const HEX_BLUE = "#3B82F6";

const QuotationPageHeader = () => {
  return (
    <div
      className="
        w-full h-[100px]
        flex items-center justify-between
        px-5 shadow-md
        rounded-xl
        bg-white
        border
      "
      style={{ borderColor: `${HEX_BLUE}20` }}
    >
      {/* LEFT: TITLE */}
      <div className="flex flex-col justify-center">
        <span className="text-[20px] font-semibold text-gray-800">
          Quotation List
        </span>
        <span className="text-[12px] text-gray-500">
          View and manage all listed quotations easily
        </span>
      </div>

      {/* RIGHT: ACTION */}
      <button
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-lg
          text-sm font-medium
          text-white
          transition
          hover:opacity-90
        "
        style={{ backgroundColor: HEX_BLUE }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        New Quotation
      </button>
    </div>
  );
};

export default QuotationPageHeader;
