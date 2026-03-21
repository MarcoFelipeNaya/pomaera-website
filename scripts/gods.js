document.addEventListener('DOMContentLoaded', function() {
  
  //==============================================
  //God data
  //==============================================
  const gods = [
    {
      id: 1,
      name: "Rae",
      description: "Deusa do Sol, seus seguidores criaram as igrejas do Sol, que em sua maioria são grandes faróis.",
      image: "/images/gods/Rae.webp",
      domain: "Sol, Luz, Calor",
      symbol: "Um sol formado por um circulo e 8 triângulos",
      representative: "Uma humana de pele morena e olhos dourados",
    },
    {
      id: 2,
      name: "Selene",
      description: "Seus seguidores acreditam que assim como as duas luas ela possuí dois lados, um amável, bondoso e maternal e outro duro, rígida e fria com problemas mundanos.",
      image: "/images/gods/Selene.webp",
      domain: "Lua, Noite",
      symbol: "Uma lua dividida em duas, cada lado representando uma lua de Pomaera",
      representative: "Uma elfa com heterocromia, um azul e um branco",
    },


  ];
  //==============================================
  //DOM ELEMENTS
  //==============================================
  const godsGrid = document.getElementById('godsGrid');
  //==============================================
  //CREATE GODS
  //==============================================
  renderGods(gods);

  function renderGods(godsArray) {
    godsGrid.innerHTML = ''; //clear grid

    godsArray.forEach((god, index) =>{
      const card = createGodCard(god, index);
      godsGrid.appendChild(card);

    });

    // Trigger fade-in only for visible cards
      setTimeout(() => {
          godsGrid.querySelectorAll('.gods-card:not(.hidden-card)').forEach(card => {
              card.style.animationPlayState = 'running';
          });
      }, 50);
  }

  function createGodCard(god, delayIndex) {
    const card = document.createElement('div');
    card.className = 'gods-card';
    card.style.animationDelay = `${delayIndex * 0.1}s`;

    card.innerHTML = `
      <div class="gods-image" style="background-image: url('${god.image}');">
      </div>
      <div class="gods-content">
        <div class="gods-header">
          <h3 class="gods-name">${god.name}</h3>
        </div>
        <div class="gods-divider"></div>
          <p class="gods-description">
            ${god.description}
          </p>

          <div class="gods-detail">
            <i class="fas fa-crown"></i>
            <span>${god.domain}</span>
          </div>
          <div class="gods-detail">
            <i class="fas fa-ankh"></i>
            <span>${god.symbol}</span>
          </div>
          <div class="gods-detail">
            <i class="fas fa-person"></i>
            <span>${god.representative}</span>
          </div>
        </div>
      </div>
    `;

    return card;
  }

  // Console message
    console.log(`%c Gods Page Loaded! 👑`, 
        `color: #48bb78; font-size: 16px; font-weight: bold;`);
    console.log(`%c ${gods.length} gods ready to explore`, 
        `color: #a0aec0; font-size: 14px;`);

});