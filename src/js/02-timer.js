import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
};
function pad (val){
    return String(val).padStart(2,'0');
    };

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const timeDays = document.querySelector('[data-days]');
const timeHours = document.querySelector('[data-hours]');
const timeMinutes = document.querySelector('[data-minutes]');
const timeSeconds = document.querySelector('[data-seconds]');
let validTime = 0;


btnStart.toggleAttribute('disabled')


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        validTime = selectedDates[0].getTime();
        if (validTime > Date.now()) {
            btnStart.removeAttribute('disabled')
        } else{Notify.failure('Please choose a date in the future')}
    },
  };

  flatpickr(inputDate, options);

btnStart.addEventListener('click', onClick);
function onClick (evt){
    btnStart.toggleAttribute('disabled');
    const interval = setInterval(()=>{
        let totalDate = validTime - Date.now();
        let timeCalc = convertMs(totalDate);

if (totalDate < 1000) {
    clearInterval(interval)
}
function changeContent ({days, hours, minutes, seconds} = timeCalc){
    timeDays.textContent = pad(days);
    timeHours.textContent = pad(hours);
    timeMinutes.textContent = pad(minutes);
    timeSeconds.textContent = pad(seconds);
}

changeContent();



    },1000)

}







