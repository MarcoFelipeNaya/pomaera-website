// lore.js - Interactive features for the Lore page

document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // LORE DATA
    // EXPLANATION: Each story is an object in this array.
    // To add a new story, just copy one object and fill in the fields.
    // Fields:
    //   id        — unique number, never repeat
    //   title     — story title (shown on card and modal)
    //   category  — must match a data-filter value in lore.html
    //               options: "historia", "lenda", "cronica", "mito", "profecia"
    //   excerpt   — short teaser shown on the card (1-2 sentences)
    //   fullText  — full story as an array of paragraphs (each string = one <p>)
    //   author    — who wrote or narrated it (in-world or real)
    //   readTime  — estimated read time in minutes (rough guide: 200 words/min)
    // =============================================
    const loreEntries = [
        {
            id: 1,
            title: "Joli & Loam",
            category: "lenda",
            excerpt: "O que hoje chama-se Lago Joli é um corpo d'água muito violento e temeroso. A travessia deste lago é muito difícil, e as razões não são conhecidas.",
            fullText: [
                "O que hoje chama-se Lago Joli é um corpo d'água muito violento e temeroso. A travessia deste lago é muito difícil, e as razões não são conhecidas. O que passa de fato, é que qualquer um que tente atravessá-lo terá que enfrentar correntes de água muito turbulentas, tempestades localizadas além de animais ferozes de todos os tipos: crocodilos, peixes agressivos, lulas gigantes e até baleias.",
                "Os pescadores das beiras do lago dizem que na verdade, existe uma entidade que habita o lago e é bastante egoísta neste aspecto. O chamam de Loam e o que é exatamente diverge em todas as versões. Uns dizem que é um réptil gigante, outros dizem que é uma baleia gigantesca, outros dizem que é um ser feito de água. O que todos concordam é que controla magia, e seu elemento definitivamente é água.",
                "Loam é invencível: isto é fato. Loam é impiedoso: bem... nem tanto. Ou ele teve piedade com Joli ou ela o venceu. Aqui os pescadores também divergem.",
                "As margens do lago são bem distintas. Isso chama a atenção dos pescadores locais que almejam sempre atravessar o lago e conquistar o mercado com peixes de sua região. Uma incrível pescadora humana chamda Joli está entre estes. Em uma das noites onde a conversa e a cerveja se misturam, ela diz que o fará. Vai vender truta coral para o outro lado do lago. Ninguém a leva a sério, e as risadas sobressaltam suas tentativas de se fazer ouvir. Naturalmente, ela não era levada a sério naquele meio. Muito raro eram as pescadoras e ainda mais as humanas. Mas ela levava muito a sério o que dizia, e a zombaria acabou virando motivação.",
                "Preparou seu barco, seus arpões, seus cristais de mana, e seu coração. Ia fazer uma viagem da qual certamente não voltaria a mesma. Ao zarpar, Joli enfrentou todas as provações que previu.",
                "A primeira delas: turbulência. O lago fez questão de que Joli mostrasse que sabia navegar. Ondas e mais ondas atacavam o casco de seu barco pesqueiro, causando muito dano estrutural. Joli não se abalou. Remendava o barco enquanto comandava o timão, e com farpas na mão, e sangue nos olhos, saiu dos redemoinhos e turbulências violentas. Tão cedo percebeu que estava longe da margem e da segurança.",
                "A segunda: os animais. Acima de sua cabeça, os abutres giravam em círculos como se tivessem praticando esta sincronia antes. Abaixo, círculos mais e mais temerosos surgiam. Enfrentou crocodilos, marlins, cações e lulas. Todas exigiram muito de Joli, mas ela não cedeu. Seu arpão e sua magia foram essenciais para que ela dominasse as bestas e saísse ilesa.",
                "A terceira: as tempestades. Parece que ali era o local da fúria de Loam. Tempestades de relâmpagos fortíssimas e incessantes. Joli se fatigava, mas mantinha o barco flutuando a todo custo. A cena que todos retratam é que Joli usou sua magia para desviar um raio que vinha em direção ao seus olhos como se tivesse sido direcionado pela própria tempestade.",
                "Como se Loam estivesse colocando em cheque a integridade e dignidade de nossa heroína, após sobreviver a tudo que o lago lançou contra ela, ela encontra uma calmaria sincera que a acompanha em segurança até a outra margem do lago. Os pescadores locais a olham com incredulidade e a recebem como uma lenda, enviada do próprio Loam. Ali, Joli, adormece como pescadora e acorda como deusa. Em meio aos seus adoradores, ela conta sua travessia, vende o que sobrou de sua mercadoria e recebe tantos presentes e dinheiro que seu barco é insuficiente para levar de volta para o outro lado do lago.",
                "A comodidade e seu status como deusa, fazem como que Joli fique pela região, e ela incorpora muito convincentemente seu papel. Afinal, ela mereceu. A cidade, agora batizada Joli, prosperou bastante sob sua liderança, uma vez que suas ordens eram incontestadas e seu raciocínio rápido e ingenhosidade eram excelentes para resolver problemas e estabelecer comércio com assentamentos e vilarejos locais.",
                "Joli viveu muitos anos e ao fim de sua vida, tinha apenas dois desejos. O primeiro era que sua história fosse contada para todos os cantos do mundo. O segundo é que ela não seria enterrada. Seu corpo seria entregue a Loam, como sinal de gratidão."
            ],
            author: "Lucas Queiroz",
            readTime: 5
        }
        
    ];

    const categoryConfig = {
        historia:  { label: 'História',  color: '#e07b39', icon: 'fa-scroll' },
        lenda:     { label: 'Lenda',     color: '#f0c040', icon: 'fa-star' },
        cronica:   { label: 'Crônica',   color: '#5b9bd5', icon: 'fa-feather-alt' },
        mito:      { label: 'Mito',      color: '#9b59b6', icon: 'fa-dragon' },
        profecia:  { label: 'Profecia',  color: '#2ecc71', icon: 'fa-eye' }
    };

    // =============================================
    // DOM ELEMENTS
    // =============================================
    const loreGrid        = document.getElementById('loreGrid');
    const loreSearch      = document.getElementById('loreSearch');
    const loreSearchBtn   = document.getElementById('loreSearchBtn');
    const filterTags      = document.querySelectorAll('.filter-tag');
    const loreModal       = document.getElementById('loreModal');
    const closeLoreModal  = document.getElementById('closeLoreModal');
    const loreModalBody   = document.getElementById('loreModalBody');

    // State
    let currentFilter = 'all';

   
    renderEntries(loreEntries);

   
    filterTags.forEach(tag => {
        tag.addEventListener('click', function () {
            filterTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            filterEntries();
        });
    });

    
    loreSearchBtn.addEventListener('click', performSearch);
    loreSearch.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') performSearch();
    });

    function performSearch() {
        const term = loreSearch.value.toLowerCase().trim();
        if (term === '') {
            renderEntries(loreEntries);
            return;
        }
        const filtered = loreEntries.filter(entry =>
            entry.title.toLowerCase().includes(term) ||
            entry.excerpt.toLowerCase().includes(term) ||
            entry.category.includes(term) ||
            entry.author.toLowerCase().includes(term)
        );
        renderEntries(filtered);
    }

    function filterEntries() {
        let filtered = loreEntries;
        if (currentFilter !== 'all') {
            filtered = filtered.filter(e => e.category === currentFilter);
        }
        renderEntries(filtered);
    }

   
    function renderEntries(entries) {
        loreGrid.innerHTML = '';

        // Remove any leftover show-more button
        const existingBtn = document.querySelector('.show-more-btn');
        if (existingBtn) existingBtn.remove();

        if (entries.length === 0) {
            loreGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-book fa-3x"></i>
                    <h3>Nenhum registro encontrado</h3>
                    <p>Tente outra busca ou categoria</p>
                </div>
            `;
            return;
        }

        const initialCount = 3;

        entries.forEach((entry, index) => {
            const card = createCard(entry, index);
            if (index >= initialCount) {
                card.classList.add('hidden-card');
            }
            loreGrid.appendChild(card);
        });

        // Trigger fade-in only for visible cards
        setTimeout(() => {
            loreGrid.querySelectorAll('.lore-card:not(.hidden-card)').forEach(card => {
                card.style.animationPlayState = 'running';
            });
        }, 50);

        // Show more button
        if (entries.length > initialCount) {
            const btn = document.createElement('button');
            btn.className = 'show-more-btn';
            btn.innerHTML = `<i class="fas fa-chevron-down"></i> Ver todos (${entries.length - initialCount} mais)`;
            btn.addEventListener('click', function () {
                const hidden = loreGrid.querySelectorAll('.hidden-card');
                if (hidden.length > 0) {
                    hidden.forEach(card => {
                        card.classList.remove('hidden-card');
                    });
                    this.innerHTML = `<i class="fas fa-chevron-up"></i> Ver menos`;
                } else {
                    Array.from(loreGrid.children).slice(initialCount).forEach(card => {
                        card.classList.add('hidden-card');
                    });
                    this.innerHTML = `<i class="fas fa-chevron-down"></i> Ver todos (${entries.length - initialCount} mais)`;
                    loreGrid.scrollIntoView({ behavior: 'smooth' });
                }
            });
            loreGrid.after(btn);
        }
    }

   
    function createCard(entry, index) {
        const config = categoryConfig[entry.category] || { label: entry.category, color: '#8b5cf6', icon: 'fa-book' };

        const card = document.createElement('div');
        card.className = 'lore-card';
        card.style.borderLeftColor = config.color;
        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `
            <div class="lore-card-header">
                <span class="lore-category-tag" style="background: ${config.color}22; color: ${config.color}; border: 1px solid ${config.color}55;">
                    <i class="fas ${config.icon}"></i> ${config.label}
                </span>
                <span class="lore-read-time">
                    <i class="fas fa-clock"></i> ${entry.readTime} min
                </span>
            </div>
            <h3 class="lore-card-title">${entry.title}</h3>
            <p class="lore-card-excerpt">${entry.excerpt}</p>
            <div class="lore-card-footer">
                <span class="lore-card-author">
                    <i class="fas fa-feather-alt"></i> ${entry.author}
                </span>
                <button class="lore-read-btn" data-id="${entry.id}">
                    <i class="fas fa-book-open"></i> Ler mais
                </button>
            </div>
        `;

        card.querySelector('.lore-read-btn').addEventListener('click', () => {
            openModal(entry.id);
        });

        return card;
    }

  
    function openModal(id) {
        const entry = loreEntries.find(e => e.id === id);
        if (!entry) return;

        const config = categoryConfig[entry.category] || { label: entry.category, color: '#8b5cf6', icon: 'fa-book' };

        const paragraphs = entry.fullText
            .map(p => `<p>${p}</p>`)
            .join('');

        loreModalBody.innerHTML = `
            <div class="lore-modal-header" style="--modal-accent: ${config.color}">
                <span class="lore-modal-category" style="background: ${config.color}22; color: ${config.color}; border: 1px solid ${config.color}55;">
                    <i class="fas ${config.icon}"></i> ${config.label}
                </span>
                <h2 class="lore-modal-title">${entry.title}</h2>
                <div class="lore-modal-meta">
                    <span><i class="fas fa-feather-alt"></i> ${entry.author}</span>
                    <span><i class="fas fa-clock"></i> ${entry.readTime} min de leitura</span>
                </div>
            </div>
            <div class="lore-modal-text">
                <div class="lore-story-body">
                    ${paragraphs}
                </div>
            </div>
        `;

        // Apply the gradient top bar colour dynamically
        const header = loreModalBody.querySelector('.lore-modal-header');
        header.style.setProperty('--modal-accent', config.color);
        header.style.borderTop = `4px solid ${config.color}`;

        loreModal.style.display = 'block';
        // Scroll modal to top in case a previous entry was scrolled down
        loreModal.scrollTop = 0;
    }

    // Close modal
    closeLoreModal.addEventListener('click', () => {
        loreModal.style.display = 'none';
    });

    loreModal.addEventListener('click', function (e) {
        if (e.target === loreModal) {
            loreModal.style.display = 'none';
        }
    });

    // Close modal with Esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && loreModal.style.display === 'block') {
            loreModal.style.display = 'none';
        }
    });

    console.log(`%c Lore Page Loaded! 📖`, `color: #fbbf24; font-size: 16px; font-weight: bold;`);
    console.log(`%c ${loreEntries.length} entries in the archives`, `color: #94a3b8; font-size: 14px;`);
});