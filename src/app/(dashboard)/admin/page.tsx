import { UserCard } from '../../../components/UserCard'; 

const AdminPage = () => {
  return (
    <div className='md:flex-row flex-col p-4 gap-4 flex'>
      {/* LEFT SIDE - admin dashboard*/}
      <div className='w-full lg:w-2/3'>
        <div className="flex justify-between flex-wrap gap-4">
          <UserCard type={"student"}/>
          <UserCard type={"teacher"}/>
          <UserCard type={"parent"}/>
          <UserCard type={"staff"}/>
        </div>
      </div>
      {/* RIGHT SIDE - admin dashboard*/}
      <div className='w-full lg:w-1/3 bg-red-500'>right</div>
    </div>
  )
}

export default AdminPage