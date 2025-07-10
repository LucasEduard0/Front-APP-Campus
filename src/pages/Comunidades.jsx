import React, { useState } from 'react';
import { mockComunidadeFeed } from '../data/mock';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineShareAlt, AiOutlinePicture } from 'react-icons/ai';
import { BsCheckCircleFill, BsBarChart, BsX } from 'react-icons/bs';
import { mockUser } from '../data/mock';

export default function Comunidades() {
  const [posts, setPosts] = useState(mockComunidadeFeed);
  const [comentariosVisiveis, setComentariosVisiveis] = useState({});
  const [novoComentario, setNovoComentario] = useState({});
  const [showModalPost, setShowModalPost] = useState(false);
  const [novoPost, setNovoPost] = useState({
    texto: '',
    hashtags: '',
    imagem: null,
    enquete: null
  });
  const [showEnquete, setShowEnquete] = useState(false);
  const [opcaoEnquete, setOpcaoEnquete] = useState('');
  const [opcoesEnquete, setOpcoesEnquete] = useState([]);

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNovoPost(prev => ({
          ...prev,
          imagem: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const adicionarOpcaoEnquete = () => {
    if (opcaoEnquete.trim() && opcoesEnquete.length < 4) {
      setOpcoesEnquete([...opcoesEnquete, opcaoEnquete.trim()]);
      setOpcaoEnquete('');
    }
  };

  const removerOpcaoEnquete = (index) => {
    setOpcoesEnquete(opcoesEnquete.filter((_, i) => i !== index));
  };

  const criarPost = () => {
    if (!novoPost.texto.trim() && !novoPost.imagem && opcoesEnquete.length === 0) {
      return;
    }

    const post = {
      id: Date.now(),
      usuario: {
        nome: 'Você',
        avatar: mockUser.avatarUrl,
        verificado: false
      },
      texto: novoPost.texto,
      tempo: 'agora',
      hashtags: novoPost.hashtags.split(' ').filter(tag => tag.startsWith('#')),
      imagem: novoPost.imagem,
      enquete: opcoesEnquete.length > 0 ? {
        opcoes: opcoesEnquete.map(opcao => ({
          texto: opcao,
          votos: 0,
          porcentagem: 0
        })),
        totalVotos: 0,
        jaVotou: false
      } : null,
      curtidas: 0,
      curtido: false,
      comentarios: []
    };

    setPosts([post, ...posts]);
    resetarFormulario();
    setShowModalPost(false);
  };

  const resetarFormulario = () => {
    setNovoPost({
      texto: '',
      hashtags: '',
      imagem: null,
      enquete: null
    });
    setShowEnquete(false);
    setOpcaoEnquete('');
    setOpcoesEnquete([]);
  };

  const votarEnquete = (postId, opcaoIndex) => {
    setPosts(posts.map(post => {
      if (post.id === postId && post.enquete && !post.enquete.jaVotou) {
        const novaEnquete = { ...post.enquete };
        novaEnquete.opcoes[opcaoIndex].votos += 1;
        novaEnquete.totalVotos += 1;
        novaEnquete.jaVotou = true;
        
        // Recalcular porcentagens
        novaEnquete.opcoes.forEach(opcao => {
          opcao.porcentagem = Math.round((opcao.votos / novaEnquete.totalVotos) * 100);
        });

        return {
          ...post,
          enquete: novaEnquete
        };
      }
      return post;
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Comunidade Campus</h1>
            <p className="text-sm text-gray-600">Conecte-se com outros campuseiros</p>
          </div>
          <button
            onClick={() => setShowModalPost(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <span className="text-lg">+</span>
            Fazer post
          </button>
        </div>
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
              {post.hashtags && post.hashtags.length > 0 && (
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
              )}
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

            {/* Enquete */}
            {post.enquete && (
              <div className="px-4 pb-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <BsBarChart className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Enquete</span>
                  </div>
                  <div className="space-y-2">
                    {post.enquete.opcoes.map((opcao, index) => (
                      <button
                        key={index}
                        onClick={() => votarEnquete(post.id, index)}
                        disabled={post.enquete.jaVotou}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          post.enquete.jaVotou 
                            ? 'bg-gray-200 cursor-not-allowed' 
                            : 'bg-white hover:bg-blue-50 border border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{opcao.texto}</span>
                          {post.enquete.jaVotou && (
                            <span className="text-xs text-gray-500">
                              {opcao.porcentagem}% ({opcao.votos} votos)
                            </span>
                          )}
                        </div>
                        {post.enquete.jaVotou && (
                          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all"
                              style={{width: `${opcao.porcentagem}%`}}
                            ></div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  {post.enquete.jaVotou && (
                    <p className="text-xs text-gray-500 mt-2">
                      Total de votos: {post.enquete.totalVotos}
                    </p>
                  )}
                </div>
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

      {/* Modal de Criação de Post */}
      {showModalPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Criar Post</h2>
              <button
                onClick={() => {
                  setShowModalPost(false);
                  resetarFormulario();
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <BsX className="w-6 h-6" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-4 space-y-4">
              {/* Perfil do usuário */}
              <div className="flex items-center gap-3">
                <img 
                  src={mockUser.avatarUrl} 
                  alt="Você"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Você</p>
                  <p className="text-xs text-gray-500">Público</p>
                </div>
              </div>



              {/* Campo de texto */}
              <textarea
                placeholder="No que você está pensando?"
                className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                value={novoPost.texto}
                onChange={(e) => setNovoPost(prev => ({
                  ...prev,
                  texto: e.target.value
                }))}
              />

              {/* Campo de hashtags */}
              <input
                type="text"
                placeholder="Adicione hashtags (#tecnologia #campus)"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                value={novoPost.hashtags}
                onChange={(e) => setNovoPost(prev => ({
                  ...prev,
                  hashtags: e.target.value
                }))}
              />

              {/* Enquete */}
              {showEnquete && (
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-800">Opções da Enquete</h3>
                  
                  {/* Opções existentes */}
                  <div className="space-y-2">
                    {opcoesEnquete.map((opcao, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={opcao}
                          readOnly
                          className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                        />
                        <button
                          onClick={() => removerOpcaoEnquete(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <BsX className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Adicionar nova opção */}
                  {opcoesEnquete.length < 4 && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Nova opção..."
                        className="flex-1 p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                        value={opcaoEnquete}
                        onChange={(e) => setOpcaoEnquete(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            adicionarOpcaoEnquete();
                          }
                        }}
                      />
                      <button
                        onClick={adicionarOpcaoEnquete}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                      >
                        Adicionar
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Preview da imagem */}
              {novoPost.imagem && (
                <div className="relative">
                  <img 
                    src={novoPost.imagem} 
                    alt="Preview"
                    className="w-full rounded-lg object-cover max-h-64"
                  />
                  <button
                    onClick={() => setNovoPost(prev => ({
                      ...prev,
                      imagem: null
                    }))}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
                  >
                    <BsX className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Opções de mídia */}
              <div className="flex items-center gap-4 py-2">
                <label className="flex items-center gap-2 text-gray-600 hover:text-blue-500 cursor-pointer">
                  <AiOutlinePicture className="w-5 h-5" />
                  <span className="text-sm">Foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <button 
                  onClick={() => setShowEnquete(!showEnquete)}
                  className={`flex items-center gap-2 transition-colors ${
                    showEnquete 
                      ? 'text-blue-500' 
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  <BsBarChart className="w-5 h-5" />
                  <span className="text-sm">Enquete</span>
                </button>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowModalPost(false);
                    resetarFormulario();
                  }}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={criarPost}
                  className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 