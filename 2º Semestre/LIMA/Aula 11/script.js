const container = document.querySelector(".container");

const btCadastrar = document.querySelector("#btCadastrar");

btCadastrar.addEventListener("click", (event)=>{
    event.preventDefault();
    const inpnome = document.querySelector("#nome");
    const inpsobrenome = document.querySelector("#sobrenome");
    const inpcor = document.querySelector("#cor");
    const inpestado = document.querySelector("#estado");
    const inpfont = document.querySelector("#font");

   const box = document.createElement("div");
   box.className = "box";
   box.style.backgroundColor = inpcor.value;
   box.style.color = inpfont.value;

   const pnome = document.createElement("p");
   pnome.innerHTML = "Nome: "+ inpnome.value;

   const psobrenome = document.createElement("p");
   psobrenome.innerHTML = "Sobrenome: "+ inpsobrenome.value;

   const pestado = document.createElement("p");
   pestado.innerHTML = "Estado: "+ inpestado.value;

   box.appendChild(pnome);
   box.appendChild(psobrenome);
   box.appendChild(pestado);

   container.appendChild(box);

   inpnome.value = "";
   inpsobrenome.value = "";
   inpestado.value = "SP";
   inpcor.value = "#000000";
   inpfont.value = "#ffffff";

});