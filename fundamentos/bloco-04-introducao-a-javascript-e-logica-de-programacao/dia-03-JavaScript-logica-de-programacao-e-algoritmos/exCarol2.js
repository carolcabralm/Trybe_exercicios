//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let n = 0;

for (let i = 2; i <= 150; i++) {
   if (i % 3 == 0) {
       n += 1;
   }
}


if(n == 50) {
    console.log("Secretamente deu 50!");
}
else {
    console.log("O valor é: " + n);
}