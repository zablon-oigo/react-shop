// import furniture from '../assets/images/furniture.jpg'
function Contact() {
  return (
    <>
    <div className="rounded-[50px] w-full h-[20rem] my-16  lg:h-[36rem] bg-furniture bg-no-repeat bg-cover bg-bottom  sm:p-16 px-10 py-6" data-aos="zoom-in">
       <div className="flex flex-col justify-center w-full h-full lg:-mt-32"
       >
       <div className="">
       <h2 className="text-2xl font-semibold leading-snug text-white capitalize md:text-5xl"
       data-aos="fade-right"
       data-aos-duration="2000"
       data-aos-easing="ease-in-sine"
       >subscribe and get  <span className="text-secondary">10% OFF</span>   </h2>
        <p className="mt-3 font-semibold leading-10 text-white capitalize text-md lg:text-xl"
        data-aos="fade-right"
        data-aos-duration="2500"
        data-aos-easing="ease-in-sine">get 10% discount for all products</p>
        
       </div>
        <div className="relative flex flex-col items-center justify-center my-4 h-14 lg:w-1/3"
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-easing="ease-in-sine">
        <input type="email" placeholder="your email" className="absolute w-full h-full pl-6 text-base bg-white rounded-full outline-none border-non" />
        <button type="submit" className="bg-secondary text-white rounded-full sm:px-8 px-4 text-sm absolute border-none right-2 h-[80%]">
            subscribe
        </button>
            </div>
    </div> 

    </div>
    
    </>
  )
}

export default Contact