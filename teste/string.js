//concatenar

/*console.log('Hello' + ' ' + "World")

console.log('Hello' + "World")

myName = "Ruan";
console.log("Hello" + ' ' + myName)

myName = "Ruan";
console.log(`Hello ${myName}`)*/

//------------------------------

/*const x = 0
y = "morango"
console.log(x, "\n", y)*/

//_______________________________

const input = require("readline-sync")

console.log("Olá! Seja Bem vind@")
const mes = input.question("Digite o mes")

if (mes === "fevereiro") {
    console.log("Tem carnaval")
} else if (mes === "junho") {
    console.log("São João")
} else if (mes === "Outubro") {
    console.log("Dia das crianças")
} else if (mes === "Dezembro") {
    console.log("Natal")
} else {
    console.log(`${mes} não é um mês festivo.`)
}