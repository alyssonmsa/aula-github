// ============================================================
//  calculadora.test.js — Testes unitários (Jest)
//
//  FRENTE 3: substitua cada test.todo() por um teste real.
//  Use expect(resultado).toBe(valorEsperado).
//
//  Para rodar: npm test
//  Para rodar em modo watch: npm run test:watch
// ============================================================

const Calculadora = require('../src/calculadora');

// ── test/soma-e-subtracao ────────────────────────────────────
describe('Soma', () => {
  test.todo('2 + 3 deve retornar 5');
  test.todo('0 + 0 deve retornar 0');
  test.todo('soma com número negativo: -4 + 10 deve retornar 6');
  test.todo('soma de dois negativos: -2 + -3 deve retornar -5');
  test.todo('soma com decimal: 0.5 + 0.5 deve retornar 1');
  test.todo('soma com zero: 99 + 0 deve retornar 99');
});

describe('Subtração', () => {
  test.todo('10 - 4 deve retornar 6');
  test.todo('resultado negativo: 3 - 10 deve retornar -7');
  test.todo('0 - 0 deve retornar 0');
  test.todo('subtrair negativo: 5 - (-3) deve retornar 8');
});

// ── test/multi-e-divisao ─────────────────────────────────────
describe('Multiplicação', () => {
  test.todo('3 * 7 deve retornar 21');
  test.todo('qualquer número * 0 deve retornar 0');
  test.todo('multiplicação por 1 não muda o valor');
  test.todo('dois negativos: -2 * -5 deve retornar 10');
  test.todo('negativo e positivo: -3 * 4 deve retornar -12');
  test.todo('decimal: 2.5 * 4 deve retornar 10');
});

describe('Divisão', () => {
  test.todo('10 / 2 deve retornar 5');
  test.todo('divisão com resultado decimal: 1 / 4 deve retornar 0.25');
  test.todo('qualquer número / 1 deve retornar o mesmo número');
  test.todo('negativo / positivo deve retornar negativo');
});

// ── test/divisao-por-zero ────────────────────────────────────
describe('Divisão por zero', () => {
  test.todo('deve lançar um Error ao dividir por zero');
  test.todo('a mensagem do erro deve conter "zero"');
  test.todo('0 / 0 também deve lançar Error');
});

// ── test/porcentagem-sinal ───────────────────────────────────
describe('Porcentagem', () => {
  test.todo('porcentagem(50) deve retornar 0.5');
  test.todo('porcentagem(100) deve retornar 1');
  test.todo('porcentagem(0) deve retornar 0');
  test.todo('porcentagem(200) deve retornar 2');
});

describe('Inverter sinal', () => {
  test.todo('inverterSinal(5) deve retornar -5');
  test.todo('inverterSinal(-3) deve retornar 3');
  test.todo('inverterSinal(0) deve retornar 0 ou -0');
});

// ── test/casos-extremos ──────────────────────────────────────
describe('Casos extremos', () => {
  test.todo('0.1 + 0.2 — verificar precisão');
  test.todo('número muito grande: 1e15 + 1');
  test.todo('número muito pequeno: 0.0001 + 0.0002');
  test.todo('multiplicação com Infinity deve retornar Infinity');
});

// ── test/historico-calcs ─────────────────────────────────────
describe('Histórico', () => {
  test.todo('histórico começa vazio');
  test.todo('adicionar um cálculo aumenta o histórico em 1');
  test.todo('histórico não ultrapassa 5 itens');
  test.todo('o item mais recente fica no início da lista');
});
