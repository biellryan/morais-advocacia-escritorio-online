# PALETA DE CORES - MORAIS ADVOCACIA

## Análise e Implementação da Identidade Visual

### 🎨 **CORES PRINCIPAIS IMPLEMENTADAS**

#### **Paleta Dourada (Tons Quentes)**

```css
--color-gold-1: #dbb454; /* Dourado claro - Para textos e detalhes */
--color-gold-2: #ecc370; /* Dourado suave - Para gradientes claros */
--color-gold-3: #806e3c; /* Dourado escuro - Para bordas e contornos */
--color-gold-4: #aa945c; /* Dourado médio - Para elementos interativos */
--color-gold-5: #b4a46a; /* Dourado acinzentado - Para sutilezas */
```

#### **Paleta Escura (Tons Frios)**

```css
--color-dark-1: #363440; /* Cinza escuro principal - Backgrounds primários */
--color-dark-2: #3f3f40; /* Cinza escuro secundário - Cards e seções */
--color-warm-gold: #8c7c4d; /* Dourado terroso - Gradientes quentes */
--color-bright-gold: #d9ae5f; /* Dourado brilhante - Destaques e CTAs */
--color-bronze: #594a2d; /* Bronze escuro - Textos e sombras */
```

### 🏗️ **APLICAÇÃO NAS SEÇÕES**

#### **1. Header Fixo**

- Fundo: Semi-transparente com blur
- Cores: Mantém identidade atual
- Bordas: Arredondadas sutis

#### **2. Seção Hero (Main)**

- Fundo: Gradiente `color-dark-1` → `color-dark-2`
- Card Hero: Gradiente `color-dark-2` → `color-warm-gold`
- Bordas: 24px arredondadas
- Sombras: Profundas com `color-bronze`

#### **3. Seção Sobre**

- Fundo: Gradiente `color-bronze` → `color-dark-1`
- Cards: Gradiente `color-dark-2` → `color-warm-gold`
- Bordas: 16px nos cards, destaque `color-gold-4`
- Hover: Transformação com `color-bright-gold`

#### **4. Botões**

- **Primário**: Gradiente dourado com `color-gold-1` + `color-gold-2`
- **Secundário**: Transparente com borda `color-gold-4`
- **Hover**: Transformações suaves com escala e elevação

#### **5. Footer**

- Fundo: Gradiente `color-dark-1` → `color-bronze`
- Borda superior: `color-gold-3`
- Bordas: Arredondadas na parte superior

### 🎯 **HARMONIA COM A LOGO**

**Análise da Logo `logoSemFundo.png`:**

- ✅ Tons dourados compatíveis com a paleta implementada
- ✅ `#D9AE5F` (bright-gold) combina perfeitamente com elementos da logo
- ✅ `#8C7C4D` (warm-gold) complementa os tons terrosos
- ✅ Contraste adequado entre dourados e fundos escuros

### 📐 **BORDAS ARREDONDADAS IMPLEMENTADAS**

```css
/* Hierarquia de Bordas */
Header: sutil (blur natural)
Hero Section: 24px (destaque principal)
Cards About: 16px (elementos menores)
Botões: 24px (consistência com hero)
Footer: 24px superior (continuidade visual)
```

### 🎨 **GRADIENTES ESTRATÉGICOS**

1. **Hero**: Diagonal 135° para profundidade
2. **Sobre**: Inverso do hero para contraste
3. **Cards**: Sutil para textura sem competir
4. **Botões**: Dinâmico no hover para interatividade
5. **Footer**: Fechamento harmônico da página

### ✨ **EFEITOS VISUAIS**

- **Sombras**: Profundas e suaves para elevação
- **Hovers**: Transformações com scale e translateY
- **Transições**: 0.3s para suavidade premium
- **Opacidade**: Elementos glass morphism mantidos

---

**Resultado:** Identidade visual coesa que respeita a logo original e cria uma experiência elegante e profissional para o escritório de advocacia.
