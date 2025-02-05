const titulo = "Aula 05 - Funções";

function InformaTitulo(titulo){
    return "O título da página é:" + titulo;
}

console.log(InformaTitulo(titulo));

console.log("----------------------------------------------------------");

let nota1 = 7;
let nota2 = 7.5;
let nota3 = 8.5;

let nota4 = 8;

function media(a, b, c){
    return (a + b + c)/3;
}


if (media(nota1, nota2, nota4) > 7){
    console.log("Aprovado"+ media(nota1, nota2, nota4));
}else{
    console.log("Reprovado"+ media(nota1, nota2, nota4));
}

console.log("-----------------------------------")

let contador = 0;
let limitador = 13;
let contador2 = 3;
let limitador2 = 5;

function SomaSq(x, y){
    let soma = 0;
    while(x < y){
        soma = soma + x;
        x = x + 1;
    }
    return soma;
}

console.log(SomaSq(contador, limitador))
console.log(SomaSq(contador2, limitador2))