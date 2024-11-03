

export default function Footer() {
  return (
   <div className="my-20 bg-white">
    <div className="text-center my-10">
        <h3 className="text-2xl font-bold text-black">Gadget Heaven</h3>
        <p className="text-[#09080F99] text-xs pt-3 font-semibold">Leading the way in cutting-edge technology and innovation.</p>
    </div>
    <div className="divider"></div>
     <footer className="flex flex-col md:flex-row justify-around pl-5 md:pl-0">
  <nav className="flex flex-col">
    <h6 className="text-black font-bold md:text-center">Services</h6>
    <a className="link link-hover  text-[#09080F99] font-semibold">Product Support</a>
    <a className="link link-hover text-[#09080F99] font-semibold">Order Tracking</a>
    <a className="link link-hover text-[#09080F99] font-semibold">Shipping & Delivery</a>
    <a className="link link-hover text-[#09080F99] font-semibold">Returns</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="text-black font-bold md;text-center">Company</h6>
    <a className="link link-hover  text-[#09080F99] font-semibold">About us</a>
    <a className="link link-hover  text-[#09080F99] font-semibold">Careers</a>
    <a className="link link-hover  text-[#09080F99] font-semibold">Contact</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="text-black font-bold md:text-center">Legal</h6>
    <a className="link link-hover text-[#09080F99] font-semibold">Terms of service</a>
    <a className="link link-hover text-[#09080F99] font-semibold">Privacy policy</a>
    <a className="link link-hover text-[#09080F99] font-semibold">Cookie policy</a>
  </nav>
</footer>
   </div>
  )
}
