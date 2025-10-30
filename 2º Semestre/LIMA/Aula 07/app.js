const colors = ['red', 'blue', 'green', 'rgba(123,143,435)', '#f35698', 'orange'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function(){
    const randomnumber = getrandomnumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
})
function getrandomnumber(){
    return Math.floor(Math.random() * colors.length);
}