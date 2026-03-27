// timeline.js — Vertical timeline for Pomaera history

document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // CATEGORY CONFIG
    // Each category gets a colour applied to the card
    // top border, year text, badge, and node dot.
    // Add new categories here as needed.
    // =============================================
    const categoryConfig = {
        guerra:    { label: 'Guerra',     color: '#e74c3c', icon: 'fa-fire' },
        politica:  { label: 'Política',   color: '#0092d6', icon: 'fa-crown' },
        magia:     { label: 'Magia',      color: '#8b5cf6', icon: 'fa-hat-wizard' },
        desastre:  { label: 'Desastre',   color: '#e67e22', icon: 'fa-bolt' },
        fundacao:  { label: 'Fundação',   color: '#2ecc71', icon: 'fa-landmark' },
        religiao:  { label: 'Religião',   color: '#f0c040', icon: 'fa-ankh' },
        exploracao:{ label: 'Exploração', color: '#1abc9c', icon: 'fa-compass' }

    };

    // =============================================
    // TIMELINE DATA
    // Fields:
    //   id          — unique number, never repeat
    //   year        — year as string, e.g. "2300" or "Ano Desconhecido"
    //   era         — era name shown in the sticky indicator and as dividers
    //                 events with the same era are grouped together
    //   category    — must match a key in categoryConfig above
    //   title       — short event name shown on the card
    //   description — 1-2 sentences shown on the card (truncated to 3 lines)
    //   fullDesc    — full description shown in the modal (array of paragraphs)
    //
    // ORDERING: Events should be in chronological order (oldest first within the same ERA).
    // The timeline renders top-to-bottom = oldest to newest.
    // =============================================
    const events = [
        {
            id: 1,
            year: "Ano -1",
            era: "Era da Árvore",
            category: "exploracao",
            title: "Diáspora",
            description: "Um povo aparece nas orlas de um continente até então sem nome.",
            fullDesc: [
                "Sem registro.",
            ]
        },
        {
            id: 2,
            year: "Ano 100",
            era: "Era da Árvore",
            category: "desastre",
            title: "A Queda do Meteoro",
            description: "Ao norte de uma terra ainda sem nome um grande meteoro devasta tudo em sua volta.",
            fullDesc: [
                "Sem registro.",
            ]
        },
        {
            id: 3,
            year: "Ano 1",
            era: "Era Nova",
            category: "magia",
            title: "Fundação de Myrtariniel",
            description: "Espirítos e pessoas se juntam no que um dia foi Myrtariniel.",
            fullDesc: [
                "Espirítos e pessoas se juntam no que um dia foi Myrtariniel.",
            ]
        },
        {
            id: 4,
            year: "Ano 23",
            era: "Era Nova",
            category: "fundacao",
            title: "Fundação do Reino de Corália",
            description: "Fundação sob o reinado de Pedro Pétrio, primeiro de seu nome.",
            fullDesc: [
                "Pedro Pétrio e um grupo de pessoas insatisfeitas vão para o norte terrível e lá fundam Corália.",
            ]
        },
        {
            id: 5,
            year: "Ano 300",
            era: "Era Nova",
            category: "exploracao",
            title: "Viagem de Hamil",
            description: "Hamil e seu grupo de exploradores buscam ajudar vilas para além do Bosque Escuro.",
            fullDesc: [
                "Hamil, após atravessar o Bosque Escuro com seu golem de pedra, estabelece as fundações do que viria se tornar duas cidades que ficam à beira do lago Hamil.",
            ]
        },
        {
            id: 6,
            year: "Ano 333",
            era: "Era Nova",
            category: "fundacao",
            title: "Fundação do Âmago",
            description: "Graças a Hamil, as cidades se formaram em um país cuja a governancia era passada por cada cidade de tempos em tempos.",
            fullDesc: [
                "Respeitado e amado por muitos o pequenino grande Hamil, se tornou o necessário para que os territórios da época se juntassem em um só país que hoje é conhecido como Âmago.",
            ]
        },
        {
            id: 7,
            year: "Ano 1",
            era: "Era dos Dragões",
            category: "politica",
            title: "Supremacia Dracônica",
            description: "Por toda Pomaera dragões se juntam para discutir o futuro da sua espécie.",
            fullDesc: [
                "O evento que é hoje conhecido como Supremacia Dracônica, foi um forúm com dragões espalhados por toda Pomaera para que possam discutir coisas como territórios e que eles parem de matar uns aos outros, essa reunião uniu os dragões e para a infelicidade das outras raças levou a Guerra Dracônica.",
            ]
        },
        {
            id: 8,
            year: "Ano 153",
            era: "Era dos Dragões",
            category: "guerra",
            title: "Declaração da Guerra Dracônica",
            description: "Por toda Pomaera dragões se levantam para se juntar e tomar o seu lugar como donos de tudo que se pode ver.",
            fullDesc: [
                "Os dragões se dividem em três grandes grupos para tomar os pontos principais de Pomaera, Myr, as Terras do Norte e Âmago.",
            ]
        },
        {
            id: 9,
            year: "Ano 201",
            era: "Era dos Dragões",
            category: "magia",
            title: "Os Vetores da Guerra",
            description: "Pequenos grupos de transportadores que viraram a guerra.",
            fullDesc: [
                "Correndo riscos enormes carregando pedras de mana brutas, esse pequeno grupo levou a força necessária para que pudesse mudar o rumo da guerra.",
            ]
        },
        {
            id: 10,
            year: "Ano 300",
            era: "Era dos Dragões",
            category: "politica",
            title: "Exilio dos Dragões",
            description: "Veritasserum auto exila os dragões em seu castelo.",
            fullDesc: [
                "Hamil, após atravessar o Bosque Escuro com seu golem de pedra, estabelece as fundações do que viria a ser uma das maiores cidades de Pomaera.",
                "A cidadela de Áltima foi construída em homenagem à mãe de Hamil, cujos ensinamentos guiaram o pequenino em todas suas conquistas."
            ]
        },
        {
            id: 11,
            year: "Ano 350",
            era: "Era dos Dragões",
            category: "fundacao",
            title: "Fundação de Luna",
            description: "Após alguns anos depois do fim da guerra dos Dragões, Luna surge.",
            fullDesc: [
                "O leste das terras do norte se une para criar Luna, um território livre e independente, com ajuda dos amigos do Âmago.",
            ]
        },
        {
            id: 12,
            year: "Ano 1",
            era: "Era de Inata",
            category: "fundacao",
            title: "Conselho das Cinco Cidades",
            description: "Se inicia o Conselho que definiria muito mais do que o futuro do Âmago.",
            fullDesc: [
                "Percebendo a força das pedras de mana e como elas são capazes de acabar ou criar guerras um conselho é formado pelas cinco principais cidades do Âmago para decidir como lidar com esse poder quase infinito.",
            ]
        },
        {
            id: 13,
            year: "Ano 25",
            era: "Era de Inata",
            category: "guerra",
            title: "Guerra de Separação de Myrtariniel",
            description: "Depois de conflitos internos o sul de Myrtariniel decide que quer independência.",
            fullDesc: [
                "Com forte apoio do Conselho das Cinco Cidades, Myr como querem ser chamados agora, inicia a primeira guerra civil da região.",
            ]
        },
        {
            id: 14,
            year: "Ano 30",
            era: "Era de Inata",
            category: "guerra",
            title: "Sereianos se juntam a Tariniel",
            description: "Saíndo do fundo do mar, os Sereianos parecem ser a força que irá virar a guerra.",
            fullDesc: [
                "Infelizmente para o povo do norte de Myrtariniel, essa aliança se tornou um grande erro.",
            ]
        },
        {
            id: 15,
            year: "Ano 43",
            era: "Era de Inata",
            category: "magia",
            title: "Luna inicia a construção da sua ferrovia",
            description: "Finalizada em 50.",
            fullDesc: [
                "Após anos de opressão finalmente conseguem utilizar todo o poder da Coroa Celeste para criar a primeira ferrovia de Pomaera.",
            ]
        },
        {
            id: 16,
            year: "Ano 49",
            era: "Era de Inata",
            category: "guerra",
            title: "Sereianos se juntam a Myr",
            description: "Trocando de lado no último momento Sereianos dão um golpe que define o final da guerra.",
            fullDesc: [
                "Trocando de lado no último momento Sereianos dão um golpe que define o final da guerra, exigindo apenas espólios de Tariniel em troca.",
            ]
        },
        {
            id: 17,
            year: "Ano 50",
            era: "Era de Inata",
            category: "fundacao",
            title: "Fundação do Reino de Myr",
            description: "Juntos perseveramos o inverno.",
            fullDesc: [
                "Após anos de luta entre irmãos do norte e do sul, Myr consegue a sua indepêndencia com uma forte ajuda dos Sereianos e de Âmago.",
            ]
        },
        {
            id: 18,
            year: "Ano 54",
            era: "Era de Inata",
            category: "magia",
            title: "Construção da Ferrovia do Âmago",
            description: "Finalizado em 60.",
            fullDesc: [
                "Finalizado em tempo recorde devido a imposições de Âmago",
            ]
        },
        {
            id: 19,
            year: "Ano 63",
            era: "Era de Inata",
            category: "magia",
            title: "Construção do Colar de Ferro",
            description: "Terminado em 540.",
            fullDesc: [
                "Após a morte de Escobar Bento, a obra levou centenas de anos para terminar. Isso até hoje é um assunto sensível entre Luna e Corália.",
            ]
        },
        {
            id: 20,
            year: "Ano 78",
            era: "Era de Inata",
            category: "magia",
            title: "Construção da Ferrovia de Myr",
            description: "Terminado em 80.",
            fullDesc: [
                "Diferente do que ocorreu em Corália, o engenheiro enviado a Myr se tornou barão.",
            ]
        },
        {
            id: 21,
            year: "Ano 227",
            era: "Era de Inata",
            category: "fundacao",
            title: "Fundação de Piéco ",
            description: "Piéco é finalmente fundado após anos de territórios sem lei.",
            fullDesc: [
                "Isméria aceita ajuda do Âmago para unificar os territórios sob uma única bandeira.",
            ]
        },
        {
            id: 22,
            year: "Ano 1600",
            era: "Era de Inata",
            category: "religiao",
            title: "Caça as Bruxas",
            description: "Em Myr é iniciada uma grande caça as bruxas.",
            fullDesc: [
                "Remanescentes de uma era esquecida foram caçadas até a extinção.",
            ]
        },
        {
            id: 23,
            year: "Ano 1700",
            era: "Era de Inata",
            category: "fundacao",
            title: "Fundação de Nova Amoste",
            description: "Após muitos anos depois da guerra, os Sereianos criam uma nova cidade em Tariniel.",
            fullDesc: [
                "Sereianos criam Nova Amoste para poder entrar em uma nova era de trocas entre eles e outros territórios.",
            ]
        },
        {
            id: 24,
            year: "Ano 1793",
            era: "Era de Inata",
            category: "politica",
            title: "Revolta dos Submersos",
            description: "Os Submersos se revoltam contra seus donos serianos e conseguem a liberdade pouco tempo depois.",
            fullDesc: [
                "Nas cidades obscuras do fundo do Mar Negro, os submersos aproveitam a única chance de escapar das garras dos seus captores e escapam para o sol de Pomaera.",
            ]
        },
        {
            id: 25,
            year: "Ano 2270",
            era: "Era de Inata",
            category: "desastre",
            title: "Ritual no Lago Roxo",
            description: "Um culto tenta realizar um ritual no Lago Roxo de Corália. Mas são impedidos por um grupo de heróis.",
            fullDesc: [
                "Cegos por um objetivo um Coven de bruxas sacrifica a cidade de Averno para trazer de volta um ser esquecido.",
            ]
        },
        {
            id: 26,
            year: "Ano 2297",
            era: "Era de Inata",
            category: "magia",
            title: "A volta dos Dragões",
            description: "Um portal aberto pelo grupo conhecido como As Lobas, traz de volta para Pomaera dragões de um era antiga.",
            fullDesc: [
                "Lobas são fodas o/.",
            ]
        },
        {
            id: 27,
            year: "Ano 2300",
            era: "Era de Inata",
            category: "desastre",
            title: "Queda de Inata",
            description: "Os Caraputangas destroem Inata no último dia do Agouro. A Cachoeira do Silêncio deixa de existir.",
            fullDesc: [
                "No último dia do Agouro do ano 2300, os Caraputangas lançaram seu ataque mais devastador contra a principal cidade do Âmago.",
            ]
        },
        {
            id: 28,
            year: "Ano 2301",
            era: "Era de Inata",
            category: "guerra",
            title: "Ínicio da Guerra das 4 nações",
            description: "Inicio oficial da Guerra das Quatro Nações.",
            fullDesc: [
                "Depois de Luna e Piéco declararem sua independência de Âmago, Corália se aproveita para atacar Luna pelo oesto e Piéco pelo norte.",
            ]
        }
        // remember to keep chronological order
    ];

    // =============================================
    // DOM ELEMENTS
    // =============================================
    const track        = document.getElementById('timelineTrack');
    const eraLabel     = document.getElementById('eraLabel');
    const modal        = document.getElementById('timelineModal');
    const closeBtn     = document.getElementById('closeTimelineModal');
    const modalBody    = document.getElementById('timelineModalBody');

    // =============================================
    // RENDER TIMELINE
    // =============================================
    renderTimeline();

    function renderTimeline() {
        let lastEra = null;

        events.forEach((event, index) => {

            // Insert era divider when era changes
            if (event.era !== lastEra) {
                const divider = createEraDivider(event.era);
                track.appendChild(divider);
                lastEra = event.era;
            }

            // Alternate left/right
            const side = index % 2 === 0 ? 'left' : 'right';
            const el = createEventElement(event, side);
            track.appendChild(el);
        });

        // End marker
        const end = document.createElement('div');
        end.className = 'timeline-end';
        end.innerHTML = `<i class="fas fa-hourglass-end"></i> A história continua...`;
        track.appendChild(end);

        // Trigger scroll animations
        initScrollAnimations();
    }

    // =============================================
    // CREATE ERA DIVIDER
    // =============================================
    function createEraDivider(eraName) {
        const div = document.createElement('div');
        div.className = 'timeline-era-divider';
        div.dataset.era = eraName;
        div.innerHTML = `<span><i class="fas fa-scroll"></i> ${eraName}</span>`;
        return div;
    }

    // =============================================
    // CREATE EVENT ELEMENT
    // =============================================
    function createEventElement(event, side) {
        const cat = categoryConfig[event.category] || { label: event.category, color: '#fbbf24', icon: 'fa-star' };

        const el = document.createElement('div');
        el.className = `timeline-event ${side}`;
        el.dataset.era = event.era;
        el.style.setProperty('--event-color', cat.color);

        el.innerHTML = `
            <div class="timeline-node" style="background: ${cat.color}; box-shadow: 0 0 0 3px ${cat.color}33;"></div>
            <div class="timeline-connector"></div>
            <div class="timeline-card" style="--event-color: ${cat.color}">
                <div class="timeline-card-header">
                    <span class="timeline-year">${event.year}</span>
                    <span class="timeline-category-badge">
                        <i class="fas ${cat.icon}"></i> ${cat.label}
                    </span>
                </div>
                <h3 class="timeline-card-title">${event.title}</h3>
                <p class="timeline-card-desc">${event.description}</p>
                <div class="timeline-card-footer">
                    <button class="timeline-details-btn" data-id="${event.id}">
                        <i class="fas fa-book-open"></i> Ler mais
                    </button>
                </div>
            </div>
        `;

        el.querySelector('.timeline-details-btn').addEventListener('click', () => openModal(event.id));
        el.addEventListener('click', e => {
            if (!e.target.closest('.timeline-details-btn')) openModal(event.id);
        });

        return el;
    }

    // =============================================
    // SCROLL ANIMATIONS — IntersectionObserver
    // Each event starts invisible (opacity: 0, translateX).
    // When it enters the viewport it gets the 'visible' class
    // which triggers the CSS transition.
    // The staggered delay makes events reveal one after another
    // as the user scrolls down, not all at once.
    // =============================================
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Small delay so rapid scrolling still looks staggered
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 80);
                    observer.unobserve(entry.target); // animate once only
                }
            });
        }, {
            threshold: 0.15,    // 15% of element visible before triggering
            rootMargin: '0px 0px -60px 0px' // trigger slightly before bottom of viewport
        });

        // Observe events, dividers and end marker
        track.querySelectorAll('.timeline-event, .timeline-era-divider, .timeline-end')
            .forEach(el => observer.observe(el));

        // =============================================
        // ERA INDICATOR — updates sticky label as user scrolls
        // =============================================
        const eraObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const era = entry.target.dataset.era;
                    if (era) {
                        eraLabel.innerHTML = `<i class="fas fa-scroll"></i> ${era}`;
                    }
                }
            });
        }, {
            threshold: 0,
            rootMargin: '-80px 0px -80% 0px' // triggers when element is near top of viewport
        });

        track.querySelectorAll('[data-era]').forEach(el => eraObserver.observe(el));
    }

    // =============================================
    // MODAL
    // =============================================
    function openModal(id) {
        const event = events.find(e => e.id === id);
        if (!event) return;

        const cat = categoryConfig[event.category] || { label: event.category, color: '#fbbf24', icon: 'fa-star' };

        const paragraphs = event.fullDesc.map(p => `<p>${p}</p>`).join('');

        modalBody.innerHTML = `
            <div style="border-bottom: 1px solid rgba(251,191,36,0.1); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
                <span class="timeline-category-badge" style="
                    background: ${cat.color}22;
                    color: ${cat.color};
                    border: 1px solid ${cat.color}55;
                    display: inline-flex; align-items: center; gap: 0.4rem;
                    padding: 0.3rem 0.9rem; border-radius: 20px;
                    font-size: 0.75rem; font-weight: bold;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    margin-bottom: 1rem;">
                    <i class="fas ${cat.icon}"></i> ${cat.label}
                </span>
                <div class="modal-event-year" style="color: ${cat.color}; text-shadow: 0 0 16px ${cat.color}66;">
                    ${event.year}
                </div>
                <h2 class="modal-event-title">${event.title}</h2>
                <div class="modal-event-meta">
                    <span><i class="fas fa-layer-group"></i> ${event.era}</span>
                </div>
            </div>
            <div class="modal-event-description">
                ${paragraphs}
            </div>
        `;

        modal.style.display = 'block';
        modal.scrollTop = 0;
    }

    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.style.display = 'none'; });

    console.log(`%c Timeline Loaded! ⏳`, `color: #fbbf24; font-size: 16px; font-weight: bold;`);
    console.log(`%c ${events.length} events in history`, `color: #94a3b8; font-size: 14px;`);
});