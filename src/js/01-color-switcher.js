function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const bodyHtml = document.body;
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

btnStop.toggleAttribute('disabled');

btnStart.addEventListener('click', onStart)
function onStart(){
    btnStart.toggleAttribute('disabled');
    btnStop.removeAttribute('disabled');

 timerId = setInterval(()=>{
        bodyHtml.style.backgroundColor = `${getRandomHexColor()}`},1000);
  
};

btnStop.addEventListener('click', 
()=>{
    btnStart.removeAttribute('disabled');
    btnStop.toggleAttribute('disabled');
    clearInterval(timerId);
})




