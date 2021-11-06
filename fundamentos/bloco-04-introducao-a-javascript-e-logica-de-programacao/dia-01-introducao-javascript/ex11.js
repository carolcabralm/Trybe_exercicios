const salBruto = 3000;
let inss;
let ir;

if (salBruto <= 1556.94) {
    inss = 0.08 * salBruto;
} 
else if (salBruto <= 2594.92) {
    inss = 0.09 * salBruto;
} 
else if (salBruto <= 5189.82) {
    inss = 0.11 * salBruto;
} 
else {
    inss = 570.88;
}

const salBase = salBruto - inss;

if (salBase <= 1903.98) {
    ir = 0;
} 
else if (salBase <= 2826.65) {
    ir = (0.075 * salBase) - 142.8;
} 
else if (salBase <= 3751.05) {
    ir = (0.15 * salBase) - 354.8;
} 
else if (salBase <= 4664.68) {
    ir = (0.225 * salBase) - 636.13;
} 
else {
    ir = (0.275 * salBase) - 869.36;
}

console.log ("Salário Líquido: ", (salBase - ir));