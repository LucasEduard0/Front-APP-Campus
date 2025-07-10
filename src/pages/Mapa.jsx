import React from 'react';

export default function Mapa() {
  return (
    <div className="flex flex-col items-center justify-center p-4 pb-20">
      <div className="w-full max-w-sm aspect-video bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
        <span>🔎 Mapa do evento (mock)</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">Pinch para zoom (apenas demonstração)</p>
    </div>
  );
} 