import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Car, 
  User, 
  Menu, 
  X 
} from 'lucide-react';
import Button from './base/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Vehicles', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-[#6C4CF3] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <social.icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Car Rental
            </span>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/auth">
                <Button 
                  className="bg-[#6C4CF3] hover:bg-[#5a3ed1] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md w-auto"
                >
                  Login
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="border-2 border-[#6C4CF3] text-[#6C4CF3] hover:bg-[#6C4CF3] hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 w-auto"
              >
                Add Post
              </Button>
              <div className="w-10 h-10 bg-[#6C4CF3] rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden md:block border-t border-gray-100">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-12 py-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.href}
                  className="text-gray-700 hover:text-[#6C4CF3] font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6C4CF3] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.href}
                  className="block py-3 px-4 text-gray-700 hover:text-[#6C4CF3] hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <Link to="/auth">
                <Button 
                  className="w-full bg-[#6C4CF3] hover:bg-[#5a3ed1] text-white py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Login
                </Button>
              </Link>
              
              <Button 
                variant="outline"
                className="w-full border-2 border-[#6C4CF3] text-[#6C4CF3] hover:bg-[#6C4CF3] hover:text-white py-3 rounded-lg font-medium transition-all duration-200"
              >
                Add Post
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-gray-900 hover:bg-[#6C4CF3] flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
