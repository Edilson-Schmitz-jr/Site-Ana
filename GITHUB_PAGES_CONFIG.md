# Configuração GitHub Pages

## Passos para ativar o deploy automático

### 1. No GitHub

1. Vá para o repositório no GitHub
2. **Settings** → **Pages**
3. Em "Build and deployment":
   - **Source**: selecione "GitHub Actions"
   - O workflow será ativado automaticamente

### 2. Configuração de Domínio Customizado (Opcional)

Se usar um domínio customizado como `siteana.com.br`:

1. No GitHub Pages, adicione o domínio em "Custom domain"
2. Configure os registros DNS do seu domínio:
   - **A records**: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - **CNAME** (se preferir): `seu-usuario.github.io`

### 3. Executar Deploy Manualmente

```bash
# Fazer build
npm run build

# O workflow automático fará deploy quando houver push na branch main
```

### 4. Estrutura de Build

- **Diretório de saída**: `dist/apps/web`
- **Base URL**: `/Site-Ana/` em produção
- **Roteamento**: Hash-based (`/#/sobre`, `/#/servicos`, etc.)

## Variáveis de Ambiente

Não há variáveis de ambiente necessárias para GitHub Pages neste projeto.

## URL do Projeto

- **Com domínio customizado**: `https://siteana.com.br`
- **Sem domínio**: `https://seu-usuario.github.io/Site-Ana`

## Troubleshooting

- Se o site ficar em branco, verifique se a base URL está correta em `vite.config.js`
- O roteamento usa `HashRouter`, então as URLs terão `#` (exemplo: `/#/sobre`)
- Limpe o cache do navegador (Ctrl+Shift+Delete ou Cmd+Shift+Delete)
