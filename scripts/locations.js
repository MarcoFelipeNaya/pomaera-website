
document.addEventListener('DOMContentLoaded', function() {
    // Location data - Replace with your actual locations
    const locations = [
        {
            id: 1,
            name: "Inata",
            region: "âmago",
            type: "city",
            description: "A principal cidade do Âmago e a casa do conselho das cinco cidades.",
            image: "../images/maps/InataDest.webp",
            population: "90,000",
            ruler: "Conselho das Cinco Cidades",
            danger: "Baixo",
            tags: ["Magic", "Capital", "Trade"],
            details: {
                history: "Recentemente destruída no último dia do Agouro em 2300 pelo grupo terrorista conhecido como Caraputangas.",
                notable: "Templo de Clóvis, Castelo Flutuante, Cachoeira do Silêncio",
                factions: ["Mage's Guild", "Silver Guard", "Merchant's Consortium"]
            }
        },
        {
            id: 2,
            name: "Lago Roxo",
            region: "coralia",
            type: "wilderness",
            description: "Um lago que há eras se tornou roxo devido as fortes energias mágicas que emanam dele.",
            image: "/images/maps/LagoRoxoSM.webp",
            population: "0",
            ruler: "Família Pétrio",
            danger: "Alto",
            tags: ["Forest", "Magic", "Mystical"],
            details: {
                history: "Um lago que há eras se tornou roxo devido as fortes energias mágicas que emanam dele, devido a pressão ninguém sabe o que se encontra em seu interior. Em 2270 houve uma tentativa de ritual por parte de um culto que foi interrompido pelas autoridades de Corália. Ninguém se feriu.",
                notable: "Alto nível de magia",
                factions: ["Família Pétrio", "Guilda de Exploração"]
            }
        },
        {
            id: 3,
            name: "Porto Draco",
            region: "modega",
            type: "city",
            description: "Uma cidade costeira com lendas e histórias sobre dragões, mas todos sabem que o verdadeiro perigo está no mar.",
            image: "/images/maps/Draco (1).webp",
            population: "20,000",
            ruler: "O Rei Pirata",
            danger: "Alto",
            tags: ["Pirates", "Ocean", "Militia"],
            details: {
                history: "Um dos grandes centros de comércio da Costa da Tormenta, fortemente inflenciada por mercadores e piratas. Porto Draco é um paraíso para aqueles que se dispoem a arriscar suas vidas em suas entranhas mais perigosas. Em tempos recentes uma onde de sequestros assolaram a população mas o mistério foi resolvido graças à Hidra.",
                notable: "Feira de rua, Navios piratas, Governo de faz de conta",
                factions: ["Milicia Pirata", "Parlamento de Modega"]
            }
        },
        {
            id: 4,
            name: "Istral",
            region: "piéco",
            type: "city",
            description: "A cidade das ravinas.",
            image: "/images/maps/IstralSM.webp",
            population: "35,000",
            ruler: "Conselho dos Mais Ricos da Cidade",
            danger: "Alto",
            tags: [""],
            details: {
                history: "Antes de se tornar Istral eram apenas pequenas vilas que se arriscavam em minerar no meio das ravinas por principalmente Minério da Maré, ao longo dos anos devido as riquezas que foram encontradas por lá, pouco a pouco as vilas cresceram e se tornaram uma grande cidade chamada Istral, apesar dos riscos envolvidos em viver por lá a população não para de crescer.",
                notable: "A Ponte Mágica, Distrito do Dragão, Loja de Maravilhas Mágicas",
                factions: ["Mineiradora Giberto e Filhos", "Mineiradora Gaston"]
            }
        },
        {
            id: 5,
            name: "Imre",
            region: "myr",
            type: "town",
            description: "Uma pequena cidade ao norte da grande nação de Myr.",
            image: "/images/maps/ImreSM.webp",
            population: "5,000",
            ruler: "Coroa de Myr",
            danger: "Baixo",
            tags: [""],
            details: {
                history: "Uma pequena cidade ao norte que anos atrás foi alvo de uma droga extremamente viciante que quase destuiu a cidade, após muitos anos a vida voltou ao normal.",
                notable: "O Grande Monólito",
                factions: ["Os Escribas"]
            }
        },
        {
            id: 6,
            name: "Hoste",
            region: "tariniel",
            type: "town",
            description: "Pequena cidade em volta de neve.",
            image: "/images/maps/HosteSM.webp",
            population: "200",
            ruler: "Nenhum",
            danger: "Baixo",
            tags: [""],
            details: {
                history: "Uma vila que é sempre assolada pelo inverno, há alguns anos sobreviviu um ataque de espirítos da neve vindo de um lago próximo, curiosamente nenhum dos moradores da paca vila quis contar como, apenas que bravos heróis passaram por lá.",
                notable: "Absolutamente nada",
                factions: ["Nenhuma"]
            }
        },
        {
            id: 7,
            name: "Teracia",
            region: "âmago",
            type: "dungeon",
            description: "Uma pequena colônia de Catfolks.",
            image: "/images/maps/TeraciaSM.webp",
            population: "80",
            ruler: "Rei Adalberto e Rei Guilhermo",
            danger: "Médio",
            tags: [""],
            details: {
                history: "Essa colônia de Catfolks é conhecida na região por produzirem itens mágicos de altissíma qualidade, apesar de ser pequena é liderada por dois adoráveis reis, na ocasião em que visitei-os me contaram sobre como um Mimíco havia invadido a caverna que eles transformaram em lar, mas que graças a bravura de cada catfolk que vivia sob o teto eles o espantaram.",
                notable: "Itens mágicos de qualidade",
                factions: ["A Guarda Real"]
            }
        },
        {
            id: 8,
            name: "Pico do Carneiro",
            region: "myr",
            type: "wilderness",
            description: "Um pico nevado próximo de Myr.",
            image: "/images/maps/PicodoCarneiroSM.webp",
            population: "Dezenas de Carneiros",
            ruler: "Nenhum",
            danger: "Baixo",
            tags: [""],
            details: {
                history: "Pico nevado conhecido pelos diversos carneiros.",
                notable: "Carneiros",
                factions: ["Carneiros"]
            }
        },
        {
            id: 9,
            name: "Averno",
            region: "coralia",
            type: "city",
            description: "Um cidade reconstruída após ter sido destruída por um culto sombrio.",
            image: "/images/maps/AvernoSM.webp",
            population: "5000",
            ruler: "Família Pétrio",
            danger: "Médio",
            tags: [""],
            details: {
                history: "Em 2270, 80% da população foi morta por um culto de bruxas, felizmente um grupo de aventureiros conseguiu para o culto, desde então a cidade se tornou uma fortaleza.",
                notable: "Lago Roxo, Igreja de Mot",
                factions: ["Guarda Real de Pétrio","Guilda de Extração" ]
            }
        },
        {
            id: 10,
            name: "Bosque do Sumidouro",
            region: "myr",
            type: "wilderness",
            description: "Um conjunto de pântanos e matas localizada a poucos quilômetros de Dianriel.",
            image: "",
            population: "0",
            ruler: "Nenhum",
            danger: "Médio",
            tags: [""],
            details: {
                history: "Destacada por ter uma vegetação de coloração verde escura em contraste ao vermelho do restante do país. Diversas lendas locais afirmam que nele há uma gruta guardada por um fauno e um lago mágico que encolhe quem se banha em suas águas.",
                notable: "Vegetação Verde, Lago Encolhedor, Gruta do Fauno",
                factions: ["Nenhuma" ]
            }
        },
        {
            id: 11,
            name: "Dianriel",
            region: "myr",
            type: "town",
            description: "Uma vila encantadora e vivaz no coração de Myr.",
            image: "/images/maps/DianrielSM.webp",
            population: "6200",
            ruler: "Coroa de Myr",
            danger: "Baixo",
            tags: [""],
            details: {
                history: "Dianriel é um dos principais pontos de parada para viajantes de Myr, pela sua localização central e clima hospitaleiro. Em 2297 houve um descarrilamento de um trem próximo à cidade, ação direta do grupo antimonarca Cetro Quebrado.",
                notable: "Telhas Pretas, Ruínas do Moinho, Pedreira",
                factions: ["Cetro Quebrado" ]
            }
        }
    ];

    // DOM Elements
    const locationsGrid = document.getElementById('locationsGrid');
    const locationSearch = document.getElementById('locationSearch');
    const searchBtn = document.getElementById('searchBtn');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const regionCards = document.querySelectorAll('.region-card');
    const locationModal = document.getElementById('locationModal');
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.getElementById('modalBody');

    // State
    let currentFilter = 'all';
    let currentRegion = null;
    let currentView = 'grid';

    // Initialize
    renderLocations(locations);

    // Event Listeners

    // Filter by region
    regionCards.forEach(card => {
        card.addEventListener('click', function() {
            const region = this.dataset.region;
            
            // Toggle region selection
            if (currentRegion === region) {
                currentRegion = null;
                this.style.opacity = '1';
            } else {
                currentRegion = region;
                regionCards.forEach(c => c.style.opacity = '0.5');
                this.style.opacity = '1';
                
            }
            
            filterLocations();
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    locationSearch.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = locationSearch.value.toLowerCase().trim();
        if (searchTerm === '') {
            renderLocations(locations);
            return;
        }

        const filtered = locations.filter(location => 
            location.name.toLowerCase().includes(searchTerm) ||
            location.description.toLowerCase().includes(searchTerm) ||
            location.region.includes(searchTerm)
        );

        renderLocations(filtered);
    }

    // View toggle
    if (gridViewBtn && listViewBtn) {
        gridViewBtn.addEventListener('click', function() {
            if (currentView !== 'grid') {
                currentView = 'grid';
                locationsGrid.classList.remove('list-view');
                gridViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
            }
        });

        listViewBtn.addEventListener('click', function() {
            if (currentView !== 'list') {
                currentView = 'list';
                locationsGrid.classList.add('list-view');
                listViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
            }
        });
    }

    // Modal
    closeModal.addEventListener('click', function() {
        locationModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === locationModal) {
            locationModal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && locationModal.style.display === 'block') {
            locationModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Functions
    function filterLocations() {
        let filtered = locations;
        
        // Apply type filter
        if (currentFilter !== 'all') {
            filtered = filtered.filter(location => location.type === currentFilter);
        }
        
        // Apply region filter
        if (currentRegion) {
            filtered = filtered.filter(location => location.region === currentRegion);
        }
        
        renderLocations(filtered);
    }

    function renderLocations(locationsArray) {
    locationsGrid.innerHTML = '';

    const existingBtn = document.querySelector('.show-more-btn');
    if (existingBtn) existingBtn.remove();
    
    if (locationsArray.length === 0) {
        locationsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-map-marked-alt fa-3x"></i>
                <h3>Região não encontrada</h3>
                <p>Tente uma nova busca ou filtro</p>
            </div>
        `;
        return;
    }

    function getInitialCount() {
        if (window.innerWidth < 640) return 2;       // mobile
        if (window.innerWidth < 1024) return 4;      // tablet
        return 5;                                     // desktop
    }

    const initialCount = getInitialCount();
    
    locationsArray.forEach((location, index) => {
        const card = createLocationCard(location, index);
        if (index >= initialCount) {
            card.classList.add('hidden-card');
        }
        locationsGrid.appendChild(card);
    });

    // Add show more button if there are more than initialCount
    if (locationsArray.length > initialCount) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'show-more-btn';
        showMoreBtn.innerHTML = `<i class="fas fa-chevron-down"></i> Ver todas (${locationsArray.length - initialCount} mais)`;
        showMoreBtn.addEventListener('click', function() {
            const hidden = locationsGrid.querySelectorAll('.hidden-card');
            if (hidden.length > 0) {
                hidden.forEach(card => card.classList.remove('hidden-card'));
                this.innerHTML = `<i class="fas fa-chevron-up"></i> Ver menos`;
            } else {
                locationsArray.slice(initialCount).forEach((_, i) => {
                    locationsGrid.children[initialCount + i].classList.add('hidden-card');
                });
                this.innerHTML = `<i class="fas fa-chevron-down"></i> Ver todas (${locationsArray.length - initialCount} mais)`;
                locationsGrid.scrollIntoView({ behavior: 'smooth' });
            }
        });
        locationsGrid.after(showMoreBtn);
    }
}

    function createLocationCard(location, delayIndex) {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.style.animationDelay = `${delayIndex * 0.1}s`;
        

        // Type icon
        const typeIcons = {
            city:       'fa-city',
            wilderness: 'fa-tree',
        dungeon:        'fa-dungeon',
            town:       'fa-home',
            ruin:       'fa-monument',
            port:       'fa-anchor'
        };
        
        // Region colors
        const regionColors = {
            luna:     '#6e2f8bff',
            coralia:  '#aec9ddff',
            modega:   '#ed8936',
            myr:      '#c2456eff',
            âmago:    '#00d659ff',
            montes:   '#93c7a9ff',
            piéco:    '#d2d600ff',
            tariniel: '#0092d6ff'
        };
        
        card.style.setProperty('--region-color', regionColors[location.region] || '#fbbf24');
        
        card.innerHTML = `
            <div class="location-image" style="background-image: url('${location.image}')">
                <span class="location-type"><i class="fas ${typeIcons[location.type]}"></i> ${location.type.charAt(0).toUpperCase() + location.type.slice(1)}</span>
            </div>
            <div class="location-content">
                <div class="location-header">
                    <div>
                        <h3 class="location-title">${location.name}</h3>
                        <p class="location-region" style="color: ${regionColors[location.region]}">
                            <i class="fas fa-map-pin"></i> ${location.region.charAt(0).toUpperCase() + location.region.slice(1)}
                        </p>
                    </div>
                </div>
                <p class="location-desc">${location.description}</p>
                <div class="location-details">
                    <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <span>${location.population}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-crown"></i>
                        <span>${location.ruler}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Perigo ${location.danger}</span>
                    </div>
                </div>
                <div class="location-footer">
                    <button class="view-details" data-id="${location.id}">
                        <i class="fas fa-eye"></i> Detalhes
                    </button>
                </div>
            </div>
        `;
        
        // Add click event for details button
        card.querySelector('.view-details').addEventListener('click', function() {
            showLocationDetails(location.id);
        });
        
        return card;
    }

    function showLocationDetails(locationId) {
        const location = locations.find(loc => loc.id === locationId);
        if (!location) return;
        
        const regionColors = {
            north: '#a0aec0',
            east: '#63b3ed',
            south: '#ed8936',
            west: '#48bb78'
        };
        
        const typeIcons = {
            city: 'fa-city',
            wilderness: 'fa-tree',
            dungeon: 'fa-dungeon',
            town: 'fa-home',
            ruin: 'fa-monument'
        };
        
        modalBody.innerHTML = `
            <div class="location-modal-content">
                <div class="modal-header">
                    <h2>${location.name}</h2>
                    <div class="modal-subtitle">
                        <span class="modal-type" style="background: ${regionColors[location.region]}">
                            <i class="fas ${typeIcons[location.type]}"></i> ${location.type.toUpperCase()}
                        </span>
                        <span class="modal-region">
                            <i class="fas fa-map-marker-alt"></i> Região ${location.region.charAt(0).toUpperCase() + location.region.slice(1)}
                        </span>
                    </div>
                </div>
                
                <div class="modal-image" style="background-image: url('${location.image}')"></div>
                
                <div class="modal-body-content">
                    <div class="modal-row">
                        <div class="modal-col">
                            <h3><i class="fas fa-scroll"></i> Descrição</h3>
                            <p>${location.description}</p>
                        </div>
                        <div class="modal-col">
                            <h3><i class="fas fa-info-circle"></i> Fatos Rápidos</h3>
                            <div class="facts-grid">
                                <div class="fact">
                                    <i class="fas fa-users"></i>
                                    <div>
                                        <strong>População</strong>
                                        <p>${location.population}</p>
                                    </div>
                                </div>
                                <div class="fact">
                                    <i class="fas fa-crown"></i>
                                    <div>
                                        <strong>Governo</strong>
                                        <p>${location.ruler}</p>
                                    </div>
                                </div>
                                <div class="fact">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <div>
                                        <strong>Perigo</strong>
                                        <p>${location.danger}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3><i class="fas fa-landmark"></i> História</h3>
                        <p>${location.details.history}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3><i class="fas fa-star"></i> Características</h3>
                        <p>${location.details.notable}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3><i class="fas fa-flag"></i> Facções & Grupos</h3>
                        <p>${location.details.factions.join(', ')}</p>
                    </div>
                    
                </div>
            </div>
        `;
        
        // Add some modal styles
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .location-modal-content {
                color: var(--text-light);
            }
            
            .modal-header {
                margin-bottom: 2rem;
            }
            
            .modal-header h2 {
                color: var(--accent-gold);
                font-size: 2.5rem;
                margin-bottom: 0.5rem;
            }
            
            .modal-subtitle {
                display: flex;
                gap: 1rem;
                align-items: center;
            }
            
            .modal-type {
                background: var(--accent-purple);
                color: white;
                padding: 0.3rem 1rem;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: bold;
            }
            
            .modal-region {
                color: var(--text-muted);
            }
            
            .modal-image {
                height: 300px;
                background-size: cover;
                background-position: center;
                border-radius: var(--border-radius);
                margin-bottom: 2rem;
            }
            
            .modal-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                margin-bottom: 2rem;
            }
            
            .modal-section {
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .modal-section h3 {
                color: var(--accent-gold);
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .facts-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
            
            .fact {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 5px;
            }
            
            .fact i {
                color: var(--accent-purple);
                font-size: 1.5rem;
            }
            
            .modal-section ul {
                padding-left: 1.5rem;
                color: var(--text-muted);
            }
            
            .modal-section li {
                margin-bottom: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .modal-row {
                    grid-template-columns: 1fr;
                }
                
                .facts-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        
        // Remove existing modal styles if any
        const existingStyles = document.querySelector('#modal-styles');
        if (existingStyles) existingStyles.remove();
        
        modalStyles.id = 'modal-styles';
        document.head.appendChild(modalStyles);
        
        // Show modal
        locationModal.style.display = 'block';
    }

    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            filterLocations(); // or renderLocations(locations) depending on current state
        }, 250);
    });

    // Initialize with fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.location-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);

    // Console message
    console.log(`%c Locations Page Loaded! 🗺️`, 
        `color: #48bb78; font-size: 16px; font-weight: bold;`);
    console.log(`%c ${locations.length} locations ready to explore`, 
        `color: #a0aec0; font-size: 14px;`);
});