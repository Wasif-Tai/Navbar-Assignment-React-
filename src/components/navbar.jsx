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
      <NavLink
        to="/login"
        className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
      >
        Sign up
      </NavLink>
    </nav>
  );
}

export default Navbar;