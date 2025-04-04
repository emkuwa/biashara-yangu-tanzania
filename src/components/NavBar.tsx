
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Book, Home, Briefcase, HelpCircle, UserPlus, Users, MessageSquare, Text } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  
  const navItems = [
    { name: 'Nyumbani', path: '/', icon: Home },
    { name: 'Biashara', path: '/biashara', icon: Briefcase },
    { name: 'Mafunzo', path: '/mafunzo', icon: Book },
    { name: 'Jamii', path: '/jamii', icon: Users },
    { name: 'Chatbot', path: '/chatbot', icon: MessageSquare },
    { name: 'Jina la Biashara', path: '/jina', icon: Text },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
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
              const needsAuth = item.path !== '/' && item.path !== '/biashara';
              
              if (needsAuth && !isAuthenticated) {
                return null;
              }
              
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
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-blue-100 text-tz-blue">
                        {user?.name ? getInitials(user.name) : 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Akaunti Yangu</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Wasifu Wangu</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/mipango">Mipango Yangu</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    Toka
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button asChild variant="ghost">
                  <Link to="/ingia">Ingia</Link>
                </Button>
                <Button asChild className="bg-tz-blue hover:bg-blue-600">
                  <Link to="/sajili">
                    <UserPlus size={18} className="mr-1" />
                    Jisajili
                  </Link>
                </Button>
              </div>
            )}
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
              const needsAuth = item.path !== '/' && item.path !== '/biashara';
              
              if (needsAuth && !isAuthenticated) {
                return null;
              }
              
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
            
            {isAuthenticated ? (
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-base font-medium text-gray-800">
                  {user?.name}
                </div>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-tz-blue hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Wasifu Wangu
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  Toka
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-2 mt-2 space-y-1">
                <Link
                  to="/ingia"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-tz-blue hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ingia
                </Link>
                <Link
                  to="/sajili"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-tz-blue text-white hover:bg-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserPlus size={20} className="inline mr-2" />
                  Jisajili
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
