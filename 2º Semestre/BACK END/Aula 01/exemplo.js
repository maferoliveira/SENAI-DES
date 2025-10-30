// var - escopo global
//let - escopo local
//const - escopo global e valor não altera

for (let i = 0; i<10; i++){

}

var nome = "Fulano";//string
var idade = 50.5;//number
var habilitado = true;//boolean
var nascimento = 1875;
/*soma+
subtracao -
divisao / 
mult * 
modulo %
*/
console.log(habilitado)//imprime no terminal
console.log(typeof(habilitado));//typeof retorna o tipo da variavel
nascimento = 1990;

var a = "15";
var b = 15;
console.log(Number(a)+b);

if(a!==b){
console.log("São iguais");
}else{
    console.log("São diferentes");
}
/*
Igualdade ==
Estritamente igual ===
Estritamente diferente !==
Diferente !=
Maior>
Menor<
Menor igual <=
Maior igual>=
*/

switch(b){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}
for(let i =0; i<10; i++){
console.log(i);
}

a=11;

while (a<10){
    if(a==5){
        break;
    }
}
do{

}while(a<10);