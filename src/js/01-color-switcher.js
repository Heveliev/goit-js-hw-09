function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const bodyHtml = document.body;
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

onToggle(btnStop);

btnStart.addEventListener('click', onStart)
function onStart(){
    onToggle(btnStart);
    onRemove(btnStop);

 timerId = setInterval(()=>{
        bodyHtml.style.backgroundColor = `${getRandomHexColor()}`},1000);
  
};

btnStop.addEventListener('click', 
()=>{
    onRemove(btnStart);
    onToggle(btnStop);
    clearInterval(timerId);
})

function onToggle (evt){
evt.toggleAttribute('disabled')
}
function onRemove(evt) {
  evt.removeAttribute('disabled');
}

