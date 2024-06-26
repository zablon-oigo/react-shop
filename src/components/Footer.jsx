import  { Component } from 'react'
import { FaFacebookF,FaGoogle,FaInstagram,FaTwitter } from "react-icons/fa";
export class Footer extends Component {
  render() {
    return (
      <footer className="container mx-auto px-6 lg:px-14 py-8 bg-white rounded-b-[50px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-4 text-2xl md:justify-center">
          <FaFacebookF/>
          <FaGoogle/>
          <FaInstagram/>
          <FaTwitter/>
        </div>
        <div className="flex justify-between px-4 lg:justify-around w-full lg:px-0 ">
        <div className="flex flex-col">
          <h2 className="mb-6 text-2xl font-semibold capitalize">shop</h2>
          <a href="" className="mb-2 text-xl font-light duration-500 hover:text-secondary hover:translate-x-2 capitalize">chair</a>
          <a href="" className="mb-2 text-xl font-light duration-500 hover:text-secondary hover:translate-x-2 capitalize">table</a>
          <a href="" className="mb-2 text-xl font-light duration-500 hover:text-secondary hover:translate-x-2 capitalize">bed</a>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-6 text-2xl font-semibold capitalize">help</h2>
          <a href="" className="mb-2 text-xl font-light duration-500 hover:text-secondary hover:translate-x-2 capitalize">contact</a>
          <a href="" className="mb-2 text-xl font-light duration-500 hover:text-secondary hover:translate-x-2 capitalize">payment</a>
          <a href="" className="mb-2 text-xl font-light duration-500 hover:text-secondary hover:translate-x-2 capitalize">faq</a>
        </div>
        </div>
        </div>
        <div className="">
          <p className="text-lg font-light text-gray text-center mt-4">
            Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer