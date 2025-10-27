// -----------------------------
// Define data types
// -----------------------------
type TableHeaderEntry = {
  id: number;
  key: keyof tableRowDataType; // safer typing
  label: string;
  width: string;
};

type tableRowDataType = {
  info: string;
  customerID: string;
  majority: string;
  company: string;
  phone: string;
  address: string;
  actions: string;
};

// -----------------------------
// Table header configuration
// -----------------------------
const headers: TableHeaderEntry[] = [
  { id: 1, key: "info",       label: "Info",        width: "flex-1 min-w-64 max-w-96" },   // Biggest
  { id: 2, key: "customerID", label: "Customer ID", width: "w-32" },
  { id: 3, key: "majority",   label: "Majority",    width: "w-28" },
  { id: 4, key: "company",    label: "Company",     width: "w-40" },
  { id: 5, key: "phone",      label: "Phone",       width: "w-36" },
  { id: 6, key: "address",    label: "Address",     width: "w-56" },
  { id: 7, key: "actions",    label: "Actions",     width: "w-32" },                      // Smallest
];

// -----------------------------
// Table row data
// -----------------------------
const tableRows: tableRowDataType[] = [
  {
    info: "Regular client with 3 active orders",
    customerID: "CUST001",
    majority: "Retail",
    company: "Sunrise Mart",
    phone: "+84 912 345 678",
    address: "12 Nguyen Trai, District 5, HCMC",
    actions: "View | Edit | Delete",
  },
  {
    info: "New customer, pending verification",
    customerID: "CUST002",
    majority: "Wholesale",
    company: "VietTrade Co., Ltd",
    phone: "+84 911 234 567",
    address: "45 Hai Ba Trung, District 1, HCMC",
    actions: "Verify | Delete",
  },
  {
    info: "Long-term partner since 2019",
    customerID: "CUST003",
    majority: "Corporate",
    company: "TechNova Solutions",
    phone: "+84 905 678 910",
    address: "22 Pham Van Dong, Thu Duc City",
    actions: "View | Edit",
  },
  {
    info: "Frequent online orders",
    customerID: "CUST004",
    majority: "Retail",
    company: "SmartHome Depot",
    phone: "+84 937 123 456",
    address: "90 Le Loi, District 3, HCMC",
    actions: "View | Delete",
  },
  {
    info: "VIP customer — high order volume",
    customerID: "CUST005",
    majority: "Enterprise",
    company: "MegaBuild Construction",
    phone: "+84 902 555 111",
    address: "8 Nguyen Hue, District 1, HCMC",
    actions: "View | Edit | Promote",
  },
  {
    info: "Inactive for 6 months",
    customerID: "CUST006",
    majority: "Retail",
    company: "EcoStyle Fashion",
    phone: "+84 916 777 222",
    address: "34 Tran Hung Dao, District 1, HCMC",
    actions: "View | Reactivate | Delete",
  },
  {
    info: "Recently switched from basic plan",
    customerID: "CUST007",
    majority: "Corporate",
    company: "GreenTech Energy",
    phone: "+84 938 111 444",
    address: "128 Vo Van Tan, District 3, HCMC",
    actions: "View | Edit",
  },
  {
    info: "Complaints about last delivery",
    customerID: "CUST008",
    majority: "Retail",
    company: "QuickBuy Express",
    phone: "+84 909 888 777",
    address: "56 Cach Mang Thang 8, District 10, HCMC",
    actions: "View | Resolve | Delete",
  },
  {
    info: "Referred by existing customer",
    customerID: "CUST009",
    majority: "Wholesale",
    company: "Lotus Food Imports",
    phone: "+84 919 222 333",
    address: "77 Nguyen Thi Minh Khai, District 3, HCMC",
    actions: "View | Edit",
  },
  {
    info: "Active in loyalty program",
    customerID: "CUST010",
    majority: "Retail",
    company: "BlueSky Electronics",
    phone: "+84 903 444 999",
    address: "21 Ly Thuong Kiet, District 10, HCMC",
    actions: "View | Reward | Delete",
  },
];

const CustomerTable = () => {
  return (
    <div className="w-full h-full overflow-x-auto">
      <table className="w-full border-collapse">
        {/* TABLE HEADER */}
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-[12px]">
          <tr>
            {headers.map((header) => (
              <th
                key={header.id}
                className={`px-6 py-2 text-left cursor-pointer text-xs tracking-wide border-b border-blue-400 ${header.width}`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="bg-white text-sm">
          {tableRows.map((row, rowIndex) => (
            <tr
              id={row.customerID}
              key={rowIndex}
              className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-150 odd:bg-gray-100  "
            >
              {headers.map((header, colIndex) => {
                if (header.label !== "Actions") {
                  return (
                    <td key={colIndex} className="px-3 py-2">
                      {row[header.key]}
                    </td>
                  );
                }
                return (
                  <td key={colIndex} >
                    <div className="w-3/4 h-fit flex items-center justify-center gap-2 ">
                      <button id={row["customerID"]} className="bg-white p-1 rounded-xl border-b border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                      <button id={row["customerID"]} className="bg-white p-1 rounded-xl border-b border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </td>
                );

              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
