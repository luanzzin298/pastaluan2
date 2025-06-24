let prompt = require('prompt-sync')();
let opcao;

do {
    console.log('\nMenu de Operações:');
    console.log('1 - Somar dois números');
    console.log('2 - Subtrair dois números');
    console.log('3 - Multiplicar dois números');
    console.log('4 - Dividir dois números');
    console.log('5 - Sair');
    opcao = parseInt(prompt('Escolha uma opção: '));
    
    let num1, num2;
    switch (opcao) {
        case 1:
            num1 = parseFloat(prompt('Digite o primeiro número: '));
            num2 = parseFloat(prompt('Digite o segundo número: '));
            console.log('Resultado: ' + (num1 + num2));
            break;
        case 2:
            num1 = parseFloat(prompt('Digite o primeiro número: '));
            num2 = parseFloat(prompt('Digite o segundo número: '));
            console.log('Resultado: ' + (num1 - num2));
            break;
        case 3:
            num1 = parseFloat(prompt('Digite o primeiro número: '));
            num2 = parseFloat(prompt('Digite o segundo número: '));
            console.log('Resultado: ' + (num1 * num2));
            break;
        case 4:
            num1 = parseFloat(prompt('Digite o primeiro número: '));
            num2 = parseFloat(prompt('Digite o segundo número: '));
            if (num2 != 0) {
                console.log('Resultado: ' + (num1 / num2));
            } else {
                console.log('Não pode dividir por zero!');
            }
            break;
        case 5:
            console.log('Saindo do programa...');
            break;

        default:
            console.log('Opção inválida! Tente de novo.');
    }
} while (opcao != 5);
