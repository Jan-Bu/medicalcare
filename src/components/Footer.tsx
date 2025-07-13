import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo/logo_white1_nobg.png"
                alt="Medical Care Logo"
                className="h-16 w-16 object-contain"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-sm text-slate-900">This is where our address will go</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-sm text-slate-900">This is where our phone number will go</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-sm text-slate-900">This is where our email address will go</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-900 hover:text-vividblue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-900 hover:text-vividblue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-900 hover:text-vividblue transition-colors">Services</Link></li>
              <li><Link to="/rehabilitation" className="text-slate-900 hover:text-vividblue transition-colors">Rehabilitation</Link></li>
              <li><Link to="/contact" className="text-slate-900 hover:text-vividblue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-slate-900 hover:text-vividblue transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-slate-900 hover:text-vividblue transition-colors">Privacy & GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <p className="text-slate-900 text-sm">This is where social media links will go:</p>
            <a href="#" className="text-slate-900 hover:text-vividblue transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-900 hover:text-vividblue transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-900 hover:text-vividblue transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-900 hover:text-vividblue transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-slate-900 text-sm">
            © 2024 Medical Service Provider. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;