var valorA = parseFloat(prompt("Indique o valor de A"));
var valorB = parseFloat(prompt("Indique o valor de B"));
var valorC = parseFloat(prompt("Indique o valor de C"));

if (valorA != 0) {
  var delta = valorB * valorB - 4 * valorA * valorC;
  alert("Valores inseridos:\nA = " + valorA + "\nB = " + valorB + "\nC = " + valorC);

  // Verifica o delta
  if (delta > 0) {
    // Calcula as duas raízes
    var raiz1 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
    var raiz2 = (-valorB + Math.sqrt(delta)) / (2 * valorA);

    // Imprime as duas raízes
    alert("Existem duas raízes reais distintas:\nRaiz 1 = " + raiz1 + "\nRaiz 2 = " + raiz2);
  } else if (delta == 0) {
    // Calcula a raiz
    var raiz = -valorB / (2 * valorA);

    // Imprime a raiz
    alert("Existe uma raiz real dupla:\nRaiz = " + raiz);
  } else {
    alert("Não existem raízes reais.");
  }
} else {
  alert("Erro: A não pode ser zero.");
}