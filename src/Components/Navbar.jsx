import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">InspireHub</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/gallery" className="hover:text-yellow-300">
          Gallery
        </Link>
        <Link to="/about" className="hover:text-yellow-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-yellow-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
