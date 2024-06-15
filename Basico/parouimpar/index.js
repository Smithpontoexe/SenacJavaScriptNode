//includes ou imports
// instalar os pacotes antes exemplo 
let readline = require("readline-sync");
// variavels
let num = 6;           // para criar variavel so necessita o nome //var função global  //let função curta
// funcoes 
function NumeroPar(num){
    let retorno = false;
    if (num%2==0 ) retorno = true;
    return retorno;
}
num = parseInt(readline.question("Digete um  numero: "));
console.log("Programa que verifica se um numero e par ou impar");

if(NumeroPar(num)==true)
    {
        console.log( "Numero " +num+ " e Par");
    } 
    else
    {
        console.log( "Numero " +num+ " e Impar");
    }





/*if(num%2==0)
    {
        console.log( "Numero " +num+ " e Par");
    } 
    else
    {
        console.log( "Numero " +num+ " e Impar");
    }*/

