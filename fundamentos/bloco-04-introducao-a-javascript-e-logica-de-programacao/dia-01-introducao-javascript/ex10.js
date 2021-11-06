const custo = 2;
const venda = 5;
let lucro;

if (custo < 0 || venda < 0) {
    console.log ("Valor inválido.");
}
else {
    lucro = venda - 1.2 * custo
    console.log ("Lucro: ", lucro);
}