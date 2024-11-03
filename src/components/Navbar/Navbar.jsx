import { Link } from "react-router-dom";
import bgImg from '../../assets/banner.jpg'

export default function Navbar() {
  return (
    <div className="w-11/12 mx-auto mt-5 border-2 rounded-xl relative">
      <div className="p-3">
     <div className="navbar bg-[#9538E2] rounded-t-2xl">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
       <li><Link to="/statistics">Statistics</Link></li>
       <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Gadget Heaven</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/statistics">Statistics</Link></li>
       <li><Link to="/dashboard">Dashboard</Link></li>

      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  <div className=" text-center bg-[#9538E2] pt-12 h-[450px] rounded-b-2xl">
    <h3 className="text-4xl font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h3>
    <p className="text-white text-xs mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
    <div className="mt-5">
    <button className="btn bg-white rounded-full border-0">
      <span className="text-[#9538E2]">Shop Now</span></button>
    </div>
  </div>
     </div>
  <div className='absolute hidden md:block top-[340px] right-[160px] rounded-2xl border-2 border-stone-100'>
    <img className="w-[1000px] h-[500px] rounded-3xl p-3" src={bgImg} alt="" />   
  </div>
    </div>
  )
}
