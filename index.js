const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 5;",
        "let myVar = 5;",
        "const myVar = 5;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos converte uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "Number()"
      ],
      correta: 0
    },
    {
      pergunta: "Como você verifica se duas variáveis têm o mesmo valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos remove o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função JavaScript é usada para imprimir algo no console?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para denotar um comentário em uma linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "--"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "unshift()",
        "concat()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "&",
        "||"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de fazer um loop através dos elementos de um array em JavaScript?",
      respostas: [
        "for (let i = 0; i < array.length; i++)",
        "for (let i = 0; i <= array.length; i++)",
        "for (let i = 1; i <= array.length; i++)"
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