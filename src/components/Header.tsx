import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Heart } from 'lucide-react';
import '@google/model-viewer';

// Povolení použití <model-viewer> v JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Medical Equipment', href: '/rehabilitation' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy & GDPR', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo (3D) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <model-viewer
                src="/logo/medcare3D.glb"
                alt="3D Logo"
                auto-rotate
                auto-rotate-delay="0"
                rotation-per-second="20deg"
                disable-zoom
                camera-controls={false}
                interaction-prompt="none"
                style={{ height: '64px', width: '64px', overflow: 'visible' }}
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-3 text-slate-700 hover:text-red-600 p-3 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <>
                  <Heart className="h-7 w-7 text-red-600" />
                  <span className="text-lg font-medium text-vividblue">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${isActive(item.href)
                    ? 'text-red-600 bg-gray-300'
                    : 'text-slate-700 hover:text-red-600 hover:bg-gray-200'
                    } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
