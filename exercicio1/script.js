//# Exercício 1
const num = Number(prompt(`Informe um número qualquer...`)); //seu numero aqui
let div2 = num % 2;
let div3 = num % 3;

console.log(`1. Utilizando ifs aninhados: `)
if(div2 === 0){
    if(div3 === 0){
        console.log(`O número ${num} é divisível por 2 e por 3`)

    }
    else{
        console.log(`O número ${num} não é divisível por 3`)
    }
} else {
    console.log(`O número ${num} não é divisível por 2`)
}

console.log(`2. Utilizando um operador lógico para unir duas operações relacionais: `)

if(div2 === 0 && div3 === 0){ 
    console.log(`O número ${num} é divisível por 2 e por 3`)
} else {
    if (div2 === 0){
        console.log(`O número ${num} é divisível somente por  2 `)
    }
    if (div3 === 0){
        console.log(`O número ${num} é divisível somente por 3`)
    }
}
