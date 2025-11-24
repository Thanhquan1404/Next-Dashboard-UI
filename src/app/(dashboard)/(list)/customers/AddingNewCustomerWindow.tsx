import PriorityStatusComponent from '@/components/PriorityStatusComponent';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { useState } from 'react';
const AddingNewCustomerWindow = () => {
  const [havingCurrentActivity, setHavingCurrentActivity] = useState<boolean>(false);
  return (
    <div className='w-full h-full bg-white rounded-xl py-2 flex flex-col items-center'>
      {/* HEADER  */}
      <div className="h-[5%] w-full flex px-4 py-1">
        {/* HEADER TITLE  */}
        <div className="w-2/3 h-full flex">
          <div className="w-[170px] h-full flex items-center px-2 border-r-[1px] font-semibold">
            Customer Preview
          </div>
          <div className="flex-1 flex px-2 items-center gap-3">
            <div className="flex items-center gap-2">
              {/* UP ARROW  */}
              <div className="rounded-xl border-[1px] w-fit h-fit flex items-center justify-center hover:text-blue-500/90 hover:bg-shadow-md cursor-pointer hover:scale-[1.15] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </div>
              {/* DOWN ARROW  */}
              <div className="rounded-xl border-[1px] w-fit h-fit flex items-center justify-center hover:text-blue-500/90 hover:bg-shadow-md cursor-pointer hover:scale-[1.15] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
            <div className="text-gray-500/70 text-sm">
              4 of 342
            </div>
          </div>
        </div>
        {/* CLOSE BUTTON  */}
        <div className="w-1/3 h-full flex items-center justify-end px-1">
          <button className="w-fit h-fit p-1 rounded-xl hover:text-red-500/80" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* USER GENERAL INFO  */}
      <div
        className="
          h-[8%] w-full flex items-center px-4 py-2
        "
      >
        {/* AVATAR */}
        <div className="w-[10%] h-full flex items-center justify-center">
          <Avatar
            alt="Remy Sharp"
            src="/avatar.png"
            className="w-10 h-10 rounded-full shadow-sm"
          />
        </div>

        {/* NAME + COMPANY */}
        <div className="flex flex-col justify-center h-full ml-2">
          {/* NAME + BADGE */}
          <div className="flex items-center gap-2 h-1/2">
            <p className="text-[18px] font-semibold">Santi Cazorla</p>
            <span
              className="
                px-2 py-[2px] text-xs rounded-full
                bg-green-500/10 text-green-600
                border border-green-500/20
              "
            >
              Active
            </span>
          </div>

          {/* COMPANY */}
          <div className="flex items-center gap-1 h-1/2">
            <Image
              src="/microsoft_logo.png"
              alt="companylogo"
              width={18}
              height={18}
              className="opacity-90"
            />
            <p className="text-xs text-gray-500">Microsoft</p>
          </div>
        </div>
      </div>

      {/* HISTORY COOPERATION  */}
      <div className="w-[95%] h-[10%] rounded-xl px-4 py-1 flex 
           bg-white border border-gray-200 shadow-sm">
        {/* TOTAL ACTIVITIES */}
        <div className="
            w-1/4 px-3 py-2 flex flex-col justify-center gap-[2px]
            rounded-lg hover:bg-blue-50 hover:shadow transition-all duration-200
          ">
          <p className="text-[10px] text-gray-500">TOTAL ACTIVITIES</p>
          <p className="text-base font-bold text-gray-800">16</p>
        </div>

        {/* OVERDUE ACTIVITIES */}
        <div className="
          w-1/4 px-3 py-2 flex flex-col justify-center gap-[2px]
          rounded-lg hover:bg-blue-50 hover:shadow transition-all duration-200
        ">
          <p className="text-[10px] text-gray-500">OVERDUE ACTIVITIES</p>
          <p className="text-base font-bold text-gray-800">4</p>
        </div>

        {/* AVERAGE MAKING DEAL */}
        <div className="
          w-1/4 px-3 py-2 flex flex-col justify-center gap-[2px]
          rounded-lg hover:bg-blue-50 hover:shadow transition-all duration-200
        ">
          <p className="text-[10px] text-gray-500">TIME DEAL</p>
          <p className="text-base font-bold text-gray-800">45 weeks</p>
        </div>

        {/* TOTAL DEAL AMOUNT */}
        <div className="
          w-1/4 px-3 py-2 flex flex-col justify-center gap-[2px]
          rounded-lg hover:bg-blue-50 hover:shadow transition-all duration-200
        ">
          <p className="text-[10px] text-gray-500">TOTAL DEAL AMOUNT</p>
          <p className="text-base font-bold text-gray-800">$10,568</p>
        </div>

      </div>

      {/* DETAIL INFO  */}
      <div className="w-full h-fit flex flex-col px-4 py-5 gap-2">
        {/* TITLE */}
        <div className="text-gray-700 text-[14px] font-semibold mb-2">
          Customer Details
        </div>

        {/* DETAILS ROWS */}
        {/* ROW 1  */}
        <div className="w-full flex gap-6">

          {/* SOURCE */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Source</div>
            <div className="text-xs font-medium text-gray-800">Contact us form</div>
          </div>

          {/* RESPONSE TIME */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Response Time</div>

            <div
              className="
                text-xs px-2 py-[3px] rounded-full
                bg-red-50 text-red-600 border border-red-200
                flex gap-1 items-center
              "
            >
              <div className='w-[6px] h-[6px] bg-red-500 rounded-full'></div>
              Slow response
            </div>
          </div>

        </div>
        {/* ROW 2  */}
        <div className="w-full flex gap-6">

          {/* PHONE NUMBER */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Phone Number</div>
            <div className="text-xs font-medium text-blue-500">(209) 555-0104</div>
          </div>

          {/* COMPANY */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Company</div>

            <div
              className="
                text-xs px-2 py-[3px]
                flex gap-1 items-center
              "
            >
              <Image
                src="/microsoft_logo.png"
                alt="companylogo"
                width={18}
                height={18}
                className="opacity-90"
              />
              <p className="text-xs">Microsoft</p>
            </div>
          </div>

        </div>
        {/* ROW 3  */}
        <div className="w-full flex gap-6">

          {/* EMAIL */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Email</div>
            <div className="text-xs font-medium text-blue-500">hello@santi.com</div>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Description</div>

            <div
              className="
                text-xs px-2 py-[3px]
                flex gap-1 items-center
              "
            >
            </div>
          </div>

        </div>
        {/* ROW 4  */}
        <div className="w-full flex gap-6">

          {/* LOCATION */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Location</div>
            <div className="text-xs font-medium">United Kingdom, Europe</div>
          </div>

          {/* FIRST CONTACT DATE*/}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 border-b border-gray-200
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">First Contact</div>

            <div
              className="
                text-xs px-2 py-[3px]
                flex gap-1 items-center
              "
            >
            </div>
          </div>

        </div>
        {/* ROW 5  */}
        <div className="w-full flex gap-6">

          {/* LANGUAGE */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Language Sopken</div>
            <div className="text-xs font-medium">English, Italian</div>
          </div>

          {/* TIME ZONE */}
          <div
            className="
              w-1/2 flex justify-between items-center py-2 
              hover:bg-blue-50 transition-all duration-200 rounded-md px-2
            "
          >
            <div className="text-xs text-gray-500">Time Zone</div>

            <div
              className="
                text-xs px-2 py-[3px]
                flex gap-1 items-center
              "
            >
              UTC+07:00
            </div>
          </div>

        </div>
      </div>

      {/* CURRENT ACTIVITIES  */}
      <div className='border-t-[2px] h-fit w-full px-4 flex flex-col pb-2 pt-4'>

        {/* TITLE  */}
        <div className='flex h-fit py-2'>
          <div className='w-1/2 text-gray-600 text-xs'>
            Current Activity
          </div>
          <div className='w-1/2 font-medium text-end text-xs'>
            View more
          </div>
        </div>

        {/* ACTIVITY*/}
        <div className='border rounded-md w-full flex-1 flex flex-col'>

          {/* ACTIVITY NAME  */}
          <div className='w-full h-fit flex py-2 px-2'>
            <div className='w-2/3 text-[13px] flex items-center'>
              #TC-196
              <span className='text-gray-500 ml-1'>
                Defective item Received
              </span>
            </div>
            <div className='w-1/3 flex justify-end items-center'>
              <div className='w-fit h-fit bg-blue-400 py-1 px-2 rounded-xl text-white text-[10px]'>
                Open
              </div>
            </div>
          </div>

          {/* ACTIVITY BOX  */}
          <div className='w-full flex-1 flex px-2 py-2 border-t-[1px]'>
            
            {/* ACTIVITY TYPE  */}
            <div className='w-1/4 flex flex-col justify-center gap-1'>
              <div className='text-[12px] text-gray-500'>
                Activity type
              </div>
              <div className='w-fit h-fit border px-2 py-1 rounded-xl bg-gray-200/50 font-medium flex gap-1 text-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>
                Phone call
              </div>
            </div>
            {/* PRIORITY */}
            <div className='w-1/4 flex flex-col justify-center gap-1 border-l-[1px] border-r-[1px] px-2'>
              <div className='text-[12px] text-gray-500'>
                Priority
              </div>
              <div className='text-[10px] font-medium'>
                <PriorityStatusComponent priority='low' />
              </div>
            </div>
            {/* ASSIGNED TO  */}
            <div className='w-1/4 flex flex-col justify-center gap-1 border-r-[1px] px-2'>
              <div className='text-[12px] text-gray-500'>
                Assign to
              </div>
              <div className='text-[10px] font-medium'>

                Nguyen Thanh Quan
              </div>
            </div>
            {/* REQUEST DATE  */}
            <div className='w-1/4 flex flex-col justify-center gap-1 px-2'>
              <div className='text-[12px] text-gray-500'>
                Request Date
              </div>
              <div className='text-[10px] font-medium'>
                01/08/2023. 09:00AM
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddingNewCustomerWindow