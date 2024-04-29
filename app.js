const start = new Date(2024, 0, 1);
const end = new Date(2025, 0, 1);

const outTime = document.querySelector("#datetime");
const outPct = document.querySelector("#percentage");
const outRem = document.querySelector("#remaining");

setInterval(function () {
  const today = new Date();
  outTime.textContent = today.toLocaleString("bg").replace(/ \D+/g, " ");
  if (today >= end) {
    outPct.textContent = "100%";
    outRem.textContent = "";
    return;
  }
  const total = end - start;
  const progress = today - start;
  const pct = Math.floor((progress / total) * 100);
  outPct.textContent = pct + "%";
  const next = ((pct + 1) / 100) * total;
  const countdown = Math.ceil((next - progress) / 1000);
  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;
  outRem.textContent =
    `${hours} hours, ${minutes} minutes, and ${seconds} seconds`.replace(
      /\b(1 \w+)s\b/g,
      "$1"
    );
}, 1);
