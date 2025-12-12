# Morais Advocacia - Website Institucional

Website profissional para escritório de advocacia especializado em direito previdenciário.

## 📋 Características Principais

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Acessibilidade WCAG 2.1**: HTML semântico, aria-labels, navegação por teclado
- **Performance Otimizada**: Código limpo e organizado, sem dependências externas
- **SEO Amigável**: Meta tags apropriadas, estrutura semântica, Open Graph
- **Tema Profissional**: Paleta escura com destaques dourados
- **Interatividade**: Scroll suave, menu ativo, FAQ accordion
- **GitHub Pages Ready**: Pronto para deploy sem modificações

## 📁 Estrutura de Arquivos

```
morais-advocacia-escritorio-online/
├── index.html              # Página principal (semântica otimizada)
├── style.css               # CSS centralizado e organizado
├── script.js               # JavaScript leve e eficiente
├── img/                    # Imagens (logos, ícones, avatar)
│   ├── logoSemFundo.png
│   ├── cartao.png
│   ├── ronan.png
│   └── icons/
├── video/                  # Vídeos (fora de controle de versão)
└── README.md               # Esta documentação
```

## 🎨 Paleta de Cores

```css
--color-bright-gold: #D9AE5F    /* Destaque principal */
--color-gold-1: #dbb454         /* Dourado claro */
--color-gold-3: #806e3c         /* Dourado escuro */
--color-page-bg: #2c2c30        /* Fundo da página */
--color-section-dark: #1e1e22   /* Seções escuras */
--color-text: #ffffff           /* Texto principal */
--color-text-secondary: #d1d1d8 /* Texto secundário */
```

## 📱 Responsividade

- **Desktop**: Grid 2+ colunas, layout completo
- **Tablet (≤968px)**: Ajustes de espaçamento e tamanho de fonte
- **Mobile (≤768px)**: Layout em coluna única, tipografia menor
- **Extra-pequeno (≤600px)**: Otimizações para telas muito pequenas

## 🔧 Tecnologias Utilizadas

- **HTML5**: Semântica completa (header, main, section, footer, nav)
- **CSS3**: Grid, Flexbox, variáveis CSS, media queries
- **JavaScript Vanilla**: Sem dependências externas
- **Compatibilidade**: Chrome, Firefox, Safari, Edge (últimas 2 versões)

## 📄 Seções da Página

1. **Header Fixo**: Logo + Menu com dropdown de serviços + Botão CTA
2. **Hero Section**: Imagem de fundo + Título principal + CTAs
3. **Sobre**: Descrição do escritório + Vídeo apresentação + 3 destaques
4. **Serviços**: Grid com 6 áreas de atuação em cards interativos
5. **Equipe**: Perfil do advogado com credenciais e biografia
6. **FAQ**: 4 perguntas frequentes com accordion interativo
7. **Contato**: 6 formas de contato (email, WhatsApp, Instagram, etc)
8. **Footer**: Links, contato, redes sociais, copyright

## ✨ Funcionalidades JavaScript

- **Navegação Suave**: Scroll para seções com transição smooth
- **Menu Ativo Dinâmico**: Destaca link da seção atual durante scroll
- **FAQ Accordion**: Expandir/retrair respostas ao clicar
- **Dropdown Menu**: Menu suspenso para serviços específicos
- **Logo Clicável**: Volta ao topo com scroll suave

## 🚀 Deploy no GitHub Pages

1. Faça push dos arquivos para o repositório GitHub
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha branch "main" e pasta "/ (root)"
5. Clique em Save

O site será publicado em `https://seu-usuario.github.io/morais-advocacia-escritorio-online`

## ♿ Acessibilidade

- HTML semântico com roles corretos (header, nav, main, footer)
- Alt text em todas as imagens
- Labels descritivos (aria-label, aria-labelledby)
- Navegação por teclado funcional
- Contraste de cores WCAG AA+
- Suporte a preferência de redução de movimento

## 🎯 Otimizações Realizadas

### HTML
- ✅ Removido comentários desnecessários
- ✅ Estrutura semântica melhorada
- ✅ Meta tags completas (SEO + Open Graph)
- ✅ Link externo para script.js (separação de concerns)

### CSS
- ✅ Centralizado em um arquivo
- ✅ Organizado por seções com comentários claros
- ✅ Variáveis CSS para cores e valores reutilizáveis
- ✅ Removidos estilos não utilizados
- ✅ Media queries para responsividade completa
- ✅ Animações suaves e transições

### JavaScript
- ✅ Vanilla JS sem dependências
- ✅ Código limpo e comentado
- ✅ Funções otimizadas
- ✅ Event listeners eficientes

## 📝 Notas

- Arquivo `video/apresentacao-morais.mp4` e `.webm` devem ser adicionados manualmente
- Imagens em `img/icons/` precisam ser criadas ou importadas
- O arquivo `img/ronan.png` contém a foto do advogado

## 📧 Contato

Email: contato@moraisadvocacia.com.br
WhatsApp: (11) 9999-9999
Localização: Juatuba - MG

## 📄 Licença

© 2025 Morais Advocacia. Todos os direitos reservados.
OAB - MG 158.841
