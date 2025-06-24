let prompt = require('prompt-sync')();
let repetir = 'r';

while (repetir === 'r') {
    let pares = 0;
    let impares = 0;
    let contador = 1;

    while (contador <= 10) {
        let numero = parseInt(prompt('Digite o número ' + contador + ': '));
        if (numero % 2 === 0) {
            pares = pares + 1;
        } else {
            impares = impares + 1;
        }
        contador = contador + 1;
    }
    console.log('\nVocê digitou ' + pares + ' números pares.');
    console.log('Você digitou ' + impares + ' números ímpares.\n');

    repetir = prompt('Quer fazer de novo? (s para sim / n para não): ');
}

console.log('Fim do programa.');
