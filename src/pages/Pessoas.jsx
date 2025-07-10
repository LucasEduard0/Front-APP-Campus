import React from 'react';
import { mockPessoas } from '../data/mock';

export default function Pessoas() {
  return (
    <div className="p-4 pb-20">
      <h3 className="text-base font-semibold mb-4">Participantes próximos</h3>
      <div className="space-y-3">
        {mockPessoas.map((p, idx) => (
          <div key={idx} className="flex items-center bg-white rounded-xl shadow p-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary mr-3">
              {p.nome[0]}
            </div>
            <div>
              <p className="font-medium">{p.nome}</p>
              <p className="text-xs text-gray-500">{p.skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 