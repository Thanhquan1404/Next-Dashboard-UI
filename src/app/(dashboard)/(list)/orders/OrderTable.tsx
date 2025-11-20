import { HeaderDataType, tableOrderData, TableOrderRowDataType, tableHeaders } from "@/lib/data.orders";
import OrderStatusComponent from "./OrderStatusComponent";


const OrderTable = () => {
  return (
    <div className='p-4 flex-1 w-full overflow-y-auto'>
      {/* TABLE HEADER  */}
      <div className="w-full h-[8%] py-2 flex items-center justify-between">

        {/* SEARCH BAR */}
        <div className="w-[22%] h-full flex items-center gap-2 px-3 rounded-full border border-gray-300 bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            className="flex-1 bg-transparent text-sm focus:outline-none"
            placeholder="Search..."
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="w-[22%] h-full flex items-center gap-3 justify-end">

          {/* FILTER */}
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-gray-400 text-gray-700 hover:border-red-500 hover:text-red-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Delete
          </button>

          {/* NEW ORDER */}
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
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
            New order
          </button>

        </div>

      </div>

      {/* ORDER TABLE  */}
      <div className="w-full h-[92%] py-2 overflow-y-auto ">
        <table className="w-full border-separate border-spacing-y-1 ">
          <thead>
            <tr className="text-gray-400 font-semibold text-sm bg-gray-100/50">
              {tableHeaders.map((header) => (
                <th
                  key={header.id}
                  className={`py-2 px-2 ${header.width}`}
                // onClick={() => sortFunction(header)}
                >
                  <div className={`flex ${header.justifyItems} items-center gap-1 cursor-pointer`}>
                    <span>{header.label}</span>
                    {/* {sort.columnName === header.key && (
                    <SortIcon direction={sort.direction} className="size-4" />
                  )} */}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableOrderData.map((row, index) => (
              <tr
                key={index}
                className="h-[40px] text-sm text-gray-700 hover:bg-blue-100 transition-colors duration-200 "
              >
                {tableHeaders.map((column, idx) => {
                  if (column.key === "STATUS") {
                    return (
                      <td
                        key={idx}
                        className={`${column.width} py-2`}
                      >
                        <div className={`flex ${column.justifyItems} items-center`}>
                          <OrderStatusComponent status={row.STATUS} />
                        </div>
                      </td>
                    )
                  }
                  if (column.key === "ITEMRECEIVED") {
                    const received = row.ITEMRECEIVED;
                    const total = row.ITEMORDER ?? row.ITEMRECEIVED; // adjust based on your real data
                    const percentage = (received / total) * 100;

                    return (
                      <td key={idx} className={`${column.width} py-2 px-4`}>
                        <div className="flex items-center gap-2 w-full">

                          {/* PROGRESS BAR */}
                          <div className="w-[80%] h-[5px] bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>

                          {/* LABEL */}
                          <span className="flex-1 text-gray-700 text-[12px] font-medium min-w-[60px]">
                            {received}/{total}
                          </span>
                        </div>
                      </td>
                    );
                  }
                  if (column.key === "ORDERS") {
                    return (
                      <td key={idx} className={`${column.width} py-2 px-4`}>
                        <div className={`flex ${column.justifyItems} items-center`}>
                          <span className="font-bold text-sm">{row.ORDERS}</span>
                        </div>
                      </td>
                    );
                  }
                  if (column.key === "CREATEDDATE") {
                    const dateString = row.CREATEDDATE;
                    let formattedDate = "-";

                    if (dateString) {
                      const date = new Date(dateString.replace(' ', 'T'));

                      if (!isNaN(date.getTime())) {
                        const options: Intl.DateTimeFormatOptions = {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        };
                        formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                      }
                    }

                    return (
                      <td key={idx} className={`${column.width} py-2`}>
                        <div className={`flex ${column.justifyItems} items-center text-sm`}>
                          {formattedDate}
                        </div>
                      </td>
                    );
                  }
                  if (column.key === "SENDMAIL") {
                    const isSend: boolean = row.SENDEMAIL;
                    return (
                      <td
                        key={idx}
                        className={`${column.width} py-2`}
                      >
                        <div className={`flex ${column.justifyItems} items-center text-sm ${isSend ? "text-green-600" : ""}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                      </td>
                    )
                  }
                  if (column.key === "FROMVENDOR") {
                    return (
                      <td
                        key={idx}
                        className={`${column.width} py-2`}
                      >
                        <div className={`flex ${column.justifyItems} items-center text-sm gap-1`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                          </svg>
                          {row[column.key as keyof TableOrderRowDataType]}
                        </div>
                      </td>
                    );
                  }

                  return (
                    <td
                      key={idx}
                      className={`${column.width} py-2`}
                    >
                      <div className={`flex ${column.justifyItems} items-center text-sm`}>
                        {row[column.key as keyof TableOrderRowDataType]}
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>


        </table>
      </div>
    </div>
  )
}

export default OrderTable