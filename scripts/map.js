// map.js — Leaflet image map for Pomaera
// =============================================
// HOW TO ADD A NEW MARKER:
// Find the coordinates by hovering your mouse over the map image
// in a browser (use browser devtools or the debug mode below).
// Then add a new object to the `markers` array following the same format.
//
// COORDINATE SYSTEM:
// Leaflet image maps use [y, x] pixel coordinates where:
//   [0, 0]      = TOP-LEFT of the image
//   [1125, 2000] = BOTTOM-RIGHT of the image (your map is 2000x1125px)
// So [500, 800] means 500px from top, 800px from left.
// =============================================

document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // MAP IMAGE DIMENSIONS
    // EXPLANATION: These MUST match the actual pixel size of your image.
    // If they're wrong, markers will appear in the wrong positions.
    // Your map is 2000 x 1125 pixels.
    // =============================================
    const MAP_W = 2000;
    const MAP_H = 1125;

    // =============================================
    // MARKERS
    // EXPLANATION: Each marker is an object with:
    //   coords  — [y, x] pixel position on the map image
    //   name    — shown as the popup title
    //   region  — region name (used for colour coding)
    //   type    — location type (city, dungeon, town, wilderness, ruin)
    //   desc    — short description shown in popup
    //   link    — (optional) if set, popup shows a "Ver mais" button
    //             that filters the locations grid to this location
    //
    // TO FIND COORDINATES:
    // Set debugMode = true below, then hover over the map in your browser.
    // The coordinates will be shown in the top-right corner of the map.
    // Once you have the right coords, set debugMode = false again.
    // =============================================
    const markers = [
                // ---- ADD YOUR MARKERS BELOW THIS LINE ----
        // Copy and paste this template for each new location:
        //
        // {
        //     coords: [Y, X],       // pixel position [top, left]
        //     name: "Nome",
        //     region: "região",     // âmago | coralia | luna | modega | montes | myr | piéco | tariniel
        //     type: "city",         // city | town | dungeon | wilderness | ruin
        //     desc: "Descrição curta.",
        //     link: true            // set false if no locations page entry yet
        // },
        {
            coords: [523, 814],
            name: "Inata",
            region: "âmago",
            type: "cidade",
            desc: "A principal cidade do Âmago e sede do Conselho das Cinco Cidades.",
            link: true
        },
        {
            coords: [1004, 1047],       // pixel position [top, left]
            name: "Lago Roxo",
            region: "coralia",     // âmago | coralia | luna | modega | montes | myr | piéco | tariniel
            type: "natureza",         // city | town | dungeon | wilderness | ruin
            desc: "Um lago que há eras se tornou roxo devido as fortes energias mágicas que emanam dele.",
            link: true            // set false if no locations page entry yet
        },

        {
            coords: [381, 1248],       // pixel position [top, left]
            name: "Porto Draco",
            region: "Costa da Tormenta",     // âmago | coralia | luna | modega | montes | myr | piéco | tariniel
            type: "porto",         // city | town | dungeon | wilderness | ruin
            desc: "Uma cidade costeira com lendas e histórias sobre dragões, mas todos sabem que o verdadeiro perigo está no mar.",
            link: true            // set false if no locations page entry yet
        },
        {
            coords: [580, 1115],
            name: "Istral",
            region: "piéco",
            type: "cidade",
            desc: "A cidade das Ravinas.",
            link: true
        },
        {
            coords: [424, 362],
            name: "Imre",
            region: "myr",
            type: "vila",
            desc: "Imre vive!.",
            link: true
        }, 
        {
            coords: [810, 259],
            name: "Hoste",
            region: "tariniel",
            type: "vila",
            desc: "Pequena vila.",
            link: true
        },
        {
            coords: [600, 885],
            name: "Teracia",
            region: "âmago",
            type: "masmorra",
            desc: "Colônia de Catfolks.",
            link: true
        },
        {
            coords: [187, 392],
            name: "Pico do Carneiro",
            region: "myr",
            type: "natureza",
            desc: "Pico de carneiros.",
            link: true
        },
        {
            coords: [989, 1029],
            name: "Averno",
            region: "coralia",
            type: "cidade",
            desc: "O Berço do Lago Roxo.",
            link: true
        },
        {
            coords: [240, 364],
            name: "Bosque do Sumidouro",
            region: "myr",
            type: "natureza",
            desc: "Um conjunto de pântanos e matas localizada a poucos quilômetros de Dianriel.",
            link: true
        },
        {
            coords: [242, 387],
            name: "Dianriel",
            region: "myr",
            type: "vila",
            desc: "Uma vila encantadora e vivaz no coração de Myr.",
            link: true
        },
        {
            coords: [545, 850],
            name: "Altima",
            region: "âmago",
            type: "cidade",
            desc: "A capital dos halflings.",
            link: false
        },
        {
            coords: [555, 815],
            name: "Dreva Jukar",
            region: "âmago",
            type: "natureza",
            desc: "A árvore que dá vida a todos.",
            link: false
        },
        {
            coords: [545, 786],
            name: "Quendi",
            region: "âmago",
            type: "cidade",
            desc: "Capital dos elfos.",
            link: false
        },
        {
            coords: [574, 791],
            name: "Félix",
            region: "âmago",
            type: "cidade",
            desc: "Capital dos catfolks.",
            link: false
        },
        {
            coords: [577, 828],
            name: "Amianto",
            region: "âmago",
            type: "cidade",
            desc: "Capital dos tieflings.",
            link: false
        },
        {
            coords: [621, 771],
            name: "Furion",
            region: "âmago",
            type: "cidade",
            desc: "Uma cidade construída por catfolks após o fim da guerra contra os Aaracokras.",
            link: false
        },
        {
            coords: [614, 846],
            name: "Látima",
            region: "âmago",
            type: "vila",
            desc: "Cidade satélite de Amianto.",
            link: false
        },
        {
            coords: [577, 879],
            name: "Munice",
            region: "âmago",
            type: "vila",
            desc: "A última cidade onde a ferrovia passa.",
            link: true
        },
        {
            coords: [544, 879],
            name: "Penoma",
            region: "âmago",
            type: "vila",
            desc: "Uma vila onde boa parte da população é feita de halflings.",
            link: false
        },
        {
            coords: [501, 901],
            name: "Isbel",
            region: "âmago",
            type: "vila",
            desc: "Uma das três vilas irmãs.",
            link: false
        },
        {
            coords: [523, 910],
            name: "Lariel",
            region: "âmago",
            type: "vila",
            desc: "Uma das três vilas irmãs.",
            link: false
        },
        {
            coords: [549, 917],
            name: "Aniburgo",
            region: "âmago",
            type: "vila",
            desc: "Uma das três vilas irmãs que hoje se transformou em um lar para goblins e outras raças.",
            link: true
        },
        {
            coords: [484, 802],
            name: "Primora",
            region: "âmago",
            type: "cidade",
            desc: "Uma cidade que cresceu muito após a costrução da ferrovia.",
            link: false
        },
        {
            coords: [484, 802],
            name: "Primora",
            region: "âmago",
            type: "cidade",
            desc: "Uma cidade que cresceu muito após a costrução da ferrovia.",
            link: false
        },
        {
            coords: [470, 747],
            name: "Porto Draco",
            region: "âmago",
            type: "porto",
            desc: "O maior porto do Âmago, anos atrás foi daqui que a travessia do Pioneiro começou.",
            link: true
        },
        {
            coords: [383, 622],
            name: "Mar Pioneiro",
            region: "água",
            type: "agua",
            desc: "O mar que divide Pomaera, cheio de tesouros e segredos.",
            link: false
        },
        {
            coords: [494, 737],
            name: "Gemália",
            region: "âmago",
            type: "vila",
            desc: "Uma pequena vila que só existe ainda devido a ferrovia.",
            link: false
        },
        {
            coords: [515, 693],
            name: "Ponta Alta",
            region: "âmago",
            type: "vila",
            desc: "Uma vila que fica no topo de uma montanha.",
            link: false
        },
        {
            coords: [517, 762],
            name: "Aladessa",
            region: "âmago",
            type: "vila",
            desc: "Uma pequena cidade onde muitas famílias ricas passam parte do ano.",
            link: false
        },
        {
            coords: [460, 778],
            name: "Velejo",
            region: "âmago",
            type: "vila",
            desc: "Uma vila costeira que enfrenta muitos problemas com a poluição marinha.",
            link: false
        },
        {
            coords: [450, 843],
            name: "Atalaia",
            region: "âmago",
            type: "cidade",
            desc: "Uma cidade envolta por florestas.",
            link: false
        },
        {
            coords: [430, 895],
            name: "Delta",
            region: "âmago",
            type: "vila",
            desc: "Uma vila no delta do Âmago.",
            link: false
        },
        {
            coords: [471, 874],
            name: "Esperança",
            region: "âmago",
            type: "vila",
            desc: "A vila tinha outro nome, porém com a chegada da ferrovia ela foi rebatizada.",
            link: false
        },
        {
            coords: [496, 856],
            name: "Progresso",
            region: "âmago",
            type: "vila",
            desc: "A vila foi construída com a promessa de fazer parte da linha ferroviária...",
            link: false
        },
        {
            coords: [526, 717],
            name: "Gran Vale Cassino",
            region: "âmago",
            type: "masmorra",
            desc: "Um cassino construído no meio da intersecção ferroviária.",
            link: false
        },
        {
            coords: [576, 747],
            name: "Bosque Escuro",
            region: "âmago",
            type: "natureza",
            desc: "Uma floresta que um dia foi considerada intransitável.",
            link: false
        },
        {
            coords: [631, 807],
            name: "A Pata",
            region: "âmago",
            type: "natureza",
            desc: "Um conjunto de floresta e lagos com uma misteriosa energia.",
            link: false
        },
        {
            coords: [699, 744],
            name: "Lago Joli",
            region: "água",
            type: "agua",
            desc: "Um grande lago com águas extremamente perigosas.",
            link: false
        },
        {
            coords: [699, 784],
            name: "A Gaiola",
            region: "água",
            type: "masmorra",
            desc: "Uma prisão especial criada pelo Conselho das Cinco Cidades com o apoio das outras regiões, ela abriga criminosos e criaturas que não podem ser mortas.",
            link: false
        },
        {
            coords: [535, 984],
            name: "Boca do Deserto",
            region: "piéco",
            type: "cidade",
            desc: "Também conhecida como Portal do inferno, essa cidade é a divisão entre Âmago e Piéco.",
            link: true
        },
        {
            coords: [541, 1057],
            name: "Isma",
            region: "piéco",
            type: "vila",
            desc: "Vila com a visão privilegiada dos cânions de Piéco.",
            link: false
        },
        {
            coords: [473, 1071],
            name: "Ispié",
            region: "piéco",
            type: "vila",
            desc: "Uma vila que se camufla entre as dunas do deserto.",
            link: false
        },
        {
            coords: [622, 981],
            name: "Berço de Piéco",
            region: "piéco",
            type: "vila",
            desc: "Histórias contam que essa foi a primeira cidade de Piéco.",
            link: false
        },
        {
            coords: [676, 920],
            name: "Istéla",
            region: "piéco",
            type: "vila",
            desc: "Uma pequena vila ao norte de Piéco.",
            link: false
        },
        {
            coords: [719, 868],
            name: "Istrío",
            region: "piéco",
            type: "cidade",
            desc: "Uma cidade de rebeldes que com o inicio da guerra se juntou com Corália para a libertação de Piéco.",
            link: false
        },
        {
            coords: [405, 1198],
            name: "Isbel do Leste",
            region: "piéco",
            type: "vila",
            desc: "A última cidade antes de Modega.",
            link: false
        },
        {
            coords: [304, 1072],
            name: "Ambição",
            region: "piéco",
            type: "vila",
            desc: "Uma vila pequena criada por exploradores que pretendiam explorar Rokai.",
            link: false
        },
        {
            coords: [376, 1112],
            name: "Isméria",
            region: "piéco",
            type: "cidade",
            desc: "A cidade de vidro, ela foi criada em algum momento do passado, a maior parte de suas construções é feita de vidro criado pelo forte calor de Rokai.",
            link: false
        },
        {
            coords: [251, 836],
            name: "Rokai",
            region: "rokai",
            type: "volcano",
            desc: "o Grande Vulcão Rokai, ainda em atividade e um perigo constante para toda Pomaera.",
            link: false
        },
        {
            coords: [435, 1010],
            name: "A Grande Tempestade de Areia",
            region: "piéco",
            type: "natureza",
            desc: "Uma tempestade de areia que permeia o deserto há muitos anos.",
            link: false
        },
        {
            coords: [617, 709],
            name: "Hamil",
            region: "âmago",
            type: "vila",
            desc: "Uma vila nomeada após o herói Hamil. Hoje abriga uma parte do exército de Luna.",
            link: false
        },
        {
            coords: [625, 652],
            name: "Hamilia",
            region: "âmago",
            type: "vila",
            desc: "A vila irmã de Hamil.",
            link: false
        },
        {
            coords: [623, 678],
            name: "Lago Hamil",
            region: "âmago",
            type: "agua",
            desc: "Um pequeno lago que divide duas vilas.",
            link: false
        },
        {
            coords: [570, 710],
            name: "Entreada",
            region: "âmago",
            type: "vila",
            desc: "Um pequena vila tomada pelo exército de Luna.",
            link: false
        },
        {
            coords: [562, 665],
            name: "Irá",
            region: "âmago",
            type: "vila",
            desc: "Um pequena vila escondida.",
            link: false
        },
        {
            coords: [526, 566],
            name: "Miral do Sol",
            region: "luna",
            type: "vila",
            desc: "Uma vila que está aguardando até hoje a continuação da ferrovia.",
            link: false
        },
        {
            coords: [536, 615],
            name: "Holicia",
            region: "luna",
            type: "vila",
            desc: "Uma vila que vive ao final do Rio de Chanti.",
            link: false
        },
        {
            coords: [608, 608],
            name: "Rio de Chanti",
            region: "luna",
            type: "agua",
            desc: "Um rio batizado em homenagem a Deusa Chanti.",
            link: false
        },
        {
            coords: [597, 563],
            name: "Felicia",
            region: "luna",
            type: "cidade",
            desc: "Uma grande cidade no sul de Luna, ponto estratégico para a Guerra.",
            link: false
        },
        {
            coords: [678, 632],
            name: "Privilégio",
            region: "luna",
            type: "vila",
            desc: "Uma vila que teve sorte de ser um dos pontos da ferrovia.",
            link: false
        },
        {
            coords: [681, 536],
            name: "Siméria",
            region: "luna",
            type: "vila",
            desc: "Protegida pela montanha, essa vila se mantém longe de questões mais sérias.",
            link: false
        },
        {
            coords: [732, 482],
            name: "Baía Azul",
            region: "luna",
            type: "porto",
            desc: "Um porto novo porém muito transitado.",
            link: false
        },
        {
            coords: [751, 572],
            name: "Quilandra",
            region: "luna",
            type: "vila",
            desc: "Uma vila que se tornou um ponto de trocas importantes em Luna.",
            link: false
        },
        {
            coords: [783, 644],
            name: "Caminho",
            region: "luna",
            type: "cidade",
            desc: "Uma cidade antiga que sobreviveu muitas coisas.",
            link: false
        },
        {
            coords: [806, 481],
            name: "Entrelagos",
            region: "luna",
            type: "vila",
            desc: "Uma vila de pescadores cujas histórias são fascinantes.",
            link: false
        },
        {
            coords: [823, 555],
            name: "Cecília",
            region: "luna",
            type: "cidade",
            desc: "Grande cidade que se tornou o maior ponto comercial de Luna.",
            link: false
        },
        {
            coords: [861, 482],
            name: "Nova Jezebel",
            region: "luna",
            type: "vila",
            desc: "Construída sobre os escombros de uma antiga cidade.",
            link: false
        },
        {
            coords: [919, 452],
            name: "Ponta Alva",
            region: "luna",
            type: "vila",
            desc: "Uma vila ao norte de Luna.",
            link: false
        },
        {
            coords: [890, 621],
            name: "Passo Gelado",
            region: "luna",
            type: "vila",
            desc: "Uma vila de pescadores do gelo.",
            link: false
        },
        {
            coords: [953, 549],
            name: "Lândania",
            region: "luna",
            type: "vila",
            desc: "Pequena cidade satélite de Lândano.",
            link: false
        },
        {
            coords: [972, 491],
            name: "Lândano",
            region: "luna",
            type: "cidade",
            desc: "A capital de Luna.",
            link: false
        },
        {
            coords: [907, 543],
            name: "Coroa Celeste",
            region: "luna",
            type: "ruína",
            desc: "Local da queda de um meteoro há milhares de anos, até hoje esse local é mineirado para fazer a ferrovia de Pomaera.",
            link: false
        },
        {
            coords: [855, 683],
            name: "Mauvice",
            region: "coralia",
            type: "vila",
            desc: "Uma vila de mineiradores que já foi muito importante na região porém após as minas secarem grande parte da população se mudou.",
            link: false
        },
        {
            coords: [753, 769],
            name: "Joli",
            region: "coralia",
            type: "vila",
            desc: "Uma vila de pescadores que se atrevem a pescar no Lago Joli.",
            link: false
        },
        {
            coords: [814, 857],
            name: "Coração do Norte",
            region: "coralia",
            type: "vila",
            desc: "Uma pequena cidade que já foi importante na região.",
            link: false
        },
        {
            coords: [752, 882],
            name: "Bondade de Pétrio",
            region: "coralia",
            type: "vila",
            desc: "Pequena vila recém formada graças à bondade de Pétrio.",
            link: false
        },
        {
            coords: [875, 852],
            name: "Queda",
            region: "coralia",
            type: "vila",
            desc: "Uma pequena cidade no meio da grande Falha.",
            link: false
        },
        {
            coords: [852, 1002],
            name: "Crista Inferior",
            region: "coralia",
            type: "vila",
            desc: "Pequena vila que quase sente o calor de Modega.",
            link: false
        },
        {
            coords: [873, 903],
            name: "A Falha",
            region: "coralia",
            type: "natureza",
            desc: "Um grande rasgo que ninguém sabe como surgiu na região, é um lugar muito perigoso para quem não sabe o caminho por lá.",
            link: false
        },
        {
            coords: [920, 1001],
            name: "Crista",
            region: "coralia",
            type: "vila",
            desc: "Uma vila na borda da Falha.",
            link: false
        },
        {
            coords: [948, 1106],
            name: "Blava",
            region: "coralia",
            type: "vila",
            desc: "Uma estranha vila próxima à Modega.",
            link: false
        },
        {
            coords: [1047, 1016],
            name: "Vila Carambola",
            region: "coralia",
            type: "vila",
            desc: "Uma vila ao lado do Lago Roxo com costumes esquisitos.",
            link: false
        },
        {
            coords: [1050, 888],
            name: "Ponto Pétrio",
            region: "coralia",
            type: "porto",
            desc: "Um porto pequeno demais para se chamar de porto porém dévido ao nome é tratado com respeito.",
            link: false
        },
        {
            coords: [984, 643],
            name: "Tempesta",
            region: "coralia",
            type: "cidade",
            desc: "Um cidade importante que se tornou estranhamente fechada nas últimas décadas.",
            link: false
        },
        {
            coords: [924, 770],
            name: "Muro Pétrio",
            region: "coralia",
            type: "cidade",
            desc: "Uma das cidades mais antigas de Corália, ela foi criada por Pétrio para ser uma proteção para a capital.",
            link: false
        },
        {
            coords: [927, 919],
            name: "Lécria",
            region: "coralia",
            type: "cidade",
            desc: "A terceira cidade do Colar de Ferro e um forte ponto de trocas e mineração.",
            link: false
        },
        {
            coords: [964, 849],
            name: "Pétrio",
            region: "coralia",
            type: "cidade",
            desc: "Capital de Corália que é nomeada após seu criador cuja família até hoje mantém o controle.",
            link: false
        },
        {
            coords: [914, 844],
            name: "Colar de Ferro",
            region: "coralia",
            type: "ponto",
            desc: "O Colar de Ferro que liga todas as principais cidades de Corália.",
            link: false
        },
        {
            coords: [816, 1020],
            name: "Crisálida",
            region: "modega",
            type: "vila",
            desc: "Uma pequena vila que quase sente o frio de Corália.",
            link: false
        },
        {
            coords: [720, 983],
            name: "Nadja",
            region: "modega",
            type: "cidade",
            desc: "Uma cidade que está muito mais próxima de Piéco do que de Modega, conhecida por acolher diversas raças e refugiados.",
            link: false
        },
        {
            coords: [713, 1069],
            name: "Soréia",
            region: "modega",
            type: "vila",
            desc: "Uma vila que já viu tempos melhores.",
            link: false
        },
        {
            coords: [809, 1078],
            name: "Bariel",
            region: "modega",
            type: "cidade",
            desc: "Bariel fica do outro lado da ponte e em constante briga com os vizinho de Carel, por coisas do passado quem alguns mal se lembram.",
            link: false
        },
        {
            coords: [858, 1108],
            name: "Três Rios",
            region: "modega",
            type: "cidade",
            desc: "Uma cidade pequena e acolhedora que vive em volta de três rios.",
            link: false
        },
        {
            coords: [806, 1126],
            name: "Carel",
            region: "modega",
            type: "cidade",
            desc: "Uma cidade que fica do lado da principal ponte que liga as duas partes de Modega.",
            link: false
        },
        {
            coords: [692, 1107],
            name: "Passagem de Elken",
            region: "modega",
            type: "vila",
            desc: "Uma pequena vila localizada na passagem do rio Elken.",
            link: false
        },
        {
            coords: [815, 1203],
            name: "Ventre de Modega",
            region: "modega",
            type: "vila",
            desc: "Uma pequena cidade que já foi muito importante para Modega, alguns dizem que ela foi a primeira cidade de Modega.",
            link: false
        },
        {
            coords: [919, 1190],
            name: "Crescendo",
            region: "modega",
            type: "vila",
            desc: "Uma vila nova e próspera.",
            link: false
        },
        {
            coords: [905, 1239],
            name: "Modesto",
            region: "modega",
            type: "vila",
            desc: "Uma vila na costa norte de Modega.",
            link: false
        },
        {
            coords: [902, 1326],
            name: "Moreto",
            region: "modega",
            type: "cidade",
            desc: "Capital de Modega, a cidade é dividida em três picos.",
            link: true
        },
        {
            coords: [868, 1388],
            name: "Horizonte",
            region: "modega",
            type: "vila",
            desc: "Uma pequena vila com habitos incomuns para região.",
            link: true
        },
        {
            coords: [842, 1433],
            name: "Guava",
            region: "modega",
            type: "vila",
            desc: "Uma pequena vila nos penhascos de Modega.",
            link: false
        },
        {
            coords: [808, 1471],
            name: "Mariel",
            region: "Costa da Tormenta",
            type: "cidade",
            desc: "Uma cidade grande em um dos foz do rio Elken.",
            link: false
        },
        {
            coords: [765, 1488],
            name: "Ressaca",
            region: "Costa da Tormenta",
            type: "vila",
            desc: "Pequena vila próxima a costa nordeste.",
            link: false
        },
        {
            coords: [747, 1541],
            name: "Porto das Lâminas",
            region: "Costa da Tormenta",
            type: "porto",
            desc: "Local da primeira revolta pirata da Costa da Tormenta, é um lugar perigoso porém necessário para quem deseja as armas mais poderosas.",
            link: false
        },
        {
            coords: [655, 1433],
            name: "Orae",
            region: "Costa da Tormenta",
            type: "cidade",
            desc: "Uma cidade ao lado do rio Elken, apesar de escondida e envolta no pantâno a cidade prospera como se fosse uma capital.",
            link: false
        },
        {
            coords: [601, 1544],
            name: "Porto Dinael",
            region: "Costa da Tormenta",
            type: "porto",
            desc: "Outro grande porto de Modega, um dos primeiros a serem construídos.",
            link: false
        },
        {
            coords: [544, 1411],
            name: "Raposa do Norte",
            region: "Costa da Tormenta",
            type: "vila",
            desc: "Confortavelmente localizada no meio do delta de Modega. Mas ao norte, claro.",
            link: false
        },
        {
            coords: [515, 1394],
            name: "Raposa do Sul",
            region: "Costa da Tormenta",
            type: "vila",
            desc: "Confortavelmente localizada no meio do delta de Modega.",
            link: false
        },
        {
            coords: [548, 1350],
            name: "Amaeae",
            region: "Costa da Tormenta",
            type: "vila",
            desc: "Uma vila escondida no interior de Modega.",
            link: false
        },
        {
            coords: [423, 1300],
            name: "Saria",
            region: "Costa da Tormenta",
            type: "cidade",
            desc: "Uma rica cidade muito buscada por aventureiros devido ao alto valor de pagamento para missões perigosas.",
            link: false
        },
        {
            coords: [395, 1375],
            name: "Âncora",
            region: "Costa da Tormenta",
            type: "porto",
            desc: "Um porto que fica em uma pequena península cujo o istmo costuma sumir por meses a fio.",
            link: false
        },
        {
            coords: [555, 1645],
            name: "Chifre",
            region: "Costa da Tormenta",
            type: "porto",
            desc: "Um dos portos da Ilha das Almas.",
            link: false
        },
        {
            coords: [358, 1661],
            name: "Porto Tubarão",
            region: "Costa da Tormenta",
            type: "porto",
            desc: "Um dos portos da Ilha das Almas.",
            link: false
        },
        {
            coords: [369, 1556],
            name: "Corrente",
            region: "Costa da Tormenta",
            type: "porto",
            desc: "Um dos portos da Ilha das Almas.",
            link: false
        },
        {
            coords: [771, 1235],
            name: "Ponta Real",
            region: "modega",
            type: "cidade",
            desc: "Uma cidade conhecida por receber os mais ricos de Modega para diversos fins.",
            link: false
        },
        {
            coords: [699, 1275],
            name: "Rio Elken",
            region: "modega",
            type: "agua",
            desc: "Um grande rio que corta Modega por inteira, é conhecido por ser extremamente perigoso para navegação.",
            link: false
        },
        {
            coords: [825, 1317],
            name: "A Torre",
            region: "modega",
            type: "ruína",
            desc: "Uma grande torre que surgiu há algumas decádas, ninguém sabe de onde veio, seu interior é tão vasto quanto uma cidade e grupos de aventureiros se arriscam para trazer tesouros de lá, portanto logo se formou uma comunidade em volta.",
            link: false
        },
        {
            coords: [606, 1323],
            name: "Os Pantânos",
            region: "Costa da Tormenta",
            type: "natureza",
            desc: "Na parte de Modega que é conhecida como Costa da Tormenta possui grandes pantânos que cobrem a região.",
            link: false
        },
        {
            coords: [938, 1478],
            name: "Ilha da Viúva",
            region: "modega",
            type: "natureza",
            desc: "Uma pequena ilha ao norte de Modega.",
            link: false
        },
        {
            coords: [276, 1805],
            name: "Arquipelago Etéreo",
            region: "água",
            type: "agua",
            desc: "Um conjunto de ilhas que estavam sendo muito estudadas antes do inicio da guerra.",
            link: false
        },
        {
            coords: [380, 1466],
            name: "Mar da Tormenta",
            region: "água",
            type: "agua",
            desc: "O mar que dá o nome à essa parte da região. Ele é implacável, cheio de perigos e monstros, durante os meses de verão apenas os mais hábeis piratas conseguem navegar por aqui.",
            link: false
        },
        {
            coords: [801, 380],
            name: "Mar Novo",
            region: "água",
            type: "agua",
            desc: "O mar que segue após o Pioneiro.",
            link: false
        },
        {
            coords: [523, 229],
            name: "Mar Negro",
            region: "água",
            type: "agua",
            desc: "Um mar calmo que quase parece uma lagoa, porém esconde segredos e cidades em seu interior.",
            link: false
        },
        {
            coords: [159, 74],
            name: "Mar Profundo",
            region: "água",
            type: "agua",
            desc: "Um mar que ainda não foi explorado.",
            link: false
        },
        {
            coords: [139, 235],
            name: "Penta",
            region: "montes",
            type: "vila",
            desc: "Uma pequena vila que faz parte das poucas áreas povoadas dos Montes Tempestuosos.",
            link: false
        },
        {
            coords: [215, 235],
            name: "Riol",
            region: "montes",
            type: "vila",
            desc: "Uma pequena vila que faz parte das poucas áreas povoadas dos Montes Tempestuosos.",
            link: false
        },
        {
            coords: [164, 181],
            name: "Porto Seco",
            region: "montes",
            type: "porto",
            desc: "Um pequeno porto que faz parte das poucas áreas povoadas dos Montes Tempestuosos.",
            link: false
        },
        {
            coords: [525, 294],
            name: "Onda Leve",
            region: "tariniel",
            type: "vila",
            desc: "Uma vila quase inabitada assim como muitas outras de Tariniel.",
            link: false
        },
        {
            coords: [559, 377],
            name: "Gemália do Norte",
            region: "tariniel",
            type: "vila",
            desc: "Uma vila que há muito tempo foi fundada por antigos moradores de Gemália em Âmago.",
            link: false
        },
        {
            coords: [596, 372],
            name: "Guinéia",
            region: "tariniel",
            type: "vila",
            desc: "Uma vila que foi formada por piratas aposentados.",
            link: false
        },
        {
            coords: [636, 373],
            name: "Nova Amoste",
            region: "tariniel",
            type: "porto",
            desc: "A nova capital de Tariniel, recém formada por Sereianos que se auto consideram os novos donos de Tariniel. Após a construção de Nova Amoste, outras cidades antigas foram reerguidas pelos Sereianos.",
            link: false
        },
        {
            coords: [588, 252],
            name: "Amost",
            region: "tariniel",
            type: "cidade",
            desc: "Uma antiga cidade reerguida pelos Sereianos.",
            link: false
        },
        {
            coords: [666, 217],
            name: "Odost",
            region: "tariniel",
            type: "cidade",
            desc: "Uma antiga cidade reerguida pelos Sereianos.",
            link: false
        },
        {
            coords: [666, 666],
            name: "Montanha do Inferno",
            region: "luna",
            type: "masmorra",
            desc: "Uma masmorra localizada na Montanha, dizem que o calor de lá é insuportável.",
            link: false
        },
        {
            coords: [636, 96],
            name: "Sost",
            region: "tariniel",
            type: "cidade",
            desc: "A terceira e mais recente cidade reeguida pelos Sereianos, em tempos antigos era o ponto focal do exército de Myrtariniel na guerra de separação.",
            link: false
        },
        {
            coords: [675, 349],
            name: "Eixo do Mar",
            region: "tariniel",
            type: "vila",
            desc: "Uma vila de trabalhadores marinhos e rurais.",
            link: false
        },
        {
            coords: [698, 311],
            name: "Ismar",
            region: "tariniel",
            type: "vila",
            desc: "Uma vila de estrangeiros que veio à Tariniel em busca de algo melhor.",
            link: false
        },
        {
            coords: [739, 189],
            name: "Loste",
            region: "tariniel",
            type: "vila",
            desc: "Uma pequena cidade que já foi grande antes da guerra, agora em ruínas.",
            link: false
        },
        {
            coords: [797, 84],
            name: "Atost",
            region: "tariniel",
            type: "vila",
            desc: "Uma vila no alto de um pequeno plateu.",
            link: false
        },
        {
            coords: [728, 291],
            name: "Porto Câmbio",
            region: "tariniel",
            type: "porto",
            desc: "Um pequeno e escondido porto.",
            link: false
        },
        {
            coords: [969, 333],
            name: "Silveria",
            region: "tariniel",
            type: "ruína",
            desc: "Um povoado que servia de base de uma antiga ordem de paladinos chamada de Lareira Invernal, hoje o povoado e a ordem são apenas cinzas.",
            link: false
        },
        {
            coords: [504, 365],
            name: "Forte Altivo",
            region: "myr",
            type: "masmorra",
            desc: "...",
            link: false
        },
        {
            coords: [451, 431],
            name: "Samyr",
            region: "myr",
            type: "porto",
            desc: "...",
            link: false
        },
        {
            coords: [372, 414],
            name: "Manhã de Vesper",
            region: "myr",
            type: "vila",
            desc: "...",
            link: false
        },
        {
            coords: [321, 356],
            name: "Coeron",
            region: "myr",
            type: "cidade",
            desc: "...",
            link: false
        },
        {
            coords: [323, 424],
            name: "Olyra",
            region: "myr",
            type: "vila",
            desc: "...",
            link: false
        },
        {
            coords: [261, 440],
            name: "Nicodranas",
            region: "myr",
            type: "porto",
            desc: "...",
            link: true
        },
        {
            coords: [197, 480],
            name: "Myr",
            region: "myr",
            type: "cidade",
            desc: "...",
            link: true
        },
        {
            coords: [272, 550],
            name: "Rediriel",
            region: "myr",
            type: "cidade",
            desc: "...",
            link: false
        },
        {
            coords: [249, 501],
            name: "Ulyr",
            region: "myr",
            type: "cidade",
            desc: "...",
            link: false
        },
        {
            coords: [155, 450],
            name: "Mabel",
            region: "myr",
            type: "cidade",
            desc: "...",
            link: true
        },
        {
            coords: [155, 493],
            name: "Yrina",
            region: "myr",
            type: "cidade",
            desc: "...",
            link: false
        },
        {
            coords: [98, 432],
            name: "Ilex",
            region: "myr",
            type: "vila",
            desc: "...",
            link: false
        },
        {
            coords: [100, 518],
            name: "Amyr",
            region: "myr",
            type: "porto",
            desc: "...",
            link: false
        },
        {
            coords: [103, 589],
            name: "Assombro",
            region: "myr",
            type: "vila",
            desc: "...",
            link: false
        },
        {
            coords: [162, 555],
            name: "Passo do Rio",
            region: "myr",
            type: "vila",
            desc: "...",
            link: false
        }


    ];

    // =============================================
    // REGION COLOURS
    // Matches your existing regionColors in locations.js
    // =============================================
    const regionColors = {
        'âmago':    '#00d659',
        'coralia':  '#aec9dd',
        'luna':     '#9b4fc2',
        'modega':   '#ed8936',
        'montes':   '#93c7a9',
        'myr':      '#c2456e',
        'piéco':    '#d2d600',
        'tariniel': '#2a86b1',
        'água':     '#04aaf7',
        'rokai':    '#8f1500',
        'Costa da Tormenta': '#01b487',
    };

    // =============================================
    // TYPE ICONS (Font Awesome class names)
    // =============================================
    const typeIcons = {
        cidade:       'fa-city',
        vila:       'fa-home',
        masmorra:    'fa-dungeon',
        natureza: 'fa-tree',
        ruína:       'fa-monument',
        porto:     'fa-anchor',
        agua:       'fa-water',
        volcano:     'fa-volcano',
    };

    // =============================================
    // DEBUG MODE
    // Set to true to see pixel coordinates as you hover the map.
    // Useful for placing new markers accurately.
    // Set back to false when done.
    // =============================================
    const debugMode = true;

    // =============================================
    // INITIALISE LEAFLET
    // EXPLANATION: We use CRS.Simple because this is a flat image,
    // not a real-world geographic projection. CRS.Simple treats
    // coordinates as plain pixels, which is what we want.
    // =============================================
    const map = L.map('pomaera-map', {
        crs: L.CRS.Simple,
        minZoom: -2,        // how far out the user can zoom
        maxZoom: 2,         // how far in the user can zoom
        zoomSnap: 0.5,      // zoom increments
        attributionControl: false  // hide the "Leaflet" watermark
    });

    // =============================================
    // OVERLAY THE IMAGE
    // EXPLANATION: L.imageOverlay takes the image URL and its
    // bounds in [y, x] pixel coordinates.
    // The bounds go from [0, 0] (top-left) to [MAP_H, MAP_W] (bottom-right).
    // =============================================
    const bounds = [[0, 0], [MAP_H, MAP_W]];
    L.imageOverlay('/images/PomaeraNovo.webp', bounds).addTo(map);

    // =============================================
    // SET INITIAL VIEW
    // EXPLANATION: fitBounds makes the map start zoomed to show
    // the entire image. The padding adds a small border around it.
    // =============================================
    map.fitBounds(bounds, { padding: [10, 10] });
    map.setMaxBounds(bounds.map((b, i) => i === 0
        ? [b[0] - 200, b[1] - 200]
        : [b[0] + 200, b[1] + 200]
    ));

    // =============================================
    // CREATE CUSTOM MARKER ICON
    // EXPLANATION: We create a custom divIcon instead of the default
    // blue Leaflet pin. This gives us full CSS control over the look,
    // matching your site's dark fantasy aesthetic.
    // The colour ring around the icon matches the region colour.
    // =============================================
    function createIcon(marker) {
        const color = regionColors[marker.region] || '#fbbf24';
        const icon = typeIcons[marker.type] || 'fa-map-marker-alt';

        return L.divIcon({
            className: 'pomaera-marker',
            html: `
                <div class="marker-pin" style="--marker-color: ${color}">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="marker-pulse" style="--marker-color: ${color}"></div>
            `,
            iconSize: [36, 36],
            iconAnchor: [18, 18],   // centre of the icon sits on the coordinate
            popupAnchor: [0, -22]   // popup appears above the icon
        });
    }

    // =============================================
    // ADD MARKERS TO MAP
    // =============================================
    markers.forEach(markerData => {
        const color = regionColors[markerData.region] || '#fbbf24';
        const icon = typeIcons[markerData.type] || 'fa-map-marker-alt';

        // "Ver mais" button only appears if link: true
        // EXPLANATION: Clicking it scrolls down to the locations grid
        // and could in future filter to that specific location.
        const linkBtn = markerData.link
          ? `<button class="popup-link" onclick="openLocationFromMap('${markerData.name}')">
            <i class="fas fa-arrow-down"></i> Ver nas Localidades
            </button>`
          : '';

        const popupContent = `
            <div class="pomaera-popup">
                <div class="popup-header" style="border-left: 3px solid ${color}">
                    <span class="popup-type" style="color: ${color}">
                        <i class="fas ${icon}"></i>
                        ${markerData.type.charAt(0).toUpperCase() + markerData.type.slice(1)}
                    </span>
                    <h3 class="popup-name">${markerData.name}</h3>
                    <p class="popup-region" style="color: ${color}">
                        <i class="fas fa-map-pin"></i>
                        ${markerData.region.charAt(0).toUpperCase() + markerData.region.slice(1)}
                    </p>
                </div>
                <p class="popup-desc">${markerData.desc}</p>
                ${linkBtn}
            </div>
        `;

        L.marker(markerData.coords, { icon: createIcon(markerData) })
            .addTo(map)
            .bindPopup(popupContent, {
                maxWidth: 260,
                className: 'pomaera-leaflet-popup'
            });
    });

    // =============================================
    // DEBUG MODE — shows pixel coordinates on hover
    // =============================================
    if (debugMode) {
        const debugDisplay = document.getElementById('map-debug-coords');
        if (debugDisplay) {
            map.on('mousemove', function (e) {
                const y = Math.round(e.latlng.lat);
                const x = Math.round(e.latlng.lng);
                debugDisplay.textContent = `coords: [${y}, ${x}]`;
            });
        }
    }

    console.log(`%c Pomaera Map Loaded! 🗺️`, `color: #fbbf24; font-size: 14px; font-weight: bold;`);
    console.log(`%c ${markers.length} marker(s) placed`, `color: #94a3b8; font-size: 13px;`);

    // Opens the location modal from a map marker click
    window.openLocationFromMap = function(locationName) {
    // Reveal all hidden cards first so we can find the right one
    document.querySelectorAll('.hidden-card').forEach(c => {
        c.classList.remove('hidden-card');
        c.classList.add('visible');
    });
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) showMoreBtn.innerHTML = `<i class="fas fa-chevron-up"></i> Ver menos`;

    // Find the matching location card by name
    const cards = document.querySelectorAll('.location-card');
    for (const card of cards) {
        const title = card.querySelector('.location-title');
        if (title && title.textContent.trim() === locationName) {
            // Close the map popup
            map.closePopup();
            // Scroll to the card
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Flash a gold highlight ring, then open the modal
            card.style.transition = 'box-shadow 0.3s';
            card.style.boxShadow = '0 0 0 3px var(--accent-gold)';
            setTimeout(() => {
                card.style.boxShadow = '';
                card.querySelector('.view-details').click();
            }, 600);
            return;
        }
    }
    };
});