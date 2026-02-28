# 🐉 Pomaera — World Wiki

> **English** | [Português](#-pomaera--wiki-do-mundo-pt)

A interactive world wiki for the **Pomaera** tabletop RPG world. Built with pure HTML, CSS, and JavaScript, hosted on GitHub Pages.

**Live site:** [pomaera.world](https://pomaera.world)

---

## 📖 About / Sobre

Pomaera is a custom fantasy world created by **Lucas Queiroz & Marco Felipe**, brought to life by their incredible players. This wiki serves as a living reference for the world's locations, characters, lore, and history.

---

## 🗂️ Project Structure

```
pomaera-website/
│
├── index.html                  # Home page
│
├── pages/
│   ├── locations.html          # Interactive map + location cards
│   ├── characters.html         # Player characters & NPCs
│   ├── lore.html               # Stories, legends & chronicles
│   ├── world.html              # World overview (in progress)
│   └── timeline.html           # Timeline (in progress)
│
├── styles/
│   ├── general.css             # Global styles (navbar, footer, buttons, cards)
│   ├── locations.css           # Locations page + Leaflet map styles
│   ├── characters.css          # Characters page styles
│   └── lore.css                # Lore page styles
│
├── scripts/
│   ├── main.js                 # Mobile menu + scroll animations (runs on every page)
│   ├── locations.js            # Location cards, filters, show-more, modal
│   ├── map.js                  # Leaflet.js interactive map + markers
│   ├── characters.js           # Character cards + modal
│   └── lore.js                 # Lore entry cards, filters, modal
│
└── images/
    ├── maps/                   # Map images
    ├── characters/             # Character portraits
    ├── lore/                   # Lore entry images (optional)
    └── backgrounds/            # Hero section backgrounds
```

---

## ➕ How to Add Content

### Adding a Location

Open `scripts/locations.js` and add a new object to the `locations` array:

```javascript
{
    id: 9,                          // unique number — never repeat
    name: "Nome da Localidade",
    region: "âmago",               
    type: "city",                   
    description: "Descrição curta mostrada no card.",
    image: "/images/maps/sua-imagem.webp",
    population: "10,000",
    ruler: "Nome do Governante",
    danger: "Baixo",                
    tags: ["Tag1", "Tag2"],
    details: {
        history: "História completa da localidade.",
        notable: "Pontos de interesse separados por vírgula.",
        factions: ["Facção 1", "Facção 2"]
    }
}
```

Then add a marker to `scripts/map.js` in the `markers` array:

```javascript
{
    coords: [Y, X],                 // pixel position on the map image [top, left]
    name: "Nome da Localidade",     // must match exactly the name in locations.js
    region: "âmago",
    type: "city",
    desc: "Descrição curta para o popup do mapa.",
    link: true                      // true = "Ver nas Localidades" button appears
}
```

> 💡 **Finding map coordinates:** Set `debugMode = true` in `map.js`, open the page in your browser, and hover over the map. The pixel coordinates will appear in the top-right corner of the map. Copy them, then set `debugMode = false`.

---

### Adding a Character

Open `scripts/characters.js` and add to either `playerCharacters` (PCs) or `npcCharacters` (NPCs):

```javascript
// Player Character
{
    id: 3,                          // unique number across BOTH arrays
    name: "Nome do Personagem",
    race: "Humano",
    class: "Guerreiro",
    excerpt: "Uma frase curta mostrada no card.",
    backstory: "História completa mostrada no modal quando clicado.",
    image: "/images/characters/nome-personagem.webp",
    player: "Nome do Jogador",      // only for PCs
    faction: "Nome da Facção",
    status: "Ativo"                 
}

// NPC — same fields but no `player`
{
    id: 103,
    name: "Nome do NPC",
    race: "Elfo",
    class: "Conselheiro",
    excerpt: "Uma frase curta.",
    backstory: "História e relevância deste NPC nas campanhas.",
    image: "/images/characters/nome-npc.webp",
    faction: "Conselho das Cinco Cidades",
    status: "Ativo"
}
```

> 💡 Use a placeholder image as temporary portrait until you have real artwork.

---

### Adding a Lore Entry

Open `scripts/lore.js` and add a new object to the `loreEntries` array:

```javascript
{
    id: 7,                          // unique number — never repeat
    title: "Título da História",
    category: "historia",           
    excerpt: "Trecho curto de 1-2 frases mostrado no card.",
    fullText: [
        "Primeiro parágrafo da história completa.",
        "Segundo parágrafo.",
        "Quantos parágrafos forem necessários — cada string vira um <p>."
    ],
    author: "Fonte ou narrador do texto",
    readTime: 2                     // estimated read time in minutes
}
```

---


## 🛠️ Running Locally

No build tools or dependencies needed. Just open the files in a browser — but since the site uses absolute paths (`/styles/`, `/scripts/`), you need a local server to avoid path errors.

**VS Code (recommended):**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then right-click `index.html` → *Open with Live Server*.

---

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| HTML / CSS / JavaScript | Core site — no frameworks |
| [Leaflet.js](https://leafletjs.com) v1.9.4 | Interactive fantasy map |
| [Font Awesome](https://fontawesome.com) 6.4.0 | Icons |
| [Google Fonts](https://fonts.google.com) | Cinzel (titles) + Roboto (body) |
| GitHub Pages | Hosting |

---

## 📝 Credits

**World created by:** Lucas Queiroz & Marco Felipe

**Made possible by:** Our incredible players

**Built with:** HTML, CSS, JavaScript

---

---

# 🐉 Pomaera — Wiki do Mundo (PT)

> [English](#-pomaera--world-wiki) | **Português**

Uma wiki interativa o mundo de RPG de mesa **Pomaera**. Construída com HTML, CSS e JavaScript, hospedada no GitHub Pages.

**Site:** [pomaera.world](https://pomaera.world)

---

## 📖 Sobre

Pomaera é um mundo de fantasia criado por **Lucas Queiroz & Marco Felipe**, que só existe por conta dos nossos incríveis jogadores. Esta wiki serve como referência viva para as localidades, personagens, lore e história do mundo.

---

## 🗂️ Estrutura do Projeto

```
pomaera-website/
│
├── index.html                  # Página inicial
│
├── pages/
│   ├── locations.html          # Mapa interativo + cards de localidades
│   ├── characters.html         # Personagens jogadores & NPCs
│   ├── lore.html               # Histórias, lendas e crônicas
│   ├── world.html              # Visão geral do mundo (em progresso)
│   └── timeline.html           # Linha do tempo (em progresso)
│
├── styles/
│   ├── general.css             # Estilos globais (navbar, footer, botões, cards)
│   ├── locations.css           # Página de localidades + estilos do mapa Leaflet
│   ├── characters.css          # Estilos da página de personagens
│   └── lore.css                # Estilos da página de lore
│
├── scripts/
│   ├── main.js                 # Menu mobile + animações de scroll (em todas as páginas)
│   ├── locations.js            # Cards de localidades, filtros, show-more, modal
│   ├── map.js                  # Mapa interativo Leaflet.js + marcadores
│   ├── characters.js           # Cards de personagens + modal
│   └── lore.js                 # Cards de lore, filtros, modal
│
└── images/
    ├── maps/                   # Imagens de mapas
    ├── characters/             # Retratos de personagens
    ├── lore/                   # Imagens para entradas de lore (opcional)
    └── backgrounds/            # Fundos das seções hero
```

---

## ➕ Como Adicionar Conteúdo

### Adicionando uma Localidade

Abra `scripts/locations.js` e adicione um novo objeto ao array `locations`:

```javascript
{
    id: 9,                          // número único — nunca repita
    name: "Nome da Localidade",
    region: "âmago",               
    type: "city",                   
    description: "Descrição curta mostrada no card.",
    image: "/images/maps/sua-imagem.webp",
    population: "10,000",
    ruler: "Nome do Governante",
    danger: "Baixo",                
    tags: ["Tag1", "Tag2"],
    details: {
        history: "História completa da localidade.",
        notable: "Pontos de interesse separados por vírgula.",
        factions: ["Facção 1", "Facção 2"]
    }
}
```

Depois adicione um marcador em `scripts/map.js` no array `markers`:

```javascript
{
    coords: [Y, X],                 // posição em pixels no mapa [de cima, da esquerda]
    name: "Nome da Localidade",     // deve ser idêntico ao nome em locations.js
    region: "âmago",
    type: "city",
    desc: "Descrição curta para o popup do mapa.",
    link: true                      // true = botão "Ver nas Localidades" aparece
}
```

> 💡 **Encontrando coordenadas:** Defina `debugMode = true` em `map.js`, abra a página no navegador e passe o mouse sobre o mapa. As coordenadas em pixels aparecem no canto superior direito. Copie-as e depois defina `debugMode = false` novamente.

---

### Adicionando um Personagem

Abra `scripts/characters.js` e adicione em `playerCharacters` (PCs) ou `npcCharacters` (NPCs):

```javascript
// Personagem Jogador
{
    id: 3,                          // número único nos DOIS arrays
    name: "Nome do Personagem",
    race: "Humano",
    class: "Guerreiro",
    excerpt: "Uma frase curta mostrada no card.",
    backstory: "História completa mostrada no modal ao clicar.",
    image: "/images/characters/nome-personagem.webp",
    player: "Nome do Jogador",      // apenas para PCs
    faction: "Nome da Facção",
    status: "Ativo"                 
}
```

> 💡 Use um placeholder como retrato temporário enquanto não tiver arte real.

---

### Adicionando uma Entrada de Lore

Abra `scripts/lore.js` e adicione um novo objeto ao array `loreEntries`:

```javascript
{
    id: 7,                          // número único — nunca repita
    title: "Título da História",
    category: "historia",           
    excerpt: "Trecho curto de 1-2 frases mostrado no card.",
    fullText: [
        "Primeiro parágrafo da história completa.",
        "Segundo parágrafo.",
        "Quantos parágrafos forem necessários — cada string vira um <p>."
    ],
    author: "Fonte ou narrador do texto",
    readTime: 2                     // tempo estimado de leitura em minutos
}
```

---


## 🔧 Tecnologias

| Ferramenta | Uso |
|-----------|-----|
| HTML / CSS / JavaScript | Base do site — sem frameworks |
| [Leaflet.js](https://leafletjs.com) v1.9.4 | Mapa de fantasia interativo |
| [Font Awesome](https://fontawesome.com) 6.4.0 | Ícones |
| [Google Fonts](https://fonts.google.com) | Cinzel (títulos) + Roboto (corpo) |
| GitHub Pages | Hospedagem |

---

## 📝 Créditos

**Mundo criado por:** Lucas Queiroz & Marco Felipe

**Só existe por conta de:** Nossos incríveis jogadores

**Feito com:** HTML, CSS, JavaScript
