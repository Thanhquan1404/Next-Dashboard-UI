import Image from "next/image";

const QuotationStatistic = () => {
  return (
    <div className="w-full h-[100px] flex gap-5 px-2">
      
      {/* CREATE */}
      <div className="w-1/4 h-full rounded-3xl px-4 py-3 flex bg-gray-100 shadow-lg">
        
        {/* LEFT CONTENT */}
        <div className="w-2/3 h-full flex flex-col justify-center gap-1">
          <span className="text-sm text-gray-600">
            Draft Quotation
          </span>
          <span className="text-[26px] font-semibold text-gray-900">
            490
          </span>
        </div>

        {/* RIGHT ICON */}
        <div className="w-1/3 h-full flex items-start justify-end">
          <div className="px-3 py-2 rounded-2xl border border-gray-300 bg-white">
            <Image src="/profile.png" alt="statistic icon" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* SENT */}
      <div className="w-1/4 h-full rounded-3xl px-4 py-3 flex bg-green-100 shadow-lg">
        <div className="w-2/3 h-full flex flex-col justify-center gap-1">
          <span className="text-sm text-green-600">
            Sent Quotation
          </span>
          <span className="text-[26px] font-semibold text-gray-900">
            182
          </span>
        </div>

        <div className="w-1/3 h-full flex items-start justify-end">
          <div className="px-3 py-2 rounded-2xl border border-green-300 bg-white">
            <Image src="/profile.png" alt="statistic icon" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* EXPIRED */}
      <div className="w-1/4 h-full rounded-3xl px-4 py-3 flex bg-yellow-100 shadow-lg">
        <div className="w-2/3 h-full flex flex-col justify-center gap-1">
          <span className="text-sm text-yellow-700">
            Expired
          </span>
          <span className="text-[26px] font-semibold text-gray-900">
            37
          </span>
        </div>

        <div className="w-1/3 h-full flex items-start justify-end">
          <div className="px-3 py-2 rounded-2xl border border-yellow-300 bg-white">
            <Image src="/profile.png" alt="statistic icon" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* CANCELED */}
      <div className="w-1/4 h-full rounded-3xl px-4 py-3 flex bg-red-100 shadow-lg">
        <div className="w-2/3 h-full flex flex-col justify-center gap-1">
          <span className="text-sm text-red-600">
            Canceled
          </span>
          <span className="text-[26px] font-semibold text-gray-900">
            21
          </span>
        </div>

        <div className="w-1/3 h-full flex items-start justify-end">
          <div className="px-3 py-2 rounded-2xl border border-red-300 bg-white">
            <Image src="/profile.png" alt="statistic icon" width={20} height={20} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default QuotationStatistic;
