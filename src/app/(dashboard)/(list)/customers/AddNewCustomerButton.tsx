import { useState } from "react";
import { tableRowDataType } from "@/lib/data";

interface Props {
  setTableData: React.Dispatch<React.SetStateAction<tableRowDataType[]>>;
  handleAddCustomer: (data: tableRowDataType) => void;
}

const checkInputCondition = (data: tableRowDataType) => {
  const condition1 = data.info ? true : false;
  const condition2 = data.company ? true : false;
  const condition3 = data.gmail ? true : false;
  const condition4 = data.address ? true : false;
  if (condition1) {
    if (condition2) {
      if (condition3) {
        if (condition4) {
          return true;
        } else {
          alert("Let enter your address");
          return false;
        }
      } else {
        alert("Let enter your gmail");
        return false;
      }
    } else {
      alert("Let enter your company name");
      return false;
    }
  } else {
    alert("Let enter your information");
    return false;
  }
}

const AddNewCustomerButton = ({ setTableData, handleAddCustomer }: Props) => {
  // state for visible condition of input area
  const [inputVisible, setInputVisible] = useState(false);

  // country code and phone number 
  const [countryCode, setCountryCode] = useState("+84");
  const [phoneNumber, setPhoneNumber] = useState("");

  // state for tracking input data from user
  const [customerInputData, setCustomerInputData] = useState<tableRowDataType>({
    info: "",
    gmail: "",
    customerID: "フォンCUST002",
    majority: "",
    company: "",
    phone: "",
    address: "",
    actions: "",
  } as tableRowDataType);

  // set up the on change event when typing on input area
  const handleInputAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    console.log(`${name}: ${value}`);
    setCustomerInputData((prev) => ({ ...prev, [name]: value }));
  };

  // set up the submit event
  const handleSubmitAction = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const inputCheckCondition = checkInputCondition(customerInputData);

    if (!phoneNumber.trim()) {
      alert("Please enter your phone number");
      return;
    }

    const cleanNumber = phoneNumber.replace(/^0+/, "").replace(/\s/g, "");

    if (cleanNumber.length < 9 || cleanNumber.length > 10) {
      alert("Phone number must be 9-10 digits");
      return;
    }

    let formattedPhone = countryCode;
    if (cleanNumber.length >= 3) formattedPhone += " " + cleanNumber.slice(0, 3);
    if (cleanNumber.length >= 6) formattedPhone += " " + cleanNumber.slice(3, 6);
    if (cleanNumber.length >= 9) formattedPhone += " " + cleanNumber.slice(6, 10);

    const newCustomer: tableRowDataType = {
      ...customerInputData,
      phone: formattedPhone,
    };
    if (inputCheckCondition) {
      handleAddCustomer(newCustomer);
      alert("Successfully create a new customer")
    }
    setCustomerInputData({
      info: "",
      gmail: "",
      customerID: "",
      majority: "",
      company: "",
      phone: "",
      address: "",
      actions: "",
    });
    setInputVisible(false);
    setPhoneNumber("");
    return;
  };

  //set up the cancel event 
  const handleCancelAction = () => {
    setInputVisible(false);
  };


  return (
    <div className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setInputVisible((prev) => !prev)}
        className="bg-transparent p-1 rounded-xl hover:text-white hover:bg-blue-300 transition-all duration-450"
        aria-label="Add new customer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      {/* INPUT AREA */}
      {inputVisible && (
        <div className="absolute top-10 right-0 w-[400px] bg-white shadow-lg rounded-xl border p-4 flex flex-col gap-3 z-50">
          <h3 className="text-sm font-semibold text-gray-700">Add New Customer</h3>

          <form className="flex flex-col gap-3">
            {/* Customer name (info) */}
            <div className="flex items-center gap-2 transition-all">
              <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <input
                  type="text"
                  name="info"
                  placeholder="Name"
                  className="bg-transparent text-sm w-full focus:outline-none placeholder-gray-400"
                  onChange={handleInputAction}
                  required
                />
              </div>
              <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-gray-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input
                  type="text"
                  name="gmail"
                  placeholder="Email"
                  className="bg-transparent text-sm w-full focus:outline-none placeholder-gray-400"
                  onChange={handleInputAction}
                  required
                />
              </div>
            </div>

            {/* Company name */}
            <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
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
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
              <input
                type="text"
                name="company"
                onChange={handleInputAction}
                placeholder="Company name"
                className="bg-transparent text-sm w-full focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Phone number */}
            <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
              {/* Country Code Selector */}
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-2 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-r border-gray-300 focus:outline-none"
              >
                <option value="+84">VN +84</option>
                <option value="+1">US +1</option>
                <option value="+81">JP +81</option>
                <option value="+86">CN +86</option>
                <option value="+91">IN +91</option>
                <option value="+44">GB +44</option>
                <option value="+33">FR +33</option>
                <option value="+49">DE +49</option>
                <option value="+82">KR +82</option>
                <option value="+61">AU +61</option>
              </select>

              {/* Phone Input */}
              <div className="flex flex-1 items-center gap-2 px-2">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928-.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <input
                  type="text"
                  name="phone"
                  placeholder="123 456 789"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-transparent text-sm w-full py-2 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <input
                type="text"
                name="address"
                onChange={handleInputAction}
                placeholder="Address"
                className="bg-transparent text-sm w-full focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Action buttons */}
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                className="px-3 py-1.5 text-sm rounded-md bg-gray-200 hover:bg-gray-300 transition"
                onClick={handleCancelAction}
              >
                Cancel
              </button>
              <button
                disabled={!customerInputData?.info?.trim()}
                onClick={handleSubmitAction}
                className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Customer
              </button>
            </div>

          </form>
        </div>
      )}
    </div>
  );
};

export default AddNewCustomerButton;