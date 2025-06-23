let prompt = require('prompt-sync')();

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let chute = 0;
let tentativas = 0;


console.log('Tente adivinhar o número entre 1 e 100!');

while (chute !== numeroSecreto) {
    chute = parseInt(prompt('Digite seu palpite: '));
    tentativas = tentativas + 1;

    if (chute < numeroSecreto) {
        console.log('O número secreto é maior!');
    } else if (chute > numeroSecreto) {
        console.log('O número secreto é menor!');
    } else {
        console.log('\nParabéns! Você acertou o número em ' + tentativas + ' tentativas!');
    }
}
