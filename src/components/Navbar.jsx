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
    <nav className="flex items-center justify-between px-6 py-6">
       <div className="">
        <Link to={'/'} smooth={true} spy={true} duration={300} className="text-3xl font-semibold capitalize duration-300 cursor-pointer hover:text-secondary" >shop</Link>
       </div>
       <div className="flex justify-center flex-1 xl:gap-12 gap-x-4 max-lg:hidden">
       <Link to={'blog'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">blog</Link>
       <Link to={'shop'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">shop</Link>
       <Link to={'contact'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">contact</Link>
       <Link to={'products'} smooth={true} spy={true} duration={500} className="text-lg font-bold leading-normal text-black capitalize duration-300 cursor-pointer hover:text-secondary">products</Link>
       </div>
       <div className="flex items-center justify-between gap-40">
       <div className="flex items-center justify-center gap-x-4 max-lg:hidden">
       <IoLockClosedSharp  className="text-4xl bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary"/>
       <FiUser className="text-2xl"/>
       </div>
       <button className="" onClick={toggleMenu}>
           {menu?(<IoCloseOutline className=""/>):(<HiOutlineMenuAlt3 className="" />)}
       </button>
       </div>
    </nav>
    <section className={`${menu?' translate-x-0' :'-translate-x-full'} min-h-screen `}>
    <div className="">
       <Link to={'blog'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>blog</Link>
       <Link to={'shop'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>shop</Link>
       <Link to={'contact'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>contact</Link>
       <Link to={'products'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>products</Link>
       </div>
       <div className="">
       <IoLockClosedSharp  className="text-2xl"/>
       <FiUser className="text-[22px] cursor-pointer text-black"/>
       </div>
    </section>
    </header>
    
    </>
  )
}

export default Navbar