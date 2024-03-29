import Blog from "./components/Blog"
import Home from "./components/Home"
import Navbar from "./components/Navbar"


function App() {
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
    </>
  )
}

export default App
