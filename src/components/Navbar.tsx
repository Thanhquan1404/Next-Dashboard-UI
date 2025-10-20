import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search bar */}
      <div className="hidden md:flex items-center justify-center gap-2 ring-[1.5px] ring-gray-300 rounded-full px-2 text-xs">
        <Image src="/search.png" alt="search-icon" width={14} height={14} />
        <input type="text" placeholder="Search..." className="w-[200px] p-[4.5px] bg-transparent outline-none"/>
      </div>

      {/* personal information side */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="message-icon" width={20} height={20} />
        </div>
        <div className='rounded-full w-7 h-7 flex items-center justify-center relative'>
          <Image src="/announcement.png" alt="message-icon" width={20} height={20} />
          <div className="text-xs absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full">1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Nguyen Thanh Quan</span>
          <span className='text-[12px] text-right text-gray-500'>Admin</span>
        </div>
        <Image src="/avatar.png" width={36} height={36} alt="avatar-image" className="rounded-full"/>
      </div>
    </div>
  )
}

export default Navbar