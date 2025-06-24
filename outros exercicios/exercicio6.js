let prompt = require('prompt-sync')();
let inicio = prompt("Inicial:");
let fim = prompt("Final:");

if (inicio < fim) {
  for (let i = Number(inicio); i <= Number(fim); i++) {
    console.log(i + (i % 2 == 0 ? " é par" : " é ímpar"));
  }
} else {
  console.log("Erro!");
}
