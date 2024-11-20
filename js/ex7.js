var n1 = parseFloat(prompt("numero um:"));
var n2 = parseFloat(prompt("numero dois:"));
var n3 = parseFloat(prompt("numero tres:"));

if(n1 > n2 > n3){
    alert("numero 1 é o maior deles e o numero 3 é o menor deles");
}
else if(n2 > n1 > n3){
    alert("numero 2 é o maior deles e o numero 3 é o menor deles");
}
else if(n2 > n1 > n3){
    alert("numero 2 é o maior deles e o numero 3 é o menor deles");
}
else if(n3 > n1 > n2){
    alert("numero 3 é o maior deles e o numero 2 é o menor deles");
}
else if(n3 > n2 > n1){
    alert("numero 3 é o maior deles e o numero 1 é o menor deles");
}else{
    alert("numero 1 é o maior deles e o numero 2 é o menor deles");
}