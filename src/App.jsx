import Contact from "./Layout/Contact"
import Featured from "./Layout/Featured"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import AOS from 'aos';
import { useEffect } from "react"
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <div className="">
      <Navbar/>
    </div>
    <div className="">
      <Home/>
    </div>
    <div id="blog">
      <Blog/>
    </div>
    <div id="">
    <Featured/>
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
