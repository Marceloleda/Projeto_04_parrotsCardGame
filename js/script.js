//embaralha as cartas
function comparador() { 
    return Math.random() - 0.5; 
}
// let cartasParaBaixo = ["carta4"];

// cartasParaBaixo.sort(comparador);

let carta;
let numeroDeCartas;
let contador =[];
let imgCartasParaBaixo = ["./midia/front.png"];
let imagemParrots = [
    "./midia/bobrossparrot.gif",
    "./midia/explodyparrot.gif",
    "./midia/fiestaparrot.gif",
    "./midia/metalparrot.gif",
    "./midia/revertitparrot.gif",
    "./midia/tripletsparrot.gif",
    "./midia/unicornparrot.gif"];

numeroDeCartas = prompt("Digite  com quantas cartas quer jogar: ");
while(numeroDeCartas % 2 == 1 | numeroDeCartas > 14 | numeroDeCartas < 4){
    numeroDeCartas = prompt("Digite somente números pares de 4 a 14: ");
}
for(let i = 0; i < numeroDeCartas; i++){
    carta = document.querySelector(".cartas");
    carta.innerHTML +=`
    <div class="carta" onclick = "virarCarta(this)">
    <img src="${imgCartasParaBaixo[0]}"/>
    </div>`;

}
//colocar as cartas em um array(talvz)
function virarCarta(elementoCarta) {
    elementoCarta.style.transform = "rotateY(180deg)";
    let img = elementoCarta.querySelector('img');
    img.style.display = "none";
    adicionarParrot(elementoCarta);
}
// function desviraCarta(){
//     while(){
//         const imgParrots = document.querySelector(".carta img");
//         imgParrots.innerHTML +=`
//         <img src="${imagemParrots[0]}"/>`;
//     }
// }
function adicionarParrot(elementoCarta){
    const addParrot = elementoCarta.querySelector("img");
    addParrot.innerHTML += `
    <img src="${imagemParrots[1]}">`;
}
