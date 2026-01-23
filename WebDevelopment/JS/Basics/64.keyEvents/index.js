// eventListener
// listen for specific events like key presses, mouse clicks, etc.
// common key events: keydown, keyup, keypress
const player = document.getElementById("player");
let x = 90;
let y = 90;
const speed = 10;

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "w") y -= speed;
  if (key === "s") y += speed;
  if (key === "a") x -= speed;
  if (key === "d") x += speed;

  // Keep player inside the 200x200 area
  x = Math.max(0, Math.min(180, x));
  y = Math.max(0, Math.min(180, y));

  player.style.left = x + "px";
  player.style.top = y + "px";
});
