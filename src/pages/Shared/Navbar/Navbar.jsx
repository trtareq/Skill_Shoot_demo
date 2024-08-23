import Navbar_icon from "./Navbar_icon";
import Name from "./Name";
import NavLinks from "./NavLinks";
import Button_login_Register from "./Button_login_Register";


const Navbar = () => {

    return (
        <div className="navbar text-white 
        bg-[#245D51]">
  <div className="navbar-start">
    <div className="dropdown mx-2">
      <Navbar_icon></Navbar_icon>
      <ul
        tabIndex={0}
        className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLinks></NavLinks>
      </ul>
    </div>
      <Name></Name>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLinks></NavLinks>
    </ul>
  </div>
  <div className="navbar-end ">
     <Button_login_Register></Button_login_Register>
  </div>
</div>
    );
};

export default Navbar;