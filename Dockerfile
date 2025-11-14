# Base da imagem - usando slim ao invés de alpine para compatibilidade com binários nativos
FROM node:22-slim

# Instalar dependências necessárias para binários nativos
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Definir o diretório de trabalho
WORKDIR /app

# Variáveis de ambiente para garantir instalação correta de binários nativos
ENV npm_config_build_from_source=false
ENV npm_config_target_platform=linux
ENV npm_config_target_arch=x64
ENV npm_config_target_libc=glibc

# Copiar o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar dependências
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Garantir que binários nativos sejam instalados corretamente
RUN npm rebuild || true

# Copiar o restante do código
COPY . .

# Build da aplicação
RUN npm run build

# Definir a porta da aplicação
EXPOSE 80

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]