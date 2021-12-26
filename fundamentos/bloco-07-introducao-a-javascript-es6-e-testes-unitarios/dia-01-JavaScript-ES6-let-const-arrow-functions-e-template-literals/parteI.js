const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);



//faça uma função que retorne o array oddsAndEvens em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = array => {
  return array.sort((a,b) => a - b);
}

const answer = sortArray(oddsAndEvens);
console.log(`Os númeors ${answer} se encontram ordenados de forma crescnte!`);