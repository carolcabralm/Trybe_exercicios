const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { price, seller } = product;
console.log(price); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas



//
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: names, b: classAssigned, c: subject } = student;

console.log(names); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
console.log(student);