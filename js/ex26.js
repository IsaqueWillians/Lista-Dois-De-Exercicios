var tipo = parseFloat(prompt("Digite '1' se quiser alcool ou '2' se for gasolina"));
if (tipo == 1) {
    var alcool = parseFloat(prompt("Digite a quantidade de alcool que você vai querer"));
    if (alcool > 20){
        var total = 3.90 * alcool * 0.97;
    }else{
        var total = 3.90 * alcool * 0.95;
    }
    alert("o valor gasto é de " + total);
    }

    if (tipo == 2) {
        var gasolina = parseFloat(prompt("Digite a quantidade de gasolina que você vai querer"));
        if (gasolina > 20){
            var total = 3.90 * gasolina * 0.94;
        }else{
            var total = 3.90 * gasolina * 0.96;
        }
        alert("o valor gasto é de " + total);
        }
