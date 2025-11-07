# coquin — Site Vite + React

Este diretório contém o site (React + TypeScript) construído com Vite e estilizado com Tailwind CSS.

## Como rodar localmente

- Pré-requisitos: `Node.js 18+` e `npm`
- Instale dependências: `npm install`
- Desenvolvimento: `npm run dev`
- Preview/Start (porta/host compatível com Discloud): `npm run start`

O servidor está configurado para expor em `0.0.0.0:8080` (ver `vite.config.ts` e `package.json`).

## Estrutura

- `src/` — código-fonte React/TypeScript
- `src/components/` — componentes da interface
- `index.html` — documento raiz
- `tailwind.config.cjs` e `postcss.config.cjs` — configuração do Tailwind
- `vite.config.ts` — configuração do Vite (server/preview em 8080)

## Deploy via Discloud

- O `package.json` já define `start` com `vite preview --host 0.0.0.0 --port 8080`
- Certifique-se de que a plataforma use `npm run start`

## Como enviar para o GitHub

1. Abra: `https://github.com/Goulindo686/coquin/tree/main`
2. Clique em **Add file** → **Upload files**
3. Faça o upload de todos os arquivos desta pasta `coquin/` (incluindo `src/`, `package.json`, `vite.config.ts`, etc.)
4. Confirme o commit em `main` ou abra um Pull Request, conforme seu fluxo.

### Alternativa via Git (linha de comando)

```
git clone https://github.com/Goulindo686/coquin.git
cd coquin
git checkout -b add-site
mkdir -p coquin
# copie os arquivos locais da pasta coquin para o diretório coquin do repo
# no Windows Powershell:
Copy-Item -Path "C:\\caminho\\local\\coquin\\*" -Destination "coquin" -Recurse -Force
git add .
git commit -m "Add Vite React site under coquin/"
git push origin add-site
```

Depois, abra um PR e faça merge em `main`.