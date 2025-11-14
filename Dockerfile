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

# Copiar o package.json e instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Build da aplicação
RUN npm run build

# Definir a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]