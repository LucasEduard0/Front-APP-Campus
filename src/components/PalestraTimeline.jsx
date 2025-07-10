import React from 'react';

export default function PalestraTimeline({ palestras = [] }) {
  return (
    <div className="relative ml-3">
      {/* linha vertical */}
      <div className="absolute left-0 top-0 h-full w-px bg-primary" />
      <div className="space-y-4">
        {palestras.map((p, idx) => (
          <div key={idx} className="relative pl-6">
            {/* ponto */}
            <span className="absolute -left-3 top-2.5 w-3 h-3 rounded-full bg-primary" />
            <div className="bg-white rounded-xl shadow overflow-hidden">
              {p.banner && (
                <img src={p.banner} alt={p.titulo} className="w-full h-24 object-cover" />
              )}
              <div className="p-4 flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-sm mb-1">{p.titulo}</h4>
                  <p className="text-xs text-gray-500">{p.palestrante} • {p.palco}</p>
                </div>
                <span className="text-sm font-semibold text-primary whitespace-nowrap">{p.horario}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 