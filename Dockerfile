# Base da imagem (ajuste para sua aplicação)
FROM node:22-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e instalar as dependências
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Copiar o restante do código
COPY . .

# Definir a porta da aplicação
EXPOSE 80

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]