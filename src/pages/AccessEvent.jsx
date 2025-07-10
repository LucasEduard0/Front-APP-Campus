import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiLock, FiUnlock } from 'react-icons/fi';
import { mockEvents } from '../data/mock';

export default function AccessEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const event = mockEvents.find((e) => e.id === id);

  // Animate lock opening
  useEffect(() => {
    const t1 = setTimeout(() => setOpen(true), 1000);
    const t2 = setTimeout(() => navigate(`/evento/${id}`), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [id, navigate]);

  const Icon = open ? FiUnlock : FiLock;

  return (
    <div className="fixed inset-0 bg-[#0099ff] flex flex-col items-center justify-center text-white z-50">
      {event && (
        <img
          src={event.banner}
          alt={event.nome}
          className="w-4/5 max-w-xs rounded-xl shadow-lg mb-10"
        />
      )}

      <div className="bg-white text-gray-800 rounded-xl p-10 w-4/5 max-w-xs flex flex-col items-center space-y-4 animate-fade-in">
        <Icon className={`text-4xl ${open ? 'animate-unlock' : ''}`} />
        <p className="font-medium">Acessando o evento...</p>
      </div>

      <style jsx="true">{`
        @keyframes unlock {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-unlock {
          animation: unlock 0.6s ease-in-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 