// const numeros = [1,2,3,4,5];
// for(let i = 0; i < numeros.length;i++){
//     console.log("[" + i + "] -> " + numeros[i]);
// }

// function soma(a,b){
// // return a+b;
// console.log(a+b);}
// // console.log(soma(2,3));
// soma(5,4);

// const soma = (a,b) => { 
//     console.log(a+b);
// }
// soma(8,3);


// function imprime(value){
//     console.log("Value = "+value);
// } imprime(5);
// // numeros.forEach(numero,indice) => {
// marcas.forEach(imprime);

const numeros = [1,2,3,4,5];
const marcas= ["nike", "adidas"];
const usuarios = [{
    "Nome":"Mafer",
    "Sobrenome": "Silva",
    "Matricula": "1234",
    "Telefone": "(12)1234-5677"
},
{
    "Nome": "Daniel",
    "Sobrenome": "Oliveira",
    "Matricula": "8721",
    "Telefone": "(12)9230-9450"
},
{
    "Nome": "João",
    "Sobrenome": "Souza",
    "Matricula": "4567",
    "Telefone": "(12) 9876-5432"
}];

marcas.forEach((value)=> {
    if (value === "nike") {
        console.log("Marca encontrada: " + value);
    }
});
usuarios.forEach((usuario) => {
    if(usuario.Matricula === "4567"){
        console.log(usuario.Nome + " de " + usuario.Sobrenome);
        console.log(usuario.Telefone);
    }
})

// const carro = {
//     "Ano": 2000,
//     "Cor": "Vermelho",
//     "Modelo": "Uno",
//     "Marca": "Fiat",
//     "Escada": true,
//     "Placa": "abc-1234"
// }
// console.log(carro.Modelo);

