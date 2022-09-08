//Exercicio 3

let nome = prompt("Informe um nome... ");
/*if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}*/

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, "+nome);


let idade = Number(prompt("Informe a idade"));
/*if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}*/
idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista");