let prompt = require('prompt-sync')();
while (true) {
  let escolha = prompt("Par ou ímpar?").toLowerCase();
  let jogador = Number(prompt("Número de 1 a 5:"));
  let pc = Math.floor(Math.random() * 5) + 1;
  let soma = jogador + pc;
  let resultado = (soma % 2 == 0) ? "par" : "ímpar";

  console.log("Você: " + jogador + ", PC: " + pc + " | Soma: " + soma + " (" + resultado + ")");

  if (escolha == resultado) {
    console.log("Ganhou!\n");
  } else {
    console.log("Perdeu! Fim.");
    break;
  }
}

