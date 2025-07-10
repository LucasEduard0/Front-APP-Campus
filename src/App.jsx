import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Palestras from './pages/Palestras';
import Pessoas from './pages/Pessoas';
import Mapa from './pages/Mapa';
import Chat from './pages/Chat';
import Comunidades from './pages/Comunidades';
import BottomTabNav from './components/BottomTabNav';
import Header from './components/Header';
import EventHome from './pages/EventHome';
import AccessEvent from './pages/AccessEvent';
import Perfil from './pages/Perfil';
import FalaCampus from './pages/FalaCampus';

export default function App() {
  const location = useLocation();
  const isEventPath = location.pathname.startsWith('/evento');
  const hideTab = !isEventPath; // show BottomTabNav somente dentro de /evento
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acessando/:id" element={<AccessEvent />} />
          <Route path="/evento/:id" element={<EventHome />} />
          <Route path="/evento/:id/palestras" element={<Palestras />} />
          <Route path="/evento/:id/pessoas" element={<Pessoas />} />
          <Route path="/evento/:id/mapa" element={<Mapa />} />
          <Route path="/evento/:id/chat" element={<Chat />} />
          <Route path="/evento/:id/comunidades" element={<Comunidades />} />
          <Route path="/evento/:id/fala" element={<FalaCampus />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
      {!hideTab && <BottomTabNav />}
    </div>
  );
} 