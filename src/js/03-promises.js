
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');


form.addEventListener('submit',onSubmit);


function createPromise(position, delay) {
const promise = new Promise((res,rej)=>{
  const shouldResolve = Math.random() > 0.3;
setTimeout(()=>{
  if (shouldResolve) {
    res({position,delay});
  } else {
    rej({position,delay})
  }
},delay)


})
 return promise;
};

function onSubmit (evt) {
  evt.preventDefault();

 const {delay,step,amount} = evt.target;
 let delayVal = Number(delay.value);
 const stepVal = Number(step.value);
 const amountVal = Number(amount.value);

 for (let i = 1; i <= amountVal; i += 1) {
  createPromise(i, delayVal)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delayVal += stepVal;
 }
}