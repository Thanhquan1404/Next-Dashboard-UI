const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700 border border-green-400",
  Pending: "bg-yellow-100 text-yellow-700 border border-yellow-400",
  Inactive: "bg-gray-100 text-gray-700 border border-gray-400",
  Failed: "bg-red-100 text-red-700 border border-red-400",
};

const StatusComponent = ({status}: {status: string}) => {
  const iconSize = "size-4";
  switch (status) {
    case "Active":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className={`text-xs  font-semibold`}>
            {status}
          </span>
        </div>
      );
    case "Pending":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className={`text-xs rounded-full font-semibold `}>
            {status}
          </span>
        </div>
      );
    case "Inactive":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <span className={`text-xs rounded-full font-semibold `}>
            {status}
          </span>
        </div>
      );
    case "Failed":
      return (
        <div className={`flex items-center gap-1 w-fit rounded-full ${statusColors[status]} px-2 py-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={iconSize}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z" />
          </svg>
          <span className={`text-xs font-semibold `}>
            {status}
          </span>
        </div>
      );
    default:
      return <span>{status}</span>;
  }
};

export default StatusComponent;