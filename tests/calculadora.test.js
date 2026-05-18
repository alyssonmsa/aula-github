// calculadora.test.js — Testes unitários
// Frente 3: substitua os test.todo() pelos testes reais

const Calculadora = require('../src/calculadora');

describe('Soma', () => {
  test.todo('2 + 3 deve retornar 5');
  test.todo('soma com número negativo');
  test.todo('soma com zero');
});

describe('Subtração', () => {
  test.todo('10 - 4 deve retornar 6');
  test.todo('resultado negativo');
});

describe('Multiplicação', () => {
  test.todo('3 * 7 deve retornar 21');
  test.todo('multiplicação por zero');
});

describe('Divisão', () => {
  test.todo('10 / 2 deve retornar 5');
  test.todo('divisão por zero deve lançar erro');
});

describe('Porcentagem', () => {
  test.todo('porcentagem(50) deve retornar 0.5');
});

describe('Inverter sinal', () => {
  test.todo('inverterSinal(5) deve retornar -5');
  test.todo('inverterSinal(-3) deve retornar 3');
});

describe('Casos extremos', () => {
  test.todo('decimais: 0.1 + 0.2');
  test.todo('número muito grande');
});
