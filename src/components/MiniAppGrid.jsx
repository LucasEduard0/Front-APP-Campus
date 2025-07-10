import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockMenuApps } from '../data/mock';

export default function MiniAppGrid() {
  const { id } = useParams();
  const base = `/evento/${id}`;
  return (
    <div className="grid grid-cols-4 gap-4">
      {mockMenuApps.map((app) => (
        <Link key={app.nome} to={`${base}${app.path}`} className="flex flex-col items-center">
          <div className="bg-primary/10 text-primary rounded-xl w-14 h-14 flex items-center justify-center text-2xl">
            {app.icon}
          </div>
          <span className="text-xs mt-1 text-center">{app.nome}</span>
        </Link>
      ))}
    </div>
  );
} 