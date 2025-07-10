import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function PalestraModal({ palestra, onClose }) {
  const [fav, setFav] = useState(false);
  const [pop, setPop] = useState(false);
  if (!palestra) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl max-w-md w-full mx-4 overflow-hidden">
        <div className="relative">
          {palestra.banner && (
            <img src={palestra.banner} alt={palestra.titulo} className="w-full h-40 object-cover" />
          )}
          <button
            onClick={() => {
              setFav(!fav);
              setPop(true);
              setTimeout(() => setPop(false), 400);
            }}
            className={`absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1 ${
              pop ? 'animate-pop' : ''
            }`}
          >
            {fav ? (
              <AiFillHeart className="text-red-600 w-5 h-5" />
            ) : (
              <AiOutlineHeart className="text-gray-600 w-5 h-5" />
            )}
          </button>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{palestra.titulo}</h3>
          <p className="text-sm text-gray-600">{palestra.palestrante} • {palestra.palco}</p>
          <p className="text-sm text-gray-800">{palestra.resumo}</p>
          <div className="flex flex-wrap gap-2">
            {palestra.tags?.map((t) => (
              <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <button
            className="mt-4 w-full bg-primary text-white py-2 rounded-lg font-semibold"
            onClick={() => {
              const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                palestra.titulo
              )}&details=${encodeURIComponent(palestra.resumo)}&location=${encodeURIComponent(palestra.palco)}`;
              window.open(url, '_blank');
            }}
          >
            Integrar com o Google Agenda
          </button>

          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
            onClick={() => {
              const msg = `Quero ser notificado sobre a palestra ${palestra.titulo} na Campus Party!`;
              const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
              window.open(url, '_blank');
            }}
          >
            Receber notificação via WhatsApp
          </button>
        </div>
      </div>
      <style jsx="true">{`
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
} 