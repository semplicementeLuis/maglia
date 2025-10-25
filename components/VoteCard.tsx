import React from 'react';
import { VotableProduct } from '../types';

interface VoteCardProps {
  product: VotableProduct;
  onVote: (id: number) => void;
}

const VoteCard: React.FC<VoteCardProps> = ({ product, onVote }) => {
  const progressPercentage = (product.votes / product.goal) * 100;

  return (
    <div className="font-mono text-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
          <span className="text-xl font-bold text-white tracking-widest uppercase">{product.country}</span>
          <span className="mt-2 text-sm text-white uppercase">Vota per sbloccare!</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-sm font-bold tracking-widest uppercase text-black">{product.name}</h3>
        <div className="my-4 flex-grow">
          <div className="bg-gray-200 rounded-full h-1.5 w-full">
            <div
              className="bg-black h-1.5 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-600 mt-2 tracking-wider">
            {product.votes} / {product.goal} Voti
          </p>
        </div>
        <button
          onClick={() => onVote(product.id)}
          className={`w-full max-w-xs mx-auto font-semibold uppercase tracking-wider py-3 px-4 border transition-colors duration-300 ${
            product.voted
              ? 'bg-white text-black border-black hover:bg-gray-100'
              : 'bg-black text-white border-black hover:bg-white hover:text-black'
          }`}
        >
          {product.voted ? 'Votato!' : 'Vota Ora'}
        </button>
      </div>
    </div>
  );
};

export default VoteCard;