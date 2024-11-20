var valorHora = parseFloat(prompt("Digite o valor da sua hora trabalhada"));
var horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês"));
var salarioBruto = valorHora * horasTrabalhadas;
var descontoIR;
if (salarioBruto <= 2259.20) {
  descontoIR = 0;
} else if (salarioBruto <= 1500) {
  descontoIR = salarioBruto * 0.075;
} else if (salarioBruto <= 2500) {
  descontoIR = salarioBruto * 0.15;
} else if (salarioBruto <= 3750) {
  descontoIR = salarioBruto * 0.224;
} else {
  descontoIR = salarioBruto * 0.275;
}

var descontoSindicato = salarioBruto * 0.03;
var fgts = salarioBruto * 0.08;
var salarioLiquido = salarioBruto - descontoIR - descontoSindicato;
alert(
  "Salário Bruto: " + salarioBruto + "\n" +
  "Desconto IR: " + descontoIR + "\n" +
  "Desconto Sindicato: " + descontoSindicato + "\n" +
  "FGTS: " + fgts + "\n" +
  "Salário Líquido: " + salarioLiquido);
