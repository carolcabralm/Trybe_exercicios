const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verify = (right, student, result) => {
  let count = 0;
  for(let i = 0; i < right.length; i += 1) {
    const resultReturn = result (right[i], student[i]);
    count += resultReturn;
  }
  return `Resultado: ${count} corretas.`
};

console.log(verify(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if(rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  } return -0.5;
}));