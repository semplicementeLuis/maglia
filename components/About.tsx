import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-widest uppercase text-black mb-6">La Nostra Storia: Cheroba</h2>
        <div className="max-w-3xl mx-auto text-gray-600 space-y-6 leading-relaxed tracking-wide">
          <p>
            Benvenuti in Cheroba, dove la moda incontra la cultura e la community decide le tendenze! Siamo nati dall'idea di celebrare la diversità del mondo attraverso un capo semplice ma iconico: la T-shirt.
          </p>
          <p>
            Ogni nostra maglietta presenta una piccola toppa con la bandiera di un paese, posizionata con orgoglio sul cuore. Ma c'è di più: crediamo che il potere di scelta debba essere nelle mani dei nostri clienti.
          </p>
          <p>
            Ecco perché le nuove patch sono sbloccate dalla vostra community! Votate per i paesi che vorreste vedere nella prossima collezione. Ogni voto conta, e quando una patch raggiunge il suo obiettivo, diventa disponibile per l'acquisto e la personalizzazione. Unisciti a noi nel viaggio attorno al mondo, una T-shirt alla volta!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;