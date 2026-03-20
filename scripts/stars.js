document.addEventListener('DOMContentLoaded', function () {

  //==============================================
  //Star data
  //==============================================
  const stars = [
    {
      id: 1,
      name: "Star 1",
      description: "Description for Star 1",
      image: "path/to/star1.jpg"
    },
    {
      id: 2,
      name: "Star 2",
      description: "Description for Star 2",
      image: "path/to/star2.jpg"
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
