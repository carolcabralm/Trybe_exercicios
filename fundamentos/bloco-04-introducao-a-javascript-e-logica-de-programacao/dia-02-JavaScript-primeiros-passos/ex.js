//Iremos utilizar esse array para realizar os exercícios do 1 ao 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
console.log(sum);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
console.log(sum / numbers.length);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
if ((sum / numbers.length) > 20) {
    console.log('valor maior que vinte');
}
else {
    console.log ('valor menor ou igual a 20');
}
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for(let i = 0; i < numbers.length; i += 1) {
    if (maior > numbers[i]){
        maior = maior;
    }
    else {
        maior = numbers[i];
    }
}
console.log(maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = [];
for(let i = 0; i < numbers.length; i += 1) {
    if((numbers[i] % 2) != 0) {
        impares.push(numbers[i]);
    }
    else {
        continue;
    }
}
console.log(impares);

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for(let i = 0; i < numbers.length; i += 1) {
    if (menor < numbers[i]){
        menor = menor;
    }
    else {
        menor = numbers[i];
    }
}
console.log(menor);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
for (i = 1; i <= 25 ; i += 1) {
    console.log(i);
}
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (i = 1; i <= 25 ; i += 1) {
    console.log(i / 2);
}