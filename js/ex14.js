var n1 = parseFloat(prompt("nota um:"));
var n2 = parseFloat(prompt("nota dois:"));

var media = (n1 + n2) / 2;

if(media >= 0 && media < 4){
    alert("voce recebeu E, logo foi REPROVADO");
}

else if(media >= 4 && media < 6){
    alert("voce recebeu D, logo foi REPROVADO");
}

else if(media >= 6 && media < 7.5){
    alert("voce recebeu C, logo foi APROVADO");
}

else if(media >= 7.5 && media < 9){
    alert("voce recebeu B, logo foi APROVADO");
}

else if(media >= 9 && media < 10){
    alert("voce recebeu A, logo foi APROVADO");
}

