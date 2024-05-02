let count = 0;
let timer;

function updateCount() {
  document.getElementById("count").textContent = count;
}

function startTimer() {
  timer = setInterval(() => {
    count++;
    updateCount();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resumeTimer() {
  startTimer();
}

function stopTimer() {
  clearInterval(timer);
  count = 0;
  updateCount();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("resume").addEventListener("click", resumeTimer);
document.getElementById("stop").addEventListener("click", stopTimer);