const container = document.querySelector(".container");

const btcadastrar = document.querySelector("#btcadastrar");

btcadastrar.addEventListener("click", (event)=>{
    event.preventDefault();

    const inpfoto = document.querySelector("#nome");
    const inpproduto = document.querySelector("#produto");
    const inpcategoria = document.querySelector("#categoria");
    const inppreco = document.querySelector("#preco");
    const inpestoque = document.querySelector("#estoque");

    const tabela = document.createElement("div");
    tabela.className = "tabela";


    const pfoto = document.createElement("p");
    pfoto.innerHTML = "Produto: "+ inpfoto.value;
    const pproduto = document.createElement("p");
    pproduto.innerHTML = "Produto: "+ inpproduto.value;
    const pcategoria = document.createElement("p");
    pcategoria.innerHTML = "Produto: "+ inpcategoria.value;
    const ppreco = document.createElement("p");
    ppreco.innerHTML = "Produto: "+ inppreco.value;
    const pestoque = document.createElement("p");
    pestoque.innerHTML = "Produto: "+ inpestoque.value;

    tabela.appendChild(pfoto);
    tabela.appendChild(pproduto);
    tabela.appendChild(pcategoria);
    tabela.appendChild(ppreco);
    tabela.appendChild(pestoque);

    container.appendChild(tabela);

    inpfoto.value = "";
    inpproduto.value = "";
    inpcategoria.value = "";
    inppreco.value = "";
    inpestoque.value = "";

})