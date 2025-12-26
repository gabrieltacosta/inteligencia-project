This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy com Docker

### Pré-requisitos

1. Docker e Docker Compose instalados
2. Variável de ambiente `DESKDATA_URL` configurada

### Configuração

1. Crie um arquivo `.env` na raiz do projeto (ou configure as variáveis diretamente no docker-compose.yml):

```bash
DESKDATA_URL=https://sua-api-deskdata.com.br
NODE_ENV=production
PORT=3000
```

2. Construa e inicie os containers:

```bash
docker-compose up -d --build
```

3. A aplicação estará disponível em `http://localhost:3030`

### Comandos úteis

- Ver logs: `docker-compose logs -f`
- Parar aplicação: `docker-compose down`
- Reconstruir: `docker-compose up -d --build`

### Variáveis de Ambiente Necessárias

- `DESKDATA_URL`: URL da API DeskData (obrigatória)
- `NODE_ENV`: Ambiente de execução (padrão: production)
- `PORT`: Porta interna do container (padrão: 3000)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
