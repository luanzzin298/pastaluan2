let prompt = require('prompt-sync')();
let soma = 0, maior = 0, count = 0, acima7 = 0;
while (true) {
  let nota = Number(prompt("Nota (-1 sai):"));
  if (nota == -1) break;
  if (nota >= 0 && nota <= 10) {
    soma += nota;
    count++;
    if (nota > maior) maior = nota;
    if (nota > 7) acima7++;
  } else {
    alert("Nota inválida!");
  }
}
if (count > 0) {
  console.log("Média:", (soma/count).toFixed(2));
  console.log("Maior nota:", maior);
  console.log("Notas acima de 7:", acima7);
} else {
  console.log("Nenhuma nota válida.");
}

