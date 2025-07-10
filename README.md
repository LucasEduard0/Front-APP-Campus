# SuperApp Campus Party (Protótipo)

Protótipo frontend em React + TailwindCSS simulando um Super App para a Campus Party.

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento:

```bash
npm run dev
```

3. Acesse http://localhost:5173

## Stack

- Vite + React
- TailwindCSS
- React Router

Dados mockados em `src/data/mock.js`.

## Estrutura

- `Home` – Saudações, banner de próximo evento, grid de mini-apps, destaques.
- `Palestras` – Lista filtrável de atividades.
- `Pessoas` – Participantes próximos (mock).
- `Mapa` – Imagem placeholder com zoom.
- `Chat` – Chat simples in-memory.
- `Comunidades` – Categorias de comunidade.

- Header fixo com logo e informações de evento/usuário.

Design responsivo mobile-first inspirado em apps de eventos. 