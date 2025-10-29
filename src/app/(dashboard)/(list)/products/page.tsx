import CategoryOptions from "./CategoryOptions"
import ProductsPageHeader from "./ProductsPageHeader"
import ProductsTable from "./ProductsTable"

const Page = () => {
  return (
    <div className=" w-full h-full ">
      <div className='py-4 bg-transparent  w-full h-full flex flex-col gap-1'>
        {/* PAGE HEADER  */}
        <ProductsPageHeader />
        <CategoryOptions />
        <ProductsTable />
      </div>
      <div className="p-4 bg-blue-500 w-full h-500px">
        hello
      </div>
    </div>
  )
}

export default Page