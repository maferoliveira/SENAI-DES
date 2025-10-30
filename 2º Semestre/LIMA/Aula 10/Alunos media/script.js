const menu = document.querySelector("#menu");

menu.addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const leftnav = nav.style.left;

    if (leftnav === "" || leftnav === "-240px") {
        nav.style.left = "0";
    } else {
        nav.style.left = "-240px";
    }
});
const content = document.querySelector(".content");
const box = document.querySelector(".box");
const alunos = [
    {
        img: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        nome: "Maria Fernanda Serrana",
        serie: "3º Ano A",
        nota1: 6,
        nota2: 7,
        nota3: 3
    },
    {
        img: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        nome: "Clara Cezar Ortega",
        serie: "2º Ano B",
        nota1: 8,
        nota2: 10,
        nota3: 2
    },
    {
        img: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        nome: "Kauany Fernandes",
        serie: "1º Ano C",
        nota1: 8,
        nota2: 7,
        nota3: 2
    },
    {
        img: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        nome: "Caio Jordan Nobrega",
        serie: "9º Ano D",
        nota1: 4,
        nota2: 10,
        nota3: 9.5
    },
    {
        img: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        nome: "Caio Jordan Nobrega",
        serie: "8º Ano E",
        nota1: 6,
        nota2: 8,
        nota3: 7
    },
    {
        img: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        nome: "Caio Jordan Nobrega",
        serie: "7º Ano F",
        nota1: 4,
        nota2: 2,
        nota3: 10
    }
]

alunos.forEach((aluno) => {
    let novocartao = box.cloneNode(true);

    novocartao.style.display = "flex";

    novocartao.querySelector("img").src = aluno.img;
    novocartao.querySelector("#nome").innerHTML = aluno.nome;
    novocartao.querySelector("#serie").innerHTML = "Série: " + aluno.serie;

    let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    if(media>=6){
        novocartao.style.borderTop = "10px solid #13750c";
    }else{
        novocartao.style.borderTop = "10px solid #d30b0b";
    }

    novocartao.querySelector("#media").innerHTML = "Média: " +  media.toFixed(1);

    content.appendChild(novocartao);
});
const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {
        let nome = node.innerHTML;
        if (nome) {
            let conteudo = node.querySelector("#nome").innerHTML;
            if (conteudo.toLowerCase().includes(busca.value.toLowerCase())) {
                node.style.display = "flex";
            } else {
                node.style.display = "none";
            }
        }
    });
});

box.style.display = "none";