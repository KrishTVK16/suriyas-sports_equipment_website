import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { path: '/shop', label: 'All Products' },
      { path: '/shop?category=shoes', label: 'Shoes' },
      { path: '/shop?category=apparel', label: 'Apparel' },
      { path: '/shop?category=equipment', label: 'Equipment' },
    ],
    company: [
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
      { path: '#', label: 'Careers' },
      { path: '#', label: 'Blog' },
    ],
    support: [
      { path: '#', label: 'Shipping Info' },
      { path: '#', label: 'Returns' },
      { path: '#', label: 'Size Guide' },
      { path: '#', label: 'FAQs' },
    ],
  };

  return (
    <footer className="bg-forest-green text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-nunito font-extrabold text-2xl text-sunset-orange mb-4">
              SPORTSEQUIP
            </h3>
            <p className="font-lato text-mountain-gray text-sm mb-4">
              Your ultimate destination for premium outdoor sports equipment and adventure gear.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-mountain-gray hover:text-sunset-orange transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-nunito font-extrabold text-lg mb-4 uppercase">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-lato text-sm text-mountain-gray hover:text-sunset-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-nunito font-extrabold text-lg mb-4 uppercase">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-lato text-sm text-mountain-gray hover:text-sunset-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-nunito font-extrabold text-lg mb-4 uppercase">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-lato text-sm text-mountain-gray hover:text-sunset-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nature-divider mt-8 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-lato text-sm text-mountain-gray">
            © {currentYear} SPORTSEQUIP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="#"
              className="font-lato text-sm text-mountain-gray hover:text-sunset-orange transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="font-lato text-sm text-mountain-gray hover:text-sunset-orange transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
