const prompt = require("prompt-sync")();

let TotalSalario = 0;
let Funcionarios = [];

for (let i = 0; i < 20; i++) {
    let Codigo = prompt(`Digite o código do funcionário ${i + 1}: `);
    let Salario = parseFloat(prompt(`Digite o salário do funcionário ${i + 1}: `));

    Funcionarios.push({ Codigo, Salario });
    TotalSalario += Salario;
}

let MediaSalarial = TotalSalario / 20;

console.log("\nFolha de pagamento total: R$", TotalSalario.toFixed(2));
console.log("Média salarial: R$", MediaSalarial.toFixed(2));
