function calcularbonus(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    if(valor > 2000){
        bonus = valor * 0.10;
    }
    let valorfinal = valor + bonus;

    resultado.innerHTML = `Bônus de R$ ${bonus.toFixed(2)} <br>Valor final de R$ ${valorfinal.toFixed(2)}`;   
}
//
function calcularfrete(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;
    if(valor < 150){
      frete = 20;
    }
    let valorfinal = valor + frete;
    resultado.innerHTML = `Frete de R$ ${frete.toFixed(2)} <br>Valor final de R$ ${valorfinal.toFixed(2)}`;
}
//
function calculardesconto(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;
    if(valor > 200){
        desconto = valor * 0.05;
    }
    let valorfinal = valor - desconto;

    resultado.innerHTML = `Desconto de R$ ${desconto.toFixed(2)} <br>Valor final de R$ ${valorfinal.toFixed(2)}`;
}
//
function calculartaxa(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;
    if(valor > 100){
        taxa = valor * 0.10;
    }
    let valorfinal = valor + taxa;

    resultado.innerHTML = `Taxa de serviço de R$ ${taxa.toFixed(2)} <br>Valor final de R$ ${valorfinal.toFixed(2)}`;
}
//
function calcularmulta(){
    let valor = Number(document.getElementById('valor').value);
    let dias = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;
    if(dias > 0){
        multa = valor * 0.02 * dias;
    }
    let valorfinal = valor + multa;

    resultado.innerHTML = `Multa de R$ ${multa.toFixed(2)} <br>Valor final de R$ ${valorfinal.toFixed(2)}`;
}

//
function calcularcashback(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let cashback = 0;
    if(valor >= 300){
        cashback = valor * 0.05;
    }
    let valorfinal = valor - cashback;

    resultado.innerHTML = `Cashback de R$ ${cashback.toFixed(2)} <br>Valor final de R$ ${valorfinal.toFixed(2)}`;
}