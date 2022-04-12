//embaralha as cartas
function comparador() { 
    return Math.random() - 0.5; 
}

let carta;
let numeroDeCartas;
let Parrot=[];
let primeiraCarta;
let segundaCarta;
let jogadas = 0;
let cartasCertas = 0;
let timer = 0;
let idTimer;
let gifs =["./midia/bobrossparrot.gif",
"./midia/explodyparrot.gif",
"./midia/fiestaparrot.gif",
"./midia/metalparrot.gif",
"./midia/revertitparrot.gif",
"./midia/tripletsparrot.gif",
"./midia/unicornparrot.gif"];

function perguntaCartas(){ 
numeroDeCartas = parseInt(prompt("Digite  com quantas cartas quer jogar: "));
    while(isNaN(numeroDeCartas) | (numeroDeCartas % 2 == 1 | numeroDeCartas > 14 | numeroDeCartas < 4)){
        numeroDeCartas = prompt("Digite somente números pares de 4 a 14: ");
    }
}
perguntaCartas();
gerarBaralho();
renderizarCartas();

function gerarBaralho(){
    for(let i = 0; i < numeroDeCartas / 2; i++){
        const parrotes = gifs[i];
        Parrot.push(parrotes);
        Parrot.push(parrotes);
    }
    Parrot.sort(comparador);
}
function renderizarCartas(){
    carta = document.querySelector(".cartas");
    for(let i = 0; i < Parrot.length; i++){
        let template =`
        <div class="carta" onclick = "virarCarta(this)">
            <div class='front-face face'>
                <img src="./midia/front.png" />
            </div>
            <div class='back-face face'>
                <img src='${Parrot[i]}' >
            </div>
        </div>`;
        carta.innerHTML += template;
    }
}
//colocar as cartas em um array(talvz)
function virarCarta(elementoCarta) {
    if (primeiraCarta === undefined && jogadas === 0) {
        inicarTimer();
    }
    if (elementoCarta.classList.contains("virada") || segundaCarta !== undefined) {
        return;
    }
    jogadas++;
    elementoCarta.classList.add("virada");
    
    if (primeiraCarta === undefined) {
        primeiraCarta = elementoCarta;
    } else {
        segundaCarta = elementoCarta;
        if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
        cartasCertas += 2;
        verificarFimJogo();
        resetarCartas();
        } else {
        setTimeout(desvirarCartas, 1000);
        }
    }
}
function desvirarCartas() {
    primeiraCarta.classList.remove("virada");
    segundaCarta.classList.remove("virada");
    resetarCartas();
}
function resetarCartas() {
    primeiraCarta = undefined;
    segundaCarta = undefined;
}
  
function verificarFimJogo() {
    if (cartasCertas === numeroDeCartas) {
      clearInterval(idTimer);
      setTimeout(
        alert,
        1000,
        `Você venceu em ${jogadas} jogadas e em ${timer} segundos`
      );
  
      const resposta = prompt("Você quer jogar novamente?");
      if (resposta === "sim") {
        window.location.reload();
      }
    }
}   
function inicarTimer() {
    idTimer = setInterval(function () {
      timer++;
      document.querySelector(".relogio").innerHTML = timer;
    }, 1000);
}