import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative font-mono text-center bg-white border border-gray-200 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-4 xl:aspect-h-5 w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-sm font-bold tracking-widest uppercase text-black">{product.name}</h3>
        <p className="mt-2 text-lg text-gray-700">{product.price}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <button className="w-full max-w-xs bg-white text-black font-semibold uppercase tracking-wider py-3 px-4 border border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-300">
          Acquista
        </button>
        <button className="w-full max-w-xs bg-transparent text-white font-semibold uppercase tracking-wider py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors duration-300">
          Personalizza
        </button>
      </div>
    </div>
  );
};

export default ProductCard;