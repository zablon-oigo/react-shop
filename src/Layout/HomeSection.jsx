import { HiStar } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import chair2 from "../assets/images/image2.jpg"
function HomeSection() {
  return (
    <div>
        <div className="flex flex-col items-center justify-between md:flex-row">
       <div className="lg:w-2/5"
          data-aos="fade-up-right"
          data-aos-duration="3000">
            <img src={chair2} alt="" className="w-full" />
          </div>
          <div className="grid w-2/3 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-between order-2 md:order-1">
            <span className="">
                <p className="pb-2 text-sm font-semibold uppercase text-gray">
                new arrival
              </p>
              <p className="mb-2 text-2xl font-semibold capitalize">
                scott chair
              </p>
              </span>
              <div className="flex items-center pb-4">
                {[...Array(5)].map((_, index)=>(
                  <HiStar key={index} className="text-[#FFCC02] text-base last:text-gray"/>
                ))}
                <p className="pl-2 text-sm font-semibold text-red-200">34k reviews</p>    
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
          <div className="order-1 my-8 md:order-2">
          <p className="leading-normal text-gray ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores rerum nisi sequi, exercitationem explicabo nobis.
              </p>
          <p className="text-sm font-semibold cursor-pointer text-secondary xl:text-lg">see more</p>
          </div>
          </div>
       </div>
    </div>
  )
}

export default HomeSection