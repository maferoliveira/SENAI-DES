const times = [
  {
    Nome: "Palmeiras",
    Estado: "São Paulo",
    Fundação: "26/08/1914",
    Diretor: "Leila Pereira",
    Brasão: "https://upload.wikimedia.org/wikipedia/pt/0/05/Palmeiras_logo.svg",
    Vitórias: 3516,
    Derrotas: 1422,
    Empates: 1590
  },
  {
    Nome: "Corinthians",
    Estado: "São Paulo",
    Fundação: "14/04/1912",
    Diretor: "Augusto Melo",
    Brasão: "https://logodownload.org/wp-content/uploads/2016/11/corinthians-logo-0-2048x2048.png",
    Vitórias: 3223,
    Derrotas: 1450,
    Empates: 1578
  },
  {
    Nome: "Santos",
    Estado: "São Paulo",
    Fundação: "01/09/1910",
    Diretor: "Marcelo Teixeira",
    Brasão: "https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg",
    Vitórias: 2961,
    Derrotas: 1460,
    Empates: 1248
  }
];

times.forEach((time) => {
  if (time.Nome === "Palmeiras") {
    console.log(time.Nome);
    const pontos = (time.Vitórias * 3) + time.Empates;
    console.log("Pontos: " + pontos);
  }
});
