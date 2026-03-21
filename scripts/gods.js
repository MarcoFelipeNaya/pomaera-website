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
      description: "Seus seguidores acreditam que assim como as duas luas ela possui dois lados, um amável, bondoso e maternal e outro duro, rígida e fria com problemas mundanos.",
      image: "/images/gods/Selene.webp",
      domain: "Lua, Noite",
      symbol: "Uma lua dividida em duas, cada lado representando uma lua de Pomaera",
      representative: "Uma elfa com heterocromia, um azul e um branco",
    },
    {
      id: 3,
      name: "Clóvis",
      description: "Um deus que abençoa músicos, viajantes, trupes e todo tipo de artista que percorrem as estradas.",
      image: "/images/gods/Clovis.webp",
      domain: "Artes, Música, Vinho",
      symbol: "Uma gaita prateada",
      representative: "Um catfolk acima do peso.",
    },
    {
      id: 4,
      name: "Mea Fou",
      description: "Aberto a todos que desejam conhecimento sobre o mundo e suas propriedades e que estejam dispostos a ensinar e aprender.",
      image: "/images/gods/Mea_Fou.webp",
      domain: "Conhecimento, Aprendizado",
      symbol: "Um livro e uma pena",
      representative: "Um Aasimar.",
    },
    {
      id: 5,
      name: "Lorelai",
      description: "Deusa do amor que hoje em dia possui alguns dos servos mais fervorosos, todos dispostos a espalhar a mensagem de amor, mesmo que por força.",
      image: "/images/gods/Lorelai.webp",
      domain: "Amor, Família",
      symbol: "Um coração flamejante com uma adaga no meio",
      representative: "Uma elfa em vestes brancas.",
    },
    {
      id: 6,
      name: "A Senhora de Preto",
      description: "Sempre representada em luto, lendas contam que ela costuma aparecer em locais de grandes tragédias ou em que grandes acontecimentos viriam a ser realizados.",
      image: "/images/gods/A_Senhora_de_Preto.webp",
      domain: "Morte, Destino",
      symbol: "Uma pequena coruja com uma coroa de espinhos",
      representative: "Uma mulher em luto de diferentes idades.",
    },
    {
      id: 7,
      name: "Korina",
      description: "Uma deusa justa que sempre entregou sua bênção para ambos os lados de uma batalha.",
      image: "/images/gods/Korina.webp",
      domain: "Batalha, Competição, Guerra",
      symbol: "Um martelo em um fundo vermelho",
      representative: "Uma halfling de cabelos vermelhos.",
    },
    {
      id: 8,
      name: "Fletch",
      description: "Cuidador das florestas e dos animais, punia aqueles que maltratavam seu domínio de forma maldosa e arbitrária.",
      image: "/images/gods/Fletch.webp",
      domain: "Florestas, Animais",
      symbol: "Uma pena de pavão",
      representative: "Um Firbolg sem gênero definido.",
    },
    {
      id: 9,
      name: "Rokarion",
      description: "Deus do fogo que, enfurecido, despejou sobre Pomaera sua ira através do vulcão que foi batizado em sua honra.",
      image: "/images/gods/Rokarion.webp",
      domain: "Fogo, Forja",
      symbol: "Uma chama em um fundo amarelo",
      representative: "Um tiefling de pele e olhos vermelhos.",
    },
    {
      id: 10,
      name: "Memento",
      description: "Seus seguidores têm como dogma a seguinte frase: 'Você ama a pessoa ou o que ela te lembra'.",
      image: "/images/gods/Memento.webp",
      domain: "Lembranças, Momento",
      symbol: "Um relógio quebrado",
      representative: "Uma elfa noturna de cabelos pretos e olhos azuis como luar.",
    },
    {
      id: 11,
      name: "Arashi",
      description: "O deus que personifica a tempestade. É adorado e sempre recebe oferendas de marinheiros e pescadores.",
      image: "/images/gods/Arashi.webp",
      domain: "Tempestade",
      symbol: "Um raio",
      representative: "Um Genasi da água.",
    },
    {
      id: 12,
      name: "Engany",
      description: "Mestre das trapaças e da malandragem. Seus seguidores dizem que foi assim que ele se tornou um deus.",
      image: "/images/gods/Engany.webp",
      domain: "Trapaças, Malandragem",
      symbol: "Uma máscara com um grande sorriso",
      representative: "Um Catfolk preto com grandes olhos amarelos.",
    },
    {
      id: 13,
      name: "Yuna",
      description: "Personificação da Magia, não existem templos ou santuários dedicados a ela.",
      image: "/images/gods/Yuna.webp",
      domain: "Magia",
      symbol: "Pequenos brilhos em um fundo branco",
      representative: "Uma criança élfica.",
    },
    {
      id: 14,
      name: "Wauk'een",
      description: "Um Sereiano que rege as trocas e os mercadores.",
      image: "/images/gods/Waukeen.webp",
      domain: "Trocas, Mercadores",
      symbol: "Uma moeda rachada",
      representative: "Um Sereiano.",
    },
    {
      id: 15,
      name: "Kyeva",
      description: "Uma Yuan-Ti que personifica doenças, venenos e seu próprio povo.",
      image: "/images/gods/Kyeva.webp",
      domain: "Doenças, Venenos, Yuan-ti",
      symbol: "Uma língua bifurcada",
      representative: "Uma Yuan-Ti.",
    },
    {
      id: 16,
      name: "Tharos",
      description: "Representa a coragem e o altruísmo. Para Aaracokras ele também é o deus dos ventos.",
      image: "/images/gods/Tharos.webp",
      domain: "Coragem, Altruísmo",
      symbol: "Metade de um sol",
      representative: "Um Aaracokra.",
    },
    {
      id: 17,
      name: "Mot",
      description: "Um halfling velho que preside os funerais e a morte. Seus seguidores costumam ser obcecados por rituais fúnebres e por manter os mortos em um estado de respeito e reverência.",
      image: "/images/gods/Mot.webp",
      domain: "Funerais, Morte",
      symbol: "Uma folha de oliva",
      representative: "Um halfling velho.",
    },
    {
      id: 18,
      name: "Haza",
      description: "Personifica a sorte e a fortuna. Muito querida entre os mais pobres.",
      image: "/images/gods/Haza.webp",
      domain: "Sorte, Fortuna",
      symbol: "Um trevo cortado",
      representative: "Uma jovem halfling.",
    },
    {
      id: 19,
      name: "Chanti",
      description: "Personifica a paz e a agricultura.",
      image: "/images/gods/Chanti.webp",
      domain: "Paz, Agricultura",
      symbol: "Um trigo",
      representative: "Uma tiefling de pele verde clara.",
    },
    {
      id: 20,
      name: "Ori",
      description: "Deus que inspira os artesãos. Histórias contam que ele possuia dois irmãos mas não existem registros de templos ou seguidores dedicados a eles.",
      image: "/images/gods/Ori.webp",
      domain: "Artesãos",
      symbol: "Um triângulo rachado",
      representative: "Um genasi do ar.",
    }


  ];

  const godsPrimor = [
    {
      id: 21,
      name: "Ignis",
      description: "Uma das primeiras formas de divindades em Pomaera foi Ignis, o macaco flamejante. Ele deu seu próprio fogo para os primeiros povos, para protegê-los do escuro e dos monstros de Bestia.",
      image: "/images/gods/Ignis.webp",
      domain: "Fogo",
      symbol: "Uma chama com a base redonda",
      representative: "Macaco-Prego",
    },
    {
      id: 22,
      name: "Oras",
      description: "Oras, o viajante, soprou seus ventos sobre Pomaera para que as sementes se espalhassem por todo continente e que, para onde fossem, o povo original sempre teria sombras e alimento.",
      image: "/images/gods/Oras.webp",
      domain: "Ar",
      symbol: "O contorno de um pardal",
      representative: "Pardal",
    },
    {
      id: 23,
      name: "Erde",
      description: "Erde, aquele que amaciou o solo para as plantações e criou as montanhas em volta da Árvore para que o coração de Pomaera sempre estivesse protegido.",
      image: "/images/gods/Erde.webp",
      domain: "Terra",
      symbol: "Uma rocha cortada em dois horizontalmente",
      representative: "Tamanduá-bandeira",
    },
    {
      id: 24,
      name: "Amanzi",
      description: "Amanzi acalmou os mares e oceanos, limitou seu domínio para que o povo original pudesse ter espaço para crescer e se desenvolver como um todo.",
      image: "/images/gods/Amanzi.webp",
      domain: "Água",
      symbol: "Três ondas em um fundo redondo",
      representative: "Orca",
    },
    {
      id: 25,
      name: "Hiver",
      description: "Reconhecida como uma raposa branca com heterocromia que protege seus fiéis do frio.",
      image: "/images/gods/Hiver.webp",
      domain: "Inverno",
      symbol: "Uma raposa e uma pinha",
      representative: "Raposa branca com heterocromia",
    },
    {
      id: 26,
      name: "Esti",
      description: "Uma raposa laranja que traz as bênçãos do verão quando aparece em Pomaera.",
      image: "/images/gods/Esti.webp",
      domain: "Verão",
      symbol: "Uma raposa em uma folha",
      representative: "Raposa laranja",
    },
    {
      id: 27,
      name: "Kin",
      description: "Um grande lobo, Kin vagava pelos campos colhendo as almas desafortunadas e cobrando promessas quebradas.",
      image: "/images/gods/Kin.webp",
      domain: "Morte",
      symbol: "Um lobo uivando",
      representative: "Lobo",
    },
    {
      id: 28,
      name: "Dreva Jukar",
      description: "A única deusa primordial a ser cultuada nos dias de hoje, a própria árvore de onde tudo veio.",
      image: "/images/gods/Dreva_Jukar.webp",
      domain: "Pomaera",
      symbol: "A árvore no centro de Pomaera",
      representative: "A Árvore-Mãe",
},
  ];
    
  //==============================================
  //DOM ELEMENTS
  //==============================================
  const godsGrid = document.getElementById('godsGrid');
  const godsGrid2 = document.getElementById('godsGrid2');
  //==============================================
  //CREATE GODS
  //==============================================
  renderGods(gods, godsGrid);
  renderGods(godsPrimor, godsGrid2);

  function renderGods(godsArray, grid) {
    grid.innerHTML = ''; //clear grid

    godsArray.forEach((god, index) =>{
      const card = createGodCard(god, index);
      grid.appendChild(card);

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