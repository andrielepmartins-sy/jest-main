# JEST-main

Projeto desenvolvido com **Node.js**, **TypeScript**, **Prisma** e **Jest**.

O projeto utiliza o Prisma para gerenciamento do banco de dados e possui modelos relacionados a usuários e postagens.

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- Prisma ORM
- SQLite
- Jest
- npm

---

## Estrutura do projeto

```text
JEST-main/
│
├── generated/
│   └── prisma/
│       ├── internal/
│       ├── models/
│       │   ├── Post.ts
│       │   └── User.ts
│       ├── browser.ts
│       ├── client.ts
│       ├── enums.ts
│       └── models.ts
│
├── prisma/
│
├── src/
│
├── README.md
├── dev.db
├── jest.config.js
├── package.json
├── package-lock.json
├── prisma.config.ts
└── tsconfig.json
test
