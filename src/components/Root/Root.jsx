import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


export default function Root() {
  return (
    <div>
        <Navbar></Navbar>
       <div className="relative z-50 mt-[400px]">
       <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}
