import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineTeam, AiOutlineSound, AiOutlineBulb } from 'react-icons/ai';
import { IoIosMegaphone } from "react-icons/io";

const items = [
  { to: '/', label: 'Início', Icon: AiOutlineHome },
  { to: '/comunidade', label: 'Comunidade', Icon: AiOutlineTeam },
  { to: '/fala', label: '#FalaCampus', Icon: IoIosMegaphone},
  { to: '/novidades', label: 'Novidades', Icon: AiOutlineBulb },
];

function Item({ to, Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center flex-1 py-2 ${isActive ? 'text-primary' : 'text-gray-500'}`
      }
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs text-center whitespace-nowrap">{label}</span>
    </NavLink>
  );
}

export default function LandingFooter() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner h-16 flex z-40">
      {items.map((i) => (
        <Item key={i.to} {...i} />
      ))}
    </nav>
  );
} 