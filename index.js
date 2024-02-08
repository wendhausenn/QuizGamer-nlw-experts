const perguntas = [
    {
        pergunta: "Qual jogo popular foi desenvolvido pela empresa Mojang?",
        respostas: [
            "Minecraft",
            "Fortnite",
            "League of Legends"
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes jogos é um RPG de ação desenvolvido pela CD Projekt Red?",
        respostas: [
            "The Witcher 3: Wild Hunt",
            "Overwatch",
            "Grand Theft Auto V"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do mascote da franquia de jogos da Nintendo?",
        respostas: [
            "Sonic",
            "Pikachu",
            "Mario"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes jogos é conhecido por seu modo Battle Royale?",
        respostas: [
            "Counter-Strike: Global Offensive",
            "Call of Duty: Modern Warfare",
            "PlayerUnknown's Battlegrounds (PUBG)"
        ],
        correta: 2
    },
    {
        pergunta: "Qual jogo popular tem um mundo aberto e foi desenvolvido pela Rockstar Games?",
        respostas: [
            "Red Dead Redemption 2",
            "FIFA 22",
            "Super Mario Odyssey"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o gênero do jogo 'The Legend of Zelda: Breath of the Wild'?",
        respostas: [
            "Plataforma",
            "Aventura de ação",
            "Simulação"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do protagonista da série de jogos 'Assassin's Creed'?",
        respostas: [
            "Ezio Auditore",
            "Nathan Drake",
            "Geralt of Rivia"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do jogo de batalha de cartas da Blizzard Entertainment?",
        respostas: [
            "Hearthstone",
            "Magic: The Gathering",
            "Yu-Gi-Oh!"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o jogo de estratégia em tempo real (RTS) desenvolvido pela Blizzard Entertainment?",
        respostas: [
            "StarCraft II",
            "Civilization VI",
            "Age of Empires II"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do mascote da Sega?",
        respostas: [
            "Donkey Kong",
            "Sonic",
            "Crash Bandicoot"
        ],
        correta: 1
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
