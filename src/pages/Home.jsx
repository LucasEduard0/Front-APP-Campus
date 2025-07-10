import React from 'react';
import { mockEvents } from '../data/mock';
import { Link } from 'react-router-dom';
import LandingFooter from '../components/LandingFooter';

export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center text-center space-y-6 pb-20">
      <img src="src/logo.png" alt="Campus Party" className="h-20 mt-10" />
      <h1 className="text-xl font-semibold">Bem-vindo(a) à Campus Party!</h1>
      <p className="text-sm text-gray-600 max-w-xs">
        Conecte-se ao futuro, explore ideias e viva a experiência tech mais épica do planeta.
      </p>

      <div className="flex space-x-4 overflow-x-auto w-full -mx-4 px-4 pb-2 scroll-smooth">
        {mockEvents.map((ev) => (
          <Link
            key={ev.id}
            to={`/acessando/${ev.id}`}
            className="flex-shrink-0 bg-white shadow rounded-xl overflow-hidden w-64"
          >
            <img src={ev.banner} alt={ev.nome} className="w-full h-32 object-cover" />
            <div className="p-4 text-left">
              <h2 className="font-medium text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {ev.nome}
              </h2>
              <p className="text-xs text-gray-500">{ev.data} • {ev.cidade}</p>
            </div>
          </Link>
        ))}
      </div>
      <LandingFooter />
    </div>
  );
} 