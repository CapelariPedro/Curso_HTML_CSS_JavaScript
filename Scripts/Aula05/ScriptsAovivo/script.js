const PI = 3.14159265359;
let nome = "Maria";
let idade = 25;
let aberto = false;


let personagens = {
    "nome": "Mario",
    "ano_de_lancamento": 1990,
};

console.log(PI);
console.log(nome);
console.log(idade);
console.log(aberto);
console.log(personagens);

console.log("----------------------------------------------------------");

let x = 10;
let y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x**y);

console.log("----------------------------------------------------------");

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 == "5");
console.log(5 != 3);
console.log(5 === 5);

console.log("----------------------------------------------------------");

let user = "admin";
let password = "admin";

if (user == "admin" && password == "admin"){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado");
}

console.log("----------------------------------------------------------");

for (let i = 0; i < 6; i++){
    console.log(i);
}

console.log("----------------------------------------------------------");

let contador = 0;

while (contador < 6){
    console.log(contador);
    contador++;
}

console.log("----------------------------------------------------------");

const frutas = ["maçã", "banana", "uva", "laranja", "manga"];

frutas.forEach(fruta => console.log(fruta));

console.log("----------------------------------------------------------");

console.log(frutas[4]);
console.log(frutas[3]);
console.log(frutas[2]);
console.log(frutas[1]);
console.log(frutas[0]);

console.log("----------------------------------------------------------");

