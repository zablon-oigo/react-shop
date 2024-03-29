import { HiStar } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import sofa from '../assets/images/sofa.png'
import test1 from '../assets/images/test1.png'
import test2 from '../assets/images/test2.png'
import test3 from '../assets/images/test3.png'
function Blog() {
    const images=[test1,test2,test3]
  return (
    <div>
        <div className="relative px-10">
            <div className="flex flex-col-reverse items-center justify-between md:flex-row">
                <div className="lg:w-2/5">
                    <div className="">
                        <h2 className="uppercase font-semibold text-center text-[#a8a8b9]">
                            this week
                        </h2>
                    </div>
                    <div className="">
                        <p className="mb-2 text-[#a8a8b9] md:text-sm text-xs mt-4 capitalize md:text-start text-center ">crafted by</p>
                        <div className="flex items-center justify-between w-full mt-4 md:mt-0 md:w-1/2">
                        {images.map((item) => (
                            <img src={item} alt="" className="w-[50px] h-[50px] rounded-full ring-2 ring-secondary  hover:scale-125 duration-700  transition-all hover:hover:shadow-[0_3px_15px_rgba(0,0,0,0.4)] " key={item} />
                        ))}
                    </div>

                    </div>
                    <div className="">
                        <h2 className="mt-4 text-3xl font-semibold capitalize">pure mahogany chair</h2>
                        <div className="flex items-center justify-center pt-4 pb-4 md:justify-start">
                            {[...Array(5)].map((_, index)=>(
                            <HiStar key={index} className="text-[#FFCC02] text-base"/>
                            ))}
                            <p className="pl-2 text-sm font-semibold text-red-200">1.4k reviews</p>    
                        </div>
                    </div>
                    <div className="">
                    <p className="leading-normal text-[#a8a8b9] xl:text-xl mb-4 ">
                        Dimensions: 60cm x 50cm <br/> <span className="text-sm">mahogany</span>
                        </p>
                        <p className="mb-4 text-3xl font-bold">
                        $100.<span className="text-sm">00</span>
                         </p>
                        <span className="flex items-center gap-x-4">
                        <button className="px-12 py-3 text-white capitalize border-none rounded-full bg-secondary">buy</button>
                         <FiShoppingCart className="text-4xl duration-700 transition-all hover:scale-125 hover:shadow-[0_3px_15px_rgba(0,0,0,0.4)]  bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary" />
                        </span>
                        <p className="pt-6 text-sm font-light cursor-pointer text-secondary xl:text-lg">
                            more collection...
                        </p>
              </div>
                </div>
                <div className=" lg:w-2/3">
                    <img src={sofa} alt="" className="" />
                </div>
                <div className="hidden lg:block bg-[#e4d7d1] h-full w-1/2 absolute right-0 -z-10 rounded-tl-[100px]"></div>
            </div>
            
        </div>
    </div>
  )
}

export default Blog