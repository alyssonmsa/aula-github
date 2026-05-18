// app.js — Conecta a UI com a lógica
// Frente 1: integre seus elementos visuais chamando pressionarBotao()

let estado = {
  display: '0',
  expressao: '',
  operacaoPendente: null,
  valorAnterior: null,
  novoNumero: true,
};

function atualizarDisplay() {
  const el = document.getElementById('display');
  const ex = document.getElementById('expression');
  if (el) el.textContent = estado.display;
  if (ex) ex.textContent = estado.expressao;
}

// Frente 1: chame esta função nos event listeners dos seus botões
function pressionarBotao(valor) {
  console.log('Botão pressionado:', valor);
  // TODO: integrar com Calculadora.*
}

atualizarDisplay();
