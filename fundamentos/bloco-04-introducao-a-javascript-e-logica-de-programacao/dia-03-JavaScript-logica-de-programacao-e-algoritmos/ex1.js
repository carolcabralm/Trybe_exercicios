//faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

let n = 4;
let linha = [];

for (i = 0; i < n; i += 1) {
    linha = linha + '*';
}

for (i = 0; i < n; i += 1) {
    console.log(linha);
}



