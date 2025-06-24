let prompt = require('prompt-sync')();
let total = 0;
let valor;

do {
  valor = parseFloat(prompt('Digite o valor da compra (0 para sair): '));
  if (valor != 0) {
    total = total + valor;
  }
} while (valor != 0);

console.log('Total: R$ ' + total);

let forma = prompt('Forma de pagamento (dinheiro ou cartao): ');

switch (forma) {
  case 'dinheiro':
    let desconto = total * 0.1;
    total = total - desconto;
    console.log('Desconto de 10% aplicado.');
    console.log('Total com desconto: R$ ' + total);
    break;

  case 'cartao':
    console.log('Sem desconto. Total a pagar: R$ ' + total);
    break;

  default:
    console.log('Forma de pagamento inválida.');
}
