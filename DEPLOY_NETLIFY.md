# Como fazer deploy na Netlify

## Passo a passo simples:

### 1. Faça login na Netlify
- Acesse [netlify.com](https://www.netlify.com)
- Faça login ou crie uma conta gratuita

### 2. Conecte seu repositório
- Clique em "Add new site" → "Import an existing project"
- Conecte com seu GitHub/GitLab/Bitbucket
- Selecione o repositório deste projeto

### 3. Configure o deploy
A Netlify vai detectar automaticamente as configurações do arquivo `netlify.toml`:
- **Build command:** `vite build`
- **Publish directory:** `dist/public`

Você não precisa fazer nada, só clicar em "Deploy site"!

### 4. Pronto!
Em alguns minutos sua página estará no ar com um endereço tipo:
`https://seu-site-123.netlify.app`

---

## Alternativa: Deploy manual (arrastar e soltar)

Se preferir não conectar com Git:

1. Execute no seu computador:
   ```bash
   npm install
   vite build
   ```

2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)

3. Arraste a pasta `dist/public` para a página

4. Pronto! Seu site estará no ar instantaneamente.

---

## O que está incluído no deploy:

✅ Toda a landing page estática  
✅ Imagens e assets  
✅ Otimização automática  
✅ CDN global  
✅ HTTPS gratuito  
✅ Redirecionamento para SPA (wouter vai funcionar perfeitamente)  

## O que NÃO está incluído:

❌ Backend Express (não é necessário para a landing page)  
❌ Banco de dados (não está sendo usado)  

Os links de checkout para Kiwify continuam funcionando normalmente!
