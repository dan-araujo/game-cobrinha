// Cria o elemento que irá rodar o jogo
let canvas = document.getElementById("cobrinha");
let contexto = canvas.getContext("2d");
let box = 32;
/* Cria a cobrinha como lista, já que ela vai ter uma série de coordenadas 
    que quando pintadas, criam os quadradinhos */
let cobrinha = [];
cobrinha[0] = {
    x: 8 * box,
    y: 8 * box
}
let diracao = "right"
let rato = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}