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
let ratinho = {
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

function desenharRatinho() {
  context.fillStyle = "red";
  context.fillRect(ratinho.x, ratinho.y, box, box);
}

// Quando um evento acontece, detecte e chama uma função
document.addEventListener("keydown", atualizar);

function atualizar(event) {
  if (event.keyCode == 37 && direcao != "right") direcao = "left";
  if (event.keyCode == 38 && direcao != "down") direcao = "up";
  if (event.keyCode == 39 && direcao != "left") direcao = "right";
  if (event.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo() {
  if (cobrinha[0].x > 15 * box && direcao == "right") cobrinha[0].x = 0;
  if (cobrinha[0].x < 0 * box && direcao == "left") cobrinha[0].x = 16 * box;
  if (cobrinha[0].y > 15 * box && direcao == "down") cobrinha[0].y = 0;
  if (cobrinha[0].y < 0 * box && direcao == "up") cobrinha[0].y = 16 * box;

  criarBackground();
  criarCobrinha();
  desenharRatinho();

  let cobrinhaX = cobrinha[0].x;
  let cobrinhaY = cobrinha[0].y;

  if (direcao == "right") cobrinhaX += box;
  if (direcao == "left") cobrinhaX -= box;
  if (direcao == "up") cobrinhaY -= box;
  if (direcao == "down") cobrinhaY += box;

  if (cobrinhaX != ratinho.x || cobrinhaY != ratinho.y) {
    // pop() - Tira o último elemento da lista
    cobrinha.pop();
  } else {
    ratinho.x = Math.floor(Math.random() * 15 + 1) * box;
    ratinho.y = Math.floor(Math.random() * 15 + 1) * box;
  }

  let novaCabeca = {
    x: cobrinhaX,
    y: cobrinhaY,
  };

  // unshift - Adiciona uma nova cabeça como primeiro quadrinho na cobrinha
  cobrinha.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);
