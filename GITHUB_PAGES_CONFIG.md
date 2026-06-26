# Configuração GitHub Pages

## 🔧 Problema: Erro 404

O GitHub Pages não estava encontrando o arquivo `index.html`. Isso foi corrigido adicionando:

- ✅ `public/index.html` - Arquivo principal
- ✅ `public/404.html` - Fallback para SPA
- ✅ `public/_config.yml` - Configuração Jekyll
- ✅ `public/.nojekyll` - Desabilita Jekyll
- ✅ `public/CNAME` - Domínio customizado (se houver)

## 📋 Passos para Ativar o Deploy (IMPORTANTE!)

### 1. Fazer Commit e Push dos Arquivos
```bash
git add .
git commit -m "Fix GitHub Pages configuration"
git push origin main
```

### 2. Configurar GitHub Pages no Repositório
1. Vá para **Settings** do repositório
2. Na seção **Pages** (esquerda):
   - **Source**: selecione **"GitHub Actions"**
   - O workflow será executado automaticamente

### 3. Aguardar Deploy
- O workflow pode levar 1-2 minutos
- Você será notificado quando o deploy terminar
- A URL estará disponível em **Settings → Pages**

## 🌐 URLs Esperadas

### Opção 1: Com Domínio Customizado
```
https://siteana.com.br
https://siteana.com.br/#/sobre
https://siteana.com.br/#/servicos
```

⚠️ **Pré-requisito**: Configure os DNS records:
- **A records**: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- OU **CNAME**: `seu-usuario.github.io`

### Opção 2: Sem Domínio Customizado
```
https://seu-usuario.github.io/Site-Ana
https://seu-usuario.github.io/Site-Ana/#/sobre
https://seu-usuario.github.io/Site-Ana/#/servicos
```

## 📁 Estrutura de Deploy

```
dist/apps/web/
├── index.html
├── 404.html
├── _config.yml
├── .nojekyll
├── CNAME (se usando domínio)
├── assets/
└── src/
```

## ✅ Checklist

- [ ] Fez commit dos arquivos
- [ ] Fez push para a branch main
- [ ] Configurou GitHub Pages em Settings (source = GitHub Actions)
- [ ] Workflow executou com sucesso
- [ ] Página está acessível na URL

## 🆘 Troubleshooting

### Ainda aparece 404?
1. Verifique em **Settings → Pages** se o deploy foi bem-sucedido
2. Limpe cache do navegador (Ctrl+Shift+Delete)
3. Espere 2-3 minutos pela propagação de DNS

### Domínio customizado não funciona?
1. Verifique se os DNS records foram adicionados corretamente
2. Remova e adicione novamente o domínio em **Settings → Pages**
3. Aguarde até 24 horas pela propagação de DNS

### Está com erro 500 ou em branco?
1. Verifique o console do navegador (F12)
2. Certifique-se que `HashRouter` está sendo usado (não `BrowserRouter`)
3. Verifique se a base URL em `vite.config.js` está correta

## 📝 Arquivos Modificados

- `vite.config.js` - Base URL para produção
- `src/App.jsx` - HashRouter configurado
- `.github/workflows/deploy.yml` - Workflow de deploy
- `public/index.html` - Arquivo principal
- `public/404.html` - Fallback para SPA
- `public/_config.yml` - Configuração Jekyll
- `public/.nojekyll` - Desabilita Jekyll
- `public/CNAME` - Domínio customizado
