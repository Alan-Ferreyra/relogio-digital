const datahoje = document.querySelector(".datahoje");
const hora = document.querySelector(".hora");
const saudacao = document.querySelector(".saudacao");
let data = new Date();

function Add0esquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function FormatacaoData() {
  let Dia = Add0esquerda(data.getDate());
  let Mes = Add0esquerda(data.getMonth() + 1);
  let Ano = Add0esquerda(data.getFullYear());
  return `${Dia} / ${Mes} / ${Ano}`;
}

function FormatacaoHora(data) {
  let Hora = Add0esquerda(data.getHours());
  let Minuto = Add0esquerda(data.getMinutes());
  let Segundo = Add0esquerda(data.getSeconds());
  return `${Hora} : ${Minuto} : ${Segundo} `;
}

function AtualizarDia() {
  const datahoje = document.querySelector(".datahoje");
  let datafuncao = new Date();
  FormatacaoHora(datafuncao);
  let dia = FormatacaoData(datafuncao);
  datahoje.innerHTML = `${dia}`;
}

function AtualizarHora() {
  const hora = document.querySelector(".hora");
  let datafuncao = new Date();
  FormatacaoHora(datafuncao);
  let hr = FormatacaoHora(datafuncao);
  hora.innerHTML = `${hr}`;
}

function ChecarSaudacao() {
  let saudacao = document.querySelector(".saudacao"); //
  let periodo = data.getHours();
  saudacao.innerHTML = "test";
  if (periodo > 12 && periodo < 18) {
    saudacao.innerHTML = "Boa tarde 🌇";
  } else if (periodo >= 18 && periodo <= 23) {
    saudacao.innerHTML = "Boa noite 🌙";
  } else if (periodo >= 7 && periodo <= 12) {
    saudacao.innerHTML = "Bom dia 🌞";
  } else {
    saudacao.innerHTML = "Boa madrugada ✨";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  AtualizarDia();
  AtualizarHora();
  ChecarSaudacao();
});

setInterval(AtualizarHora, 1000);
setInterval(ChecarSaudacao, 2 * 60 * 1000);
setInterval(AtualizarDia, 10 * 60 * 1000);
