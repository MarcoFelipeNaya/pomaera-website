// characters.js - Interactive features for the Characters page

document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // CHARACTER DATA
    // EXPLANATION: Characters are split into two arrays — PCs and NPCs.
    // This makes it trivial to render them in separate sections.
    //
    // Fields:
    //   id          — unique number across BOTH arrays (never repeat)
    //   name        — character name
    //   race        — race (e.g. "Humano", "Elfo", "Anão")
    //   class       — class or role (e.g. "Guerreiro", "Mago")
    //   excerpt     — one short sentence shown on the card
    //   backstory   — full backstory shown in the modal (can be long)
    //   image       — URL or path to portrait image
    //                 Use a placeholder service until you have real art:
    //                 e.g. "https://placehold.co/400x600/1e293b/fbbf24?text=Nome"
    //   player      — (PC only) real name of the player
    //   faction     — group or faction the character belongs to (optional)
    //   status      — e.g. "Ativo", "Falecido", "Desaparecido"
    // =============================================

    const playerCharacters = [
        {
            id: 1,
            name: "Clóvis",
            race: "Catfolk",
            class: "Músico",
            excerpt: "Um animado catfolk que se apresenta como um bardo",
            backstory: "Adicione aqui a história completa do personagem. Pode ser tão longa quanto necessário — este texto aparece no modal quando o jogador clica em 'Ver Personagem'.",
            image: "https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg",
            player: "Lucas Queiroz",
            faction: "Sem facção",
            status: "Falecido"
        },
        {
            id: 2,
            name: "Ana Machado",
            race: "Anã",
            class: "Echo Knight",
            excerpt: "Uma anã sem família que roubou das pessoas erradas.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/AnaMachado.webp",
            player: "Thaiane",
            faction: "Caraputangas",
            status: "Falecido"
        }
    ];

    const npcCharacters = [
        {
            id: 101,
            name: "Phillip",
            race: "Tiefling",
            class: "Músico",
            excerpt: "Jovem musicista que sempre circula pela alta sociedade.",
            backstory: "Fugindo de Myr após os eventos da Terra Vermelha, Phillip se estabeleceu no Âmago onde viveu até a explosão de Inata.",
            image: "/images/personagens/philip.webp",
            faction: "Sem facção",
            status: "Desaparecido"
        },
        {
            id: 102,
            name: "Vaas",
            race: "Humano",
            class: "Desconhecido",
            excerpt: "Um antigo conselheiro de Inata dentro do Conselho das Cinco Cidades e verdaeiro responsável pela explosão de Inata.",
            backstory: "Vaas tomou conhecimento dos Caraputangas enquanto eles viajam até Piéco, viu nesse grupo uma oportunidade para por em prática seu plano mais maligno.",
            image: "/images/personagens/Vaas.webp",
            faction: "Conselho das Cinco Cidades",
            status: "Ativo"
        }
    ];

    // =============================================
    // STATUS CONFIG
    // EXPLANATION: Each status gets its own colour so players can
    // see at a glance if a character is alive, dead, or missing.
    // =============================================
    const statusConfig = {
        "Ativo":         { color: "#2ecc71", icon: "fa-circle" },
        "Falecido":      { color: "#e74c3c", icon: "fa-skull" },
        "Desaparecido":  { color: "#f39c12", icon: "fa-question-circle" },
        "Aposentado":    { color: "#95a5a6", icon: "fa-moon" }
    };

    // =============================================
    // DOM ELEMENTS
    // =============================================
    const pcGrid             = document.getElementById('pcGrid');
    const npcGrid            = document.getElementById('npcGrid');
    const characterModal     = document.getElementById('characterModal');
    const closeCharacterModal= document.getElementById('closeCharacterModal');
    const characterModalBody = document.getElementById('characterModalBody');

    // =============================================
    // RENDER BOTH GRIDS
    // =============================================
    renderGrid(playerCharacters, pcGrid, 'pc');
    renderGrid(npcCharacters, npcGrid, 'npc');

    // =============================================
    // RENDER GRID
    // EXPLANATION: Takes an array of characters, a grid element,
    // and a type string ('pc' or 'npc'). Renders all cards with
    // a staggered animation delay for a polished entrance effect.
    // =============================================
    function renderGrid(characters, grid, type) {
        grid.innerHTML = '';

        if (characters.length === 0) {
            grid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                    <i class="fas fa-user-slash fa-3x" style="color: var(--accent-purple); display: block; margin-bottom: 1rem;"></i>
                    <p>Nenhum personagem cadastrado ainda.</p>
                </div>
            `;
            return;
        }

        characters.forEach((character, index) => {
            const card = createCard(character, type, index);
            grid.appendChild(card);
        });

        // Staggered fade-in
        setTimeout(() => {
            grid.querySelectorAll('.character-card').forEach(card => {
                card.style.animationPlayState = 'running';
            });
        }, 50);
    }

    // =============================================
    // CREATE CARD
    // EXPLANATION: PC cards show the player name at the bottom.
    // NPC cards show the faction instead (or status if no faction).
    // Both share the same card structure so the grid looks consistent.
    // =============================================
    function createCard(character, type, index) {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.style.animationDelay = `${index * 0.08}s`;
        card.style.animationPlayState = 'paused';

        const status = statusConfig[character.status] || statusConfig["Ativo"];

        const badgeClass = type === 'pc' ? 'badge-pc' : 'badge-npc';
        const badgeLabel = type === 'pc' ? 'Jogador' : 'NPC';

        // Bottom info differs for PC vs NPC
        const footerLeft = type === 'pc'
            ? `<span class="character-player"><i class="fas fa-gamepad"></i> ${character.player}</span>`
            : `<span class="character-player"><i class="fas fa-flag"></i> ${character.faction || '—'}</span>`;

        card.innerHTML = `
            <div class="character-portrait" style="background-image: url('${character.image}')">
                <span class="character-type-badge ${badgeClass}">${badgeLabel}</span>
            </div>
            <div class="character-card-body">
                <h3 class="character-name">${character.name}</h3>
                <p class="character-race-class">
                    <i class="fas fa-hat-wizard"></i>
                    ${character.race} • ${character.class}
                </p>
                <p class="character-excerpt">${character.excerpt}</p>
                <div class="character-card-footer">
                    ${footerLeft}
                    <button class="character-view-btn" data-id="${character.id}" data-type="${type}">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                </div>
            </div>
        `;

        card.querySelector('.character-view-btn').addEventListener('click', () => {
            openModal(character.id, type);
        });

        // Clicking anywhere on the card also opens the modal
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.character-view-btn')) {
                openModal(character.id, type);
            }
        });

        return card;
    }

    // =============================================
    // OPEN MODAL
    // EXPLANATION: Looks up the character from the right array
    // based on type. The modal layout is two columns on desktop:
    // portrait on the left, all details on the right.
    // On mobile, CSS collapses it to a single column automatically.
    // =============================================
    function openModal(id, type) {
        const list = type === 'pc' ? playerCharacters : npcCharacters;
        const character = list.find(c => c.id === id);
        if (!character) return;

        const status = statusConfig[character.status] || statusConfig["Ativo"];
        const badgeClass = type === 'pc' ? 'badge-pc' : 'badge-npc';
        const badgeLabel = type === 'pc' ? 'Personagem Jogador' : 'NPC Importante';

        // Player section — only shown for PCs
        const playerSection = type === 'pc' ? `
            <div class="modal-info-section">
                <h3><i class="fas fa-gamepad"></i> Jogador</h3>
                <div class="modal-player-box">
                    <i class="fas fa-user"></i>
                    <span>${character.player}</span>
                </div>
            </div>
        ` : '';

        // Faction section — shown for both if it exists
        const factionSection = character.faction ? `
            <div class="modal-info-section">
                <h3><i class="fas fa-flag"></i> Facção / Grupo</h3>
                <p>${character.faction}</p>
            </div>
        ` : '';

        characterModalBody.innerHTML = `
            <div class="modal-portrait-col" style="background-image: url('${character.image}')">
                <div class="modal-portrait-info">
                    <span class="modal-portrait-badge ${badgeClass}">${badgeLabel}</span>
                    <h2 class="modal-character-name">${character.name}</h2>
                    <p class="modal-race-class">
                        <i class="fas fa-hat-wizard"></i>
                        ${character.race} • ${character.class}
                    </p>
                </div>
            </div>
            <div class="modal-info-col">

                <div class="modal-info-section">
                    <h3><i class="fas fa-circle" style="color: ${status.color}; font-size: 0.7rem;"></i> Status</h3>
                    <p style="color: ${status.color}; font-weight: 500;">
                        <i class="fas ${status.icon}"></i> ${character.status}
                    </p>
                </div>

                <div class="modal-info-section">
                    <h3><i class="fas fa-scroll"></i> História</h3>
                    <p>${character.backstory}</p>
                </div>

                ${playerSection}
                ${factionSection}

            </div>
        `;

        characterModal.style.display = 'block';
        characterModal.scrollTop = 0;
    }

    // =============================================
    // CLOSE MODAL
    // =============================================
    closeCharacterModal.addEventListener('click', () => {
        characterModal.style.display = 'none';
    });

    characterModal.addEventListener('click', function (e) {
        if (e.target === characterModal) {
            characterModal.style.display = 'none';
        }
    });

    // Escape key closes modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && characterModal.style.display === 'block') {
            characterModal.style.display = 'none';
        }
    });

    console.log(`%c Characters Page Loaded! ⚔️`, `color: #fbbf24; font-size: 16px; font-weight: bold;`);
    console.log(`%c ${playerCharacters.length} PCs | ${npcCharacters.length} NPCs`, `color: #94a3b8; font-size: 14px;`);
});