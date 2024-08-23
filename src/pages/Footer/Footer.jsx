import Name from "../Shared/Navbar/Name";
import NavLinks from "../Shared/Navbar/NavLinks";
import Email from "./Email";

const Footer = () => {
    return (
        <>
       <footer className="footer mt-10 footer-center bg-[#286054] text-white rounded p-10">
  
  
  <aside>
    <p className="font-bold text-2xl">Subscribe to get notified about update</p>
    <p className="text-[#ffffff96]">By subscribing with your mail, you will accept our privacy policy</p>
  </aside>
   <Email></Email>
   <div className="grid grid-cols-2 gap-96">
    <div><Name></Name></div>
    <div className="flex gap-5 list-none ">
    <NavLinks></NavLinks>
    </div>
    
   </div>
</footer>
      </>
    );
};

export default Footer;