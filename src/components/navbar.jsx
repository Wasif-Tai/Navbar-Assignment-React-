import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;