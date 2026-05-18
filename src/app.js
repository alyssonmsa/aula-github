// ============================================================
//  app.js — Integração UI ↔ Calculadora
//
//  Este arquivo já está completo. Ele conecta os botões
//  do HTML com as funções de Calculadora.*.
//
//  Frente 1: não edite este arquivo — adicione eventos
//            nos seus próprios elementos.
//  Frente 2: ao implementar as funções em calculadora.js,
//            elas passarão a funcionar automaticamente aqui.
// ============================================================

/* ── Estado da calculadora ─────────────────────────────── */
let estado = {
  display:     '0',
  expressao:   '',
  operador:    null,
  valorAntes:  null,
  novoNumero:  true,
  historico:   [],
};

/* ── Helpers de formatação ─────────────────────────────── */
function formatarNumero(n) {
  if (!isFinite(n)) return 'Erro';
  const limpo = parseFloat(n.toPrecision(12));
  const str   = limpo.toString();
  return str.length > 15 ? n.toExponential(4) : str;
}

function ajustarFonte(str) {
  const el = document.getElementById('display');
  el.classList.remove('result-md', 'result-sm', 'result-xs');
  if (str.length > 14)      el.classList.add('result-xs');
  else if (str.length > 10) el.classList.add('result-sm');
  else if (str.length > 7)  el.classList.add('result-md');
}

/* ── Atualiza o DOM ────────────────────────────────────── */
function renderizar() {
  const display = document.getElementById('display');
  const expr    = document.getElementById('expression');
  if (display) {
    display.textContent = estado.display;
    ajustarFonte(estado.display);
  }
  if (expr) expr.textContent = estado.expressao;
}

/* ── Destaca operador ativo ────────────────────────────── */
function marcarOperadorAtivo(op) {
  document.querySelectorAll('.btn-op').forEach(b => b.classList.remove('op-active'));
  if (!op) return;
  const simbolos = { '+': '+', '-': '−', '*': '×', '/': '÷' };
  document.querySelectorAll('.btn-op').forEach(b => {
    if (b.dataset.val === op) b.classList.add('op-active');
  });
}

/* ── Histórico ─────────────────────────────────────────── */
function adicionarHistorico(expressao, resultado) {
  estado.historico.unshift({ expressao, resultado });
  if (estado.historico.length > 5) estado.historico.pop();

  const lista = document.getElementById('history-list');
  const painel = document.getElementById('history-panel');
  if (!lista || !painel) return;

  lista.innerHTML = estado.historico
    .map(h => `<li><span>${h.expressao}</span><span class="hist-result">${h.resultado}</span></li>`)
    .join('');

  painel.classList.add('active');
}

/* ── Erro visual ───────────────────────────────────────── */
function mostrarErro(msg) {
  estado.display  = msg || 'Erro';
  estado.expressao = '';
  estado.operador  = null;
  estado.valorAntes = null;
  estado.novoNumero = true;

  const display = document.getElementById('display');
  const calc    = document.querySelector('.calc');
  if (display) display.classList.add('is-error');
  if (calc)    calc.classList.add('has-error');

  renderizar();

  setTimeout(() => {
    if (display) display.classList.remove('is-error');
    if (calc)    calc.classList.remove('has-error');
  }, 600);
}

/* ── Lógica principal de entrada ───────────────────────── */
function pressionarBotao(valor) {

  /* --- Limpar tudo (C) --- */
  if (valor === 'C') {
    try {
      const novo = Calculadora.limpar();
      estado = { ...estado, ...novo, historico: estado.historico };
    } catch (_) {
      // Fallback enquanto feat/limpar-ce-c não for implementada
      estado.display    = '0';
      estado.expressao  = '';
      estado.operador   = null;
      estado.valorAntes = null;
      estado.novoNumero = true;
    }
    marcarOperadorAtivo(null);
    renderizar();
    return;
  }

  /* --- Limpar entrada (CE) --- */
  if (valor === 'CE') {
    try {
      estado.display    = Calculadora.limparEntrada(estado.display);
      estado.novoNumero = false;
    } catch (_) {
      estado.display    = '0';
      estado.novoNumero = true;
    }
    renderizar();
    return;
  }

  /* --- Porcentagem (%) --- */
  if (valor === '%') {
    try {
      const r = Calculadora.porcentagem(parseFloat(estado.display));
      estado.display    = formatarNumero(r);
      estado.novoNumero = true;
    } catch (e) {
      mostrarErro(e.message.includes('implementado') ? 'TODO' : 'Erro');
    }
    renderizar();
    return;
  }

  /* --- Operadores +, -, *, / --- */
  if (['+', '-', '*', '/'].includes(valor)) {
    estado.operador   = valor;
    estado.valorAntes = parseFloat(estado.display);
    const simbolo = valor === '+' ? '+' : valor === '-' ? '−' : valor === '*' ? '×' : '÷';
    estado.expressao  = estado.display + ' ' + simbolo;
    estado.novoNumero = true;
    marcarOperadorAtivo(valor);
    renderizar();
    return;
  }

  /* --- Igual (=) --- */
  if (valor === '=') {
    if (estado.operador === null || estado.valorAntes === null) return;

    const atual = parseFloat(estado.display);
    let resultado;

    try {
      switch (estado.operador) {
        case '+': resultado = Calculadora.soma(estado.valorAntes, atual); break;
        case '-': resultado = Calculadora.subtracao(estado.valorAntes, atual); break;
        case '*': resultado = Calculadora.multiplicacao(estado.valorAntes, atual); break;
        case '/': resultado = Calculadora.divisao(estado.valorAntes, atual); break;
      }
    } catch (e) {
      mostrarErro(e.message.includes('zero') ? 'Div/0' : e.message.includes('implementado') ? 'TODO' : 'Erro');
      return;
    }

    const simbolo  = estado.operador === '+' ? '+' : estado.operador === '-' ? '−' : estado.operador === '*' ? '×' : '÷';
    const exprFull = estado.valorAntes + ' ' + simbolo + ' ' + atual + ' =';
    const resultStr = formatarNumero(resultado);

    adicionarHistorico(exprFull, resultStr);
    marcarOperadorAtivo(null);

    estado.display    = resultStr;
    estado.expressao  = '';
    estado.operador   = null;
    estado.valorAntes = null;
    estado.novoNumero = true;
    renderizar();
    return;
  }

  /* --- Ponto decimal --- */
  if (valor === '.') {
    if (estado.novoNumero) {
      estado.display    = '0.';
      estado.novoNumero = false;
    } else if (!estado.display.includes('.')) {
      estado.display += '.';
    }
    renderizar();
    return;
  }

  /* --- Dígitos 0-9 --- */
  const display = document.getElementById('display');
  if (display) display.classList.remove('is-error');

  if (estado.novoNumero || estado.display === '0') {
    estado.display    = valor;
    estado.novoNumero = false;
  } else {
    if (estado.display.replace('-', '').replace('.', '').length >= 15) return;
    estado.display += valor;
  }
  renderizar();
}

/* ── Event listeners nos botões ─────────────────────────── */
document.querySelectorAll('.btn[data-val]').forEach(btn => {
  btn.addEventListener('click', () => pressionarBotao(btn.dataset.val));
});

/* ── Suporte ao teclado ─────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key >= '0' && e.key <= '9') pressionarBotao(e.key);
  else if (e.key === '+') pressionarBotao('+');
  else if (e.key === '-') pressionarBotao('-');
  else if (e.key === '*') pressionarBotao('*');
  else if (e.key === '/') { e.preventDefault(); pressionarBotao('/'); }
  else if (e.key === 'Enter' || e.key === '=') pressionarBotao('=');
  else if (e.key === 'Escape') pressionarBotao('C');
  else if (e.key === 'Backspace') pressionarBotao('CE');
  else if (e.key === '.') pressionarBotao('.');
  else if (e.key === '%') pressionarBotao('%');
});

/* ── Render inicial ─────────────────────────────────────── */
renderizar();
