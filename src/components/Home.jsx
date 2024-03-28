function Home() {
  return (
    <>
    <div className="px-6">
     <div className="hidden lg:block absolute -z-10 bg-primary rounded-full xl:h-[35rem] xl:w-[35rem] lg:w-[32rem] lg:h-[32rem] -top-24 -right-60">

     </div>
     <div className="items-center justify-between pt-24 lg:flex gap-x-8">
        <div className="lg:w-2/5">
        <h1 className="font-semibold capitalize lg:text-6xl lg:leading-normal">
            good living <br />Better <span className="text-primary">life</span>
        </h1>
        <p className="py-4 xl:text-xl first-letter:capitalize">find you way to the goo living with our furniture.</p>
        <div className="relative flex flex-col justify-center my-6 -z-10 h-14">
          <input type="text" placeholder="Office chair"
          className="w-full h-full pl-6 text-base border-none rounded-full outline-none bg-light andolute"
           />
          <button className="bg-secondary text-white rounded-full px-8 text-sm absolute border-none right-2 h-[80%] hoverBtn">
            Search
          </button>
        </div>
          <div className="flex justify-between my-12">
            <span className="text-center">
              <h6 className="text-3xl font-semibold">419</h6>
              <p className="text-gray">total products</p>
            </span>
            <span className="text-center">
              <h6 className="text-3xl font-semibold">102</h6>
              <p className="text-gray">crafters</p>
            </span>
            <span className="text-center">
              <h6 className="text-3xl font-semibold">5k</h6>
              <p className="text-gray">relations</p>
            </span>
          </div>
        </div>
        <div className="">
          <div className="relative z-10 lg:w-1/2">
          <img src="" alt="" className="w-full" />
          </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Home