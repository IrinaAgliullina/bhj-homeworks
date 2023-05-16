let timer = document.getElementById('timer');
let timerValue = +timer.textContent;

let timerID = setInterval(() => {
  timerValue--;
  timer.textContent = timerValue;
  if (timerValue < 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(timerID);
  }
}, 1000);