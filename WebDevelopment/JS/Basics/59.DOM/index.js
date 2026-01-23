const display = document.getElementById("display");
const errorBox = document.getElementById("error");

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    errorBox.textContent = "";
    display.value += btn.dataset.val;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
  errorBox.textContent = "";
});

document.getElementById("equals").addEventListener("click", () => {
  const expr = display.value;

  const { result, error } = calculateExpression(expr);

  if (error) {
    errorBox.textContent = error;
    return;
  }

  display.value = result;
});
