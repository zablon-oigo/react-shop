import { useState } from "react"
import { Link } from "react-scroll"
import { FiUser } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { IoLockClosedSharp } from "react-icons/io5";
function Navbar() {
    const[menu,setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
    }
    const closeMenu=()=>{
        setMenu(false)
    }
  return (
    <>
    <header className="relative">
    <nav className="flex items-center justify-between px-4 py-6 md:px-10">
       <div className="">
        <Link to={'/'} smooth={true} spy={true} duration={300} className="text-3xl font-semibold capitalize duration-300 cursor-pointer hover:text-secondary" >shop</Link>
       </div>
       <div className="flex justify-center flex-1 xl:gap-12 gap-x-4 max-lg:hidden">
       <Link to={'blog'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">blog</Link>
       <Link to={'shop'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">shop</Link>
       <Link to={'contact'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">contact</Link>
       <Link to={'products'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">products</Link>
       </div>
       <div className="flex items-center justify-between ">
       <div className="flex items-center justify-center gap-x-4 max-lg:hidden">
       <IoLockClosedSharp  className="text-4xl duration-700 transition-all hover:scale-95 hover:shadow-[0_3px_15px_rgba(0,0,0,0.4)] bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary"/>
       <FiUser className="text-4xl duration-700 transition-all hover:scale-95 hover:shadow-[0_3px_15px_rgba(0,0,0,0.4)]  bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary"/>
       </div>
       <button className="block lg:hidden" onClick={toggleMenu}>
           {menu?(<IoCloseOutline className="text-4xl"/>):(<HiOutlineMenuAlt3 className="text-4xl" />)}
       </button>
       </div>
    </nav>
    <section className={`${menu?' translate-x-0' :'-translate-x-full'} h-screen bg-white  py-20 px-10 lg:hidden w-full fixed top-20 duration-700`}>
    <div className="h-[400px] w-full flex flex-col items-baseline pt-8 gap-4">
    <div className="flex flex-col items-center justify-center w-full ">
       <Link to={'blog'} smooth={true} spy={true} duration={500} className="mb-8 text-4xl font-light capitalize cursor-pointer" onClick={closeMenu}>blog</Link>
       <Link to={'shop'} smooth={true} spy={true} duration={500} className="mb-8 text-4xl font-light capitalize cursor-pointer" onClick={closeMenu}>shop</Link>
       <Link to={'contact'} smooth={true} spy={true} duration={500} className="mb-8 text-4xl font-light capitalize cursor-pointer" onClick={closeMenu}>contact</Link>
       <Link to={'products'} smooth={true} spy={true} duration={500} className="mb-8 text-4xl font-light capitalize cursor-pointer" onClick={closeMenu}>products</Link>
       </div>
       <div className="flex gap-8 mx-auto">
       <IoLockClosedSharp  className="text-4xl "/>
       <FiUser className="text-4xl text-black cursor-pointer"/>
       </div>
    </div>
    </section>
    </header>
    
    </>
  )
}

export default Navbar