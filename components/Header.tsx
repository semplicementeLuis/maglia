import React, { useState, useEffect } from 'react';
import { TShirtSimpleIcon, UserIcon, ShoppingCartIcon, MenuIcon, XIcon } from './Icons';

export const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const handleLinkClick = () => {
        onClose();
    };

    const [isRendered, setIsRendered] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        } else {
            const timer = setTimeout(() => {
                setIsRendered(false);
            }, 400); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isRendered) {
        return null;
    }

    return (
        <div 
            className={`fixed inset-0 z-50 font-mono`}
            role="dialog"
            aria-modal="true"
        >
            <div 
                className={`absolute inset-0 bg-black transition-opacity duration-400 ease-out ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
                onClick={onClose}
            ></div>
            <div className={`relative w-64 h-full bg-white ml-auto p-6 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={onClose} className="self-end mb-8 text-gray-500 hover:text-black">
                    <XIcon className="w-8 h-8" />
                </button>
                <nav className="flex flex-col space-y-6 text-xl font-semibold tracking-wider uppercase text-right">
                    <a href="#shop" onClick={handleLinkClick} className="text-gray-600 hover:text-black transition-colors duration-300">Shop</a>
                    <a href="#vote" onClick={handleLinkClick} className="text-gray-600 hover:text-black transition-colors duration-300">Vota</a>
                    <a href="#about" onClick={handleLinkClick} className="text-gray-600 hover:text-black transition-colors duration-300">Chi Siamo</a>
                </nav>
                <div className="mt-auto flex justify-end space-x-6">
                    <a href="#" onClick={handleLinkClick} className="text-gray-500 hover:text-black transition-colors duration-300">
                        <UserIcon className="w-8 h-8" />
                    </a>
                    <a href="#" onClick={handleLinkClick} className="text-gray-500 hover:text-black transition-colors duration-300">
                        <ShoppingCartIcon className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </div>
    );
};

interface HeaderProps {
    onMenuOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
    return (
        <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-40 font-mono">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    <a href="#" className="flex items-center space-x-2 text-2xl font-bold tracking-widest text-black">
                        <TShirtSimpleIcon className="w-8 h-8" />
                        <span>CHEROBA</span>
                    </a>
                    <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 text-sm font-semibold tracking-wider uppercase">
                        <a href="#shop" className="text-gray-500 hover:text-black transition-colors duration-300">Shop</a>
                        <a href="#vote" className="text-gray-500 hover:text-black transition-colors duration-300">Vota per Sbloccare</a>
                        <a href="#about" className="text-gray-500 hover:text-black transition-colors duration-300">Chi Siamo</a>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">
                            <UserIcon className="w-7 h-7" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">
                            <ShoppingCartIcon className="w-7 h-7" />
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={onMenuOpen} className="text-gray-600 hover:text-black">
                            <MenuIcon className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;