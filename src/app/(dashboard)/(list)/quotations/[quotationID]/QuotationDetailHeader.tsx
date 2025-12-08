import { ApiResponseListAllQuotation } from "@/lib/data.quotation";
import QuotationStatusComponent from "../QuotationStatusComponent";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import useSendMailQuotation from "@/fetching/quotation/sendMailQuotation";
import { useNotification } from "@/providers/NotificationProvider";
import FetchingLoadingStatus from "@/components/FetchingLoadingStatus";

interface Props {
  quotationDetail: ApiResponseListAllQuotation,
}
const QuotationDetailHeader = ({quotationDetail}: Props) => {
  // ROUTER
  const router = useRouter();
  // NOTIFICATION
  const { showNotification } = useNotification();
  // API HOOKS
  const {loading: sendMailQuotationLoading, sendMailQuotation} = useSendMailQuotation();

  const handleSendMail = async () => {
    try{
      const success = await sendMailQuotation(quotationDetail.id);

      if (success){
        showNotification("Send mail successfully");
      }else{
        showNotification("There is error in send mail", true);
      }
    }catch(error){
      showNotification(String(error), true);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition" onClick={() => router.push("/quotations")}>
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div>
                <div className="flex gap-4"> 
                  <h1 className="text-2xl font-bold text-gray-900">{quotationDetail.title}</h1>
                  <QuotationStatusComponent status={quotationDetail.status} />
                </div>
                <p className="text-sm text-gray-500 mt-1">ID: {quotationDetail.id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {quotationDetail.fileUrl ? (
                <a
                  href={quotationDetail.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 text-xs rounded-lg hover:bg-blue-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download PDF</span>
                </a>
              ) : (
                sendMailQuotationLoading ? 
                  <FetchingLoadingStatus loading={sendMailQuotationLoading} color={"blue"} size={10} />
                :
                <div 
                  onClick={() => handleSendMail()}
                  className="text-xs bg-blue-600 px-2 py-1.5  text-white rounded-lg opacity-70 hover:opacity-100 hover:shadow-lg transition-all duration-350 cursor-pointer">
                  Send mail
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

export default QuotationDetailHeader