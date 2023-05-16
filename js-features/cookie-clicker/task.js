const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
let counter = 0;
let time = new Date();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

cookie.onclick = function() {
  counter++;
  clickerCounter.textContent = counter;
  cookie.width = (counter % 2 === 0) ? '200' : '300';
  
  let currentTime = new Date();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  if (currentMinutes > minutes) {
    clickerSpeed.textContent = 1 / (currentSeconds + ((currentMinutes - minutes) * 60 - seconds));
  } else {
    clickerSpeed.textContent = 1 / (currentSeconds - seconds);
  }
};