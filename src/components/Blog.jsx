import { HiStar } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
function Blog() {
  return (
    <div>
        <div className="px-6">
            <div className="flex items-center justify-between">
                <div className="lg:w-2/5">
                    <div className="">
                        <h2 className="uppercase">
                            this week
                        </h2>
                    </div>
                    <div className="">
                        <p className="">crafted by</p>
                       <div className="">
                       <img src="" alt="" />
                       <img src="" alt="" />
                       <img src="" alt="" />
                       </div>
                    </div>
                    <div className="">
                        <h2 className="">lowie chair</h2>
                        <div className="flex items-center pb-4">
                            {[...Array(5)].map((_, index)=>(
                            <HiStar key={index} className="text-[#FFCC02] text-base last:text-gray"/>
                            ))}
                            <p className="pl-2 text-sm font-semibold text-red-200">34k reviews</p>    
                        </div>
                    </div>
                    <div className="">
                        <p className="mb-4 text-2xl font-bold">
                        $413.<span className="text-sm">00</span>
                         </p>
                        <span className="flex items-center gap-x-3">
                        <button className="px-6 py-3 text-white capitalize border-none rounded-full bg-secondary">buy</button>
                         <FiShoppingCart className="text-2xl text-secondary" />
                        </span>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog