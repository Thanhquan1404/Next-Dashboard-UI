import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const StudentPage = () => {
  return (
    <div className='p-4 gap-4 flex flex-col xl:flex-row'>
      {/* LEFT SIDE  */}
      <div className="w-full xl:w-2/3">
        <div className="p-4 rounded-md bg-white h-full">
          <h1 className="font-semibold text-xl ">Personal Calendar</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT SIDE  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default StudentPage