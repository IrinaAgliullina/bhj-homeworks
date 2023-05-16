let timer = document.getElementById('timer');
let timerValue = +timer.textContent;

let timerID = setInterval(() => {
  if (timerValue !== 0) {
    timerValue -= 1;
    timer.textContent = timerValue;
  } else {
    alert('Вы победили в конкурсе!');
    clearInterval(timerID);
  }
}, 1000);