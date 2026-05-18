# Calculadora — Lab GitHub

> Lab prático · Git, GitHub e Pull Requests  
> Engenharia e Qualidade de Software

## Como rodar

Abra `index.html` diretamente no navegador — **não precisa de npm**.

O npm é necessário apenas para rodar os testes Jest (Frente 2 e 3):

```bash
npm install
npm test
```

## Estrutura

```
calculadora-lab/
├── index.html              ← Interface pronta
├── src/
│   ├── calculadora.js      ← Funções com TODO (Frente 2)
│   ├── app.js              ← Integração UI ↔ Lógica (não edite)
│   └── style.css           ← Estilos base + hooks para Frente 1
├── tests/
│   └── calculadora.test.js ← test.todo() (Frente 3)
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
```

## Features disponíveis

Cada aluno escolhe **uma** feature. Veja o enunciado completo no Classroom.

### F1 — UI e Interface
| Branch | Feature |
|--------|---------|
| `feat/display-visor` | Estilizar o visor com expressão e resultado |
| `feat/botoes-teclado` | Estilizar e personalizar a grade de botões |
| `feat/tema-escuro` | Toggle dark/light mode |
| `feat/historico-lista` | Painel de histórico dos últimos 5 cálculos |
| `feat/responsivo-mobile` | Layout responsivo a partir de 320px |
| `feat/animacao-botoes` | Efeito de clique e ripple nos botões |
| `feat/feedback-erro` | Mensagem visual para erros de cálculo |

### F2 — Lógica JavaScript
| Branch | Feature |
|--------|---------|
| `feat/operacao-soma` | `Calculadora.soma(a, b)` |
| `feat/operacao-subtracao` | `Calculadora.subtracao(a, b)` |
| `feat/operacao-multiplicacao` | `Calculadora.multiplicacao(a, b)` |
| `feat/operacao-divisao` | `Calculadora.divisao(a, b)` — tratar divisão por zero |
| `feat/porcentagem` | `Calculadora.porcentagem(a)` |
| `feat/inverter-sinal` | `Calculadora.inverterSinal(a)` |
| `feat/limpar-ce-c` | `Calculadora.limpar()` e `Calculadora.limparEntrada()` |

### F3 — Qualidade e Testes
| Branch | Feature |
|--------|---------|
| `test/soma-e-subtracao` | Suite completa: soma e subtração |
| `test/multi-e-divisao` | Suite completa: multiplicação e divisão |
| `test/divisao-por-zero` | Testes de borda: divisão por zero |
| `test/porcentagem-sinal` | Testes: porcentagem e inverterSinal |
| `test/casos-extremos` | Testes: decimais, grandes, NaN |
| `test/historico-calcs` | Testes: histórico de cálculos |
| `docs/readme-e-setup` | Documentação completa com badges |

## Padrão de commits

```
feat: implementa função de soma
test: adiciona testes de divisão por zero
fix: corrige cálculo de porcentagem negativa
docs: atualiza README com instruções de setup
style: ajusta espaçamento dos botões
```
