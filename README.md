# Encurtador de links Flash API
**Status**: Fase 1 da implementação concluída. 
API encurtadora de links. Envie um link longo, receba um link curto.
Link: https://encurtador-flash-api.onrender.com/

## 🔍   Prévia: O que você vai encontrar
- **API** contruída no padrão **REST**
- **Arquitetura** que segue os princípios **SOLID**
- **Validação de dados** com ZOD

## 📁 Estrutura do Projeto

```
API-ALUGUEL-CARROS/
├── prisma/                      # Configuração do Prisma ORM
│   ├── migrations/              # Migrações do banco de dados
│   ├── schema.prisma            # Modelo de dados
├── src/
│   ├── controllers/             # Controladores das rotas
│   │   └── schema/              # Validações com Zod
│   ├── database/                # Conexão e transações com o banco
│   ├── errors/                  # Manipulação de erros
│   ├── middlewares/            # Middlewares de autenticação e erros
│   ├── repositories/           # Implementações e interfaces dos repositórios
│   ├── routes/                 # Arquivos de rotas (Express Router)
│   ├── services/               # Regras de negócio (camada de serviço)
│   └── utils/                  # Funções utilitárias
├── .env                        # Variáveis de ambiente
├── .gitignore                  # Arquivos que o git deve ignorar nos commits
├── LICENSE                     # Licensa do projeto
├── package.json                # Dependências e scripts
├── prisma.config.ts            # Configurações do prisma 
├── README.md                   # Documentação do projeto
└── tsconfig.json               # Configurações do TypeScript
```

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **PostgreSQL** (ou outro banco compatível)
- **Zod** (validação de dados)

---

## 🔐 Funcionalidades

### FASE 1
- [x] CRUD de links
- [x] Contador de clicks por link
#### FASE 2
- [ ] Autenticação do usuário utilizando JWT
- [ ] Controle de permissões para edição e exlusão de itens

---
## ⚙️ Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/marcus-soares1/encurtador-de-link-flash.git
cd encurtador-de-link-flash
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o `.env`

Crie um arquivo `.env` baseado no modelo:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
PORT=porta_de_disponibilidade_da_aplicação
```

### 4. Rodar as migrações

```bash
npx prisma migrate dev --name init
```

### 5. Iniciar a aplicação

```bash
npm run dev
```

---

---

## 📌 Endpoints principais

### Rotas de gerencimento de links
| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| GET    | `/api/:short_link`      | Acessar link                     |
| GET    | `/api/:short_link/info` | Acesasr informações do link      |
| GET    | `/api/`                 | Listar todos os links            |
| POST   | `/api/`                 | Criar novo link curto            |
| PUT    | `/api/:short_link`      | Atualizar informações de um link |
| DELETE | `/api/:short_link`      | Excluir um link                  |

---

## 🛠️ Scripts disponíveis

```bash
npm run build      # Compila o projeto para produção
npm run dev        # Inicia o servidor em modo desenvolvimento
npm run start      # Inicia o servidor em produção
```

---

## 🧩 Licença

Este projeto está sob a licença MIT.

---