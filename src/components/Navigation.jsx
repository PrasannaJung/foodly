import "./Hero.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className='navbar'>
      <div>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/items'
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All Items
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
