const myFizzBuzz = require('./ex3.js')

describe('testa a função myFizzBuzz', () => {
  it('deve retornar de acordo com os números divisíveis por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(25)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('11')).toBe(false);
  })
})