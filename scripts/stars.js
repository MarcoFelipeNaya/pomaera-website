document.addEventListener('DOMContentLoaded', function () {

  //==============================================
  //Star data
  //==============================================
  const stars = [
    {
      id: 1,
      name: "A Medusa",
      description: "A visibilidade das estrelas desta constelação varia muito durante o ano. Os observadores do céu dizem que somente os pescadores de estrelas conseguem identificá-la no enorme mar do cosmos.",
      image: "/images/stars/st_Medusa.webp"
    },
    {
      id: 2,
      name: "A Maçã",
      description: "As 'sementes' da maçã são um na verdade duas estrelas em sistema binário, onde uma orbita em torno da outra. Isto faz com que em diferentes épocas do ano, a maçã apresente apenas uma semente. Povos antigos de Corália acreditavam que a quantidade de sementes nessa constelação ditava quão farta seria a safra daquele mês.",
      image: "/images/stars/st_Maca.webp"
    },
    {
      id: 3,
      name: "A Âncora",
      description: "Chamada de A Âncora pela Costa da Tormenta e Modega. Também conhecida como A Flecha pelos povos nortenhos.",
      image: "/images/stars/st_Ancora.webp"
    },
    {
      id: 4,
      name: "O Leão",
      description: "Dizem as antigas lendas que Selene tem um mítico leão prateado com uma juba majestal. Esta constelação representa este animal lendário.",
      image: "/images/stars/st_Leao.webp"
    },
    {
      id: 5,
      name: "A Mão",
      description: "Também chamada de O Pavão pelos catfolk que não tem uma mão humanoide e portanto não concordam com tal associação.",
      image: "/images/stars/st_Mao.webp"
    },
    {
      id: 6,
      name: "O Colibri",
      description: "",
      image: "/images/stars/st_Colibri.webp"
    },
    {
      id: 7,
      name: "O Ninho",
      description: "Também conhecida como O Pão pelos novos povos de Tariniel, devido ao fato de que os sereianos e submersos não tinham contato com aves até um passado recente.",
      image: "/images/stars/st_Ninho.webp"
    },
    {
      id: 8,
      name: "O Barco",
      description: "",
      image: "/images/stars/st_Barco.webp"
    },
    {
      id: 9,
      name: "O Dragão",
      description: "",
      image: "/images/stars/st_Dragao.webp"
    },
    {
      id: 10,
      name: "O Cetro",
      description: "A gigante vermelha na extremidade desta constelação foi um prato cheio para Myr apropriar-se desta configuração de astros. Muitos idosos myrianos dizem que a anã branca e a gigante vermelha predizem qual será o regime de governo da nova monarca.",
      image: "/images/stars/st_Cetro.webp"
    },
    {
      id: 11,
      name: "A Mãe/A Viúva",
      description: "A estrela mais brilhante do céu noturno de Pomaera é conhecida amplamente no continente como A Mãe ou A Viúva. Ela é facilmente identificada ao norte da constelação d'O Ninho. Uma anã branca com visibilidade imprevisível sempre acompanha este astro. Quando uma família perde um ente querido, geralmente dizem que ele está no abraço da mãe e apontam a anã branca como a representação deste parente no céu.",
      image: "/images/stars/st_Mae.webp"
    }



  ];
  //==============================================
  //DOM ELEMENTS
  //==============================================
  const starsGrid = document.getElementById('starsGrid');

  //==============================================
  //RENDER STARS
  //==============================================
  renderStars(stars);

  function renderStars(starsArray) {
    starsGrid.innerHTML = ''; // Clear existing content

    starsArray.forEach((star, index) => {
      const card = createStarCard(star, index);
      starsGrid.appendChild(card);

    });
    // Trigger fade-in only for visible cards
      setTimeout(() => {
          starsGrid.querySelectorAll('.star-card:not(.hidden-card)').forEach(card => {
              card.style.animationPlayState = 'running';
          });
      }, 50);
  }

  function createStarCard(star, delayIndex) {
    const card = document.createElement('div');
    card.className = 'star-card';
    card.style.animationDelay = `${delayIndex * 0.1}s`;

    card.innerHTML = `
      <div class="star-image" style="background-image: url('${star.image}');">
      </div>
      <div class="star-content">
        <div class="star-header">
          <h3 class="star-name">${star.name}</h3>
          </div>
          <div class="star-divider"></div>
          <p class="star-description">${star.description}</p>
      </div>
    `;
    return card;
  }

  // Console message
    console.log(`%c Stars Page Loaded! 🌟`, 
        `color: #48bb78; font-size: 16px; font-weight: bold;`);
    console.log(`%c ${stars.length} stars ready to explore`, 
        `color: #a0aec0; font-size: 14px;`);

});
