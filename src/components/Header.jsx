import React from 'react';
import { mockUser } from '../data/mock';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
import campusLogo from '../campusbranca.png';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  const location = useLocation();
  if (location.pathname.startsWith('/acessando')) {
    return null;
  }
  const insideEvent = location.pathname.startsWith('/evento');
  const isLanding = location.pathname === '/';
  const isPerfil = location.pathname === '/perfil';

  // Decide style variant: event -> blue block with icons; landing -> blue but no icons; others -> white
  const blueHeader = (isLanding || insideEvent || isPerfil);
  const [menuOpen, setMenuOpen] = useState(false);
  const match = location.pathname.match(/^\/evento\/([^/]+)/);

  const ProfileButton = (
    <Link
      to="/perfil"
      className={`${blueHeader ? 'bg-white/30' : 'bg-gray-200'} w-9 h-9 rounded-full flex items-center justify-center overflow-hidden`}
    >
      <img src={mockUser.avatarUrl} alt={mockUser.name} className="w-full h-full object-cover rounded-full" />
    </Link>
  );
  return (
    <header
      className={`${blueHeader ? 'bg-[#0099ff] text-white rounded-b-3xl' : 'bg-white shadow-sm'} sticky top-0 z-40`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex items-center px-4 ${blueHeader ? 'py-6 justify-between' : 'py-3 justify-between'}`}
      >
        <img
          src={blueHeader ? campusLogo : '/logo.svg'}
          alt="Campus Party"
          className={blueHeader ? 'h-10' : 'h-6'}
        />

        {insideEvent ? (
          <div className="flex items-center gap-2">
            {[FiPlay, AiOutlineBell].map((Icon, idx) => (
              <button
                key={idx}
                className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm"
              >
                <Icon className="text-white w-5 h-5" />
              </button>
            ))}
            {/* menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm"
            >
              <AiOutlineMenu className="text-white w-5 h-5" />
            </button>
            {ProfileButton}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(true)}
              className={`w-9 h-9 rounded-full ${blueHeader ? 'bg-white/30 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center`}
            >
              <AiOutlineMenu className="w-5 h-5" />
            </button>
            {ProfileButton}
          </div>
        )}
      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} eventId={match?.[1] || ''} />
      </div>
    </header>
  );
} 