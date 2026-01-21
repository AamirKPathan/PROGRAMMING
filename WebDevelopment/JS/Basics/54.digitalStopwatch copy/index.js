let startTime = 0;
let elapsedTime = 0;
let interval = null;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const lapList = document.getElementById("lapList");

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("lapBtn").addEventListener("click", lap);
document.getElementById("resetBtn").addEventListener("click", reset);

function start() {
  if (interval) return;
  startTime = Date.now() - elapsedTime;
  interval = setInterval(update, 10);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  updateDisplay(0, 0, 0);
  lapList.innerHTML = "";
}

function lap() {
  if (!interval) return;

  const now = elapsedTime;
  const mins = Math.floor(now / 60000);
  const secs = Math.floor((now % 60000) / 1000);
  const ms = now % 1000;

  const li = document.createElement("li");
  li.textContent = `${String(mins).padStart(2, "0")} : ${String(secs).padStart(2, "0")} : ${String(ms).padStart(3, "0")}`;
  lapList.appendChild(li);
}

function update() {
  elapsedTime = Date.now() - startTime;

  const mins = Math.floor(elapsedTime / 60000);
  const secs = Math.floor((elapsedTime % 60000) / 1000);
  const ms = elapsedTime % 1000;

  updateDisplay(mins, secs, ms);
}

function updateDisplay(mins, secs, ms) {
  minutesEl.textContent = String(mins).padStart(2, "0");
  secondsEl.textContent = String(secs).padStart(2, "0");
  millisecondsEl.textContent = String(ms).padStart(3, "0");
}