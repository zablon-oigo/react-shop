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
    <nav className="">
       <div className="">
        <Link to={'/'} smooth={true} spy={true} duration={300} >shop</Link>
       </div>
       <div className="">
       <Link to={'home'} smooth={true} spy={true} duration={500} className="">blog</Link>
       <Link to={'home'} smooth={true} spy={true} duration={500} className="">shop</Link>
       <Link to={'home'} smooth={true} spy={true} duration={500} className="">contact</Link>
       <Link to={'home'} smooth={true} spy={true} duration={500} className="">products</Link>
       </div>
       <div className="">

       </div>
       <button className="" onClick={toggleMenu}>
        
       </button>
    </nav>
    
    </>
  )
}

export default Navbar