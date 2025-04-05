
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 tanzanian-pattern">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-tz-green to-tz-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-tz-green to-tz-blue bg-clip-text text-transparent">
                Biashara Yangu
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Kukusaidia kuanza na kukuza biashara yako Tanzania.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Viungo Muhimu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-tz-blue transition-colors">
                  Nyumbani
                </Link>
              </li>
              <li>
                <Link to="/biashara" className="text-gray-600 hover:text-tz-blue transition-colors">
                  Wazo la Biashara
                </Link>
              </li>
              <li>
                <Link to="/mpango" className="text-gray-600 hover:text-tz-blue transition-colors">
                  Mpango wa Biashara
                </Link>
              </li>
              <li>
                <Link to="/mafunzo" className="text-gray-600 hover:text-tz-blue transition-colors">
                  Mafunzo
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mawasiliano</h3>
            <p className="text-gray-600 text-sm">
              Kwa maswali au maoni, wasiliana nasi kupitia:
            </p>
            <p className="text-gray-600 text-sm">
              Barua pepe: info@bisharayangu.co.tz
            </p>
            <p className="text-gray-600 text-sm">
              Simu: +255 716 002 790
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-between">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Biashara Yangu. Haki zote zimehifadhiwa.
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="/kuhusu" className="text-sm text-gray-500 hover:text-tz-blue transition-colors">
              Kuhusu Sisi
            </Link>
            <Link to="/sera-ya-faragha" className="text-sm text-gray-500 hover:text-tz-blue transition-colors">
              Sera ya Faragha
            </Link>
            <Link to="/masharti" className="text-sm text-gray-500 hover:text-tz-blue transition-colors">
              Masharti
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
