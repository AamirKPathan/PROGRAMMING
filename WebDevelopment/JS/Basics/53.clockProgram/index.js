let is24Hour = false; // default: 12-hour mode

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
}

document.getElementById("toggleFormat").addEventListener("click", () => {
  is24Hour = !is24Hour;

  const btn = document.getElementById("toggleFormat");
  btn.textContent = is24Hour
    ? "Switch To 12 Hour Format"
    : "Switch To 24 Hour Format";

  updateClock();
});

updateClock();
setInterval(updateClock, 1000);
