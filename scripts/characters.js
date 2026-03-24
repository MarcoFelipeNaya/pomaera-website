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
            backstory: "Adicione aqui a história completa do personagem.",
            image: "/images/personagens/clovis.webp",
            player: "Lucas",
            faction: "Sem facção",
            status: "Falecido"
        },
        {
            id: 2,
            name: "Ana Machado",
            race: "Anã",
            class: "Echo Knight",
            excerpt: "Uma anã sem família que roubou das pessoas erradas.",
            backstory: "",
            image: "/images/personagens/AnaMachado.webp",
            player: "Thaiane",
            faction: "Caraputangas",
            status: "Falecido"
        },
        {
            id: 3,
            name: "Asterion",
            race: "Elfo Noturno",
            class: "Bladesinger",
            excerpt: "Um elfo noturno que abandonou sua casa ancestral para explorar Pomaera.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Aster.webp",
            player: "Luan",
            faction: "Caraputangas",
            status: "Falecido"
        },
        {
            id: 4,
            name: "Adon & Baladur",
            race: "Eladrin",
            class: "Mago",
            excerpt: "Criado em meio a guerreiros e caçadores, Adon se destaca por sua tranquilidade.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Adon.webp",
            player: "Gabrix",
            faction: "Caraputangas",
            status: "Desaparecido"
        },
        {
            id: 5,
            name: "Mizzy",
            race: "Aasimar",
            class: "Bardo",
            excerpt: "Um músico fugindo do seu passado e da grande nação de Myr.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Mizzy.webp",
            player: "Lucas",
            faction: "Caraputangas",
            status: "Desaparecido"
        },
        {
            id: 6,
            name: "Osfyr",
            race: "Meio-Orc",
            class: "Gloomstalker",
            excerpt: "Seja por dinheiro ou vingança, ele busca o que lhe pertence.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/osfyrr.webp",
            player: "Luan",
            faction: "Caraputangas",
            status: "Falecido"
        },
        {
            id: 7,
            name: "Venat",
            race: "Tiefling",
            class: "Swashbuckler",
            excerpt: "Temido no mar e em terra firme, suas cimitarras são sua marca.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Venat.webp",
            player: "Bruno",
            faction: "Caraputangas",
            status: "Falecido"
        },
        {
            id: 8,
            name: "Rowena",
            race: "Elfa",
            class: "Feiticeira",
            excerpt: "Saída do Lago do Roxo em busca de vingança, ela encontrou algo mais doce.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Rowena.webp",
            player: "Natalia",
            faction: "Caraputangas",
            status: "Aposentado"
        },
        {
            id: 9,
            name: "Svlphvr",
            race: "Humano",
            class: "Necromante",
            excerpt: "Nascido no mal ou criado por ele?",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Sulfur.webp",
            player: "Igor",
            faction: "Caraputangas",
            status: "Desaparecido"
        },
        {
            id: 10,
            name: "Ena",
            race: "Meio-Elfo",
            class: "Bárbara",
            excerpt: "Oferecida para alguém, ela tentou fugir do seu destino, mas o destino tem outros planos.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Ena.webp",
            player: "Bruna",
            faction: "Caraputangas",
            status: "Falecido"
        },
        {
            id: 11,
            name: "Claudyna",
            race: "Meio-Catfolk",
            class: "Druida",
            excerpt: "Para muitos, uma aberração da natureza, para poucos, uma bênção.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Claudyna.webp",
            player: "Thaiane",
            faction: "A Hidra",
            status: "Ativo"
        },
        {
            id: 12,
            name: "Wyzzer",
            race: "Halfling",
            class: "Druida",
            excerpt: "Uma criança presa entre dois mundos, buscando o seu lugar neles.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Wyzzer.webp",
            player: "Luan",
            faction: "Caraputangas",
            status: "Aposentado"
        },
        {
            id: 14,
            name: "Power",
            race: "Humana",
            class: "Ranger",
            excerpt: "Vítima dos Caraputangas, ela buscou vingança, mas encontrou um grupo de pessoas que prometeram contar tudo.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Placeholder.webp",
            player: "Natalia",
            faction: "Caraputangas",
            status: "Falecido"
        },
        {
            id: 15,
            name: "Auron",
            race: "Meio-Genasi",
            class: "Paladino",
            excerpt: "Vindo do Norte, duas vezes traído por quem amava.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/AuronTatuado.webp",
            player: "Luan",
            faction: "A Hidra",
            status: "Aposentado"
        },
        {
            id: 16,
            name: "Rocket",
            race: "Tiefling",
            class: "Paladino",
            excerpt: "Vinda do Norte, duas vezes abandonada por quem amava.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Rocket.webp",
            player: "Natalia",
            faction: "A Hidra",
            status: "Aposentado"
        },
        {
            id: 17,
            name: "Jerônimo",
            race: "Elfo das Neves",
            class: "Bruxo",
            excerpt: "Pego em uma situação inesperada com um aliado inesperado, esse jovem está fazendo de tudo para ajudar.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Gari.webp",
            player: "Lucas",
            faction: "A Hidra",
            status: "Ativo"
        },
        {
            id: 18,
            name: "Kass",
            race: "Aasimar",
            class: "Clérigo/Bruxo",
            excerpt: "Devoto de Selene, ele é sua espada e seu escudo.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Kass.webp",
            player: "Gabrix",
            faction: "A Hidra",
            status: "Ativo"
        },
        {
            id: 19,
            name: "Krissa",
            race: "Tiefling",
            class: "Hexblader",
            excerpt: "Coberta de segredos e tramas obscuras, tentando trazer luz para os perdidos.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Krissa.webp",
            player: "Bruno",
            faction: "A Hidra",
            status: "Ativo"
        },
        {
            id: 20,
            name: "Nostalgia",
            race: "Genasi de Pedra",
            class: "Pintor",
            excerpt: "Sem memórias e perdido no mundo, apenas seu sangue é uma pista.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Nostalgia.webp",
            player: "Lay",
            faction: "A Hidra",
            status: "Ativo"
        },
        {
            id: 21,
            name: "Elementari",
            race: "Elfa",
            class: "Druida",
            excerpt: "Crescida com riquezas e falta de atenção, buscou nas estrelas aquilo que faltava.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Elementari.webp",
            player: "Lay",
            faction: "As Lobas",
            status: "Aposentado"
        },
        {
            id: 22,
            name: "Domitila",
            race: "Humana",
            class: "Bloodhunter",
            excerpt: "Buscando se livrar da maldição da família, tanto a tangível como a intangível.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Domi.webp",
            player: "Thaiane",
            faction: "As Lobas",
            status: "Aposentado"
        },
        {
            id: 23,
            name: "Tina",
            race: "Humana",
            class: "Bardo",
            excerpt: "Cansada de sua vida na fazenda da família e com um livro estranho ao seu lado, ela busca um novo propósito.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Tina.webp",
            player: "Luan",
            faction: "As Lobas",
            status: "Aposentado"
        },
        {
            id: 24,
            name: "Jocelyn",
            race: "Meio-Elfa",
            class: "Ladina",
            excerpt: "Cruzou Pomaera para arrastar o irmão para casa, para que ambos possam dar o último adeus a sua mãe.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Jocelyn.webp",
            player: "Marco",
            faction: "As Lobas",
            status: "Aposentado"
        },
        {
            id: 25,
            name: "Passo Sombrio",
            race: "Tiefling",
            class: "Ladina/Bruxa",
            excerpt: "Presa entre família e dever, talvez tenha que lidar com essa escolha pelo resto da vida.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Placeholder.webp",
            player: "Natalia",
            faction: "As Lobas",
            status: "Aposentado"
        },
        {
            id: 26,
            name: "Eldrin",
            race: "Elfo das Neves",
            class: "Mago",
            excerpt: "Obcecado pelo seu deus, no fim encontrou coisas mais importantes.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Placeholder.webp",
            player: "Kelvin",
            faction: "As Lobas",
            status: "Aposentado"
        },
        {
            id: 27,
            name: "Ater",
            race: "Elfo das Neves",
            class: "Soulknife",
            excerpt: "...",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Ater.webp",
            player: "Gabrix",
            faction: "Sem Nome",
            status: "Ativo"
        },
        {
            id: 28,
            name: "Carcará",
            race: "Meio-Elfo",
            class: "Pirata",
            excerpt: "Traído e abandonado, ele buscou por forças obscuras para realizar sua vingança.",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Placeholder.webp",
            player: "Lucas",
            faction: "Caraputangas",
            status: "Falecido"
        },
        {
            id: 29,
            name: "Ikarus",
            race: "Halfling",
            class: "Lutador",
            excerpt: "...",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Ikarus.webp",
            player: "Luan",
            faction: "Sem Nome",
            status: "Ativo"
        },
        {
            id: 30,
            name: "Noira",
            race: "Humana",
            class: "Feiticeira",
            excerpt: "...",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Noira.webp",
            player: "Natalia",
            faction: "Sem Nome",
            status: "Ativo"
        },
        {
            id: 31,
            name: "Therion",
            race: "Elfo das Neves",
            class: "Ranger",
            excerpt: "...",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Therion.webp",
            player: "Bruno",
            faction: "Sem Nome",
            status: "Ativo"
        },
        {
            id: 32,
            name: "Amadeus",
            race: "Elfo das Neves",
            class: "Druida",
            excerpt: "...",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Amadeus.webp",
            player: "Lucas",
            faction: "Sem Nome",
            status: "Ativo"
        },
        {
            id: 33,
            name: "Susan",
            race: "Anã",
            class: "Echo Knight",
            excerpt: "...",
            backstory: "Adicione aqui a história completa deste personagem.",
            image: "/images/personagens/Susan.webp",
            player: "Thaiane",
            faction: "Sem Nome",
            status: "Ativo"
        },
        {
            id: 34,
            name: "Icaro",
            race: "Tiefling",
            class: "Sorlock",
            excerpt: "Seguidor de um Demônio, ele buscou poder para sua mãe.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Gabrix",
            faction: "Sem Nome",
            status: "Aposentado"
        },
        {
            id: 35,
            name: "Aelin",
            race: "Elfa",
            class: "Guerreira",
            excerpt: "Vinda de Faéria para caçar coisas mais importantes do que monstros.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Thaiane",
            faction: "Sem Nome",
            status: "Aposentado"
        },
        {
            id: 36,
            name: "Sylim",
            race: "Elfa",
            class: "Clériga",
            excerpt: "Uma jovem que se foi cedo demais.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Thaiane",
            faction: "Sem Nome",
            status: "Falecida"
        },
        {
            id: 37,
            name: "Julho",
            race: "Halfling",
            class: "Druida",
            excerpt: "Ele navegou por águas que ninguém da sua família jamais imaginou.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Lucas",
            faction: "Sem Nome",
            status: "Aposentado"
        },
        {
            id: 38,
            name: "Zatsi",
            race: "Meio-Yuan-Ti",
            class: "Feiticeiro",
            excerpt: "Trouxe o seu povo para um lugar apenas deles.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Lucas",
            faction: "Sem Nome",
            status: "Aposentado"
        },
        {
            id: 39,
            name: "Albert",
            race: "Firbolg",
            class: "Guarda",
            excerpt: "Fugiu da sua tribo e dos seus deveres.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Marco",
            faction: "Os Firbolgs de Myr",
            status: "Falecido"
        },
        {
            id: 40,
            name: "Inocêncio",
            race: "Firbolg",
            class: "Shaman",
            excerpt: "Sempre perdido, distraído com plantas e crianças.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Elom",
            faction: "Os Firbolgs de Myr",
            status: "Desaparecido"
        },
        {
            id: 41,
            name: "Horácio",
            race: "Firbolg",
            class: "Marceneiro",
            excerpt: "Compelido pelo instinto, muitas vezes agia sem pensar.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Igor",
            faction: "Os Firbolgs de Myr",
            status: "Desaparecido"
        },
        {
            id: 42,
            name: "Lara",
            race: "Firbolg",
            class: "Maga",
            excerpt: "...",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Jéssica",
            faction: "Os Firbolgs de Myr",
            status: "Desaparecido"
        },
        {
            id: 43,
            name: "Miriel",
            race: "Elfo",
            class: "Estudioso",
            excerpt: "...",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Kumon",
            faction: "Os Firbolgs de Myr",
            status: "Desaparecido"
        },
        {
            id: 44,
            name: "Thorne",
            race: "Humana",
            class: "Guarda",
            excerpt: "...",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Marco",
            faction: "Os Firbolgs de Myr",
            status: "Desaparecido"
        },
        {
            id: 45,
            name: "Zova",
            race: "Meio-Orc",
            class: "Guerreira",
            excerpt: "Focada em dinheiro e tesouros, descobriu que a amizade valia mais.",
            backstory: ".",
            image: "/images/personagens/Placeholder.webp",
            player: "Beatriz",
            faction: "Sem Nome",
            status: "Aposentado"
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
            image: "/images/personagens/Phillip.webp",
            faction: "Sem facção",
            status: "Desaparecido"
        },
        {
            id: 102,
            name: "Vaas",
            race: "Humano",
            class: "Desconhecido",
            excerpt: "Um antigo conselheiro de Inata dentro do Conselho das Cinco Cidades e verdadeiro responsável pela explosão de Inata.",
            backstory: "Vaas tomou conhecimento dos Caraputangas enquanto eles viajavam até Piéco, viu nesse grupo uma oportunidade para pôr em prática seu plano mais maligno.",
            image: "/images/personagens/vaas.webp",
            faction: "Conselho das Cinco Cidades",
            status: "Ativo"
        }
    ];

    // =============================================
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

        const sortedCharacters = [...characters].sort((a, b) => 
            a.name.localeCompare(b.name, 'pt-BR')
        );

        sortedCharacters.forEach((character, index) => {
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
        const status = statusConfig[character.status] || statusConfig["Ativo"];
        
        const card = document.createElement('div');
        card.className = 'character-card';
        card.style.animationDelay = `${index * 0.08}s`;
        card.style.animationPlayState = 'paused';
        card.style.setProperty('--status-color', status.color);

        

        const badgeClass = type === 'pc' ? 'badge-pc' : 'badge-npc';
        const badgeLabel = type === 'pc' ? 'PC' : 'NPC';

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
                    <p>${character.excerpt}</p>
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