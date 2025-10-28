import ProductsPageHeader from "./ProductsPageHeader"

const Page = () => {
  return (
    <div className=" w-full h-full ">
      <div className='p-4 bg-red-500 w-full h-full'>
        {/* PAGE HEADER  */}
        <ProductsPageHeader />
        
      </div>
      <div className="p-4 bg-blue-500 w-full h-500px">
        hello
      </div>
    </div>
  )
}

export default Page