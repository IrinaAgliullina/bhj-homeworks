const winsStatistic = document.getElementById('dead');
const lostsStatistic = document.getElementById('lost');
let wins = 0;
let losts = 0;
let getHole = function(index) {
  return document.getElementById("hole" + index);
}

for (a = 1; a <= 9; a++) {
  getHole(a).addEventListener('click', function(){
    if(this.classList.contains('hole_has-mole')) {
      wins++;
      winsStatistic.textContent = wins;
      } else {
        losts++;
        lostsStatistic.textContent = losts;
      }
    
      checkGameStatus();
  });
}

function checkGameStatus() {
  if (wins === 10) {
    deleteStatistics('Победа!');
  }
  if (losts === 5) {
    deleteStatistics('Вы проиграли!');
  }
}

function deleteStatistics(text) {
  alert(text);
  winsStatistic.textContent = 0;
  wins = 0;
  lostsStatistic.textContent = 0;
  losts = 0;
}