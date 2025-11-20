import { moneyFormat } from "@/util/moneyFormat"
import Image from "next/image"

const OrderHeader = () => {
  const total = 32
  const inStock = 22
  const processing = 10
  const cancelled = 10

  const inStockPct = (inStock / total) * 100
  const processingPct = (processing / total) * 100
  const cancelledPct = (cancelled / total) * 100

  return (
    <div className="w-full bg-white flex items-center gap-6 p-4">
      
      {/* LEFT — TOTAL VALUES */}
      <div className="flex items-center gap-4 w-[22%]">
        <div className="p-3 bg-blue-100 rounded-xl flex items-center justify-center">
          <Image
            src="/vietnamese-dong.png"
            alt="Vietnamese dong logo"
            width={36}
            height={36}
          />
        </div>

        <div>
          <p className="text-gray-500 text-sm font-medium">TOTAL ASSET VALUE</p>
          <h1 className="text-xl font-bold text-gray-800">{moneyFormat(10200322)}đ</h1>
        </div>
      </div>

      {/* RIGHT — STATUS */}
      <div className="flex-1 flex flex-col gap-3 border-l-[2px] px-[25px]">
        
        {/* PRODUCT COUNT */}
        <div className="text-gray-700 text-sm font-medium">
          <span className="font-semibold text-[20px]">{total}</span> products
        </div>

        {/* STACKED PROGRESS BAR */}
        <div className="w-[60%] h-4 bg-gray-200 rounded-full overflow-hidden flex">
          <div
            className="bg-green-500"
            style={{ width: `${inStockPct}%` }}
          />
          <div
            className="bg-gray-600"
            style={{ width: `${processingPct}%` }}
          />
          <div
            className="bg-red-500"
            style={{ width: `${cancelledPct}%` }}
          />
        </div>

        {/* LEGEND */}
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-gray-600">In stock:</span><span className="font-semibold text-[15px]">{inStock}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="text-gray-600">Processing:</span><span className="font-semibold text-[15px]">{processing}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-gray-600">Cancelled:</span><span className="font-semibold text-[15px]">{cancelled}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderHeader
