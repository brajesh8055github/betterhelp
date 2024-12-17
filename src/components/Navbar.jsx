import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Photos/logo_reverse_medium-2024.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-green-800 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-white hover:text-gray-900">Business</Link>
        <Link to="/about" className="text-white hover:text-gray-900">About</Link>
        <Link to="/advice" className="text-white hover:text-gray-900">Advice</Link>
        <Link to="/" className="text-white hover:text-gray-900">FAQ</Link>
        <Link to="/" className="text-white hover:text-gray-900">Reviews</Link>
        <Link to="/therapist" className="text-white hover:text-gray-900">Therapist Jobs</Link>
        <Link to="/contact" className="text-white hover:text-gray-900">Contact</Link>
        <button className=" px-4 py-2 border border-white text-white rounded hover:bg-white-50">Login</button>
          <button className=" px-4 py-2 bg-white text-green-800 rounded hover:bg-green-700">
            Get Started
          </button>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-gray-700">
          {menuOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Business</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>About</Link>
          <Link to="/advice" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Advice</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>FAQ</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Reviews</Link>
          <Link to="/therapist" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Therapist Jobs</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Contact</Link>
          <button className="w-full px-4 py-2 border border-white text-white rounded hover:bg-blue-700">Login</button>
          <button className="w-full px-4 py-2 bg-white text-green-800 rounded hover:bg-green-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
