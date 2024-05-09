let opcoes = "";
const cartas = [];

do {
  opcoes = prompt(
    "Quantidade de Cartas: " +
      cartas.length +
      "\nDigite o número da operação desejada \n" +
      "\n 1) Adcionar um Carta." +
      "\n 2)Puxar uma Carta. \n 3)Sair."
  );

  switch (opcoes) {
    case "1":
      let adcionar = prompt("Qual é a carta:");
      cartas.unshift(adcionar);
      break;
    case "2":
      let RemoverCartas = cartas.shift();
      if (RemoverCartas) {
        alert("Carta " + RemoverCartas + " Removida");
      } else {
        alert("Não tem nenhuma carta no baralho");
      }
      break;
    case "3":
      break;
    default:
      alert("Opção  Inválido");
  }
} while (opcoes !== "3");
