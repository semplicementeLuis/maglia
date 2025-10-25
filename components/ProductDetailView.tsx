import React, { useState, useRef, useEffect } from 'react';
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

// Componente interno per il contenuto del popover per evitare duplicazioni
const InfoPopoverContent: React.FC<{ product: Product }> = ({ product }) => (
    <>
        <p className="font-bold text-sm uppercase tracking-wider text-black">{product.name}</p>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{product.description}</p>
    </>
);


const ProductDetailView: React.FC<ProductDetailViewProps> = ({ initialProduct, allProducts, onClose, onShowToast, onSelectProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  
  const popoverRefDesktop = useRef<HTMLDivElement>(null);
  const popoverRefMobile = useRef<HTMLDivElement>(null);
  const infoButtonRef = useRef<HTMLButtonElement>(null);

  const selectedProduct = initialProduct;
  const otherProducts = allProducts.filter(p => p.id !== selectedProduct.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      onShowToast('Seleziona una taglia');
      return;
    }
    onShowToast(`${selectedProduct.name} (Taglia: ${selectedSize}) aggiunto al carrello`);
  };
  
  useEffect(() => {
    if (!showInfo) return;

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
            (infoButtonRef.current && infoButtonRef.current.contains(target)) ||
            (popoverRefDesktop.current && popoverRefDesktop.current.contains(target)) ||
            (popoverRefMobile.current && popoverRefMobile.current.contains(target))
        ) {
            return;
        }
        setShowInfo(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInfo]);

  const buttonBaseClass = "w-14 h-14 rounded-lg border flex items-center justify-center transition duration-300 font-mono font-bold text-lg flex-shrink-0 shadow-md transform hover:shadow-xl";
  
  return (
    <div className="w-full animate-fade-in font-mono">
      {/* Pulsante di chiusura per l'intera vista */}
      <div className="relative w-full">
          <button
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-600 hover:text-black transition-colors z-30 -translate-y-8"
              aria-label="Chiudi"
          >
              <XIcon className="w-10 h-10" />
          </button>
      </div>

      {/* Sezione prodotto principale - Layout reattivo */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center pb-20">
        {/* Colonna 1: Popover Info per Desktop */}
        <div className="hidden lg:flex justify-end">
            {showInfo && (
                <div ref={popoverRefDesktop} className="w-72 bg-white p-4 rounded-lg shadow-xl border border-gray-200 animate-fade-in text-left">
                   <InfoPopoverContent product={selectedProduct} />
                </div>
            )}
        </div>

        {/* Colonna 2: Card Prodotto e Azioni */}
        <div className="lg:col-start-2 flex flex-col items-center">
            <div className="relative w-full md:w-3/4 lg:w-full mx-auto">
                <ProductCard 
                    product={selectedProduct}
                    onSelect={() => {}} 
                    isClickable={false}
                />
                 {/* Popover per schermi < lg. Posizionamento responsive. */}
                {showInfo && (
                    <div 
                        ref={popoverRefMobile}
                        className="absolute w-72 max-w-[90%] bg-white p-4 rounded-lg shadow-xl border border-gray-200 animate-fade-in text-left z-10 lg:hidden left-1/2 -translate-x-1/2 top-1/2 md:top-[45%] -translate-y-1/2"
                        role="tooltip"
                    >
                        <InfoPopoverContent product={selectedProduct} />
                    </div>
                )}
            </div>
            
            <div className="mt-10 flex items-end justify-center">
                {/* Pulsante Info */}
                <div className="px-6 sm:px-8">
                    <button
                        ref={infoButtonRef}
                        onClick={() => setShowInfo(!showInfo)}
                        className={`${buttonBaseClass} -translate-y-2 hover:-translate-y-3 ${showInfo ? 'bg-black text-white border-black border-2' : 'bg-white text-black border-gray-300 hover:border-black hover:border-2'}`}
                        aria-label="Informazioni sul prodotto"
                        aria-expanded={showInfo}
                    >
                        <QuestionMarkIcon className="w-7 h-7" />
                    </button>
                </div>

                {/* Selettori Taglia */}
                <div className="flex items-center justify-center gap-3">
                    {SIZES.map(size => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(prevSize => prevSize === size ? null : size)}
                            className={`${buttonBaseClass} hover:-translate-y-1 ${
                            selectedSize === size
                                ? 'bg-black text-white border-black border-2'
                                : 'bg-white text-black border-gray-300 hover:border-black hover:border-2'
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                
                {/* Pulsante Carrello */}
                <div className="px-6 sm:px-8">
                    <button
                        onClick={handleAddToCart}
                        className={`${buttonBaseClass} bg-white text-black border-gray-300 hover:border-black hover:border-2 -translate-y-2 hover:-translate-y-3`}
                        aria-label="Aggiungi al Carrello"
                    >
                        <ShoppingCartIcon className="w-7 h-7" />
                    </button>
                </div>
            </div>
        </div>
        {/* Colonna 3: Vuota per centrare il layout */}
      </div>
      
      {/* Altri Prodotti */}
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