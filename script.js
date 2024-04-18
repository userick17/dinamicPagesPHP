  // Exemplo de dados de jogos (substitua isso pelos seus próprios dados)
  const jogos = [
      //joguitos
      {
          nome: "Marvel vs Capcom Clash of Super Heroes",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/eab885e2da096f559c6156338c651c95.jpg"
      }, {
          nome: "Elden Ring",
          imagemSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900_2x.jpg?t=1710259084"
      }, {
          nome: "Street Fighter Alpha 2",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/6b55f00da01b1282c17d91c7760d2df9.jpg"
      }, {
          nome: "Super Smash Bros.",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/aedfc9ce6f9548cae0642eb628fa23c7.jpg"
      }, {
          nome: "Tomb Raider",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/2e95ade370c3871fda51e03448bf1b20.jpg"
      }, {
          nome: "Tomb Raider II",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/41148dd29e7cce04c2a3fd5dc6cf2720.jpg"
      }, {
          nome: "Dark Souls Prepare to Die Edtion",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/b9295c1aea42509d1fca6ccf29e9e2a3.jpg"
      }, {
          nome: "Captain Commando",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/a537037333bb5ba66531f5320e86ba28.jpg"
      }, {
          nome: "Star Wars The Force Unleashed",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/72354ece92cab9e7b9ce80ac2ca69e9e.jpg"
      }, {
          nome: "Tomb Raider III",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/8bd1bbbdfca85541f055bbd2d448620d.png"
      }, {
          nome: "God of War",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/72d0eaa80cc3412fda4a133ca1f884e8.jpg"
      }, {
          nome: "Demon`s Souls",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/9815b648fb13d661e3f844764c5af87b.jpg"
      }, {
          nome: "God of War II",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/5dd99cea810bff54b39b66b08dbf03c0.jpg"
      }, {
          nome: "God of War III",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/999f434a8fbab3206c73c9800da70864.jpg"
      }, {
          nome: "Transformers The Game",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/ef6c84ac469cc5c9e34c56f18531b7d7.jpg"
      }, {
          nome: "Transformers War for Cybertron",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/221445456dc0741b4debab4d0594e541.jpg"
      }, {
          nome: "Gungrave",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/15114b232670d53c100a833d5b55946f.jpg"
      }, {
          nome: "Metal Gear Rising Revengence",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/e1f321a3bb511f3a25587df4ce020532.jpg"
      }, {
          nome: "Metal Gear Solid V Ground Zeroes",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/078c1993dcaa199add4a1b83be1a0c04.jpg"
      }, {
          nome: "Resident Evil 4",
          imagemSrc: "https://cdn2.steamgriddb.com/thumb/dc6ab89f835061d1d33e4e97cc60b126.jpg"
      },
      // Adicione mais jogos conforme necessário
  ];
  // Obtém a referência à lista onde você deseja adicionar os jogos
  const listaDeJogos = document.getElementById("jogos-lista");
  // Loop através dos dados dos jogos e crie os elementos dinamicamente
  for (const jogo of jogos) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      img.src = jogo.imagemSrc;
      img.alt = `Imagem de ${jogo.nome}`;
      h2.textContent = jogo.nome;
      li.appendChild(img);
      li.appendChild(h2);
      listaDeJogos.appendChild(li);
  }
  //Slider////////////////////////////////////
var imagens = [
  "https://images3.alphacoders.com/107/thumb-1920-1076847.png",
  ];
var posicaoAtual = 0;

function exibirImagemAtual() {
  document.getElementById("presentation").style.backgroundImage = "url('" + imagens[posicaoAtual] + "')";
}

function avancarSlider() {
  posicaoAtual++;
  if (posicaoAtual >= imagens.length) {
      posicaoAtual = 0;
  }
  exibirImagemAtual();
}

function retrocederSlider() {
  posicaoAtual--;
  if (posicaoAtual < 0) {
      posicaoAtual = imagens.length - 1;
  }
  exibirImagemAtual();
}

function iniciarSlider() {
  exibirImagemAtual();
  setInterval(avancarSlider, 2000);
}

window.onload = iniciarSlider;
