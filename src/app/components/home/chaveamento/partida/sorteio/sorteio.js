// Array com os nomes dos participantes do torneio
const participantes = ["Equipe 1", "Equipe 2", "Equipe 3", "Equipe 4", "Equipe 5", "Equipe 6", "Equipe 7", "Equipe 8"];

// Função para embaralhar os participantes aleatoriamente
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    console.log(j)
  }
  return array;
}

class Partida {
      time1
      time2

      constructor(time1, time2){
            this.time1 = time1
            this.time2 = time2
      }
}

// Embaralhar a ordem dos participantes
const ordemEmbaralhada = embaralhar(participantes);

// Criar os pares de jogadores
const pares = [];
for (let i = 0; i < ordemEmbaralhada.length; i += 2) {
      const par = new Partida(ordemEmbaralhada[i], ordemEmbaralhada[i + 1])
      pares.push(par);
      console.log(pares)
}

// Exibir os pares de jogadores
for (let i = 0; i < pares.length; i++) {

  console.log(par)
  console.log(`Partida ${i + 1}: ${par[0]} vs ${par[1]}`);
}
