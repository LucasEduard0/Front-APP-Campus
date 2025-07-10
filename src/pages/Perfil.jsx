import React, { useState } from 'react';
import { mockUser } from '../data/mock';

const interessesList = [
  'Inteligência Artificial',
  'Blockchain',
  'Metaverso',
  'Robótica',
  'Games',
  'Hardware',
  'Maker',
  'Startups',
  'Sustentabilidade',
  'Cidades Inteligentes',
  'Educação Tech',
  'Open Source',
  'Biohacking'
];

const ddis = ['+55', '+1', '+44', '+34', '+351'];

export default function Perfil() {
  const [form, setForm] = useState({
    nome: mockUser.name,
    ddi: '+55',
    celular: '',
    instagram: '',
    bio: '',
    interesses: [],
    notificacoes: []
  });
  const [erroCel, setErroCel] = useState('');

  const brRegex = /^(?:\d{2})\s\d{4,5}-\d{4}$/;

  const toggleInteresse = (i) => {
    setForm((f) => ({
      ...f,
      interesses: f.interesses.includes(i)
        ? f.interesses.filter((x) => x !== i)
        : [...f.interesses, i]
    }));
  };

  const toggleNot = (n) => {
    setForm((f) => ({
      ...f,
      notificacoes: f.notificacoes.includes(n)
        ? f.notificacoes.filter((x) => x !== n)
        : [...f.notificacoes, n]
    }));
  };

  const handleSave = () => {
    if (!brRegex.test(form.celular)) {
      setErroCel('Formato inválido. Ex: 61 99999-9999');
      return;
    }
    setErroCel('');
    alert('Perfil salvo! (mock)');
  };

  return (
    <div className="pb-20">
      {/* header */}
      <div className="relative h-40 bg-cover" style={{ backgroundImage: "url('https://brasil.campus-party.org/wp-content/uploads/2025/04/Widget_CPWeekendAracaju_1920x1000px.png')" }}>
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <img
            src={mockUser.avatarUrl}
            alt={form.nome}
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* card */}
      <div className="mt-16 mx-4 bg-white rounded-2xl shadow p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold">{form.nome}</h2>
          <span className="text-primary font-semibold text-sm">Campuseiro com camping</span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Celular</label>
          <div className="flex gap-2">
            <select
              className="border rounded px-2"
              value={form.ddi}
              onChange={(e) => setForm({ ...form, ddi: e.target.value })}
            >
              {ddis.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <input
              className="flex-1 border rounded px-3 py-2"
              placeholder="61 99999-9999"
              value={form.celular}
              onChange={(e) => setForm({ ...form, celular: e.target.value })}
            />
          </div>
          {erroCel && <p className="text-xs text-red-600 mt-1">{erroCel}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Instagram</label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="@usuario"
            value={form.instagram}
            onChange={(e) => setForm({ ...form, instagram: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows={3}
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Interesses</label>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
            <div className="flex flex-wrap gap-3">
              {interessesList.map((i, index) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleInteresse(i)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    form.interesses.includes(i) 
                      ? 'bg-primary text-white shadow-md border-2 border-primary' 
                      : 'bg-white text-gray-700 shadow-sm border-2 border-gray-200 hover:border-primary/50'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'gentleFloat 4s ease-in-out infinite'
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Quero receber notificações por:</label>
          <div className="flex gap-3">
            {['E-mail', 'Push', 'WhatsApp'].map((n) => (
              <label key={n} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={form.notificacoes.includes(n)}
                  onChange={() => toggleNot(n)}
                />
                {n}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors"
        >
          Salvar
        </button>
      </div>
      
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        button {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}