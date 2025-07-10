import React, { useState } from 'react';
import { mockFalaCampusPost } from '../data/mock';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function FalaCampus() {
  const [posts, setPosts] = useState(mockFalaCampusPost);

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

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">#FalaCampus 📣</h3>
        <p className="text-sm text-gray-600">Fique por dentro das novidades, dicas e próximos eventos!</p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            {/* Header do post */}
            <div className="flex items-center mb-3">
              <img 
                src={post.avatar} 
                alt={post.nome}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{post.nome}</h4>
                <p className="text-xs text-gray-500">{post.tempo}</p>
              </div>
            </div>

            {/* Conteúdo do post */}
            <p className="text-sm text-gray-800 mb-3 leading-relaxed">
              {post.texto}
            </p>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {post.hashtags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Ações */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              {/* Botão de curtir */}
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

              {/* Botão de ação */}
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-primary/90 transition-colors">
                {post.botaoAcao.texto}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 