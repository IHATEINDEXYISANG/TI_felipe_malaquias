// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.

// ex1
// Pergunta:
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
// Resposta:
let numeroCinco = false; 

// ex2
// Pergunta:
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5
//   "5" === 5
//   "5" == 5
//   true === false
// Resposta:
// O primeiro devolve true, o segundo devolve false, o terceiro devolve true e o quarto devolve false.

// ex3
// Pergunta:
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
// Resposta:
// Os botoes estao compartilhando a mesma variavel "apoiado"; cada cartao precisa ter seu proprio estado.
//     });
//   });


// ex4
// Pergunta:
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = "Apoiar";
//   }
// Resposta: no bloco else, o texto do botao deve ser "Apoiar".


// ex5
// Pergunta:
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.
// Resposta:
// Acrescentei um cartao sobre os computadores da sala de informatica, com botoes de apoio e remocao funcionando.


// ex6
// Pergunta:
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcdesde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?
// Resposta:
// Eu mudaria a variavel "apoiado" para true, a contagem para 1 e o texto do botao para "Apoiado" na criacao desse cartao.
// Isso nao serve para os outros cartoes porque eles devem comecar com apoiado igual a false e contagem igual a 0.
