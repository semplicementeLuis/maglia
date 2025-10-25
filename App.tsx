import React, { useState, useEffect, useRef } from 'react';
import Header, { MobileMenu } from './components/Header';
import ProductCard from './components/ProductCard';
import VoteCard from './components/VoteCard';
import About from './components/About';
import Footer from './components/Footer';
import ComingSoonCard from './components/ComingSoonCard';
import ProductDetailView from './components/ProductDetailView';
import { AVAILABLE_PRODUCTS, VOTABLE_PRODUCTS } from './constants';
import { VotableProduct, Product } from './types';
import { ChevronDownIcon } from './components/Icons';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [votableProducts, setVotableProducts] = useState<VotableProduct[]>(VOTABLE_PRODUCTS);
  const [showAll, setShowAll] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const prevSelectedProductIdRef = useRef<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  useEffect(() => {
    if (selectedProduct) {
        // If we are showing a product detail view
        if (prevSelectedProductIdRef.current !== null && prevSelectedProductIdRef.current !== selectedProduct.id) {
            // And we were previously showing a different product detail view, scroll up.
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        prevSelectedProductIdRef.current = selectedProduct.id;
    } else {
        // We are not in a detail view, reset the ref.
        prevSelectedProductIdRef.current = null;
    }
  }, [selectedProduct]);

  const handleVote = (productId: number) => {
    setVotableProducts(prevProducts =>
      prevProducts.map(p => {
        if (p.id === productId) {
          return p.voted
            ? { ...p, votes: p.votes - 1, voted: false }
            : { ...p, votes: p.votes + 1, voted: true };
        }
        return p;
      })
    );
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetailView = () => {
    setSelectedProduct(null);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <main>
        <section id="shop" className="py-12 sm:py-16 bg-white transition-all duration-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {selectedProduct ? (
                    <ProductDetailView 
                      key={selectedProduct.id}
                      initialProduct={selectedProduct}
                      allProducts={AVAILABLE_PRODUCTS}
                      onClose={handleCloseDetailView} 
                      onShowToast={showToast} 
                      onSelectProduct={handleProductSelect}
                    />
                ) : (
                    <>
                        <h2 className="text-center text-3xl font-bold tracking-widest uppercase text-black font-mono mb-12">Prodotti Disponibili</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {AVAILABLE_PRODUCTS.map(product => (
                                <ProductCard key={product.id} product={product} onSelect={handleProductSelect} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>

        <section id="vote" className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 font-mono">
              <h2 className="text-3xl font-bold tracking-widest uppercase text-black">Sblocca le Prossime Patch</h2>
              <p className="mt-4 max-w-2xl mx-auto text-md text-gray-600 leading-relaxed tracking-wide">
                Ogni voto ci avvicina allo sblocco di nuove collezioni! Vota la tua patch preferita e vederla disponibile per l'acquisto.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {votableProducts.map(product => (
                <VoteCard key={product.id} product={product} onVote={handleVote} />
              ))}
            </div>

            <div className="relative">
              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showAll ? 'max-h-[40rem] pt-8' : 'max-h-0'}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <ComingSoonCard key="coming-soon-1" />
                      <ComingSoonCard key="coming-soon-2" />
                      <ComingSoonCard key="coming-soon-3" />
                  </div>
              </div>

              {!showAll && (
                  <div className="relative mt-2 h-24 flex items-end justify-center">
                      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent pointer-events-none -top-24"></div>
                      <button
                          onClick={() => setShowAll(true)}
                          className="relative bg-white text-black font-semibold uppercase tracking-wider py-3 px-10 border border-gray-300 rounded-full shadow-lg hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-105 flex items-center"
                      >
                          <span>Mostra Altri</span>
                          <ChevronDownIcon className="w-5 h-5 ml-2" />
                      </button>
                  </div>
              )}
            </div>
          </div>
        </section>

        <About />
      </main>
      <Footer />
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default App;