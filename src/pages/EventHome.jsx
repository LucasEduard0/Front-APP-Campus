import React from 'react';
import MiniAppGrid from '../components/MiniAppGrid';
import PalestraTimeline from '../components/PalestraTimeline';
import { mockUser, mockPalestras } from '../data/mock';
import { useEffect, useState, useMemo } from 'react';

function getNextPalestra() {
  // assumir mesmas datas (hoje) e comparar horário
  const now = new Date();
  const upcoming = mockPalestras
    .map((p) => {
      const [h, m] = p.horario.split(':').map(Number);
      const start = new Date();
      start.setHours(h, m, 0, 0);
      if (start < now) start.setDate(start.getDate() + 1); // próxima manhã
      return { ...p, start };
    })
    .sort((a, b) => a.start - b.start)[0];
  return upcoming;
}

function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState(() => targetDate - Date.now());
  useEffect(() => {
    const id = setInterval(() => setRemaining(targetDate - Date.now()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  const hrs = String(Math.max(0, Math.floor(remaining / 3600000))).padStart(2, '0');
  const mins = String(Math.max(0, Math.floor((remaining % 3600000) / 60000))).padStart(2, '0');
  const secs = String(Math.max(0, Math.floor((remaining % 60000) / 1000))).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

export default function EventHome() {
  const next = useMemo(() => getNextPalestra(), []);
  const countdown = useCountdown(next.start);
  return (
    <div className="p-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">Olá, {mockUser.name} 👋</h2>
        <p className="text-sm text-gray-600">Bem-vindo(a) à {mockUser.eventName}!</p>
      </header>

      <section className="mb-4">
        <div className="rounded-2xl bg-primary text-white p-4 shadow-md overflow-hidden flex items-center">
          <div className="flex-1 pr-3">
            <h3 className="text-lg font-semibold mb-1">Próxima palestra</h3>
            <p className="text-sm font-medium leading-snug">{next.titulo}</p>
            <p className="text-xs mb-2">{next.palestrante} • {next.palco}</p>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Começa em {countdown}</span>
          </div>
          {next.banner && (
            <img
              src={next.banner}
              alt={next.titulo}
              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
            />
          )}
        </div>
      </section>

      <section className="mb-6">
        <MiniAppGrid />
      </section>

      <section className="mb-20">
        <h3 className="text-base font-semibold mb-4">Próximas palestras</h3>
        <PalestraTimeline palestras={mockPalestras.slice(0, 4)} />
      </section>
    </div>
  );
} 