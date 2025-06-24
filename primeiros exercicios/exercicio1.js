let prompt = require('prompt-sync')();
let numero = 1;
while (numero !== 0) {
    numero = parseInt(prompt('Digite um número de 1 a 20 (ou 0 para sair): '));
    if (numero === 0) {
        console.log('Fim do programa.');
    } else if (numero >= 1 && numero <= 20) {
        console.log('\nTabuada do ' + numero + ':');
        for (let i = 1; i <= 10; i++) {
            console.log(numero + ' x ' + i + ' = ' + (numero * i));
        }
    } else {
        console.log('Número fora do intervalo! Tente de novo.');
    }
}

