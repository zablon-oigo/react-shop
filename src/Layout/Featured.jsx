import lamp from '../assets/images/lamp.png'
import lamp2 from '../assets/images/lamp2.png'
import { IoIosArrowRoundForward } from "react-icons/io";
function Featured() {
  return (
    <>
    <div className="min-h-[500px] my-20 px-10 py-20">
        <div className="flex justify-between">
            <div className="">
                <h2 className="">
                    featured for you
                </h2>
                <div className="">
                    <ul className="">
                        <li className="">modern chair</li>
                        <li className="inline-flex items-center justify-center">lamp <IoIosArrowRoundForward /> </li>
                        <li className="">wardrope</li>
                        <li className="">bed</li>
                        <li className="">fig lamp</li>
                        <li className="">table</li>
                    </ul>
                
                </div>
            </div>
            <div className="">
                <h2 className="">
                    lamp stand
                </h2>
                <div className="flex items-center justify-center">
                {[...Array(2)].map((_, index)=>(
                    <img src={lamp2} alt="" key={index} className="w-[250px] h-[250px] object-center object-cover" />
                            ))}
                </div>
            </div>
            <div className="">
                <img src={lamp} alt="" className="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured