// ============================================================
//  calculadora.js — Lógica pura (sem DOM, sem eventos)
//
//  FRENTE 2: implemente cada função substituindo o
//  throw new Error('Não implementado') pelo código real.
//
//  FRENTE 3: escreva os testes em tests/calculadora.test.js
//
//  REGRA: este arquivo não pode usar document, window
//  ou qualquer API do navegador.
// ============================================================

const Calculadora = {

  /**
   * feat/operacao-soma
   * Retorna a soma de dois números.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  soma: function(a, b) {
        return a + b;
},

  /**
   * feat/operacao-subtracao
   * Retorna a subtração de dois números.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  subtracao: function(a, b) {
    throw new Error('Não implementado: feat/operacao-subtracao');
  },

  /**
   * feat/operacao-multiplicacao
   * Retorna o produto de dois números.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  multiplicacao: function(a, b) {
    throw new Error('Não implementado: feat/operacao-multiplicacao');
  },

  /**
   * feat/operacao-divisao
   * Retorna a divisão de dois números.
   * Deve lançar Error('Divisão por zero') quando b === 0.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  divisao: function(a, b) {
    throw new Error('Não implementado: feat/operacao-divisao');
  },

  /**
   * feat/porcentagem
   * Converte um número para sua forma percentual (divide por 100).
   * Ex: porcentagem(50) → 0.5
   * @param {number} a
   * @returns {number}
   */
  porcentagem: function(a) {
    throw new Error('Não implementado: feat/porcentagem');
  },

  /**
   * feat/inverter-sinal
   * Inverte o sinal de um número.
   * Ex: inverterSinal(5) → -5 | inverterSinal(-3) → 3
   * @param {number} a
   * @returns {number}
   */
  inverterSinal: function(a) {
    throw new Error('Não implementado: feat/inverter-sinal');
  },

  /**
   * feat/limpar-ce-c
   * Retorna o estado inicial da calculadora (tudo zerado).
   * @returns {object} estado zerado
   */
  limpar: function() {
    throw new Error('Não implementado: feat/limpar-ce-c');
  },

  /**
   * feat/limpar-ce-c
   * Remove o último dígito do display.
   * Ex: limparEntrada('1234') → '123' | limparEntrada('5') → '0'
   * @param {string} displayAtual
   * @returns {string}
   */
  limparEntrada: function(displayAtual) {
    throw new Error('Não implementado: feat/limpar-ce-c');
  },

};

// Exporta para os testes Jest (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}
