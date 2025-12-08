interface Props {
  status: string;
}

const STATUS_STYLES: Record<string, string> = {
  "Sent": "bg-emerald-100 text-emerald-700 border border-emerald-200",
  "Draft": "bg-gray-100 text-gray-700 border",
  "Expired": "bg-yellow-100 text-yellow-700 border border-yellow-200",
  "Canceled": "bg-red-100 text-red-700 border border-red-200",
};

const QuotationStatusComponent = ({ status }: Props) => {
  const style =
    STATUS_STYLES[status] || "bg-gray-100 text-gray-700 border border-gray-300";

  return (
    <div
      className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center justify-center whitespace-nowrap ${style}`}
    >
      {status}
    </div>
  );
};

export default QuotationStatusComponent;
