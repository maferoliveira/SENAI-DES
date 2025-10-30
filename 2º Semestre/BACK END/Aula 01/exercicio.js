//ex. 1
var nome = "Marcos";
console.log("Olá "+nome);

//ex.2
var num = 62;
var num1 = 16;
console.log(num + num1);
console.log(num - num1);
console.log(num * num1);
console.log(num / num1);

//ex.3
var altura = 10;
var largura = 20;
console.log(altura * largura);

//ex.4
var nascimento = 2008;
const ano = 2025;
idade = nascimento - ano;
if (idade > 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}

//ex.5
var numero = 9;
if (numero %2 == 0){
    console.log("O numero é par")
}else{
    console.log("O numero é impar")
}

//ex.6
var n1 = 10;
var n2 = 8;
var n3 = 2;
var media;
media = ((n1+n2+n3)/3);
if (media>=9){
    console.log("A")
}else if (media>6){
    console.log("B")
}else if(media > 4){
console.log("C")
}else{
    console.log(Reprovado)
}

//ex.7
for(let i=1;i<=200;i++){
    if(i %2 == 0){
        console.log(i)
    }
}
//ex.8 

var i=0;
var f=1;
for(let i=5;i>0;i--){
   f = f * i;
}console.log(f);

//ex.9
for(let i=0;i<10;i+=3){
    console.log(i);
}