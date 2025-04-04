
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Book, Home, Briefcase, HelpCircle, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Nyumbani', path: '/', icon: Home },
    { name: 'Biashara', path: '/biashara', icon: Briefcase },
    { name: 'Mafunzo', path: '/mafunzo', icon: Book },
    { name: 'Usaidizi', path: '/usaidizi', icon: HelpCircle }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-tz-green to-tz-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-tz-green to-tz-blue bg-clip-text text-transparent">
                Biashara Yangu
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors",
                    location.pathname === item.path
                      ? "text-tz-blue"
                      : "text-gray-600 hover:text-tz-blue hover:bg-blue-50"
                  )}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/sajili"
              className="ml-4 bg-tz-blue text-white px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-1 hover:bg-blue-600 transition-colors"
            >
              <UserPlus size={18} />
              <span>Jisajili</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2",
                    location.pathname === item.path
                      ? "bg-blue-50 text-tz-blue"
                      : "text-gray-600 hover:text-tz-blue hover:bg-blue-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/sajili"
              className="block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 bg-tz-blue text-white hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus size={20} />
              <span>Jisajili</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
