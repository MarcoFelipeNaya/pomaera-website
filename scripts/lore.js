document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // LORE DATA
    // EXPLANATION: Each story is an object in this array.
    // To add a new story, just copy one object and fill in the fields.
    // Fields:
    /*
       id:
       title:
       category:"historia", "lenda", "cronica", "mito", "profecia"
       excerpt:
       fullText:
       author:
       readTime:
    */
    // =============================================
    const loreEntries = [
        {
            id: 1,
            title: "Joli & Loam",
            category: "historia",
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

        ,{
            id: 2,
            title: "Hamil, o Pequenino Destemido",
            category: "historia",
            excerpt: "A formação de Âmago é antiga e assim, muitas gerações modernas não têm nem ideia de quem foram os primeiros povos a chegar na região e a dominar a magia. Mas todos sabem quem foi Hamil.",
            fullText: [
                "A formação de Âmago é antiga e assim, muitas gerações modernas não têm nem ideia de quem foram os primeiros povos a chegar na região e a dominar a magia. Mas todos sabem quem foi Hamil. Em quaisquer lendas da origem de Âmago, encontra-se a figura desde pequenino. Hamil foi um dos fundadores de Âmago e fundou a cidadela de Áltima em homenagem à sua mãe. Dizem que Hamil era um pequenino muito determinado, corajoso e desbravador, e em todas suas conquistas, lembrava das palavras de incentivo de sua mãe.",
                "Hamil tinha muita fé em si mesmo, e foi um dos pioneiros em levar a magia para vilas e assentamentos mais afastados da Grande Árvore. Ainda hoje é comum alguns pequeninos dizerem que seu tataravô era sobrinho-neto de Hamil, ou qualquer outro parentesco que o conecte com a família desta lenda.",
                "Muitos feitos grandiosos são atribuídos a Hamil: fundação de Áltima, as explorações dos bosques do norte, invenção do sistema de comunicação por fumaça, e a travessia do bosque central de Âmago. E é esta última que contamos aqui.",
                "Durante a época da colonização acelerada de Âmago, Hamil e um grupo de exploradores estavam em uma missão: atravessar o bosque central, (chamado bosque Escuro na época) para levar os cristais de mana para povoados do outro lado. Era um grupo de 15 aventureiros, de todas as raças, liderados por Hamil. Após muitos dias dentro do bosque, os suprimentos estavam se esgotando e os aventureiros correndo sérios riscos. Quando todos haviam perdido a esperança, Hamil, teve um estalo de inspiração. Olhou a clareira em que pararam para fazer acampamento, e viu as pedras e minerais cheios de musgo e os encarou como materiais de construção.",
                "'Estamos perdidos aqui por quê as copas das árvores não nos deixam ver o céu. E se fôssemos altos o suficiente para ver acima das árvores?' - disse Hamil, sorridente.",
                "'Mas não somos, Hamil. Somos pequenos, ainda mais você que é um Pequenino!'",
                "'Sou pequeno, mas minha criatividade não tem limites.' Ao dizer isso, Hamil, usou sua compreensão de magia de terra para criar o que parecia ser um pedestral de pedra musgosa de 3 metros de altura. Em uma olhada mais cuidadosa, os exploradores veriam que eram mais que um pedestal: era uma criatura de pedra que agora levava Hamil nos ombros e o permitia ver o céu estrelado por cima do tapete verdíssimo que era as copas das árvores do bosque escuro. Admirados com este feito inédito, os aventureiros seguiram o golem enorme de pedra e Hamil para fora do bosque em menos de 2 dias.",
                "Após esta travessia, encontaram o povoado que se localizava a beira de um lago e os habitantes ficaram embasbacados com o gigante de terra e os aventureiros que o dominavam. Hamil apresentou a magia para o povoado, que logo o tomou como uma lenda e um líder magnífico. Assim, nasceram as cidades de Hamil, e Hamília e se batizou o lago Hamil. Quanto ao golem? Parece que virou moda entre os proficientes do elemento terra.",
            ],
            author: "Lucas Queiroz",
            readTime: 4
        }

        ,{
            id: 3,
            title: "A gaivota",
            category: "lenda",
            excerpt: "Nas redondezas de Lândano, há uma pequena vila costeira que se chama Apoeia. É uma vila de pescadores, a quantidade de casas pode ser contadas nos dedos das mãos.",
            fullText: [
                "Nas redondezas de Lândano, há uma pequena vila costeira que se chama Apoeia. É uma vila de pescadores, a quantidade de casas pode ser contadas nos dedos das mãos. Suel era uma pequena genasi da terra que ali morava com seu pai, devia ter seus 7 anos quando ao olhar para o oceano viu surgindo do horizonte uma gaivota que trazia um pequeno embrulho em suas patas. Como se houvesse um dever cívico, pousou aos pés de Suel e ali deixou o pacote. A criança, sem hesitar, logo desembrulhou o objeto que revelara ser uma pequena garrafa de vidro com uma carta dentro.",
                "Apesar da pouca idade, e do quão isolada estava da civilização, sabia ler e escrever muito bem, fato que seu pai se orgulhava em dizer aos companheiros de pesca. Ávida para ler o conteúdo da carta, Suel logo quebrou a garrafa e postou-se na melhor pose de leitora, sentada de cócoras na beira do mar.",
                "A quem chegar esta carta. Estou muito longe daqui e sozinho. Preciso de companhia. Sou Jorge e gosto de lentilhas. Quem é você?",
                "A criança logo sorriu e replicou a carta com sua letra de mão garranchenta, escrevendo no verso do pedaço de papel mofado. Para sua surpresa, assim que acabou de escrever, a gaivota tomou de suas mãos a resposta e voou para além do horizonte. Suel não dormira, tamanha era sua ansiedade e animação pela aventura. No dia seguinte, ao chegar na praia, lá estava a gaivota portando uma nova carta.",
                "Os dias se seguiram assim, onde Suel e seu correspondente amigo Jorge sempre se mantinham em contato e conversaram. Assim foi por anos. Jorge estava lá para felicitar Suel pelos seus aniversários. Suel explicava a Jorge que a pesca se tornava cada vez mais difícil com o passar dos anos, segundo seu pai, e que comer lentilhas era o melhor a se fazer. Jorge consolou Suel quando seu pai faleceu. Suel confidenciou que entrara para o grupo de pescadores de seu pai para homenageá-lo mas acabou gostando do mar. Cada ano, a amizade de papel se estreitava, e na falta de seu pai, Jorge virara uma figura paterna presente através da gaivota que sempre trazia notícias do horizonte.",
                "Uma tarde muito serena foi marcada pela figura da gaivota que surgiu do horizonte trazendo sua carta diária e pousou sobre a areia suavemente. Nada de Suel aparecer. A lua já substituía o sol há horas quando a gaivota voltou ao horizonte. Isto se repetiu uma, duas, dezenas de vezes. Parecia que Suel não responderia à última carta de Jorge.",
                "Em uma destas tardes sem resposta, a gaivota pousa sobre a areia e logo se transforma em um tiferino alto e de meia-idade. Ele estrala as costas, olha em direção à vila de Apoeia. Logo espreguiça, tira de um dos seus bolsos um pote de lentilhas. E em meio a duas mastigadas percebe que isto de fazer amigos por cartas é um péssimo passatempo.",
                "E  não, não vou contar o que aconteceu com Suel."
            ],
            author: "Lucas Queiroz",
            readTime: 4
        }

        ,{
            id: 4,
            title: "As três Irmãs",
            category: "historia",
            excerpt: "Este é um conto conhecido em todo Âmago, desde o escaldar de Pieco até as geleiras em Luna. É uma história singela e mística.",
            fullText: [
                "Este é um conto conhecido em todo Âmago, desde o escaldar de Pieco até as geleiras em Luna. É uma história singela e mística.",
                "Não se sabe ao certo onde, mas o quando é preciso. Era o terceiro dia do agouro e o mês não estava fácil. Para a pequena vila, o começo do inverno estava sendo especialmente rigoroso. As nevascas começaram mais cedo neste ano específico, e os animais da vila, principalmente as ovelhas estavam sofrendo muito. A neve chegava a 2 metros de profundidade e algumas famílias estavam ficando isoladas na neve, sem comida e sem saída. As famílias sofreriam este ano.",
                "Assim que ao por do sol daquele dia terrível, a nevasca cessou bruscamente. E a vila recebeu a visita de três figuras etéreas, quase mágicas. Eram três figuras humanoides, mas pareciam flutuar no ar. E brilhavam. As figuras embasbacavam os aldeões. Eram três, e mesmo sem saber, seus nomes eram claros para todos: Aniel, Lauriel e Isbel.",
                "Aniel derreteu a neve, desatolou as carroças, desemperrou as portas, libertou as casas. Lauriel, juntou as ovelhas, resgatou as plantas, reuniu famílias. E Isbel clareou o céu, iluminou as tochas e aqueceu a vila.",
                "Neste momento tão único, o céu dispunha de luzes coloridas ressonantes com os brilhos das figuras irmãs e tão cedo como vieram, quando as duas luas cheias viraram uma só, em meio ao eclipse, elas desapareceram.",
                "Não se sabe se esta história é verdadeira. Mas o que sabemos é que por todo Âmago, não importa quão difícil esteja sua vida e sua situação, uma voz amiga sempre te consolará dizendo:",
                "Nada é tão imóvel que Aniel não mova. Nada é tão isolado que Lauriel não junte. Nada é tão escuro que Isbel não ilumine."
            ],
            author: "Lucas Queiroz",
            readTime: 2
        },
        {
            id: 5,
            title: "Campanha Teste",
            category: "campanhas",
            excerpt: "Esta é uma campanha teste para mostrar como as campanhas aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'campanhas' para mostrar como as campanhas serão categorizadas e filtradas.",
            fullText: [
                "Esta é uma campanha teste para mostrar como as campanhas aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'campanhas' para mostrar como as campanhas serão categorizadas e filtradas.",
            ],
            author: "Marco",
            readTime: 1
        },
        {
            id: 6,
            title: "Lenda Teste",
            category:"lenda",
            excerpt:"Esta é uma lenda teste para mostrar como as campanhas aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'lendas' para mostrar como as lendas serão categorizadas e filtradas.",
            fullText:"Esta é uma lenda teste para mostrar como as campanhas aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'lendas' para mostrar como as lendas serão categorizadas e filtradas.",
            author: "Marco",
            readTime: 1
        },
        {
            id: 7,
            title: "Crônica Teste",
            category:"cronica",
            excerpt:"Esta é uma crônica teste para mostrar como as crônicas aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'crônicas' para mostrar como as crônicas serão categorizadas e filtradas.",
            fullText:"Esta é uma crônica teste para mostrar como as crônicas aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'crônicas' para mostrar como as crônicas serão categorizadas e filtradas.",
            author: "Marco",
            readTime: 1
        },
        {
            id: 8,
            title: "Mundo Teste",
            category:"mundo",
            excerpt:"Esta é um mundo teste para mostrar como os mundos aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'mundo' para mostrar como as crônicas serão categorizadas e filtradas.",
            fullText:"Esta é uma mundo teste para mostrar como as mundo aparecerão na página de lore. Ela tem um título, um trecho e um texto completo, assim como as outras histórias. A diferença é que ela tem a categoria 'mundo' para mostrar como as crônicas serão categorizadas e filtradas.",
            author: "Marco",
            readTime: 1
        },
        {
            id: 9,
            title: "O Fim, o Recomeço eo Esquecimento",
            category:"lenda",
            excerpt:"Essas palavras são sinônimos dos antigos deuses Artesãos Sami, Ori e Erti.",
            fullText:[
                "Essas palavras são sinônimos dos antigos deuses Artesãos Sami, Ori e Erti.",
                "Em tempos passados, quando os deuses ainda caminhavam entre os mortais, esses três irmãos divinos assumiram a responsabilidade de erguer a mais grandiosa fortaleza em Inata.",
                "Esse local sagrado seria o palco onde a união dos povos de Pomaera seria discutida e fortalecida.",
                "Os deuses Artesãos eram trigêmeos, cada um com uma especialidade única. Sami, o mestre da forja, moldava metal e fogo em armas, ferramentas e artefatos de poder incomparável.",
                "Ori, o gênio da arquitetura, projetava estruturas grandiosas que desafiavam o tempo e revelavam a beleza divina. Erti, o mais jovem, era o mestre da construção e das confecções; ele erguia essas estruturas com precisão e habilidade, transformando os projetos de Ori em monumentos duradouros, utilizando as ferramentas criadas por Sami.",
                "Juntos, os três irmãos combinavam suas artes para criar verdadeiras maravilhas, deixando um legado que transcendeu o tempo. Apesar de sua união e poder, os deuses não estavam imunes aos erros. Erti, o mais jovem dos três, era conhecido por sua habilidade na construção, mas também por sua impaciência.",
                "Em uma ocasião fatídica, durante a criação da fortaleza, Erti estava ansioso para provar seu valor e superar as expectativas de seus irmãos mais velhos. Sami, o mestre da forja, estava trabalhando em uma poderosa arma destinada a proteger a fortaleza e avisou Erti que o processo de resfriamento do metal era delicado e perigoso, exigindo tempo e cuidado.",
                "No entanto, impaciente para ver a fortaleza concluída, Erti ignorou as advertências de Sami e decidiu acelerar o processo. Sem esperar o metal esfriar naturalmente, Erti começou a erguer a estrutura da forja.",
                "O calor e a instabilidade do metal ainda incandescente geraram uma explosão inesperada devido a uma falha no manuseio. Sami, tentando proteger seu irmão mais novo da catástrofe, foi atingido por fragmentos de metal em brasa.",
                "Apesar de sua divindade, a ferida foi fatal para Sami, levando assim ao seu fim. Em seu último suspiro, ele perdoou Erti, que caiu em profundo remorso. A morte de Sami abalou os irmãos sobreviventes e trouxe uma lição sobre a importância da paciência e do respeito ao processo criativo.",
                "Desde então, Erti carregou o peso de sua impaciência, e a fortaleza em Inata, que deveria ser um símbolo de união, tornou-se também um memorial para o sacrifício de Sami.",
                "Desolados pela perda do irmão, Ori e Erti seguiram caminhos distintos. Ori, agora o mais velho, mergulhou no luto, afundando-se em suas obrigações e buscando consolo na rotina, desejando que Erti fizesse o mesmo. No entanto, Erti, consumido pela culpa, mergulhou em uma depressão profunda, incapaz de seguir em frente. Preso pelo remorso, ele se viu paralisado, assombrado pela tragédia que causou.",
                "Sem saber mais o que fazer, Erti recorreu a Memento, a deusa que domina as lembranças. Desesperado, implorou para que ela removesse o que tanto o afligia, pedindo até mesmo para esquecer sua própria divindade.",
                "Inicialmente, Memento hesitou, reconhecendo a radicalidade do pedido. Ela tentou explicar as consequências desse ato, mas o jovem deus, em sua angústia, não queria ouvir. Movida pela compaixão, Memento aceitou as memórias de Erti em troca e apagou dele a lembrança de que um dia fora um ser divino.",
                "Desde então, Erti desapareceu dos olhos dos deuses, tornando-se apenas mais um mortal sem conhecimento de seu passado. Ele passou a viver como um ser comum nas terras de Pomaera, fadado ao esquecimento. Ori, agora o único sobrevivente entre os trigêmeos, foi tomado por uma fúria imensa e partiu em busca de Memento, determinado a recuperar o irmão que tanto amava. Ao encontrá-la, a deusa explicou que havia respeitado a decisão de Erti e que ele deveria fazer o mesmo. Enfurecido e inconformado, Ori atacou Memento, tentando roubar o relógio onde ela guardava as memórias que lhe eram confiadas.",
                "Durante a luta, Ori acabou danificando o relógio de Memento, e, em retaliação, ela danificou o triângulo que Ori carregava, símbolo da união dos irmãos. A deusa, furiosa com a ousadia, declarou que, agora, mesmo que quisesse, não poderia controlar as memórias, e que o dano era irreversível, não podendo ser desfeito. Ela disse a Ori que, diante do fim e do esquecimento, ele teria que aprender a recomeçar, por mais doloroso que fosse.",
                "Em um gesto final de desdém, Memento expulsou Ori de seu templo, afirmando que, mesmo que ele tentasse, sempre sentiria um vazio profundo, incapaz de recordar e unir os três domínios ao mesmo tempo. Desde então, o Templo dos Artesãos carrega uma maldição visível e simbólica. Quem o visita percebe que algo está sempre faltando: se o templo exibe uma estrutura impecável, a decoração é desleixada, se a decoração é primorosa, a estrutura revela fragilidade e instabilidade. Assim, o templo reflete a maldição da deusa, simbolizando a eternidade da insuficiência e da perda das memórias, um lembrete constante do fardo que ele jamais conseguirá superar.",
            ],
            author: "Lay",
            readTime: 6
        }
        
        
    ];

    const categoryConfig = {
        historia:  { label: 'História',  color: '#e07b39', icon: 'fa-scroll' },
        lenda:     { label: 'Lenda',     color: '#f0c040', icon: 'fa-star' },
        cronica:   { label: 'Crônica',   color: '#5b9bd5', icon: 'fa-feather-alt' },
        mundo:      { label: 'Mundo',      color: '#9b59b6', icon: 'fa-dragon' },
        campanhas:  { label: 'Campanhas',  color: '#2ecc71', icon: 'fa-book' }
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

    // Check if a filter was passed in the URL (e.g. ?filter=lenda)
    const urlParams = new URLSearchParams(window.location.search);
    const urlFilter = urlParams.get('filter');
        if (urlFilter) {
            // Find and click the matching filter button
            const matchingTag = document.querySelector(`.filter-tag[data-filter="${urlFilter}"]`);
            if (matchingTag) matchingTag.click();
    }

    console.log(`%c Lore Page Loaded! 📖`, `color: #fbbf24; font-size: 16px; font-weight: bold;`);
    console.log(`%c ${loreEntries.length} entries in the archives`, `color: #94a3b8; font-size: 14px;`);
});