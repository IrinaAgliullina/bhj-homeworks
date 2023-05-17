const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
let counter = 0;
let time = new Date();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let milliseconds = time.getMilliseconds();

cookie.onclick = function() {
  counter++;
  clickerCounter.textContent = counter;
  cookie.width = (counter % 2 === 0) ? '200' : '300';
  
  let currentTime = new Date();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  let currentMilliseconds = currentTime.getMilliseconds();
  
  clickerSpeed.textContent = (1 / (currentSeconds + ((currentMinutes - minutes) * 60 - seconds) + (currentMilliseconds - milliseconds) / 1000)).toFixed(2);
  minutes = currentMinutes;
  seconds = currentSeconds;
  milliseconds = currentMilliseconds;
};