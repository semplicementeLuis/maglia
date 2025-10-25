import React, { useState } from 'react';
import { Product } from '../types';
import { XIcon, ShoppingCartIcon, QuestionMarkIcon } from './Icons';
import ProductCard from './ProductCard';

interface ProductDetailViewProps {
  initialProduct: Product;
  allProducts: Product[];
  onClose: () => void;
  onShowToast: (message: string) => void;
  onSelectProduct: (product: Product) => void;
}

const SIZES = ['S', 'M', 'L'];

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ initialProduct, allProducts, onClose, onShowToast, onSelectProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  
  const selectedProduct = initialProduct;
  const otherProducts = allProducts.filter(p => p.id !== selectedProduct.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      onShowToast('Seleziona una taglia');
      return;
    }
    onShowToast(`${selectedProduct.name} (Taglia: ${selectedSize}) aggiunto al carrello`);
  };
  
  const buttonBaseClass = "w-14 h-14 rounded-lg border flex items-center justify-center transition-all duration-300 font-mono font-bold text-lg flex-shrink-0 shadow-md";
  
  return (
    <div className="w-full animate-fade-in font-mono">
      {/* Main Product Section */}
      <div className="relative w-full flex flex-col items-center justify-center pb-12">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-gray-600 hover:text-black transition-colors z-20 -translate-y-8"
          aria-label="Chiudi"
        >
          <XIcon className="w-10 h-10" />
        </button>
        
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
            <ProductCard 
                product={selectedProduct}
                onSelect={() => {}} 
                isClickable={false}
            />
        </div>
        
        <div className="mt-10 flex items-end justify-center">
            {/* Info Button Wrapper */}
            <div className="relative px-3 sm:px-5">
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className={`${buttonBaseClass} transform -translate-y-2 ${showInfo ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-black'}`}
                    aria-label="Informazioni sul prodotto"
                >
                    <QuestionMarkIcon className="w-7 h-7" />
                </button>
                {showInfo && (
                    <div 
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-white p-4 rounded-lg shadow-xl border border-gray-200 animate-fade-in-up text-left z-10"
                    >
                        <p className="font-bold text-sm uppercase tracking-wider text-black">{selectedProduct.name}</p>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                    </div>
                )}
            </div>

            {/* Size selectors */}
            <div className="flex items-center justify-center gap-3">
                {SIZES.map(size => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`${buttonBaseClass} ${
                        selectedSize === size
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-gray-300 hover:border-black'
                        }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
            
            {/* Cart Button Wrapper */}
            <div className="px-3 sm:px-5">
                <button
                    onClick={handleAddToCart}
                    className={`${buttonBaseClass} bg-white text-black border-gray-300 hover:border-black transform -translate-y-2`}
                    aria-label="Aggiungi al Carrello"
                >
                    <ShoppingCartIcon className="w-7 h-7" />
                </button>
            </div>
        </div>
      </div>
      
      {/* Other Products Section */}
      <div className="w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-center text-2xl font-bold tracking-widest uppercase text-black font-mono mb-12">Altri Prodotti Disponibili</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {otherProducts.map(product => (
                      <div key={product.id} className="transform scale-95 opacity-80 transition-all duration-300 hover:scale-100 hover:opacity-100">
                        <ProductCard product={product} onSelect={onSelectProduct} />
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetailView;