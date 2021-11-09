const input = require("readline-sync");

console.log(" Olá! Seja bem vind@. ");
const idade = input.question("Qual sua idade?");

if (idade >=18 && idade <21) {
    console.log("Entrada autorizada, mas não pode consumir bebida alcoólica.");
} else if (idade >=21) {
    console.log("Entrada e consumo de bebida alcoólica autorizada.");
} else {
    console.log("Entrada não autorizada.");
}