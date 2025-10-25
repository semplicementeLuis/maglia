import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 font-mono text-sm text-gray-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex space-x-6 uppercase tracking-wider">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-black transition-colors">Contatti</a>
          </div>
          <p className="text-xs tracking-wider uppercase">&copy; {new Date().getFullYear()} CHEROBA. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;