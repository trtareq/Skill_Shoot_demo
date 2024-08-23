import { NavLink } from "react-router-dom";


const NavLinks = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/course">Course</NavLink></li>
        <li><NavLink to="/subscribe">Subscribe</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/testimony">Testimony</NavLink></li>
    </>
    return (
      <>
      {navLinks}
      </>
    );
};

export default NavLinks;