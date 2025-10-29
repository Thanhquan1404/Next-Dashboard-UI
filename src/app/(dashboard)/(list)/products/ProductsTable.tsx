import StatusComponent from "./StatusComponent";

// DECLARE PRODUCT TABLE HEADER DATATYPE 
type HeaderDataType = {
  id: number;
  key: string;
  label: string;
  width: string;
  alignItems: string;
};

const tableHeaders: HeaderDataType[] = [
  {
    id: 1,
    key: "PRODUCT_NAME",
    label: "Product Name",
    width: "w-[38%]",
    alignItems: "text-left",
  },
  {
    id: 2,
    key: "PURCHASE_UNIT_PRICE",
    label: "Purchase Unit Price",
    width: "w-[15%]",
    alignItems: "text-center",
  },
  {
    id: 3,
    key: "PRODUCTS",
    label: "Products",
    width: "w-[15%]",
    alignItems: "text-center",
  },
  {
    id: 4,
    key: "VIEWS",
    label: "Views",
    width: "w-[10%]",
    alignItems: "text-center",
  },
  {
    id: 5,
    key: "STATUS",
    label: "Status",
    width: "w-[10%]",
    alignItems: "text-center",
  },
  {
    id: 6,
    key: "ACTION",
    label: "Action",
    width: "w-[12%]",
    alignItems: "text-right",
  },
];

// DECLARE PRODUCT DATATYPE 
type ProductDataType = {
  PRODUCT_NAME: string,
  PURCHASE_UNIT_PRICE: number,
  PRODUCTS: number,
  VIEWS: number,
  STATUS: string,
  ACTION: string,
}
// SAMPLE APPLE PRODUCT DATA
const sampleProducts: ProductDataType[] = [
  {
    PRODUCT_NAME: "MacBook Pro 16-inch (M3 Max, 2024)",
    PURCHASE_UNIT_PRICE: 3499,
    PRODUCTS: 12,
    VIEWS: 1820,
    STATUS: "Active",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "MacBook Air 13-inch (M3, 2024)",
    PURCHASE_UNIT_PRICE: 1299,
    PRODUCTS: 24,
    VIEWS: 2305,
    STATUS: "Active",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "iPhone 15 Pro Max",
    PURCHASE_UNIT_PRICE: 1199,
    PRODUCTS: 38,
    VIEWS: 5120,
    STATUS: "Active",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "iPhone SE (3rd Generation)",
    PURCHASE_UNIT_PRICE: 429,
    PRODUCTS: 45,
    VIEWS: 870,
    STATUS: "Low Stock",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "iPad Pro 12.9-inch (M2, 2023)",
    PURCHASE_UNIT_PRICE: 1099,
    PRODUCTS: 18,
    VIEWS: 1940,
    STATUS: "Active",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "Apple Watch Ultra 2",
    PURCHASE_UNIT_PRICE: 799,
    PRODUCTS: 25,
    VIEWS: 1440,
    STATUS: "Active",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "AirPods Pro (2nd Generation)",
    PURCHASE_UNIT_PRICE: 249,
    PRODUCTS: 65,
    VIEWS: 3380,
    STATUS: "Active",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "Apple Vision Pro",
    PURCHASE_UNIT_PRICE: 3499,
    PRODUCTS: 5,
    VIEWS: 6210,
    STATUS: "Preorder",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "HomePod Mini",
    PURCHASE_UNIT_PRICE: 99,
    PRODUCTS: 90,
    VIEWS: 720,
    STATUS: "Active",
    ACTION: "Edit",
  },
  {
    PRODUCT_NAME: "Magic Keyboard for iPad Pro",
    PURCHASE_UNIT_PRICE: 349,
    PRODUCTS: 40,
    VIEWS: 450,
    STATUS: "Out of Stock",
    ACTION: "Edit",
  },
];

const ProductsTable = () => {
  return (
    <div className="w-full h-full bg-white shadow-sm p-4">
      <table className=" w-full border-separate border-spacing-y-2">
        {/* TABLE HEADER */}
        <thead>
          <tr className=" text-gray-400 font-semibold text-sm">
            {tableHeaders.map((header) => (
              <th
                key={header.id}
                className={`${header.width} ${header.alignItems} py-3 px-2`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* TABLE BODY (SAMPLE DATA OR PLACEHOLDER) */}
        <tbody >
          {
            sampleProducts.map((row, index) => {
              return (
                <tr key={index} className="text-sm text-gray-700">
                  {
                    tableHeaders.map((column, index) => {
                      if (column.key === "STATUS") {
                        return (
                          <td key={index} className={`${column.alignItems} flex items-center justify-center`}>
                            <StatusComponent status={row["STATUS"]} />
                          </td>
                        );
                      }
                      if (column.key === "ACTION") {
                        if (column.key === "ACTION") {
                          return (
                            <td key={index}>
                              <div className="flex justify-end gap-2 text-xs">
                                {/* --- EDIT BUTTON --- */}
                                <button
                                  className="
                                    flex items-center justify-center
                                    bg-blue-500 text-white rounded-lg py-1 px-2 gap-1
                                    transition-all duration-300 ease-in-out
                                    hover:bg-blue-600 hover:scale-105 hover:shadow-md
                                  "
                                >
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
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                  </svg>
                                  Edit
                                </button>

                                {/* --- DELETE BUTTON --- */}
                                <button
                                  className="
                                    flex items-center justify-center
                                    text-gray-500 border rounded-lg py-1 px-2
                                    transition-all duration-300 ease-in-out
                                    hover:text-red-500 hover:border-red-400 hover:scale-110 hover:shadow-sm
                                  "
                                >
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
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          );
                        }
                      }
                      return (
                        <td key={index} className={`${column.alignItems}`}>
                          {row[column.key as keyof ProductDataType]}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
