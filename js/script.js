// Cria o elemento que irá rodar o jogo
let canvas = document.getElementById("cobrinha");
let context = canvas.getContext("2d");
let box = 32;
/* Cria a cobrinha como lista, já que ela vai ter uma série de coordenadas 
    que quando pintadas, criam os quadradinhos */
let cobrinha = [];
cobrinha[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direcao = "right";
let rato = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

function criarBackground() {
  context.fillStyle = "lightgreen";
  // Desenha o retângulo usando x e y e a largura e a altura setadas abaixo
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for (let i = 0; i < cobrinha.length; i++) {
    context.fillStyle = "green";
    context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
  }
}

function atualizar(event) {
  if (event.keyCode == 37 && direcao != "right") direcao = "left";
  if (event.keyCode == 38 && direcao != "down") direcao = "up";
}

function iniciarJogo() {
  let cobrinhaX = cobrinha[0].x;
  let cobrinhaY = cobrinha[0].y;

  if (direcao == "right") cobrinhaX += box;
  if (direcao == "left") cobrinhaX -= box;
  if (direcao == "up") cobrinhaY -= box;
  if (direcao == "down") cobrinhaX += box;

  let novaCabeca = {
    x: cobrinhaX,
    y: cobrinhaY,
  };

  // unshift - Adiciona uma nova cabeça como primeiro quadrinho na cobrinha
  cobrinha.unshift(novaCabeca);

  criarBackground();
  criarCobrinha();
}

let jogo = setInterval(iniciarJogo, 100);
