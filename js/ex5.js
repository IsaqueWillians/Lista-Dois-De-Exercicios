var n1 = parseFloat(prompt("nota um:"));
var n2 = parseFloat(prompt("nota dois:"));
var n3 = parseFloat(prompt("nota tres:"));

var media = (n1 + n2 + n3) / 3;

if(media >= 7 && media < 10){
    alert("AProvado");
}

if(media == 10){
    alert("Aprovado com distinção");
}else{
    alert("Reprovado");
}