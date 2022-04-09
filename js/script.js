let carta;

function comparador() { 
	return Math.random() - 0.5; 
}

let quantidade = prompt("Digite  com quantas cartas quer jogar: ");
while(quantidade % 2 == 1 | quantidade > 14 | quantidade < 4){
    quantidade = prompt("Digite somente números pares de 4 a 14: ");
}
let cartasParaBaixo = ["carta1","carta2","carta3","carta4"];
cartasParaBaixo.sort(comparador);
carta = document.querySelector(".cartas");
for(let i = 0; i < quantidade; i++){
    carta.innerHTML +=`
    <div class="carta">${cartasParaBaixo[i]}</div>`
}
//colocar as cartas em um array