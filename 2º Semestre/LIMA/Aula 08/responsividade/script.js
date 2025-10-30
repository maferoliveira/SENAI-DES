const menu = document.querySelector("#menu");

menu.addEventListener("click", function (){
    const nav = document.querySelector("nav");
    const leftnav = nav.style.left;

    if(leftnav === "" || leftnav === "-200px"){
        nav.style.left = "0";
    }else{
        nav.style.left = "-200px";
    }
});
const content = document.querySelector(".content");
const box = document.querySelector(".box");
const produtos = [
    {
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzXS3klRmQvxRHRFo-2AgBFgKt_uaUns3FLREXQUpikx9z-6OLOmj-p59nIAJFb5wvuzBFlFIy14jDiTJCtqwrUrieUMYhLmVVvcnt_0Dah776L-znn1m8vQ",
    nome:"Caderno Dexter 180fls",
    valor:36.59
},
    {
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3530-intel/media-gallery/black/notebook-inspiron-15-3530-nt-plastic-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=482&qlt=100,1&resMode=sharp2&size=482,320&chrss=full",
    nome:"Notebook Dell Inspiron 15",
    valor:2.999
},
    {
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQa2wbW4YAg6pfnNoKAZmazKOPqZPHCeXvK-kAPdNiiV6s72rlu6qK3C54nNb6NtWmPFVxcJYim6DlMTEzN18pGkd9P5nvWMEouqPRepKBTdrI8MzqZ6FIiQE97pU0SrbrDR9TM1w&usqp=CAc",
    nome:"Máquina de Café Expresso Nespresso",
    valor:735.14
},
]

produtos.forEach((produto) =>{
    let novocartao = box.cloneNode(true);

    novocartao.querySelector("img").src = produto.img;
    novocartao.querySelector("#nome").innerHTML = produto.nome;
    novocartao.querySelector("#valor").innerHTML = "R$ " + produto.valor;

    content.appendChild(novocartao);
});
const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", ()=> {
    content.childNodes.forEach((node)=>{
        let conteudo = node.innerHTML;
        if(conteudo){
            if(conteudo.toLowerCase().includes(busca.value.toLowerCase())){
            node.style.display = "flex";
            }else{
                node.style.display = "none";
            }
        }
    });
});