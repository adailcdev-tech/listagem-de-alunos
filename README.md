# Estudo de Caso: Listagem de Alunos (Web e Mobile)

Este projeto é um estudo de caso prático que envolve o desenvolvimento de duas aplicações, Web e Mobile, para listar e detalhar informações de alunos consumindo uma API REST.

**[➡️ Acesse a aplicação web aqui][(https://listagem-de-alunos-n78f.vercel.app/])**

## 🎯 Objetivo

O objetivo é demonstrar habilidades em desenvolvimento front-end com ecossistemas modernos de JavaScript, cobrindo:
- **Navegação e Rotas**: Gerenciamento de telas e URLs.
- **Consumo de API**: Integração com um serviço externo para buscar dados.
- **Testes Automatizados**: Garantia de qualidade e comportamento esperado na aplicação web.
- **Desenvolvimento Multiplataforma**: Criação de interfaces para Web e Mobile.

## 📂 Estrutura do Projeto

```
/meu-estudo-caso
├── web/     → Projeto React com Vite e Vitest
└── mobile/  → Projeto React Native com Expo
```

## 🚀 Passos para Rodar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (geralmente instalado com o Node.js)

### Aplicação Web

1.  **Navegue até a pasta `web`:**
    ```bash
    cd web
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute o projeto em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

### Aplicação Mobile

1.  **Navegue até a pasta `mobile`:**
    ```bash
    cd mobile
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute o projeto com Expo:**
    ```bash
    npm start
    ```
    Um QR Code aparecerá no terminal. Escaneie-o com o aplicativo **Expo Go** no seu celular para abrir a aplicação.

## 🗺️ Rotas Implementadas (Web)

A aplicação web possui as seguintes rotas:
- **`/`**: Página inicial que exibe a lista de todos os alunos.
- **`/aluno/:id`**: Página que mostra os detalhes de um aluno específico, selecionado a partir da lista.

## 🧪 Instruções para Rodar os Testes (Vitest)

Os testes automatizados foram implementados para a aplicação web para garantir que os componentes de listagem e detalhes funcionem corretamente.

1.  **Navegue até a pasta `web`:**
    ```bash
    cd web
    ```
2.  **Execute o comando de teste:**
    ```bash
    npm run test
    ```
    O Vitest irá rodar os testes e exibir os resultados no terminal.

## 🛠️ Ferramentas e Créditos

### Ferramentas Utilizadas
- **Web**: React, Vite, React Router DOM, Axios, React Bootstrap, Vitest, Testing Library.
- **Mobile**: React Native, Expo, React Navigation, Axios.

### API
- Os dados dos alunos são consumidos da API REST disponível em: Proweb Alunos API.

### Referências
- Documentação oficial do React, Vite, Expo, React Router, React Navigation e outras bibliotecas utilizadas.
- Vídeos de apoio sugeridos no roteiro da atividade.
