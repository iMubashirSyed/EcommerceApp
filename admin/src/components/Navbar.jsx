import React from 'react';
import navbar_logo from '../assets/nav-logo.svg';
import profile_logo from '../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-300 text-white p-4 shadow-md">
      <div className="navbar-logos flex justify-between items-center w-[90%] mx-auto">
        {/* Navbar Logo */}
        <img src={navbar_logo} alt="Navbar Logo" className="h-14 w-auto" />

        {/* Profile Logo */}
        <img src={profile_logo} alt="Profile Logo" className="h-13 w-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;