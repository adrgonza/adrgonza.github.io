import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobile(!isMobile);

  React.useEffect(() => {
    setIsMobile(false);
  }, [location]);

  return (
    <nav
      className="fixed right-0 z-[5] flex items-center transition-all duration-300"
      style={{
        padding: '10px 140px',
      }}
    >
      <ul
        className={`flex list-none items-center ${isMobile ? 'mobile-menu-active' : ''}`}
      >
        {[
          { to: '/', label: 'Home' },
          { to: '/projects', label: 'Projects' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <li key={label}>
            <Link
              to={to}
              className="inline-block no-underline text-black py-2.5 px-3.5 mx-2.5 transition-all duration-300 hover:scale-[1.05] hover:text-[#333]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger toggle */}
      <button
        className="hidden cursor-pointer bg-transparent border-none p-4 rounded transition-all duration-300 hover:scale-[1.1]"
        style={{ display: 'none' }}
        onClick={toggleMenu}
      >
        <div
          className={`w-[30px] h-[4px] bg-[#333] relative transition-all duration-300 ${isMobile ? 'bg-transparent' : ''}`}
        >
          <div
            className={`absolute w-[30px] h-[4px] bg-[#333] transition-all duration-300 ${isMobile ? 'rotate-45 top-0' : 'top-[-8px]'}`}
          />
          <div
            className={`absolute w-[30px] h-[4px] bg-[#333] transition-all duration-300 ${isMobile ? '-rotate-45 top-0' : 'top-[8px]'}`}
          />
        </div>
      </button>

      <style>{`
        @media (max-width: 800px) {
          nav {
            padding: 10px 5px !important;
            width: 100%;
          }
          nav ul {
            display: none !important;
            flex-direction: column !important;
            width: 100% !important;
            text-align: center !important;
          }
          nav ul.mobile-menu-active {
            display: flex !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: #f8f8f8 !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            z-index: 1000 !important;
            animation: expand 0.5s ease-out forwards !important;
          }
          nav ul.mobile-menu-active li {
            margin: 20px 0 !important;
          }
          nav ul.mobile-menu-active .navbar-link {
            font-size: 1.5rem !important;
          }
          nav button {
            display: block !important;
          }
        }
        @keyframes expand {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
