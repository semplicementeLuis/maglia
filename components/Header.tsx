import React from 'react';
import { TShirtSimpleIcon, UserIcon, ShoppingCartIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50 font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold tracking-widest text-black">
            <TShirtSimpleIcon className="w-8 h-8" />
            <span>CHEROBA</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider uppercase">
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">Shop</a>
            <a href="#" className="text-black border-b-2 border-black pb-1">Vota per Sbloccare</a>
            <a href="#about" className="text-gray-500 hover:text-black transition-colors duration-300">Chi Siamo</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">
              <UserIcon className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">
              <ShoppingCartIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;