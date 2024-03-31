import lamp from '../assets/images/lamp.png'
import lamp2 from '../assets/images/lamp2.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiStar } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
function Featured() {
  return (
    <>
    <div className="min-h-[500px] my-20 px-10 py-20">
        <div className="flex flex-col-reverse justify-between lg:flex-row">
            <div className="lg:w-1/3">
                <h2 className="mb-4 text-4xl font-semibold leading-normal text-center lg:text-start first-letter:capitalize">
                    featured for you
                </h2>
                <div className="pt-10">
                    <ul className="">
                        <li className="mb-2 text-xl cursor-pointer hover:text-primary hover:translate-x-3 duration-500 text-[#a8a8b9] font-light first-letter:capitalize">modern chair</li>
                        <div className="flex items-center justify-start gap-2 group">
                        <li className="mb-2 text-xl font-light duration-500 cursor-pointer group-hover:text-gray first-letter:capitalize animate-bounce text-secondary"> lamp  </li>
                        <IoIosArrowRoundForward className="pt-0.5 text-2xl animate-bounce text-secondary duration-500 cursor-pointer group-hover:text-gray" />
                        </div>
                        <li className="mb-2 text-xl cursor-pointer hover:text-primary hover:translate-x-3 duration-500 text-[#a8a8b9] font-light first-letter:capitalize">wardrope</li>
                        <li className="mb-2 text-xl cursor-pointer hover:text-primary hover:translate-x-3 duration-500 text-[#a8a8b9] font-light first-letter:capitalize">bed</li>
                        <li className="mb-2 text-xl cursor-pointer hover:text-primary hover:translate-x-3 duration-500 text-[#a8a8b9] font-light first-letter:capitalize">fig lamp</li>
                        <li className="mb-2 text-xl cursor-pointer hover:text-primary hover:translate-x-3 duration-500 text-[#a8a8b9] font-light first-letter:capitalize">table</li>
                    </ul>
                
                </div>
            </div>
            <div className="pt-10 lg:w-1/2 lg:ml-10">
                <h2 className="mb-2 text-2xl font-semibold text-center capitalize lg:text-start">
                    lamp stand
                </h2>
                <p className="font-light text-center lg:w-3/5 text-gray lg:text-lg lg:text-start">
                A lamp crafted from wood with a 5V output, featuring a smoothly textured neck.
                </p>
                <div className="flex items-center justify-center pt-4 pb-4 md:justify-start">
                            {[...Array(5)].map((_, index)=>(
                            <HiStar key={index} className="text-[#FFCC02] text-base"/>
                            ))}
                            <p className="pl-2 text-sm font-semibold text-red-200">3.2k reviews</p>    
                        </div>
                <div className="flex items-center justify-center">
                {[...Array(2)].map((_, index)=>(
                    <img src={lamp2} alt="" key={index} className="w-[250px] h-[250px] object-center object-cover duration-700 hover:scale-125" />
                            ))}
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row gap-x-4">
                        <p className="mb-4 text-3xl font-bold text-center md:text-start">
                        $150.<span className="text-sm">00</span>
                         </p>
                        <span className="flex items-center justify-center md:justify-start gap-x-4">
                        <button className="px-12 py-3 text-white capitalize border-none rounded-full bg-secondary hover:shadow-[0_3px_15px_rgba(0,0,0,0.6)] duration-700 hover:scale-110  hover:bg-white hover:text-secondary">buy</button>
                         <FiShoppingCart className="text-4xl duration-700 transition-all hover:scale-125 hover:shadow-[0_3px_15px_rgba(0,0,0,0.4)]  bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary" />
                        </span>
                        
                </div>
                <p className="pt-6 text-sm font-light text-center duration-500 cursor-pointer hover:translate-x-2 md:text-start text-secondary xl:text-lg">
                            view more...
                        </p>
            </div>
            <div className="lg:w-1/2">
                <img src={lamp} alt="" className="duration-700 hover:scale-125" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured