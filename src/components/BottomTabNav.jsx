import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineCalendar, AiOutlineUsergroupAdd, AiOutlineEnvironment, AiOutlineMessage, AiOutlineGlobal, AiOutlineSound } from 'react-icons/ai';
import { IoIosMegaphone } from "react-icons/io";

export default function BottomTabNav() {
  const location = useLocation();
  const match = location.pathname.match(/^\/evento\/([^/]+)/);
  if (!match) return null; // safety
  const id = match[1];

  const tabs = [
    { to: `/evento/${id}`, label: 'Início', Icon: AiOutlineHome },
    { to: `/evento/${id}/palestras`, label: 'Palestras', Icon: AiOutlineCalendar },
    { to: `/evento/${id}/fala`, label: '#FalaCampus!', Icon: IoIosMegaphone},
    { to: `/evento/${id}/comunidades`, label: 'Feed da comunidade', Icon: AiOutlineGlobal },
    { to: `/evento/${id}/chat`, label: 'Chat', Icon: AiOutlineMessage },
  ];

  function Tab({ to, Icon, label }) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex flex-col items-center justify-center flex-1 py-2 ${isActive ? 'text-primary' : 'text-gray-500'}`
        }
      >
        <Icon className="w-6 h-6" />
        <span className="text-[10px] leading-none text-center">{label}</span>
      </NavLink>
    );
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner h-16 flex z-50 overflow-x-auto">
      {tabs.map((tab) => (
        <Tab key={tab.to} {...tab} />
      ))}
    </nav>
  );
} 