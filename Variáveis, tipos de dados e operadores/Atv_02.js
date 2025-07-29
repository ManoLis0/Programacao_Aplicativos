const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o primeiro numero: "));
let n2 = Number(prompt("Digite o segundo numero: "));

console.log("a soma dos numeros é: ", n1+n2);
console.log("a subtracao dos numeros é: ", n1-n2);
console.log("a multiplicacao dos numeros é: ", n1*n2);
if (n2==0){
    console.log("impossivel dividir por 0");
}else{
console.log("a divisao dos numeros é: ", n1/n2);
console.log("o resto da divisao dos numeros é: ", n1%n2);
}
