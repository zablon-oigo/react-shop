import { useState } from "react"
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
       
    </nav>
    
    </>
  )
}

export default Navbar