import React, { useState } from 'react';
import { mockChats, mockUser } from '../data/mock';
import { AiOutlineArrowLeft, AiOutlineSend, AiOutlineUsergroupAdd, AiOutlinePaperClip, AiOutlinePlayCircle, AiOutlinePauseCircle, AiOutlineDownload } from 'react-icons/ai';
import { BsCircleFill, BsMicFill, BsStopFill } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function Chat() {
  const [chatAtivo, setChatAtivo] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [chats, setChats] = useState(mockChats);
  const [gravandoAudio, setGravandoAudio] = useState(false);
  const [reproduzindoAudio, setReproduzindoAudio] = useState(null);

  const enviarMensagem = () => {
    if (!mensagem.trim() || !chatAtivo) return;

    const novaMensagem = {
      id: Date.now(),
      remetente: 'Você',
      texto: mensagem,
      tempo: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      minha: true,
      tipo: 'texto'
    };

    setChats(chats.map(chat => {
      if (chat.id === chatAtivo.id) {
        return {
          ...chat,
          mensagens: [...chat.mensagens, novaMensagem],
          ultimaMensagem: mensagem,
          tempo: 'agora'
        };
      }
      return chat;
    }));

    setMensagem('');
  };

  const enviarArquivo = () => {
    if (!chatAtivo) return;

    const novoArquivo = {
      id: Date.now(),
      remetente: 'Você',
      nomeArquivo: 'documento.pdf',
      tamanhoArquivo: '1.2 MB',
      tempo: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      minha: true,
      tipo: 'arquivo'
    };

    setChats(chats.map(chat => {
      if (chat.id === chatAtivo.id) {
        return {
          ...chat,
          mensagens: [...chat.mensagens, novoArquivo],
          ultimaMensagem: 'Arquivo',
          tempo: 'agora'
        };
      }
      return chat;
    }));
  };

  const iniciarGravacao = () => {
    setGravandoAudio(true);
    // Simular gravação por 2 segundos
    setTimeout(() => {
      pararGravacao();
    }, 2000);
  };

  const pararGravacao = () => {
    setGravandoAudio(false);
    
    if (!chatAtivo) return;

    const novoAudio = {
      id: Date.now(),
      remetente: 'Você',
      duracao: '0:02',
      tempo: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      minha: true,
      tipo: 'audio'
    };

    setChats(chats.map(chat => {
      if (chat.id === chatAtivo.id) {
        return {
          ...chat,
          mensagens: [...chat.mensagens, novoAudio],
          ultimaMensagem: 'Áudio',
          tempo: 'agora'
        };
      }
      return chat;
    }));
  };

  const toggleAudio = (msgId) => {
    setReproduzindoAudio(reproduzindoAudio === msgId ? null : msgId);
  };

  const renderizarMensagem = (msg) => {
    const isMinhaMsg = msg.minha;
    const baseClasses = `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
      isMinhaMsg
        ? 'bg-primary text-white rounded-br-none'
        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
    }`;

    switch (msg.tipo) {
      case 'texto':
        return (
          <div className={baseClasses}>
            {!isMinhaMsg && chatAtivo.tipo === 'grupo' && (
              <p className="text-xs text-primary font-semibold mb-1">
                {msg.remetente}
              </p>
            )}
            <p className="text-sm">{msg.texto}</p>
            <p className={`text-xs mt-1 ${isMinhaMsg ? 'text-white/70' : 'text-gray-500'}`}>
              {msg.tempo}
            </p>
          </div>
        );

      case 'audio':
        return (
          <div className={baseClasses}>
            {!isMinhaMsg && chatAtivo.tipo === 'grupo' && (
              <p className="text-xs text-primary font-semibold mb-1">
                {msg.remetente}
              </p>
            )}
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleAudio(msg.id)}
                className={`p-1 rounded-full ${isMinhaMsg ? 'bg-white/20' : 'bg-primary/10'}`}
              >
                {reproduzindoAudio === msg.id ? (
                  <AiOutlinePauseCircle className={`w-6 h-6 ${isMinhaMsg ? 'text-white' : 'text-primary'}`} />
                ) : (
                  <AiOutlinePlayCircle className={`w-6 h-6 ${isMinhaMsg ? 'text-white' : 'text-primary'}`} />
                )}
              </button>
              <div className="flex-1">
                <div className={`h-1 rounded-full ${isMinhaMsg ? 'bg-white/30' : 'bg-gray-300'}`}>
                  <div className={`h-full rounded-full ${isMinhaMsg ? 'bg-white' : 'bg-primary'} w-1/3`}></div>
                </div>
                <p className={`text-xs mt-1 ${isMinhaMsg ? 'text-white/70' : 'text-gray-500'}`}>
                  {msg.duracao}
                </p>
              </div>
            </div>
            <p className={`text-xs mt-1 ${isMinhaMsg ? 'text-white/70' : 'text-gray-500'}`}>
              {msg.tempo}
            </p>
          </div>
        );

      case 'arquivo':
        return (
          <div className={baseClasses}>
            {!isMinhaMsg && chatAtivo.tipo === 'grupo' && (
              <p className="text-xs text-primary font-semibold mb-1">
                {msg.remetente}
              </p>
            )}
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isMinhaMsg ? 'bg-white/20' : 'bg-primary/10'}`}>
                <HiOutlineDocumentText className={`w-6 h-6 ${isMinhaMsg ? 'text-white' : 'text-primary'}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{msg.nomeArquivo}</p>
                <p className={`text-xs ${isMinhaMsg ? 'text-white/70' : 'text-gray-500'}`}>
                  {msg.tamanhoArquivo}
                </p>
              </div>
              <button className={`p-1 ${isMinhaMsg ? 'text-white/70' : 'text-gray-500'}`}>
                <AiOutlineDownload className="w-4 h-4" />
              </button>
            </div>
            <p className={`text-xs mt-2 ${isMinhaMsg ? 'text-white/70' : 'text-gray-500'}`}>
              {msg.tempo}
            </p>
          </div>
        );

      case 'imagem':
        return (
          <div className={baseClasses}>
            {!isMinhaMsg && chatAtivo.tipo === 'grupo' && (
              <p className="text-xs text-primary font-semibold mb-1">
                {msg.remetente}
              </p>
            )}
            <img 
              src={msg.imagem} 
              alt="Imagem compartilhada"
              className="rounded-lg max-w-full h-auto"
            />
            <p className={`text-xs mt-2 ${isMinhaMsg ? 'text-white/70' : 'text-gray-500'}`}>
              {msg.tempo}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const voltarParaLista = () => {
    setChatAtivo(null);
  };

  // Lista de conversas
  if (!chatAtivo) {
    return (
      <div className="bg-gray-50 min-h-screen pb-20">
        {/* Header com botão Nova conversa */}
        <div className="bg-white sticky top-0 z-10 border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Conversas</h1>
              <p className="text-sm text-gray-600">Conecte-se com outros campuseiros</p>
            </div>
            <button
              onClick={() => {
                // Aqui você pode adicionar lógica para criar nova conversa
                alert('Funcionalidade em desenvolvimento!');
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span className="text-lg">+</span>
              Nova conversa
            </button>
          </div>
        </div>

        {/* Lista de chats */}
        <div className="divide-y divide-gray-100 bg-white mx-4 mt-4 rounded-xl shadow-sm">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setChatAtivo(chat)}
              className="flex items-center p-4 hover:bg-gray-50 cursor-pointer active:bg-gray-100 first:rounded-t-xl last:rounded-b-xl"
            >
              {/* Avatar */}
              <div className="relative mr-3">
                <img
                  src={chat.avatar}
                  alt={chat.nome}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {/* Indicador online (apenas para chats privados) */}
                {chat.tipo === 'privado' && chat.online && (
                  <BsCircleFill className="absolute bottom-0 right-0 w-3 h-3 text-green-500 bg-white rounded-full" />
                )}
                {/* Indicador de grupo */}
                {chat.tipo === 'grupo' && (
                  <div className="absolute -bottom-1 -right-1 bg-gray-500 rounded-full p-1">
                    <AiOutlineUsergroupAdd className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {chat.nome}
                  </h3>
                  <span className="text-xs text-gray-500">{chat.tempo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">
                    {chat.ultimaMensagem}
                  </p>
                  {chat.naoLidas > 0 && (
                    <div className="bg-primary text-white rounded-full min-w-[20px] h-5 flex items-center justify-center px-2 ml-2">
                      <span className="text-xs font-medium">
                        {chat.naoLidas > 99 ? '99+' : chat.naoLidas}
                      </span>
                    </div>
                  )}
                </div>
                {/* Info do grupo */}
                {chat.tipo === 'grupo' && (
                  <p className="text-xs text-gray-500 mt-1">
                    {chat.participantes} participantes
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Tela de conversa individual
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header da conversa */}
      <div className="bg-primary text-white p-4 flex items-center sticky top-0 z-10">
        <button
          onClick={voltarParaLista}
          className="mr-3 p-1 hover:bg-white/20 rounded-full"
        >
          <AiOutlineArrowLeft className="w-6 h-6" />
        </button>
        <img
          src={chatAtivo.avatar}
          alt={chatAtivo.nome}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div className="flex-1">
          <h2 className="font-semibold">{chatAtivo.nome}</h2>
          <p className="text-sm opacity-90">
            {chatAtivo.tipo === 'privado' 
              ? (chatAtivo.online ? 'online' : 'offline')
              : `${chatAtivo.participantes} participantes`
            }
          </p>
        </div>
      </div>

      {/* Mensagens */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto pb-20">
        {chatAtivo.mensagens.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.minha ? 'justify-end' : 'justify-start'}`}
          >
            {renderizarMensagem(msg)}
          </div>
        ))}
      </div>

      {/* Input de mensagem */}
      <div className="bg-white border-t border-gray-200 p-4 fixed bottom-16 left-0 right-0 z-40">
        <div className="flex items-end gap-3">
          {/* Botão de anexar arquivo */}
          <button
            onClick={enviarArquivo}
            className="p-3 text-gray-500 hover:text-primary transition-colors flex-shrink-0"
          >
            <AiOutlinePaperClip className="w-6 h-6" />
          </button>

          {/* Container do input */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  enviarMensagem();
                }
              }}
              placeholder="Digite sua mensagem..."
              className="w-full border-2 border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-gray-50 focus:bg-white transition-all"
            />
          </div>

          {/* Botão de áudio ou enviar */}
          {mensagem.trim() ? (
            <button
              onClick={enviarMensagem}
              className="p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex-shrink-0 shadow-lg"
            >
              <AiOutlineSend className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={gravandoAudio ? pararGravacao : iniciarGravacao}
              className={`p-3 rounded-full transition-colors flex-shrink-0 shadow-lg ${
                gravandoAudio 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {gravandoAudio ? (
                <BsStopFill className="w-6 h-6" />
              ) : (
                <BsMicFill className="w-6 h-6" />
              )}
            </button>
          )}
        </div>
        
        {/* Indicador de gravação */}
        {gravandoAudio && (
          <div className="mt-2 flex items-center justify-center">
            <div className="flex items-center gap-2 text-red-500 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Gravando áudio...
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 