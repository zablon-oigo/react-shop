import HiStar from 'react-icons/hi'
import FiShoppingCart from 'react-icons/fi'
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
        <div className="relative flex flex-col justify-center my-6 md:z-10 -z-10 h-14">
          <input type="text" placeholder="Office chair"
          className="w-full h-full pl-6 text-base border-none rounded-full outline-none bg-light andolute"
           />
          <button className="bg-secondary text-white rounded-full px-8 text-sm absolute border-none right-2 h-[80%] hover:-translate-x-4 duration-700 hover:hover:shadow-[0_3px_15px_rgba(0,0,0,0.4)] hover:px-10">
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
        <div className="items-center justify-between my-16 lg:flex">
          <div className="lg:w-2/5">
            <img src="" alt="" className="w-full" />
          </div>
        </div>
        <div className="pt-8 lg:w-1/2 lg:pt-0">
          <div className="flex flex-wrap items-center justify-between">
          <span className="">
            <p className="">
              new arrival
            </p>
            <p className="">
              scott chair
            </p>
            <div className="flex items-center pb-4">
              {[...Array(5).map((_,index)=>(
                <HiStar key={index} className="text-[#FFCC02] text-base last:text-gray"/>
              ))]}
              <p className="pl-2 text-sm font-semibold text-red-200">
                35k reviews
              </p>
            </div>
          </span>
          <p className="leading-normal text-gray xl:text-xl lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, voluptates fugit quas doloremque accusantium a.
          </p>
          </div>
         
        </div>
        <p className="text-2xl font-bold">$413.<span className="text-sm">00</span></p>
        <div className="flex items-center justify-between my-8">
          <span className="flex items-center gap-x-3">
            <button className="px-6 py-2 text-white border-none rounded-full bg-secondary">buy</button>
            <FiShoppingCart/>
          </span>
          <p className="">see more</p>
        </div>
     </div>
    </div>
    </>
  )
}

export default Home