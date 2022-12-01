// FIRST DAY SEVEN OF CODES

let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

if (numeroUm === stringUm) {
  console.log(
    "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log("As variáveis numeroUm e stringUm não tem o mesmo valor");
}

if (numeroTrinta === stringTrinta) {
  console.log(
    "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo"
  );
} else {
  console.log("As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo");
}

if (numeroDez === stringDez) {
  console.log(
    "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log("As variáveis numeroDez e stringDez não tem o mesmo valor");
}

//
if (numeroUm == stringUm) {
  console.log(
    "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log("As variáveis numeroUm e stringUm não tem o mesmo valor");
}

if (numeroTrinta == stringTrinta) {
  console.log(
    "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo"
  );
} else {
  console.log("As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo");
}

if (numeroDez == stringDez) {
  console.log(
    "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log("As variáveis numeroDez e stringDez não tem o mesmo valor");
}

// SECOND SEVEN DAYS OF CODE

// const nome = prompt("Qual é o seu nome?");
// const idade = prompt("Quantos anos você têm?");
// const program = prompt ("Qual linguagem de programação você estuda?");

// const msg = `Seu nome é ${nome}, você têm ${idade} anos  e você estuda ${program}!`;

// alert(msg);

// THIRD SEVEN DAYS OF CODE

// const area = prompt(
//   "Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o noem da área:"
// );
// let linguagem = "";

// if (area === "Front-End") {
//   linguagem = prompt("Você quer aprender React ou Vue?");
// } else if (area === "Back-End") {
//   linguagem = prompt("Você quer aprender C# ou Java?");
// } else {
//   alert("Você não inseriu uma área válida");
// }

// const especialidadeOuFullstack = prompt(
//   "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo e se tornar Fullsatck"
// );
// if (especialidadeOuFullstack == 1) {
//   alert(
//     `Continue se especializando em ${linguagem} para dominar a área ${area}!`
//   );
// } else if (especialidadeOuFullstack == 2) {
//   alert(
//     `Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack`
//   );
// } else {
//   alert("Você não inseriu um valor válido!");
// }

// let msg = prompt(
//   "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."
// );

// while (msg === "ok") {
//   let novaTecnologia = prompt("Qual?");
//   alert(`${novaTecnologia} é realmente uma tecnologia bacana!`);
//   msg = prompt(
//     "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo"
//   );
// }

// QUARTO DIA DE SEVEN DAYS OF CODE
// COM NÚMERO FIXO

// const numeroAdivinhacao = 2;
// let chute = "";
// let acertou = false;

// for (let contador = 0; contador < 3; contador++) {
//   chute = prompt("Tente adivinhar o número de 0 a 10:");
//   if (chute == numeroAdivinhacao) {
//     alert(`Parabéns você acertou! O número era ${numeroAdivinhacao}!`);
//     acertou = true;
//     break;
//   }
//   alert("Errado!");
// }
// if (!acertou) {
//   alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
// }

// COM NÚMERO RANDOMICO

// const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
// let chute = "";
// let acertou = false;

// for(let contador = 0; contador < 3; contador++){
//     chute = prompt("Tente adivinhar o número de 0 a 10:");
//     if(chute == numeroAdivinhacao){
//         alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
//         acertou = true;
//         break;
//     }
//     alert("Errado!");
// }
// if(!acertou){
//     alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
// }

// const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
// let chute = "";
// let acertou = false;

// for (let contador = 0; contador, 3; contador++) {
//   chute = prompt("Tente advinhar o número de 0 a 10:");
//   if (chute == numeroAdivinhacao) {
//     alert(`Parabén, você acertou! O número era ${numeroAdivinhacao}.`);
//     acertou = true;
//     break;
//   }
//   alert("Errado!");
// }
// if (!acertou) {
//   alert(`Infelizmente, você não acertou. o número era ${numeroAdivinhacao}!`);
// }

// QUINTO DIA DE SEVEN DAYS OF CODE

// let frutas = [];
// let laticinios = [];
// let doces = [];
// let congelados = [];
// let comida = "";
// let categoria = "";

// let adicionarMais = "sim"; // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
// while (adicionarMais != "não") {
//   adicionarMais = prompt(
//     "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
//   );
//   while (adicionarMais != "sim" && adicionarMais != "não") {
//     //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
//     alert(`Operação não reconhecida!`);
//     adicionarMais = prompt(
//       "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
//     );
//   }

//   if (adicionarMais === "não") {
//     //se o texto lido for "não", sair do while
//     break;
//   }

//   comida = prompt("Qual comida você deseja inserir?");
//   categoria = prompt(
//     "Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?"
//   );
//   if (categoria === "frutas") {
//     frutas.push(comida);
//   } else if (categoria === "laticínios") {
//     laticinios.push(comida);
//   } else if (categoria === "doces") {
//     doces.push(comida);
//   } else if (categoria === "congelados") {
//     congelados.push(comida);
//   } else {
//     alert("Essa categoria não foi pré-definida.");
//   }
// }
// alert(
//   `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`
// );

// SEXTO DIA DE SEVEN DAYS OF CODE
// let frutas = [];
// let laticinios = [];
// let doces = [];
// let congelados = [];
// let comida = "";
// let categoria = "";
// let remover = "";

// let adicionarMais = "sim"; // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
// while (adicionarMais != "não") {
//   if (
//     frutas.length === 0 &&
//     laticinios.length === 0 &&
//     doces.length === 0 &&
//     congelados.length === 0
//   ) {
//     adicionarMais = prompt(
//       "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
//     );
//   } else {
//     adicionarMais = prompt(
//       "Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'."
//     );
//   }

//   while (
//     adicionarMais != "sim" &&
//     adicionarMais != "não" &&
//     adicionarMais != "remover"
//   ) {
//     //enquanto o texto lido for diferente de "sim", "não" e "remover", exibir que não foi reconhecido e perguntar novamente
//     alert(`Operação não reconhecida!`);
//     adicionarMais = prompt(
//       "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
//     );
//   }

//   if (adicionarMais === "não") {
//     //se o texto lido for "não", sair do while
//     break;
//   }

//   if (adicionarMais === "sim") {
//     comida = prompt("Qual comida você deseja inserir?");
//     categoria = prompt(
//       "Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?"
//     );
//     if (categoria === "frutas") {
//       frutas.push(comida);
//     } else if (categoria === "laticínios") {
//       laticinios.push(comida);
//     } else if (categoria === "doces") {
//       doces.push(comida);
//     } else if (categoria === "congelados") {
//       congelados.push(comida);
//     } else {
//       alert("Essa categoria não foi pré-definida.");
//     }
//   } else if (adicionarMais === "remover") {
//     if (
//       frutas.length === 0 &&
//       laticinios.length === 0 &&
//       doces.length === 0 &&
//       congelados.length === 0
//     ) {
//       //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
//       alert(`A lista está vazia!`);
//     } else {
//       //se a lista não estiver vazia
//       remover = prompt(
//         `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`
//       );
//       if (frutas.indexOf(remover) != -1) {
//         frutas.splice(frutas.indexOf(remover), 1);
//         alert(`O item ${remover} foi removido com sucesso!`);
//       } else if (laticinios.indexOf(remover) != -1) {
//         laticinios.splice(laticinios.indexOf(remover), 1);
//         alert(`O item ${remover} foi removido com sucesso!`);
//       } else if (doces.indexOf(remover) != -1) {
//         doces.splice(doces.indexOf(remover), 1);
//         alert(`O item ${remover} foi removido com sucesso!`);
//       } else if (congelados.indexOf(remover) != -1) {
//         congelados.splice(congelados.indexOf(remover), 1);
//         alert(`O item ${remover} foi removido com sucesso!`);
//       } else {
//         alert(`Não foi possível encontrar o item dentro da lista!`);
//       }
//     }
//   }
// }
// alert(
//   `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`
// );

// SÉTIMO DIAS SEVEN DAYS OF CODE
function soma(valor1, valor2) {
  return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2) {
  return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2) {
  return Number(valor1) * Number(valor2);
}

function divisao(valor1, valor2) {
  return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacao = "";

do {
  //usando o 'do...while', já que a primeira vez sempre vamos entrar

  operacao = prompt(
    `Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`
  );
  while (
    operacao != "soma" &&
    operacao != "subtração" &&
    operacao != "multiplicação" &&
    operacao != "divisão" &&
    operacao != "sair"
  ) {
    //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
    alert(`Operação não reconhecida!`);
    operacao = prompt(
      `Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`
    );
  }

  if (operacao === "sair") {
    //se o texto lido for "sair", sair do loop e da calculadora
    break;
  }

  valor1 = prompt(`Insira o primeiro valor:`);
  valor2 = prompt(`Insira o segundo valor:`);
  switch (operacao) {
    case "soma":
      alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
      break;
    case "subtração":
      alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
      break;
    case "multiplicação":
      alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
      break;
    case "divisão":
      alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
      break;
  }
} while (
  operacao === "soma" ||
  operacao === "subtração" ||
  operacao === "multiplicação" ||
  operacao === "divisão"
);
alert(`Até a próxima!`);
