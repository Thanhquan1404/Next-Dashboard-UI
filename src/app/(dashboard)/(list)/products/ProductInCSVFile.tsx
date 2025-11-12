import PropertySelectorComponent from "@/components/PropertySelectorComponent";

const sampleFileColumns = [
  { title: "First name" },
  { title: "Last name" },
  { title: "Phone number" },
  { title: "City" },
  { title: "Country" },
];

const ProductInCSVFile = () => {
  return (
    <div className="bg-gray-200 w-full h-full flex p-6 gap-4 rounded-t-2xl shadow-2xl transition-all duration-500">
      <div className="bg-white w-full rounded-2xl p-3 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col gap-6 py-3">
          {/* HEADER */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-1">Map Properties</h1>
            <p className="text-gray-500 text-sm">
              Ensure columns from your file are mapped correctly to contact properties
            </p>
          </div>

          {/* MAPPING PROPERTIES */}
          <div className="w-full flex flex-col gap-3">
            {/* MAPPING HEADER */}
            <div className="flex justify-between items-center gap-1 px-2">
              <div className="font-medium text-sm text-gray-400 px-3 rounded-lg text-start w-1/2">
                Columns in your file
              </div>
              {/* REMOVE ARROW FOR HEADER */}
              <div className="w-1/12" />
              <div className="font-medium text-sm text-gray-400 px-3 rounded-lg text-start w-1/2">
                Properties in $File_name
              </div>
            </div>


            {/* MAPPED ROWS */}
            {sampleFileColumns.map((row) => (
              <div key={row.title} className="flex justify-between items-center gap-4 px-2">
                <div className="bg-gray-100 rounded-lg text-sm py-3 px-3 w-1/2 flex items-center gap-2 text-gray-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                  </svg>
                  {row.title}
                </div>

                <div className="flex justify-center items-center w-1/12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>

                <div className="text-blue-700 text-sm rounded-lg px-3 w-1/2 text-center font-medium">
                  <PropertySelectorComponent />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-fit flex justify-between mt-4">
          <button className="border-[1px] px-4 py-2 rounded-lg text-xs hover:bg-gray-100 transition-all duration-200" >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg text-xs bg-blue-500 text-white/90 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-sm">
            Import file
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInCSVFile;
