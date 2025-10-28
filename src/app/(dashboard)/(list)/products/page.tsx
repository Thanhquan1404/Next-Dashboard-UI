import CategoryOptions from "./CategoryOptions"
import ProductsPageHeader from "./ProductsPageHeader"

const Page = () => {
  return (
    <div className=" w-full h-full ">
      <div className='py-4 bg-white  w-full h-full flex flex-col gap-3'>
        {/* PAGE HEADER  */}
        <ProductsPageHeader />
        <CategoryOptions />
      </div>
      <div className="p-4 bg-blue-500 w-full h-500px">
        hello
      </div>
    </div>
  )
}

export default Page