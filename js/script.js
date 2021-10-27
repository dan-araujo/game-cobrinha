// Cria o elemento que irá rodar o jogo
let canvas = document.getElementById("cobrinha");
let contexto = canvas.getContext("2d");
let box = 32;
/* Cria a cobrinha como lista, já que ela vai ter uma série de coordenadas 
    que quando pintadas, criam os quadradinhos */
let cobrinha = [];
cobrinha[0] = {
  x: 8 * box,
  y: 8 * box,
};
let diracao = "right";
let rato = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

function criarBackground() {
  contexto.fillStyle = "lightgreen";
  // Desenha o retângulo usando x e y e a largura e a altura setadas abaixo
  contexto.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for (let i = 0; i < cobrinha.length; i++) {
    contexto.fillStyle = "green";
    contexto.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
  }
}
