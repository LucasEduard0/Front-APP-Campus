import React, { useState } from 'react';
import { mockPalestras } from '../data/mock';
import PalestraModal from '../components/PalestraModal';

export default function Palestras() {
  const [busca, setBusca] = useState('');
  const [selected, setSelected] = useState(null);
  const list = mockPalestras.filter((p) =>
    p.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-4 pb-20">
      <input
        type="text"
        placeholder="Buscar palestras..."
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="space-y-2">
        {list.map((p, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4 flex justify-between" onClick={() => setSelected(p)}>
            <div>
              <h4 className="font-medium">{p.titulo}</h4>
              <p className="text-xs text-gray-500">{p.palco}</p>
            </div>
            <span className="text-sm font-semibold text-primary">{p.horario}</span>
          </div>
        ))}
      </div>
      <PalestraModal palestra={selected} onClose={() => setSelected(null)} />
    </div>
  );
} 