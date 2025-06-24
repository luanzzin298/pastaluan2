let prompt = require('prompt-sync')();
let n = prompt("Número inicial:");
for(let i = n; i >= 0; i--) {
  setTimeout(() => console.log(i == 0 ? "Boom!" : i), 500 * (n - i));
}
