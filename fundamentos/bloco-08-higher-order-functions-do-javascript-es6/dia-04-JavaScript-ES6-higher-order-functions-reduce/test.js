//Somar os númeroa pares:


const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = number => number % 2 === 0;

const sum = (acum, number) => acum + number;

const sumPares = array => array.filter(pares).reduce(sum);

console.log(sumPares(numbers));

//OU USANDO APENAS O REDUCE
const sumPares2 = (acum, number) => (
  (number % 2 === 0) ? acum + number : acum
);

const sum2 = array => array.reduce(sumPares2, 0);
console.log(sum2(numbers));