import { useState } from "react"
import { Link } from "react-scroll"
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
    <nav className="flex items-center justify-between w-full px-10 py-6">
       <div className="">
        <Link to={'/'} smooth={true} spy={true} duration={300} >shop</Link>
       </div>
       <div className="">
       <Link to={'blog'} smooth={true} spy={true} duration={500} className="">blog</Link>
       <Link to={'shop'} smooth={true} spy={true} duration={500} className="">shop</Link>
       <Link to={'contact'} smooth={true} spy={true} duration={500} className="">contact</Link>
       <Link to={'products'} smooth={true} spy={true} duration={500} className="">products</Link>
       </div>
       <div className="">

       </div>
       <button className="" onClick={toggleMenu}>
           {menu?('click here'):('close')}
       </button>
    </nav>
    <section className={`${menu?' translate-x-0' :'-translate-x-full'} `}>
    <div className="">
       <Link to={'blog'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>blog</Link>
       <Link to={'shop'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>shop</Link>
       <Link to={'contact'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>contact</Link>
       <Link to={'products'} smooth={true} spy={true} duration={500} className="" onClick={closeMenu}>products</Link>
       </div>
    </section>
    </header>
    
    </>
  )
}

export default Navbar