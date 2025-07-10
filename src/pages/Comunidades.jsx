import React, { useState } from 'react';
import { mockComunidadeFeed } from '../data/mock';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';
import { mockUser } from '../data/mock';

export default function Comunidades() {
  const [posts, setPosts] = useState(mockComunidadeFeed);
  const [comentariosVisiveis, setComentariosVisiveis] = useState({});
  const [novoComentario, setNovoComentario] = useState({});

  const toggleCurtir = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          curtido: !post.curtido,
          curtidas: post.curtido ? post.curtidas - 1 : post.curtidas + 1
        };
      }
      return post;
    }));
  };

  const toggleComentarios = (postId) => {
    setComentariosVisiveis(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const adicionarComentario = (postId) => {
    const texto = novoComentario[postId];
    if (!texto?.trim()) return;

    const novoComent = {
      id: Date.now(),
      usuario: 'Você',
      avatar: mockUser.avatarUrl,
      texto: texto,
      tempo: 'agora'
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comentarios: [...post.comentarios, novoComent]
        };
      }
      return post;
    }));

    setNovoComentario(prev => ({
      ...prev,
      [postId]: ''
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-200 px-4 py-4">
        <h1 className="text-xl font-bold">Comunidade Campus</h1>
        <p className="text-sm text-gray-600">Conecte-se com outros campuseiros</p>
      </div>

      {/* Feed */}
      <div className="space-y-4 p-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Header do post */}
            <div className="p-4 pb-3">
              <div className="flex items-center">
                <img 
                  src={post.usuario.avatar} 
                  alt={post.usuario.nome}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm">{post.usuario.nome}</h4>
                    {post.usuario.verificado && (
                      <BsCheckCircleFill className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{post.tempo}</p>
                </div>
              </div>
            </div>

            {/* Conteúdo do post */}
            <div className="px-4 pb-3">
              <p className="text-sm text-gray-800 leading-relaxed mb-3">
                {post.texto}
              </p>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {post.hashtags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full hover:bg-blue-100 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Imagem do post */}
            {post.imagem && (
              <div className="px-4 pb-3">
                <img 
                  src={post.imagem} 
                  alt="Post"
                  className="w-full rounded-lg object-cover max-h-80"
                />
              </div>
            )}

            {/* Ações */}
            <div className="px-4 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* Curtir */}
                  <button
                    onClick={() => toggleCurtir(post.id)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors"
                  >
                    {post.curtido ? (
                      <AiFillHeart className="w-5 h-5 text-red-500" />
                    ) : (
                      <AiOutlineHeart className="w-5 h-5" />
                    )}
                    <span className={post.curtido ? 'text-red-500' : ''}>{post.curtidas}</span>
                  </button>

                  {/* Comentários */}
                  <button
                    onClick={() => toggleComentarios(post.id)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <AiOutlineComment className="w-5 h-5" />
                    <span>{post.comentarios.length}</span>
                  </button>

                  {/* Compartilhar */}
                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-500 transition-colors">
                    <AiOutlineShareAlt className="w-5 h-5" />
                    <span>Compartilhar</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Seção de comentários */}
            {comentariosVisiveis[post.id] && (
              <div className="border-t border-gray-100 bg-gray-50">
                {/* Lista de comentários */}
                <div className="p-4 space-y-3">
                  {post.comentarios.map((comentario) => (
                    <div key={comentario.id} className="flex gap-3">
                      <img 
                        src={comentario.avatar} 
                        alt={comentario.usuario}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="bg-white rounded-lg px-3 py-2">
                          <p className="font-semibold text-xs text-gray-800">{comentario.usuario}</p>
                          <p className="text-sm text-gray-700">{comentario.texto}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-3">{comentario.tempo}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Adicionar comentário */}
                <div className="p-4 pt-0">
                  <div className="flex gap-3">
                    <img 
                      src={mockUser.avatarUrl} 
                      alt="Você"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        placeholder="Escreva um comentário..."
                        className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                        value={novoComentario[post.id] || ''}
                        onChange={(e) => setNovoComentario(prev => ({
                          ...prev,
                          [post.id]: e.target.value
                        }))}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            adicionarComentario(post.id);
                          }
                        }}
                      />
                      <button
                        onClick={() => adicionarComentario(post.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 