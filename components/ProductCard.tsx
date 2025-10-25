import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isClickable?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, isClickable = true }) => {
  const clickableClasses = isClickable
    ? 'transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer'
    : '';

  return (
    <div 
      onClick={() => isClickable && onSelect(product)}
      className={`group relative font-mono text-center bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-xl ${clickableClasses}`}
    >
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-4 xl:aspect-h-5 w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-sm font-bold tracking-widest uppercase text-black">{product.name}</h3>
        <p className="mt-2 text-lg text-gray-700">{product.price}</p>
      </div>
      <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isClickable ? 'group-hover:opacity-100' : ''}`}>
        <span className={`text-white text-4xl font-bold uppercase tracking-widest drop-shadow-lg transition-transform duration-300 ${isClickable ? 'group-hover:scale-110' : ''}`}>
          {product.country}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;