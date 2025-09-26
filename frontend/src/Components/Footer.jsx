import React from "react";
import logo from "./assets/logo_big.png";
import instagram_logo from "./assets/instagram_icon.png";
import whatsapp_logo from "./assets/whatsapp_icon.png";
import pintester from "./assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer py-10 px-5 mt-7">
      {/* Footer Logo Section */}
      <div className="footer-logo flex items-center justify-center md:items-start gap-3">
        <img src={logo} alt="ShopEase Logo" className="h-12 " />
        <h1 className="text-xl font-semibold">ShopEase</h1>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links mt-5 ">
        <ul className="flex flex-col justify-center md:flex-row gap-4 text-center md:text-left">
          <li className="hover:text-gray-400 cursor-pointer">Company</li>
          <li className="hover:text-gray-400 cursor-pointer">Offices</li>
          <li className="hover:text-gray-400 cursor-pointer">Products</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Social Icons Section */}
      <div className="social-icons flex justify-center gap-5 mt-5">
        <div className="icons-container hover:scale-110 transition-transform">
          <img src={instagram_logo} alt="Instagram" className="h-8 w-8" />
        </div>
        <div className="icons-container hover:scale-110 transition-transform">
          <img src={pintester} alt="Pinterest" className="h-8 w-8" />
        </div>
        <div className="icons-container hover:scale-110 transition-transform mb-4">
          <img src={whatsapp_logo} alt="WhatsApp" className="h-8 w-8" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p className="text-center text-gray-400 mt-3">
          &copy; 2025 ShopEase. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
