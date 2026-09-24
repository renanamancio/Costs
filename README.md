<div align="center">

  <img src="./src/img/costs_logo.png" alt="Costs Logo" width="120" />

  # Costs — Gerenciador de Projetos e Custos

  <p>
    <strong>Planeje, gerencie e controle os custos dos seus projetos em um só lugar.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
    <img src="https://img.shields.io/badge/JSON_Server-Mock_API-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server" />
    <img src="https://img.shields.io/badge/CSS_Modules-Estilização-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Modules" />
    <img src="https://img.shields.io/badge/Status-Em_Evolução-FFB800?style=for-the-badge" alt="Status" />
  </p>

  <p>
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-foco-no-front-end">Foco no Front-end</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias-utilizadas">Tecnologias</a> •
    <a href="#-como-executar-o-projeto">Como Executar</a> •
    <a href="#-próximas-melhorias">Próximas Melhorias</a> •
    <a href="#-créditos">Créditos</a>
  </p>

</div>

---

## 📌 Sobre o Projeto

O **Costs** é uma aplicação web voltada para a gestão orçamentária de projetos. Ele permite que o usuário cadastre projetos, determine um orçamento total, selecione categorias e vincule múltiplos serviços/despesas a cada projeto, controlando os gastos em tempo real e impedindo que o orçamento previsto seja ultrapassado.

Este projeto foi construído com base no renomado curso de React ministrado por **Matheus Battisti (Hora de Codar)** e faz parte do meu **portfólio pessoal**, servindo como demonstração prática de fundamentos sólidos de desenvolvimento Front-end com o ecossistema React.

> 💡 **Nota sobre o estágio do projeto:**  
> Esta é uma versão inicial e funcional, desenvolvida para consolidar arquitetura, gerenciamento de estado e fluxo de dados. O projeto está em constante evolução e novas melhorias visuais e técnicas estão sendo implementadas.

---

## 🎯 Foco no Front-end & Simulação de API

O objetivo primordial deste projeto foi **aprofundar e consolidar as habilidades de Front-end**:

- **Componentização e Reutilização:** Construção de componentes atômicos (Inputs, Selects, Botões, Cards, Mensagens de feedback).
- **Roteamento SPA (Single Page Application):** Navegação fluida sem recarregamento de página utilizando React Router.
- **Gerenciamento de Estado e Ciclo de Vida:** Utilização de React Hooks (`useState`, `useEffect`) para controle de estados locais e efeitos colaterais.
- **Consumo de APIs REST:** Implementação de operações assíncronas utilizando a `Fetch API` para requisições `GET`, `POST`, `PATCH` e `DELETE`.

### 🔄 Por que o JSON Server?
Como o objetivo principal era praticar e lapidar a camada do Front-end, o **[JSON Server](https://github.com/typicode/json-server)** foi adotado para simular uma API RESTful completa de forma rápida e realista. Através de um arquivo local (`db.json`), a aplicação consegue persistir dados de projetos e categorias em tempo de execução sem demandar a construção de uma camada de infraestrutura/backend complexa no momento.

---

## ✨ Funcionalidades

- [x] **CRUD Completo de Projetos:**
  - Criação de novos projetos com nome, orçamento total e categoria.
  - Listagem de projetos cadastrados com exibição de orçamento e despesas.
  - Edição dos dados do projeto (nome, orçamento e categoria).
  - Remoção de projetos com atualização instantânea da listagem.
- [x] **Gestão de Serviços e Despesas:**
  - Adição de novos serviços com custo e descrição dentro de um projeto.
  - Validação em tempo real para impedir custos superiores ao orçamento disponível.
  - Exclusão de serviços cadastrados com recálculo automático do custo total do projeto.
- [x] **Feedback ao Usuário:**
  - Mensagens visuais temporizadas (Flash Messages) notificando ações com sucesso ou mensagens de alerta/erro.
  - Componente de Loading animado enquanto dados são requisitados da API.
- [x] **Navegação Dinâmica:**
  - Rotas dedicadas para visualização detalhada de cada projeto (`/project/:id`), criação (`/newproject`), listagem (`/projects`), páginas institucionais (`/company`, `/contact`).

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta | Descrição |
| :--- | :--- |
| **[React](https://react.dev/)** (v19) | Biblioteca principal para construção da interface declarativa em componentes. |
| **[React Router DOM](https://reactrouter.com/)** (v7) | Gerenciamento de rotas e navegação da SPA. |
| **[JSON Server](https://github.com/typicode/json-server)** | Mock API para simulação de requisições RESTful (`db.json`). |
| **[CSS Modules](https://github.com/css-modules/css-modules)** | Estilização escopada e modularizada, evitando conflitos de classes globais. |
| **[React Icons](https://react-icons.github.io/react-icons/)** | Pacote de ícones vetoriais modernos para a interface. |
| **[UUID](https://github.com/uuidjs/uuid)** | Geração de identificadores exclusivos para serviços vinculados aos projetos. |

---

## 📂 Estrutura de Pastas

```text
costs/
├── public/                 # Arquivos públicos e index.html
├── src/
│   ├── components/
│   │   ├── form/          # Inputs, Selects e botões de formulário reutilizáveis
│   │   ├── layout/        # Navbar, Footer, Container, Loader e mensagens
│   │   ├── pages/         # Páginas da aplicação (Home, Projects, Project, etc.)
│   │   ├── project/       # Cards e formulários de projetos
│   │   └── service/       # Cards e formulários de serviços
│   ├── img/               # Imagens e ícones estáticos
│   ├── App.js             # Configuração de rotas e layout raiz
│   └── index.js           # Ponto de entrada da aplicação
├── db.json                # Banco de dados simulado pelo JSON Server
└── package.json           # Dependências e scripts do projeto
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (recomendado versão 18 ou superior)
- Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/costs.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd costs
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o Backend Simulado (JSON Server):**
   > Abra um terminal e execute o comando abaixo. O servidor mock rodará na porta `5000`:
   ```bash
   npm run backend
   ```
   *Você poderá verificar os dados simulados acessando `http://localhost:5000/projects` e `http://localhost:5000/categories`.*

5. **Inicie a Aplicação Front-end (React):**
   > Em **outro terminal**, execute:
   ```bash
   npm start
   ```

6. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para interagir com o Costs.

---

## 🔮 Próximas Melhorias (Roadmap)

Sendo um projeto em constante aprimoramento para portfólio, os seguintes pontos estão mapeados para próximas iterações:

- [ ] **Responsividade Aprimorada:** Otimização dos layouts para dispositivos móveis e tablets.
- [ ] **Evolução do Design:** Refinamento da identidade visual e transição para utilitários modernos (Tailwind CSS).
- [ ] **Testes Automatizados:** Implementação de testes unitários, de integração com React Testing Library e Jest, e de UI com RobotFramework + Selenium.
- [ ] **Filtros e Busca:** Adicionar filtragem de projetos por categoria e busca por nome.
- [ ] **Backend Real:** Futura migração do JSON Server para uma API própria em Node.js / NestJS com banco de dados PostgreSQL/MongoDB.
- [ ] **Autenticação:** Adição de sistema de login e cadastro de usuários com JWT.

---

## 🎓 Créditos e Reconhecimentos

- Projeto desenvolvido com base no curso ministrado por **[Matheus Battisti](https://github.com/matheusbattisti)** no canal **[Hora de Codar](https://www.youtube.com/@MatheusBattisti)**.
- Um agradecimento especial pelo conteúdo didático que serve como excelente base para a comunidade de desenvolvedores.

---

## 👨‍💻 Autor

Desenvolvido por **Renan Amancio**.

- **LinkedIn:** [linkedin.com/in/renan-amancio](https://www.linkedin.com/in/renan-amancio/)
- **GitHub:** [@renanamancio](https://github.com/renanamancio)

---

<div align="center">
  Feito com 💙 para fins de estudo e portfólio.
</div>
