# Etapa 1: Construção
FROM node:22-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app 

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Construir aplicação
RUN npm run build



# Etapa 2: Produção
FROM base AS production

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_SHARP_PATH "/app/node_modules/sharp"

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiar arquivos necessários do deps
COPY --from=deps /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=deps /app/next.config.ts ./
COPY --from=deps --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=deps --chown=nextjs:nodejs /app/.next/static ./.next/static


# Mudar para usuário não-root
USER nextjs

# Expor porta 3030
EXPOSE 3030

# Variável de ambiente para porta
ENV PORT=3030
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar aplicação na porta 3030
CMD ["node", "server.js"]
