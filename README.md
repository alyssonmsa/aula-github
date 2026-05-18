# 🧮 Calculadora — Lab GitHub

> Lab prático de Git, GitHub e Pull Requests  
> Engenharia e Qualidade de Software

## Como participar

1. **Fork** este repositório
2. **Clone** o seu fork localmente
3. Escolha sua feature na lista abaixo
4. Crie a branch: `git checkout -b feat/nome-da-feature`
5. Implemente, teste e abra o **Pull Request** neste repositório

## Estrutura do projeto

```
calculadora-lab/
├── index.html              ← Interface principal
├── src/
│   ├── calculadora.js      ← Lógica pura (Frente 2)
│   ├── app.js              ← Integração UI ↔ Lógica
│   └── style.css           ← Estilos base (Frente 1)
├── tests/
│   └── calculadora.test.js ← Testes unitários (Frente 3)
├── package.json
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
```

## Rodando o projeto

```bash
npm install
npm test
```

## Features disponíveis

> Cada aluno pega **uma** feature. Veja o enunciado completo no Google Classroom.

### 🎨 Frente 1 — UI e Interface
- `feat/display-visor` — Visor com expressão e resultado
- `feat/botoes-teclado` — Grade de botões numéricos e operadores
- `feat/tema-escuro` — Alternância dark/light mode
- `feat/historico-lista` — Lista dos últimos cálculos
- `feat/responsivo-mobile` — Layout responsivo para celular
- `feat/animacao-botoes` — Animação de clique nos botões
- `feat/feedback-erro` — Mensagem visual de erro

### ⚙️ Frente 2 — Lógica JS
- `feat/operacao-soma` — Função soma com teste básico
- `feat/operacao-subtracao` — Função subtração com teste básico
- `feat/operacao-multiplicacao` — Função multiplicação com teste básico
- `feat/operacao-divisao` — Função divisão com teste básico
- `feat/porcentagem` — Função porcentagem com teste básico
- `feat/inverter-sinal` — Função inverter sinal (+/-) com teste básico
- `feat/limpar-ce-c` — Funções C (limpar tudo) e CE (limpar entrada)

### 🧪 Frente 3 — Qualidade e Testes
- `test/soma-e-subtracao` — Suite completa de testes: soma e subtração
- `test/multi-e-divisao` — Suite completa: multiplicação e divisão
- `test/divisao-por-zero` — Testes de borda: divisão por zero
- `test/porcentagem-sinal` — Testes: porcentagem e inverter sinal
- `test/casos-extremos` — Testes: decimais, números grandes, NaN
- `test/historico-calcs` — Testes: histórico de operações
- `docs/readme-e-setup` — Documentação completa do projeto

## Padrão de commits obrigatório

```
feat: adiciona função de soma
test: implementa testes de divisão por zero
fix: corrige cálculo de porcentagem
docs: atualiza README com instruções de setup
```
