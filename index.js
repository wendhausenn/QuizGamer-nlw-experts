const perguntas = [
    {
      pergunta: "Qual é o jogo mais vendido de todos os tempos?",
      respostas: [
        "Minecraft",
        "Grand Theft Auto V",
        "Tetris"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do personagem principal de The Legend of Zelda?",
      respostas: [
        "Ganondorf",
        "Link",
        "Zelda"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o gênero do jogo 'Super Mario Bros'?",
      respostas: [
        "Plataforma",
        "RPG",
        "FPS"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o desenvolvedor de 'The Witcher 3: Wild Hunt'?",
      respostas: [
        "CD Projekt Red",
        "Ubisoft",
        "Naughty Dog"
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano foi lançado o primeiro PlayStation?",
      respostas: [
        "1994",
        "2000",
        "1998"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do protagonista de 'Metal Gear Solid'?",
      respostas: [
        "Snake",
        "Big Boss",
        "Liquid Snake"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o console mais vendido de todos os tempos?",
      respostas: [
        "PlayStation 2",
        "Nintendo Switch",
        "Xbox 360"
      ],
      correta: 0
    },
    {
      pergunta: "Qual jogo popular envolve construção e sobrevivência?",
      respostas: [
        "Fortnite",
        "Overwatch",
        "League of Legends"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o criador do jogo 'Fallout'?",
      respostas: [
        "Todd Howard",
        "Hideo Kojima",
        "Shigeru Miyamoto"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do protagonista de 'Assassin's Creed: Odyssey'?",
      respostas: [
        "Ezio Auditore",
        "Alexios",
        "Connor Kenway"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o título do jogo que é uma simulação de vida?",
      respostas: [
        "The Sims",
        "SimCity",
        "Cities: Skylines"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do estúdio que desenvolveu 'Cyberpunk 2077'?",
      respostas: [
        "Rockstar Games",
        "Bioware",
        "CD Projekt Red"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do protagonista de 'Final Fantasy VII'?",
      respostas: [
        "Cloud Strife",
        "Tifa Lockhart",
        "Sephiroth"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do criador de 'Minecraft'?",
      respostas: [
        "Notch",
        "Markus Persson",
        "Gabe Newell"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o primeiro console lançado pela Sony?",
      respostas: [
        "PlayStation",
        "PlayStation 2",
        "PlayStation 3"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do jogo que popularizou o gênero Battle Royale?",
      respostas: [
        "PlayerUnknown's Battlegrounds",
        "Fortnite",
        "Apex Legends"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o personagem mascote da Nintendo?",
      respostas: [
        "Kirby",
        "Donkey Kong",
        "Mario"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o título do jogo que é uma paródia de RPG?",
      respostas: [
        "South Park: The Stick of Truth",
        "Undertale",
        "Disco Elysium"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do jogo que popularizou o gênero MOBA?",
      respostas: [
        "Dota 2",
        "League of Legends",
        "Heroes of the Storm"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do protagonista de 'The Last of Us'?",
      respostas: [
        "Joel",
        "Ellie",
        "Tommy"
      ],
      correta: 0
    }
  ];
  

   // Seleciona o elemento HTML com o id 'quiz'.
   const quiz = document.querySelector('#quiz')
   
   // Seleciona o elemento HTML <template>.
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
   // loop ou laço de repetção
   for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta
     
     // Para cada resposta no array de respostas do item, faça o seguinte:
     for(let resposta of item.respostas) {
       
       // Clona o elemento <dt> dentro do <dl>.
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
   
       // Define o texto da <span> dentro do <dt> com a resposta atual.
       dt.querySelector('span').textContent = resposta 
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
        
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       }
       
     
       // Adiciona o novo elemento <dt> ao <dl> do quizItem.
       quizItem.querySelector('dl').appendChild(dt)
   
   
     }
   
     // Remove o primeiro elemento <dt> dentro do <dl>.
     quizItem.querySelector('dl dt').remove()
   
     // coloca a pergunta na tela
     quiz.appendChild(quizItem)
   }
