import React from 'react';
import { TShirtSimpleIcon } from './Icons';

const ComingSoonCard: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-6 text-center font-mono">
      <TShirtSimpleIcon className="h-16 w-16 text-gray-300" />
      <span className="mt-4 text-lg font-bold uppercase tracking-widest text-gray-400">
        Prossimamente
      </span>
      <p className="mt-1 text-sm text-gray-500">
        Nuove patch in arrivo. Continua a votare!
      </p>
    </div>
  );
};

export default ComingSoonCard;