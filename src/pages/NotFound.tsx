
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <div className="mb-6 bg-red-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto">
            <span className="text-5xl font-bold text-red-500">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Ukurasa Haujapatikana</h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Samahani, ukurasa unaotafuta haujapatikana. Ukurasa "{location.pathname}" haupo kwenye tovuti yetu.
          </p>
          <Button asChild className="bg-tz-blue hover:bg-blue-600">
            <Link to="/" className="flex items-center">
              <Home size={18} className="mr-2" />
              <span>Rudi Nyumbani</span>
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
