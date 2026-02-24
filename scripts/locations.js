// locations.js - Interactive features for locations page

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
            population: "105,000",
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
            name: "Whispering Woods",
            region: "coralia",
            type: "wilderness",
            description: "An ancient forest where trees are said to whisper secrets to those who listen.",
            image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            population: "Elven tribes",
            ruler: "None",
            danger: "High",
            tags: ["Forest", "Elven", "Mystical"],
            details: {
                history: "Home to elves since before recorded history.",
                notable: "Heart Tree, Whispering Stones, Elven settlements",
                factions: ["Elven Council", "Druid Circle"]
            }
        },
        {
            id: 3,
            name: "Dragon's Maw Dungeon",
            region: "south",
            type: "dungeon",
            description: "A volcanic cave system rumored to be the lair of an ancient dragon.",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            population: "Monsters",
            ruler: "Unknown",
            danger: "Extreme",
            tags: ["Dungeon", "Volcanic", "Dragon"],
            details: {
                history: "Discovered 50 years ago by dwarf miners.",
                notable: "Lava rivers, Crystal caverns, Dragon hoard",
                factions: ["Cult of the Dragon", "Treasure Hunters"]
            }
        },
        {
            id: 4,
            name: "Port Haven",
            region: "east",
            type: "city",
            description: "A bustling port city known for its exotic goods and pirate legends.",
            image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            population: "120,000",
            ruler: "Lord Admiral Grey",
            danger: "Low",
            tags: ["Port", "Trade", "Pirates"],
            details: {
                history: "Founded as a trading outpost 300 years ago.",
                notable: "Grand Harbor, Pirate's Market, Lighthouse",
                factions: ["Harbor Master's Guild", "Pirate Lords"]
            }
        },
        {
            id: 5,
            name: "Stonebridge Town",
            region: "north",
            type: "town",
            description: "A frontier town built around a massive ancient stone bridge.",
            image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            population: "5,000",
            ruler: "Mayor Bronzebeard",
            danger: "Medium",
            tags: ["Frontier", "Bridge", "Mining"],
            details: {
                history: "Founded 100 years ago when the bridge was discovered.",
                notable: "Great Stone Bridge, Miner's Guildhall",
                factions: ["Miner's Guild", "Bridge Wardens"]
            }
        },
        {
            id: 6,
            name: "Sunken Ruins",
            region: "east",
            type: "ruin",
            description: "Ancient city ruins half-submerged in a coastal lagoon.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            population: "None",
            ruler: "None",
            danger: "High",
            tags: ["Ruins", "Sunken", "Ancient"],
            details: {
                history: "Believed to be from the First Empire, sank 1000 years ago.",
                notable: "Sunken temples, Coral gardens, Ancient artifacts",
                factions: ["Archaeologists", "Sea Cultists"]
            }
        },
        {
            id: 7,
            name: "Ironpeak Fortress",
            region: "north",
            type: "dungeon",
            description: "A dwarven fortress carved into a mountain peak, now overrun by goblins.",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            population: "Goblins",
            ruler: "Goblin King",
            danger: "Medium",
            tags: ["Fortress", "Dwarven", "Mountain"],
            details: {
                history: "Abandoned by dwarves 200 years ago during the Goblin Wars.",
                notable: "Forgotten forges, Gem mines, Ancient armory",
                factions: ["Goblin tribes", "Dwarf reclamation forces"]
            }
        },
        {
            id: 8,
            name: "Mistwood Village",
            region: "west",
            type: "town",
            description: "A small village shrouded in perpetual mist, known for herbalists.",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            population: "800",
            ruler: "Elder Willow",
            danger: "Low",
            tags: ["Village", "Mist", "Herbalists"],
            details: {
                history: "Settled by herbalists seeking rare plants.",
                notable: "Herb gardens, Mist spring, Ancient druid circle",
                factions: ["Herbalist Guild", "Druid Circle"]
            }
        }
    ];

    // DOM Elements
    const locationsGrid = document.getElementById('locationsGrid');
    const locationSearch = document.getElementById('locationSearch');
    const searchBtn = document.getElementById('searchBtn');
    const filterTags = document.querySelectorAll('.filter-tag');
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
    // Filter by type
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Update active state
            filterTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            currentRegion = null; // Clear region filter
            
            // Reset region cards
            regionCards.forEach(card => card.style.opacity = '1');
            
            filterLocations();
        });
    });

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
                
                // Update filter buttons
                filterTags.forEach(tag => {
                    if (tag.dataset.filter === 'all') {
                        tag.classList.add('active');
                    } else {
                        tag.classList.remove('active');
                    }
                });
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
            location.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            location.region.includes(searchTerm)
        );

        renderLocations(filtered);
    }

    // View toggle
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

    // Modal
    closeModal.addEventListener('click', function() {
        locationModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === locationModal) {
            locationModal.style.display = 'none';
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
    
    if (locationsArray.length === 0) {
        locationsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-map-marked-alt fa-3x"></i>
                <h3>No locations found</h3>
                <p>Try a different search or filter</p>
            </div>
        `;
        return;
    }

    const initialCount = 3;
    
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
            city: 'fa-city',
            wilderness: 'fa-tree',
            dungeon: 'fa-dungeon',
            town: 'fa-home',
            ruin: 'fa-monument'
        };
        
        // Region colors
        const regionColors = {
            luna: '#6e2f8bff',
            coralia: '#aec9ddff',
            modega: '#ed8936',
            myr: '#c2456eff',
            âmago: '#00d659ff',
            montes: '#93c7a9ff',
            piéco: '#d2d600ff',
            tariniel: '#0092d6ff'
        };
        
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
                    <div class="location-tags">
                        ${location.tags.map(tag => `<span class="location-tag">${tag}</span>`).join('')}
                    </div>
                    <button class="view-details" data-id="${location.id}">
                        <i class="fas fa-eye"></i> Details
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
                            <i class="fas fa-map-marker-alt"></i> ${location.region.charAt(0).toUpperCase() + location.region.slice(1)} Region
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
                                <div class="fact">
                                    <i class="fas fa-tags"></i>
                                    <div>
                                        <strong>Tags</strong>
                                        <p>${location.tags.join(', ')}</p>
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