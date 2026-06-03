import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">AG</Link>
        <ul className="hidden md:flex gap-8">
          <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
          <li><Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
        </ul>
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-6 gap-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900 text-lg">Home</Link></li>
            <li><Link to="/projects" className="text-gray-600 hover:text-gray-900 text-lg">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 text-lg">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;