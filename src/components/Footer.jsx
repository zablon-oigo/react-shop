import  { Component } from 'react'
import { FaFacebookF,FaGoogle,FaInstagram,FaTwitter } from "react-icons/fa";
export class Footer extends Component {
  render() {
    return (
      <footer className="container mx-auto px-14 py-8 bg-white rounded-b-[50px]">
        <div className="flex flex-wrap justify-between gap-8">
        <div className="flex items-center justify-center gap-4 text-2xl">
          <FaFacebookF/>
          <FaGoogle/>
          <FaInstagram/>
          <FaTwitter/>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-6 text-2xl font-semibold capitalize">shop</h2>
          <a href="" className="mb-2 text-xl font-light capitalize">chair</a>
          <a href="" className="mb-2 text-xl font-light capitalize">table</a>
          <a href="" className="mb-2 text-xl font-light capitalize">bed</a>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-6 text-2xl font-semibold capitalize">help</h2>
          <a href="" className="mb-2 text-xl font-light capitalize">contact</a>
          <a href="" className="mb-2 text-xl font-light capitalize">payment</a>
          <a href="" className="mb-2 text-xl font-light capitalize">faq</a>
        </div>
        </div>
        <div className=""></div>
      </footer>
    )
  }
}

export default Footer