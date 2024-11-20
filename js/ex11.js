var salario = parseFloat(prompt("indique seu salario:"));
if(salario >= 0 && salario < 280){
    var porcentual = 1.20;
    var Reajuste = salario * porcentual;
}
else if(salario >= 280 && salario < 700){
    var porcentual = 1.15;
    var Reajuste = salario * porcentual;
}
else if(salario >= 700 && salario < 1500){
    var porcentual = 1.10
    var Reajuste = salario * porcentual;
}
else if(salario > 1500){
    var porcentual = 1.05
    var Reajuste = salario * porcentual;

}

alert("o valor do seu salario antes do resajsute: " + salario);
alert("o valor da porcentagem adicionada foi de: " + porcentual);
alert("o valor do novo salario apos o aumento é de: " + Reajuste)
