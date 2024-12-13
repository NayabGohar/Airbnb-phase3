import React from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="py-4 border-b">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-rose-500 text-2xl font-bold">airbnb</Link>
          
          <div className="flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="text-sm font-semibold px-3">Anywhere</div>
            <div className="border-l border-gray-300 h-4"></div>
            <div className="text-sm font-semibold px-3">Any week</div>
            <div className="border-l border-gray-300 h-4"></div>
            <div className="text-sm text-gray-600 px-3">Add guests</div>
            <div className="bg-rose-500 p-2 rounded-full text-white">
              <Search size={16} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition">
              Airbnb your home
            </div>
            <div className="flex items-center gap-2 border rounded-full p-4 hover:shadow-md transition cursor-pointer">
              <Menu size={18} />
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}