# Portfolio - André Barros

Portfolio pessoal desenvolvido com Next.js 15, TypeScript e TailwindCSS, com suporte a internacionalização (i18n) e tema claro/escuro.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS v4** - Estilização utilitária
- **next-intl** - Internacionalização (i18n)
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **Lucide React** - Ícones adicionais
- **Biome** - Linter e formatador
- **Docker** - Containerização

## 📋 Pré-requisitos

- Node.js 22 ou superior
- npm, yarn, pnpm ou bun

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

## 🏃 Executando o Projeto

### Desenvolvimento

Execute o servidor de desenvolvimento com Turbopack:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

### Docker

Construa e execute com Docker:

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## 🌍 Internacionalização

O projeto suporta os seguintes idiomas:
- Português (pt) - padrão
- Inglês (en)

Os arquivos de tradução estão em `messages/`:
- `messages/pt.json`
- `messages/en.json`

## 🎨 Funcionalidades

- ✅ Internacionalização (i18n) com next-intl
- ✅ Tema claro/escuro com persistência
- ✅ Animações com Framer Motion
- ✅ Design responsivo
- ✅ SEO otimizado
- ✅ Docker support

## 📁 Estrutura do Projeto

```
portfolio/
├── messages/           # Arquivos de tradução
│   ├── en.json
│   └── pt.json
├── public/            # Arquivos estáticos
├── src/
│   ├── app/           # App Router do Next.js
│   │   ├── [locale]/  # Rotas com locale
│   │   └── globals.css
│   ├── components/    # Componentes React
│   │   ├── Header/
│   │   ├── LanguageSwitch/
│   │   ├── ThemeSwitch/
│   │   └── Providers/
│   ├── contexts/      # Contextos React
│   │   └── ThemeContext.tsx
│   ├── i18n.ts        # Configuração i18n
│   └── middleware.ts  # Middleware Next.js
├── Dockerfile
├── next.config.ts
└── package.json
```

## 🧹 Linting e Formatação

O projeto usa Biome para linting e formatação:

```bash
# Verificar problemas
npm run lint

# Formatar código
npm run format
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento com Turbopack
- `npm run build` - Cria build de produção com Turbopack
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa o linter (Biome)
- `npm run format` - Formata o código (Biome)

## 🚢 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- **Docker** - Use o Dockerfile incluído
- Outras plataformas que suportam Node.js

## 📄 Licença

Este projeto é privado.
