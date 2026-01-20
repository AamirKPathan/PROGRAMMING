let is24Hour = false;
let alarmTime = null;
let alarmActive = false;

const alarmSound = document.getElementById("alarmSound");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    document.getElementById("ampm").style.display = "inline";
  } else {
    document.getElementById("ampm").style.display = "none";
  }

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  document.getElementById("ampm").textContent = ampm;

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);

  checkAlarm(now);
}

function checkAlarm(now) {
  if (!alarmActive || !alarmTime) return;

  const current = now.toTimeString().slice(0, 5);

  if (current === alarmTime) {
    alarmSound.play();
    alert("⏰ Alarm ringing!");
    alarmActive = false;
    document.getElementById("alarmStatus").textContent = "Alarm finished";
  }
}

document.getElementById("toggleFormat").addEventListener("click", () => {
  is24Hour = !is24Hour;

  document.getElementById("toggleFormat").textContent =
    is24Hour ? "Switch To 12 Hour Format" : "Switch To 24 Hour Format";

  updateClock();
});

document.getElementById("toggleTheme").addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light");
  body.classList.toggle("dark");

  document.getElementById("toggleTheme").textContent =
    body.classList.contains("light")
      ? "Switch To Dark Theme"
      : "Switch To Light Theme";
});

document.getElementById("setAlarm").addEventListener("click", () => {
  const input = document.getElementById("alarmTime").value;

  if (!input) {
    alert("Please select a time first.");
    return;
  }

  alarmTime = input;
  alarmActive = true;

  document.getElementById("alarmStatus").textContent = `Alarm set for ${alarmTime}`;
});

document.getElementById("clearAlarm").addEventListener("click", () => {
  alarmActive = false;
  alarmTime = null;
  alarmSound.pause();
  alarmSound.currentTime = 0;

  document.getElementById("alarmStatus").textContent = "No alarm set";
});

updateClock();
setInterval(updateClock, 1000);
