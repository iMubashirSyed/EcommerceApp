import React from "react";
import logo from "./assets/logo_big.png";
import instagram_logo from "./assets/instagram_icon.png";
import whatsapp_logo from "./assets/whatsapp_icon.png";
import pintester from "./assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-white py-10 px-5 mt-7">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Footer Logo Section */}
        <div className="footer-logo flex flex-col items-center md:items-start gap-3">
          <img src={logo} alt="ShopEase Logo" className="h-12" />
          <h1 className="text-2xl font-bold">ShopEase</h1>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for all your needs.
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-3 text-center md:text-left">
            <li className="hover:text-gray-400 cursor-pointer">Company</li>
            <li className="hover:text-gray-400 cursor-pointer">Offices</li>
            <li className="hover:text-gray-400 cursor-pointer">Products</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="social-icons">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-5">
            <div className="icons-container">
              <img src={instagram_logo} alt="Instagram" className="h-8 w-8 bg-white cursor-pointer rounded-3xl" />
            </div>
            <div className="icons-container ">
              <img src={pintester} alt="Pinterest" className="h-8 w-8 bg-white cursor-pointer rounded-3xl" />
            </div>
            <div className="icons-container ">
              <img src={whatsapp_logo} alt="WhatsApp" className="h-8 w-8 bg-white cursor-pointer rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom mt-10">
        <hr className="border-gray-700" />
        <p className="text-center text-gray-500 mt-4 text-sm">
          &copy; 2025 ShopEase. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;