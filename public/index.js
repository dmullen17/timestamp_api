const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/60)*360 + 90;
    if (secondsDegrees == 90) secondHand.style.transition = '0s';
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes/60)*360 + 90;
    if (minutesDegrees == 90) secondHand.style.transition = '0s';
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hours = now.getHours();
    const hoursDegrees = (hours/12)*360 + 90;
    if (hoursDegrees == 90) secondHand.style.transition = '0s';
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

document.addEventListener("DOMContentLoaded", setDate);
