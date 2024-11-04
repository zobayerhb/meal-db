import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-yellow-400">
      <nav className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
