import React from 'react';
import { Link } from 'react-router-dom';

export default function HamburgerMenu({ open, onClose, eventId }) {
  if (!open) return null;
  const base = `/evento/${eventId}`;
  const items = [
    { label: 'Pessoas', to: `${base}/pessoas` },
    { label: 'Mapa', to: `${base}/mapa` },
    { label: 'Chat', to: `${base}/chat` },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* backdrop */}
      <div
        className="flex-1 bg-black/50"
        onClick={onClose}
        role="button"
        tabIndex={-1}
      />
      {/* drawer */}
      <div className="w-64 bg-white h-full p-6 flex flex-col space-y-4 shadow-lg">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="text-gray-800 text-base font-medium"
            onClick={onClose}
          >
            {it.label}
          </Link>
        ))}
        <div className="mt-auto pt-4 border-t">
          <Link to="/" className="text-red-600 font-semibold" onClick={onClose}>
            Sair do evento
          </Link>
        </div>
      </div>
    </div>
  );
} 