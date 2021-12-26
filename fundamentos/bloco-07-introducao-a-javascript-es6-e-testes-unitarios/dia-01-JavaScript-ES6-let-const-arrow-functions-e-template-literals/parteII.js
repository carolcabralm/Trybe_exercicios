//1 - Crie uma função que receba um número e retorne seu fatorial.
const fatorial = number => {
  let count = 1;
  for (i = number; i > 0; i -= 1) {
    count *= i;
  }
  return count;
};

console.log(fatorial(4));

//ou
const fatorialRecursiva = number => number > 1 ? number * fatorial(number -1) : 1;
console.log(fatorialRecursiva(4));

//2- Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = sentence => {
  let words = sentence.split(' ');
  let biggest = 0;
  let result = '';

  for (const word of words) {
    if (word.length > biggest) {
      biggest = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));