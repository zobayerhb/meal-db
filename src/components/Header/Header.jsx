import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="bg-yellow-400">
      <nav className="flex gap-3 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
