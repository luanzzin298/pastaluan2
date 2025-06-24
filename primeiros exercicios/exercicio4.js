let prompt = require('prompt-sync')();

let senhaCorreta = 'Senai123';
let senha;
let tentativas = 0;
while (tentativas < 3) {
    senha = prompt('Digite a senha: ');

    if (senha === senhaCorreta) {
        console.log('Bem-vindo!');
        break;
    } else {
        console.log('Senha incorreta. Tente novamente.');
        tentativas = tentativas + 1;
    }
}
if (tentativas === 3 && senha !== senhaCorreta) {
    console.log('Acesso bloqueado.');
}
