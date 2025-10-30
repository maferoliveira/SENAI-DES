const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function(){
    const hexcolor = gerarcorhex();
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;})
    function gerarcorhex(){
        return '#'+
        hex[Math.floor(Math.random() * hex.length)]+

        hex[Math.floor(Math.random() * hex.length)]+

        hex[Math.floor(Math.random() * hex.length)]+

        hex[Math.floor(Math.random() * hex.length)]+

        hex[Math.floor(Math.random() * hex.length)]+

        hex[Math.floor(Math.random() * hex.length)];
    }
/*
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function(){
    let hexcolor = '#';

    for(let i = 0;i<6; i++){
    hex.color +=hex[getrandomnumber()];
    color.textcontent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;})
});

    function getrandomnumber(){
    return math.floor(math.random() * hex.length);
}

*/