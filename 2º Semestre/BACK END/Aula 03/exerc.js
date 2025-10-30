const livros = [
    {
        Titulo: "A Paciente Silenciosa",
        Autor: "Alex Michaelides",
        N_Paginas: 336,
        Genero: "Suspense",
        Protagonista: "Alicia Berenson"
    },
    {
        Titulo: "Verity",
        Autor: "Collen Hoover",
        N_Paginas: 320,
        Genero: "Romance, Suspense",
        Protagonista: "Lowen Ashleigh"
    },
    {
        Titulo: "O Cortico",
        Autor: "Aluisio de Azevedo",
        N_Paginas: 320,
        Genero: "Romance",
        Protagonista: "João Romão"
    }
];


livros.forEach((livro) => {
    if(livro.Titulo === "A Paciente Silenciosa"){
        console.log(livro);} } );

var i =0;
livros.forEach((livro, i) => {
    if(livro.Titulo === "O Cortico"){
        livros.slice(i, 1);
    }
});

var novo = {
    Titulo: "O Cortico",
    Autor: "Aluisio de Azevedo",
    N_Paginas: 320,
    Genero: "Romance",
    Protagonista: "João Romão"
};
livros.push(novo);
livros.forEach((livro) => {
    if(livro.Titulo === "O Cortico"){
        livro.Autor = "Aluísio Azevedo";
    }
});

console.log(livros);